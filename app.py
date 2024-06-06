import logging
import os
import json
import requests
from flask import Flask, request, jsonify, render_template, Response, send_from_directory

app = Flask(__name__)

api_key = 'sk-8AKg31fOPQ3rPxXR853c6eB3Ce6a438d90667cCe70709034'
api_url = 'https://api.xi-ai.cn/v1/chat/completions'

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

logging.basicConfig(level=logging.INFO)

# 获取当前脚本所在目录
script_dir = os.path.dirname(os.path.abspath(__file__))

# 确认 fields_map.json 文件路径
fields_map_path = os.path.join(script_dir, 'fields_map.json')

# 确认文件路径和存在性
logging.info(f"fields_map.json path: {fields_map_path}")
logging.info(f"fields_map.json exists: {os.path.isfile(fields_map_path)}")

with open(fields_map_path, 'r', encoding='utf-8') as f:
    dynamic_fields_map = json.load(f)

# 确认 prompts.json 文件路径
prompts_path = os.path.join(script_dir, 'prompts.json')

# 确认文件路径和存在性
logging.info(f"prompts.json path: {prompts_path}")
logging.info(f"prompts.json exists: {os.path.isfile(prompts_path)}")

with open(prompts_path, 'r', encoding='utf-8') as f:
    prompts = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

@app.route('/generate_script', methods=['POST'])
def generate_script():
    data = request.get_json()
    logging.info(f"Received data: {data}")

    video_type_map = {
        "advertisement": "广告宣传类",
        "knowledge": "知识分享类",
        "story": "故事娱乐类",
        "hobby": "兴趣爱好类",
        "interactive": "互动社会类",
        "lifestyle": "生活记录类",
        "news": "新闻资讯类"
    }

    video_type = video_type_map.get(data['video_type'], data['video_type'])
    dynamic_fields = {dynamic_fields_map.get(key, key): value for key, value in data.items() if key not in ['video_type', 'scenario', 'length_type', 'length_input', 'content']}
    
    content_parts = [
        f"脚本类型：{video_type}",
        f"场景是{data['scenario']}"
    ]
    
    for field, value in dynamic_fields.items():
        if value:
            content_parts.append(f"{field}：{value}")
    
    length_input = data.get('length_input', '不限')
    if data['length_type'] == 'time' and length_input != '不限':
        length_description = f"{length_input}秒"
    elif data['length_type'] == 'words' and length_input != '不限':
        length_description = f"{length_input}字"
    else:
        length_description = '不限'

    content_parts.append(f"长度为{length_description}")
    content_parts.append(f"其他要点：{data['content']}")

    user_content = "，".join(filter(None, content_parts)) + "。"

    # 根据视频类型追加提示词
    additional_prompt = prompts.get(data['video_type'], "")
    user_content += additional_prompt
    user_content += "\n如果用户给出的信息不够详细，根据目前用户提供的信息，询问与之相关的其他内容。\n生成脚本后，不用对这个脚本进行解释。"

    messages = [
        {
            "role": "user",
            "content": user_content
        }
    ]

    api_data = {
        "model": "gpt-4o",
        "messages": messages,
        "stream": True
    }

    logging.info(f"Sending data to API: {json.dumps(api_data, ensure_ascii=False, indent=4)}")

    response = requests.post(api_url, headers=headers, data=json.dumps(api_data), stream=True)
    
    def generate():
        for line in response.iter_lines():
            if line:
                decoded_line = line.decode('utf-8')
                # logging.info(f"Decoded line: {decoded_line}")  # 添加日志
                if decoded_line == "[DONE]":
                    break
                if decoded_line.startswith('data:'):
                    json_data = decoded_line[len('data:'):].strip()
                    if json_data:
                        try:
                            message = json.loads(json_data)
                            if 'choices' in message:
                                content = message['choices'][0]['delta'].get('content', '')
                                # logging.info(f"Content: '{content}'")  # 添加日志
                                if content.strip():
                                    # 替换换行符为显式的 \n
                                    content = content.replace('\n', '\\n')
                                    yield f"data: {content}/n"
                        except json.JSONDecodeError:
                            continue

    return Response(generate(), content_type='text/event-stream')

@app.route('/modify_script', methods=['POST'])
def modify_script():
    data = request.get_json()
    logging.info(f"Received modification data: {data}")

    original_script = data.get('script', '')
    modification_instructions = data.get('modification', '')

    if not original_script or not modification_instructions:
        return jsonify({"success": False, "error": "Invalid data provided"}), 400

    messages = [
        {
            "role": "user",
            "content": f"这是原始脚本：{original_script}。请根据以下修改意见进行修改：{modification_instructions} 只需要输出修改后的脚本，并且不用解释是怎么修改的。"
        }
    ]

    # 追加提示词
    video_type = data.get('video_type', '')
    additional_prompt = prompts.get(video_type, "")
    messages[0]['content'] += additional_prompt

    api_data = {
        "model": "gpt-4o",
        "messages": messages,
        "stream": True
    }

    response = requests.post(api_url, headers=headers, data=json.dumps(api_data), stream=True)
    
    def generate():
        for line in response.iter_lines():
            if line:
                decoded_line = line.decode('utf-8')
                if decoded_line == "[DONE]":
                    break
                if decoded_line.startswith('data:'):
                    json_data = decoded_line[len('data:'):].strip()
                    if json_data:
                        try:
                            message = json.loads(json_data)
                            if 'choices' in message:
                                content = message['choices'][0]['delta'].get('content', '')
                                if content.strip():
                                    content = content.replace('\n', '\\n')
                                    yield f"data: {content}/n"
                        except json.JSONDecodeError:
                            continue

    return Response(generate(), content_type='text/event-stream')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
