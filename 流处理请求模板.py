import requests
import json

api_key = 'sk-8AKg31fOPQ3rPxXR853c6eB3Ce6a438d90667cCe70709034'
url = 'https://api.xi-ai.cn/v1/chat/completions'

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

data = {
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "你好，GPT-4！"}],
    "stream": True
}

response = requests.post(url, headers=headers, data=json.dumps(data), stream=True)

# 逐步处理流式响应
for line in response.iter_lines():
    if line:
        decoded_line = line.decode('utf-8').strip()
        if decoded_line == "[DONE]":
            break
        if decoded_line.startswith('data:'):
            json_data = decoded_line[len('data:'):].strip()
            if json_data:  # 检查json_data是否为空
                try:
                    message = json.loads(json_data)
                    if 'choices' in message:
                        content = message['choices'][0]['delta'].get('content', '')
                        print(content, end='')
                except json.JSONDecodeError:
                    continue

print("\n对话完成")
