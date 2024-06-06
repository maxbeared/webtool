// additionalContent.js
function updateAdditionalContent(value) {
    const additionalContent = document.getElementById('additional_content');
    additionalContent.innerHTML = '';

    if (value === '品牌形象') {
        additionalContent.innerHTML = `
            <div>
                <h2>目标受众描述<span style="color:red;">*</span></h2>
                <input type="text" name="target_audience" id="target_audience" placeholder="目标受众的年龄、性别、兴趣等">
            </div>
            <div>
                <h2>品牌信息<span style="color:red;">*</span></h2>
                <textarea name="brand_info" id="brand_info" rows="4" placeholder="品牌的核心价值、历史、市场定位等"></textarea>
            </div>
        `;
    } else if (value === '推销产品') {
        additionalContent.innerHTML = `
            <div>
                <h2>产品详情<span style="color:red;">*</span></h2>
                <textarea name="product_details" id="product_details" rows="4" placeholder="产品名称、卖点、痛点、使用方法等"></textarea>
            </div>
            <div>
                <h2>优惠信息<span style="color:red;">*</span></h2>
                <input type="text" name="promotion_info" id="promotion_info" placeholder="促销活动、优惠券代码等">
            </div>
        `;
    } else if (value === '直播引流') {
        additionalContent.innerHTML = `
            <div>
                <h2>直播平台<span style="color:red;">*</span></h2>
                <input type="text" name="live_platform" id="live_platform" placeholder="计划在哪个平台进行直播">
            </div>
            <div>
                <h2>直播时间和主题<span style="color:red;">*</span></h2>
                <textarea name="live_time_theme" id="live_time_theme" rows="4" placeholder="具体的直播时间和讨论主题"></textarea>
            </div>
        `;
    } else if (value === '活动宣传') {
        additionalContent.innerHTML = `
            <div>
                <h2>活动详情<span style="color:red;">*</span></h2>
                <textarea name="event_details" id="event_details" rows="4" placeholder="活动时间、地点、参与方式等"></textarea>
            </div>
            <div>
                <h2>活动亮点<span style="color:red;">*</span></h2>
                <input type="text" name="event_highlights" id="event_highlights" placeholder="活动中最吸引人的部分">
            </div>
        `;
    } else if (value === '知识科普') {
        additionalContent.innerHTML = `
            <div>
                <h2>科普主题<span style="color:red;">*</span></h2>
                <input type="text" name="science_theme" id="science_theme" placeholder="具体的知识点或主题">
            </div>
            <div>
                <h2>背景信息<span style="color:red;">*</span></h2>
                <textarea name="background_info" id="background_info" rows="4" placeholder="相关的背景知识和资料"></textarea>
            </div>
        `;
    } else if (value === '实用教程') {
        additionalContent.innerHTML = `
            <div>
                <h2>教程步骤<span style="color:red;">*</span></h2>
                <textarea name="tutorial_steps" id="tutorial_steps" rows="4" placeholder="详细的步骤说明"></textarea>
            </div>
            <div>
                <h2>所需材料<span style="color:red;">*</span></h2>
                <input type="text" name="materials_needed" id="materials_needed" placeholder="需要准备的材料和工具">
            </div>
        `;
    } else if (value === '短剧') {
        additionalContent.innerHTML = `
            <div>
                <h2>剧情梗概<span style="color:red;">*</span></h2>
                <textarea name="plot_summary" id="plot_summary" rows="4" placeholder="简要的剧情介绍"></textarea>
            </div>
            <div>
                <h2>角色描述<span style="color:red;">*</span></h2>
                <input type="text" name="character_description" id="character_description" placeholder="角色的背景、性格等">
            </div>
        `;
    } else if (value === '动画') {
        additionalContent.innerHTML = `
            <div>
                <h2>动画风格<span style="color:red;">*</span></h2>
                <input type="text" name="animation_style" id="animation_style" placeholder="2D、3D等风格描述">
            </div>
            <div>
                <h2>关键帧设计<span style="color:red;">*</span></h2>
                <textarea name="keyframe_design" id="keyframe_design" rows="4" placeholder="动画中的关键场景和动作设计"></textarea>
            </div>
        `;
    } else if (value === '故事') {
        additionalContent.innerHTML = `
            <div>
                <h2>故事背景<span style="color:red;">*</span></h2>
                <input type="text" name="story_background" id="story_background" placeholder="故事发生的时间、地点、背景等">
            </div>
            <div>
                <h2>故事情节<span style="color:red;">*</span></h2>
                <textarea name="story_plot" id="story_plot" rows="4" placeholder="详细的故事情节描述"></textarea>
            </div>
        `;
    } else if (value === '影视解说') {
        additionalContent.innerHTML = `
            <div>
                <h2>电影/电视剧名称<span style="color:red;">*</span></h2>
                <input type="text" name="movie_name" id="movie_name" placeholder="需要解说的影视作品">
            </div>
            <div>
                <h2>解说重点<span style="color:red;">*</span></h2>
                <textarea name="commentary_focus" id="commentary_focus" rows="4" placeholder="需要强调的情节、角色分析等"></textarea>
            </div>
        `;
    } else if (value === '视频混剪') {
        additionalContent.innerHTML = `
            <div>
                <h2>视频素材来源<span style="color:red;">*</span></h2>
                <input type="text" name="video_sources" id="video_sources" placeholder="素材的来源和版权信息">
            </div>
            <div>
                <h2>混剪主题<span style="color:red;">*</span></h2>
                <textarea name="mashup_theme" id="mashup_theme" rows="4" placeholder="混剪视频的主题和风格"></textarea>
            </div>
        `;
    } else if (value === '歌舞') {
        additionalContent.innerHTML = `
            <div>
                <h2>表演类型<span style="color:red;">*</span></h2>
                <input type="text" name="performance_type" id="performance_type" placeholder="歌唱、舞蹈等具体形式">
            </div>
            <div>
                <h2>曲目选择<span style="color:red;">*</span></h2>
                <textarea name="song_selection" id="song_selection" rows="4" placeholder="演出曲目和背景音乐"></textarea>
            </div>
        `;
    } else if (value === '乐器') {
        additionalContent.innerHTML = `
            <div>
                <h2>乐器类型<span style="color:red;">*</span></h2>
                <input type="text" name="instrument_type" id="instrument_type" placeholder="钢琴、吉他等">
            </div>
            <div>
                <h2>演奏曲目<span style="color:red;">*</span></h2>
                <textarea name="instrumental_pieces" id="instrumental_pieces" rows="4" placeholder="演奏的曲目和谱子"></textarea>
            </div>
        `;
    } else if (value === '书画') {
        additionalContent.innerHTML = `
            <div>
                <h2>艺术风格<span style="color:red;">*</span></h2>
                <input type="text" name="art_style" id="art_style" placeholder="传统书画、现代艺术等">
            </div>
            <div>
                <h2>作品描述<span style="color:red;">*</span></h2>
                <textarea name="art_description" id="art_description" rows="4" placeholder="具体的作品和创作过程"></textarea>
            </div>
        `;
    } else if (value === '游戏') {
        additionalContent.innerHTML = `
            <div>
                <h2>游戏类型<span style="color:red;">*</span></h2>
                <input type="text" name="game_type" id="game_type" placeholder="电脑游戏、桌游等">
            </div>
            <div>
                <h2>游戏玩法<span style="color:red;">*</span></h2>
                <textarea name="gameplay" id="gameplay" rows="4" placeholder="游戏规则和玩法介绍"></textarea>
            </div>
        `;
    } else if (value === '旅行') {
        additionalContent.innerHTML = `
            <div>
                <h2>旅行目的地<span style="color:red;">*</span></h2>
                <input type="text" name="travel_destination" id="travel_destination" placeholder="旅行的地点和行程安排">
            </div>
            <div>
                <h2>旅行攻略<span style="color:red;">*</span></h2>
                <textarea name="travel_guide" id="travel_guide" rows="4" placeholder="旅行中的注意事项和推荐"></textarea>
            </div>
        `;
    } else if (value === '体育') {
        additionalContent.innerHTML = `
            <div>
                <h2>运动项目<span style="color:red;">*</span></h2>
                <input type="text" name="sport_type" id="sport_type" placeholder="篮球、足球等">
            </div>
            <div>
                <h2>训练计划<span style="color:red;">*</span></h2>
                <textarea name="training_plan" id="training_plan" rows="4" placeholder="训练的内容和时间安排"></textarea>
            </div>
        `;
    } else if (value === '种植') {
        additionalContent.innerHTML = `
            <div>
                <h2>植物种类<span style="color:red;">*</span></h2>
                <input type="text" name="plant_type" id="plant_type" placeholder="需要种植的植物">
            </div>
            <div>
                <h2>种植方法<span style="color:red;">*</span></h2>
                <textarea name="planting_methods" id="planting_methods" rows="4" placeholder="种植步骤和注意事项"></textarea>
            </div>
        `;
    } else if (value === '宠物') {
        additionalContent.innerHTML = `
            <div>
                <h2>宠物种类<span style="color:red;">*</span></h2>
                <input type="text" name="pet_type" id="pet_type" placeholder="宠物的种类和品种">
            </div>
            <div>
                <h2>宠物护理<span style="color:red;">*</span></h2>
                <textarea name="pet_care" id="pet_care" rows="4" placeholder="宠物的饲养和护理方法"></textarea>
            </div>
        `;
    } else if (value === '采访') {
        additionalContent.innerHTML = `
            <div>
                <h2>采访对象<span style="color:red;">*</span></h2>
                <input type="text" name="interviewee" id="interviewee" placeholder="采访的对象和背景">
            </div>
            <div>
                <h2>采访问题<span style="color:red;">*</span></h2>
                <textarea name="interview_questions" id="interview_questions" rows="4" placeholder="准备的问题列表"></textarea>
            </div>
        `;
    } else if (value === '社会实验') {
        additionalContent.innerHTML = `
            <div>
                <h2>实验设计<span style="color:red;">*</span></h2>
                <textarea name="experiment_design" id="experiment_design" rows="4" placeholder="实验的设计和方法"></textarea>
            </div>
            <div>
                <h2>预期结果<span style="color:red;">*</span></h2>
                <input type="text" name="expected_results" id="expected_results" placeholder="实验的预期结果和意义">
            </div>
        `;
    } else if (value === '问答') {
        additionalContent.innerHTML = `
            <div>
                <h2>问题清单<span style="color:red;">*</span></h2>
                <textarea name="question_list" id="question_list" rows="4" placeholder="准备的问题和答案"></textarea>
            </div>
            <div>
                <h2>互动形式<span style="color:red;">*</span></h2>
                <input type="text" name="interaction_format" id="interaction_format" placeholder="问答的形式和规则">
            </div>
        `;
    } else if (value === '挑战') {
        additionalContent.innerHTML = `
            <div>
                <h2>挑战内容<span style="color:red;">*</span></h2>
                <textarea name="challenge_content" id="challenge_content" rows="4" placeholder="具体的挑战任务"></textarea>
            </div>
            <div>
                <h2>挑战规则<span style="color:red;">*</span></h2>
                <input type="text" name="challenge_rules" id="challenge_rules" placeholder="挑战的规则和奖励">
            </div>
        `;
    } else if (value === '测评') {
        additionalContent.innerHTML = `
            <div>
                <h2>测评对象<span style="color:red;">*</span></h2>
                <input type="text" name="evaluation_subject" id="evaluation_subject" placeholder="需要测评的产品或服务">
            </div>
            <div>
                <h2>测评标准<span style="color:red;">*</span></h2>
                <textarea name="evaluation_criteria" id="evaluation_criteria" rows="4" placeholder="测评的标准和评分方法"></textarea>
            </div>
        `;
    } else if (value === '日常') {
        additionalContent.innerHTML = `
            <div>
                <h2>日常活动<span style="color:red;">*</span></h2>
                <input type="text" name="daily_activities" id="daily_activities" placeholder="记录的日常活动">
            </div>
            <div>
                <h2>特别时刻<span style="color:red;">*</span></h2>
                <textarea name="special_moments" id="special_moments" rows="4" placeholder="特别的瞬间和场景"></textarea>
            </div>
        `;
    } else if (value === '亲子') {
        additionalContent.innerHTML = `
            <div>
                <h2>亲子活动<span style="color:red;">*</span></h2>
                <input type="text" name="parent_child_activities" id="parent_child_activities" placeholder="亲子间的活动和互动">
            </div>
            <div>
                <h2>成长记录<span style="color:red;">*</span></h2>
                <textarea name="growth_record" id="growth_record" rows="4" placeholder="孩子的成长记录和重要事件"></textarea>
            </div>
        `;
    } else if (value === '旅行') {
        additionalContent.innerHTML = `
            <div>
                <h2>旅行计划<span style="color:red;">*</span></h2>
                <input type="text" name="travel_plan" id="travel_plan" placeholder="旅行的行程安排">
            </div>
            <div>
                <h2>旅行见闻<span style="color:red;">*</span></h2>
                <textarea name="travel_experience" id="travel_experience" rows="4" placeholder="旅行中的所见所闻"></textarea>
            </div>
        `;
    } else if (value === '运动') {
        additionalContent.innerHTML = `
            <div>
                <h2>运动项目<span style="color:red;">*</span></h2>
                <input type="text" name="sport_type" id="sport_type" placeholder="运动的种类和频率">
            </div>
            <div>
                <h2>健身目标<span style="color:red;">*</span></h2>
                <textarea name="fitness_goals" id="fitness_goals" rows="4" placeholder="健身的目标和计划"></textarea>
            </div>
        `;
    } else if (value === '美食') {
        additionalContent.innerHTML = `
            <div>
                <h2>菜谱分享<span style="color:red;">*</span></h2>
                <textarea name="recipe_share" id="recipe_share" rows="4" placeholder="具体的菜谱和做法"></textarea>
            </div>
            <div>
                <h2>美食评测<span style="color:red;">*</span></h2>
                <input type="text" name="food_review" id="food_review" placeholder="对食物的评价和推荐">
            </div>
        `;
    } else if (value === '萌宠') {
        additionalContent.innerHTML = `
            <div>
                <h2>宠物日常<span style="color:red;">*</span></h2>
                <input type="text" name="pet_daily" id="pet_daily" placeholder="宠物的日常生活记录">
            </div>
            <div>
                <h2>特别瞬间<span style="color:red;">*</span></h2>
                <textarea name="special_moments" id="special_moments" rows="4" placeholder="宠物的特别时刻"></textarea>
            </div>
        `;
    } else if (value === '信息发布') {
        additionalContent.innerHTML = `
            <div>
                <h2>信息内容<span style="color:red;">*</span></h2>
                <textarea name="info_content" id="info_content" rows="4" placeholder="具体的信息内容"></textarea>
            </div>
            <div>
                <h2>发布渠道<span style="color:red;">*</span></h2>
                <input type="text" name="release_channel" id="release_channel" placeholder="信息发布的渠道">
            </div>
        `;
    } else if (value === '事件报道') {
        additionalContent.innerHTML = `
            <div>
                <h2>事件背景<span style="color:red;">*</span></h2>
                <input type="text" name="event_background" id="event_background" placeholder="事件的背景和起因">
            </div>
            <div>
                <h2>报道重点<span style="color:red;">*</span></h2>
                <textarea name="report_focus" id="report_focus" rows="4" placeholder="报道的重点和角度"></textarea>
            </div>
        `;
    } else if (value === '政策解读') {
        additionalContent.innerHTML = `
            <div>
                <h2>政策内容<span style="color:red;">*</span></h2>
                <textarea name="policy_content" id="policy_content" rows="4" placeholder="政策的具体内容"></textarea>
            </div>
            <div>
                <h2>解读分析<span style="color:red;">*</span></h2>
                <input type="text" name="policy_analysis" id="policy_analysis" placeholder="政策的解读和分析">
            </div>
        `;
    } else if (value === '其他类型') {
        additionalContent.innerHTML = `
            <div>
                <h2>自定义信息<span style="color:red;">*</span></h2>
                <textarea name="custom_info" id="custom_info" rows="4" placeholder="根据实际情况填写"></textarea>
            </div>
        `;
    }
}

export { updateAdditionalContent };
