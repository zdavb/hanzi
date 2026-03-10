
import os

# 现有文件路径
file_path = '/Users/bytedance/GolandProjects/xiyun/hanzi_content_detailed.md'

# 读取现有内容
with open(file_path, 'r') as f:
    content = f.read()

# 截断到 Level 2: 探索期 (部分示例 - 可爱动物) 的末尾
# 我们需要找到最后一行，然后追加新内容
# 目前的最后一行是 "| **鱼** | yú | Fish | 金鱼 (goldfish)、钓鱼 (fishing) | 游动的鱼，有鳞片和尾巴 |"
# 我们将保留这部分，并追加后续内容。

# 定义生成表格行的函数
def row(char, pinyin, english, words, image):
    return f"| **{char}** | {pinyin} | {english} | {words} | {image} |"

# 数据准备
new_content = []

# --- 补充 Level 2.1 缤纷色彩 (剩余) ---
# 橙 青 彩 色 亮 暗 光 影 闪
new_content.append("\n| **橙** | chéng | Orange | 橙子 (orange)、橙色 (orange color) | 切开的橙子 |")
new_content.append("| **青** | qīng | Green/Cyan | 青草 (green grass)、青蛙 (frog) | 青青的草地 |")
new_content.append("| **彩** | cǎi | Colorful | 彩虹 (rainbow)、彩色 (colorful) | 五颜六色的彩虹 |")
new_content.append("| **色** | sè | Color | 颜色 (color)、红色 (red color) | 调色盘 |")
new_content.append("| **亮** | liàng | Bright | 亮晶晶 (sparkling)、月亮 (moon) | 发光的灯泡 |")
new_content.append("| **暗** | àn | Dark | 黑暗 (dark)、暗处 (dark place) | 关灯后的房间 |")
new_content.append("| **光** | guāng | Light | 阳光 (sunlight)、灯光 (light) | 太阳发出的光芒 |")
new_content.append("| **影** | yǐng | Shadow | 影子 (shadow)、电影 (movie) | 人在太阳下的影子 |")
new_content.append("| **闪** | shǎn | Flash | 闪电 (lightning)、闪亮 (shiny) | 天空中的闪电 |")

# --- 补充 Level 2.2 可爱动物 (剩余) ---
# 狗 猫 鸡 鸭 鹅 兔 猪 鼠 虎 龙 猴 象 蛙 鸦 蜻 蜓 蚂 蚁 蜘 蛛 熊 鹿 狼 贝 壳 翅 膀 尾 巴
new_content.append("\n| **狗** | gǒu | Dog | 小狗 (puppy)、热狗 (hotdog) | 摇尾巴的小狗 |")
new_content.append("| **猫** | māo | Cat | 小猫 (kitten)、熊猫 (panda) | 有胡须的小猫脸 |")
new_content.append("| **鸡** | jī | Chicken | 母鸡 (hen)、鸡蛋 (egg) | 正在啄米的公鸡 |")
new_content.append("| **鸭** | yā | Duck | 鸭子 (duck)、烤鸭 (roast duck) | 游水的鸭子 |")
new_content.append("| **鹅** | é | Goose | 白鹅 (white goose)、天鹅 (swan) | 曲项向天歌的白鹅 |")
new_content.append("| **兔** | tù | Rabbit | 兔子 (rabbit)、白兔 (white rabbit) | 长耳朵的兔子 |")
new_content.append("| **猪** | zhū | Pig | 小猪 (piggy)、肥猪 (fat pig) | 圆鼻子的猪头 |")
new_content.append("| **鼠** | shǔ | Mouse | 老鼠 (mouse)、松鼠 (squirrel) | 尖嘴巴的老鼠 |")
new_content.append("| **虎** | hǔ | Tiger | 老虎 (tiger)、虎头 (tiger head) | 头上有“王”字的老虎 |")
new_content.append("| **龙** | lóng | Dragon | 恐龙 (dinosaur)、龙舟 (dragon boat) | 长长的中国龙 |")
new_content.append("| **猴** | hóu | Monkey | 猴子 (monkey)、孙猴子 (Monkey King) | 挠头的猴子 |")
new_content.append("| **象** | xiàng | Elephant | 大象 (elephant)、象牙 (ivory) | 长鼻子的大象 |")
new_content.append("| **蛙** | wā | Frog | 青蛙 (frog)、牛蛙 (bullfrog) | 荷叶上的青蛙 |")
new_content.append("| **鸦** | yā | Crow | 乌鸦 (crow) | 黑色的鸟 |")
new_content.append("| **蜻** | qīng | Dragonfly | 蜻蜓 (dragonfly) | 蜻蜓点水 |")
new_content.append("| **蜓** | tíng | Dragonfly | 蜻蜓 (dragonfly) | 长尾巴的昆虫 |")
new_content.append("| **蚂** | mǎ | Ant | 蚂蚁 (ant) | 搬东西的小蚂蚁 |")
new_content.append("| **蚁** | yǐ | Ant | 蚂蚁 (ant)、工蚁 (worker ant) | 排队的蚂蚁 |")
new_content.append("| **蜘** | zhī | Spider | 蜘蛛 (spider) | 织网的虫子 |")
new_content.append("| **蛛** | zhū | Spider | 蜘蛛网 (spider web) | 八条腿的虫子 |")
new_content.append("| **熊** | xióng | Bear | 熊猫 (panda)、狗熊 (bear) | 笨笨的黑熊 |")
new_content.append("| **鹿** | lù | Deer | 长颈鹿 (giraffe)、梅花鹿 (deer) | 有角的鹿 |")
new_content.append("| **狼** | láng | Wolf | 大灰狼 (big bad wolf) | 对着月亮叫的狼 |")
new_content.append("| **贝** | bèi | Shell | 贝壳 (shell) | 海边的贝壳 |")
new_content.append("| **壳** | ké | Shell | 蛋壳 (eggshell)、外壳 (shell) | 破开的鸡蛋壳 |")
new_content.append("| **翅** | chì | Wing | 翅膀 (wing)、鸡翅 (chicken wing) | 鸟的翅膀 |")
new_content.append("| **膀** | bǎng | Wing/Shoulder | 翅膀 (wing)、肩膀 (shoulder) | 飞翔的姿态 |")
new_content.append("| **尾** | wěi | Tail | 尾巴 (tail)、结尾 (end) | 猴子的长尾巴 |")
new_content.append("| **巴** | bā | Tail/Bar | 尾巴 (tail)、巴士 (bus) | 卷卷的尾巴 |")

# --- Level 2.3 花草树木与果实 ---
new_content.append("\n### 2.3 花草树木与果实 (Plants & Fruits)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 花 草 树 叶 果 瓜 豆 林 森 苗 朵 桃 苹 杏 李 杨 竹 莲 菊 荷 柳 柏 树 芽 根 粮 米 麦 棉 谷 植 物
data_2_3 = [
    ("花", "huā", "Flower", "花朵 (flower)、开花 (bloom)", "一朵盛开的红花"),
    ("草", "cǎo", "Grass", "小草 (grass)、草地 (lawn)", "地上的三棵小草"),
    ("树", "shù", "Tree", "大树 (tree)、树林 (woods)", "一棵茂盛的大树"),
    ("叶", "yè", "Leaf", "树叶 (leaf)、茶叶 (tea leaf)", "一片绿色的叶子"),
    ("果", "guǒ", "Fruit", "水果 (fruit)、苹果 (apple)", "树上结的果子"),
    ("瓜", "guā", "Melon", "西瓜 (watermelon)、南瓜 (pumpkin)", "圆圆的西瓜"),
    ("豆", "dòu", "Bean", "豆子 (bean)、土豆 (potato)", "豆荚里的豆子"),
    ("林", "lín", "Woods", "树林 (woods)、森林 (forest)", "两棵树并排"),
    ("森", "sēn", "Forest", "森林 (forest)", "三棵树堆在一起"),
    ("苗", "miáo", "Seedling", "禾苗 (seedling)、树苗 (sapling)", "田里刚长出的小芽"),
    ("朵", "duǒ", "Measure word/Flower", "花朵 (flower)、云朵 (cloud)", "一朵花或一朵云"),
    ("桃", "táo", "Peach", "桃子 (peach)、桃花 (peach blossom)", "粉红色的桃子"),
    ("苹", "píng", "Apple", "苹果 (apple)", "红红的苹果"),
    ("杏", "xìng", "Apricot", "杏子 (apricot)、银杏 (ginkgo)", "黄色的杏子"),
    ("李", "lǐ", "Plum", "李子 (plum)、行李 (luggage)", "紫色的李子"),
    ("杨", "yáng", "Poplar", "杨树 (poplar tree)", "高高的杨树"),
    ("竹", "zhú", "Bamboo", "竹子 (bamboo)、竹笋 (bamboo shoot)", "一节节的竹子"),
    ("莲", "lián", "Lotus", "莲花 (lotus)、莲藕 (lotus root)", "水里的莲蓬"),
    ("菊", "jú", "Chrysanthemum", "菊花 (chrysanthemum)", "黄色的菊花"),
    ("荷", "hé", "Lotus", "荷花 (lotus flower)、荷叶 (lotus leaf)", "粉色的荷花"),
    ("柳", "liǔ", "Willow", "柳树 (willow)、柳条 (willow twig)", "垂下的柳枝"),
    ("柏", "bǎi", "Cypress", "柏树 (cypress)、松柏 (pine and cypress)", "尖尖的柏树"),
    ("芽", "yá", "Bud", "发芽 (sprout)、豆芽 (bean sprout)", "刚冒头的小绿芽"),
    ("根", "gēn", "Root", "树根 (root)、根本 (fundamental)", "地下的树根"),
    ("粮", "liáng", "Grain", "粮食 (grain)、干粮 (rations)", "一袋米"),
    ("米", "mǐ", "Rice", "大米 (rice)、米饭 (cooked rice)", "散落的米粒"),
    ("麦", "mài", "Wheat", "小麦 (wheat)、麦片 (oatmeal)", "金黄的麦穗"),
    ("棉", "mián", "Cotton", "棉花 (cotton)、棉被 (quilt)", "白白的棉花团"),
    ("谷", "gǔ", "Valley/Grain", "山谷 (valley)、谷子 (millet)", "两山之间的凹陷"),
    ("植", "zhí", "Plant", "植物 (plant)、植树 (plant trees)", "种下一棵树"),
    ("物", "wù", "Thing", "动物 (animal)、礼物 (gift)", "一个礼物盒子")
]
for d in data_2_3:
    new_content.append(row(*d))

# --- Level 2.4 天气与自然 ---
new_content.append("\n### 2.4 天气与自然 (Weather & Nature)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 天 地 风 雨 雪 云 电 雷 雾 冰 霜 气 阴 晴 露 霞 虹 洞 海 河 江 湖 池 泉 溪 流 沙 滩 浪 潮 湿
data_2_4 = [
    ("天", "tiān", "Sky/Day", "蓝天 (blue sky)、今天 (today)", "头顶的天空"),
    ("地", "dì", "Ground", "大地 (earth)、地板 (floor)", "脚下的草地"),
    ("风", "fēng", "Wind", "大风 (wind)、吹风 (blow)", "被风吹弯的树"),
    ("雨", "yǔ", "Rain", "下雨 (rain)、雨伞 (umbrella)", "从云里掉下的水滴"),
    ("雪", "xuě", "Snow", "下雪 (snow)、雪人 (snowman)", "六角形的雪花"),
    ("云", "yún", "Cloud", "白云 (cloud)、乌云 (dark cloud)", "飘浮的云朵"),
    ("电", "diàn", "Electricity", "闪电 (lightning)、电视 (TV)", "插座或闪电"),
    ("雷", "léi", "Thunder", "打雷 (thunder)、雷雨 (thunderstorm)", "云层里的轰隆声"),
    ("雾", "wù", "Fog", "大雾 (fog)、雾气 (mist)", "模糊的景象"),
    ("冰", "bīng", "Ice", "冰块 (ice cube)、滑冰 (skate)", "透明的冰块"),
    ("霜", "shuāng", "Frost", "冰霜 (frost)、霜降 (Frost's Descent)", "叶子上的白霜"),
    ("气", "qì", "Air/Gas", "空气 (air)、生气 (angry)", "飘起的热气"),
    ("阴", "yīn", "Cloudy", "阴天 (cloudy day)、阴凉 (shade)", "遮住太阳的云"),
    ("晴", "qíng", "Sunny", "晴天 (sunny day)", "大太阳"),
    ("露", "lù", "Dew", "露水 (dew)、露珠 (dewdrop)", "叶子上的水珠"),
    ("霞", "xiá", "Rosy clouds", "晚霞 (sunset glow)、彩霞 (rosy clouds)", "傍晚红色的云"),
    ("虹", "hóng", "Rainbow", "彩虹 (rainbow)", "弯弯的彩虹"),
    ("洞", "dòng", "Hole/Cave", "山洞 (cave)、破洞 (hole)", "黑黑的洞口"),
    ("海", "hǎi", "Sea", "大海 (sea)、海水 (seawater)", "广阔的蓝色大海"),
    ("河", "hé", "River", "小河 (river)、河水 (river water)", "弯弯曲曲的河流"),
    ("江", "jiāng", "River", "长江 (Yangtze River)、江水 (river water)", "宽阔的大江"),
    ("湖", "hú", "Lake", "湖水 (lake)、西湖 (West Lake)", "平静的湖面"),
    ("池", "chí", "Pool", "池塘 (pond)、游泳池 (pool)", "小水坑"),
    ("泉", "quán", "Spring", "泉水 (spring water)、温泉 (hot spring)", "从地下冒出的水"),
    ("溪", "xī", "Stream", "小溪 (stream)", "山间的小水流"),
    ("流", "liú", "Flow", "流水 (flowing water)、流血 (bleed)", "流动的水"),
    ("沙", "shā", "Sand", "沙子 (sand)、沙滩 (beach)", "一堆沙子"),
    ("滩", "tān", "Beach", "沙滩 (beach)、海滩 (beach)", "海边的沙地"),
    ("浪", "làng", "Wave", "海浪 (wave)、浪花 (spray)", "卷起的大浪"),
    ("潮", "cháo", "Tide", "潮湿 (damp)、涨潮 (high tide)", "水漫上来"),
    ("湿", "shī", "Wet", "湿透 (soaked)、湿润 (moist)", "滴水的衣服")
]
for d in data_2_4:
    new_content.append(row(*d))

# --- Level 2.5 时间与季节 ---
new_content.append("\n### 2.5 时间与季节 (Time & Seasons)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 东 西 南 北 中 春 夏 秋 冬 早 晚 年 月 日 时 候 秒 分 昨 今 明 晨 午 夜 节 岁
data_2_5 = [
    ("东", "dōng", "East", "东方 (east)、东边 (east side)", "太阳升起的方向"),
    ("西", "xī", "West", "西瓜 (watermelon)、西方 (west)", "太阳落下的方向"),
    ("南", "nán", "South", "南方 (south)、南瓜 (pumpkin)", "指南针指向南"),
    ("北", "běi", "North", "北方 (north)、北极熊 (polar bear)", "指南针指向北"),
    ("中", "zhōng", "Middle", "中间 (middle)、中国 (China)", "靶心或正中间"),
    ("春", "chūn", "Spring", "春天 (spring)、春节 (Spring Festival)", "花开的季节"),
    ("夏", "xià", "Summer", "夏天 (summer)、夏日 (summer day)", "吃西瓜的季节"),
    ("秋", "qiū", "Autumn", "秋天 (autumn)、秋千 (swing)", "落叶的季节"),
    ("冬", "dōng", "Winter", "冬天 (winter)、冬瓜 (winter melon)", "下雪的季节"),
    ("早", "zǎo", "Morning/Early", "早上 (morning)、早安 (good morning)", "太阳刚升起"),
    ("晚", "wǎn", "Evening/Late", "晚上 (evening)、晚安 (good night)", "月亮升起"),
    ("年", "nián", "Year", "过年 (New Year)、今年 (this year)", "放鞭炮"),
    ("月", "yuè", "Month", "一月 (January)、岁月 (years)", "日历上的一页"),
    ("日", "rì", "Day", "日子 (day)、日记 (diary)", "太阳"),
    ("时", "shí", "Time", "时间 (time)、小时 (hour)", "时钟"),
    ("候", "hòu", "Wait/Time", "时候 (time)、等候 (wait)", "在车站等人"),
    ("秒", "miǎo", "Second", "秒针 (second hand)", "滴答滴答的秒针"),
    ("分", "fēn", "Minute/Divide", "分钟 (minute)、分开 (separate)", "切开的西瓜"),
    ("昨", "zuó", "Yesterday", "昨天 (yesterday)", "日历的上一页"),
    ("今", "jīn", "Today", "今天 (today)", "日历的这一页"),
    ("明", "míng", "Tomorrow/Bright", "明天 (tomorrow)、明白 (understand)", "日历的下一页"),
    ("晨", "chén", "Morning", "早晨 (morning)、清晨 (early morning)", "公鸡打鸣"),
    ("午", "wǔ", "Noon", "中午 (noon)、午睡 (nap)", "太阳在头顶"),
    ("夜", "yè", "Night", "夜晚 (night)、夜空 (night sky)", "星星满天"),
    ("节", "jié", "Festival/Knot", "节日 (festival)、竹节 (bamboo joint)", "灯笼"),
    ("岁", "suì", "Year/Age", "几岁 (how old)、岁月 (years)", "生日蛋糕上的蜡烛")
]
for d in data_2_5:
    new_content.append(row(*d))


# --- Level 3: 表达期 ---
new_content.append("\n## Level 3: 表达期 (150字)")
new_content.append("> 核心目标：学会表达动作、感受及状态。\n")

# 3.1 身体动作
new_content.append("### 3.1 身体动作 (Body Actions)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 站 坐 走 跑 跳 飞 爬 游 睡 醒 起 卧 蹲 追 逃 躲 进 退 出 入 躺 翻 滚 转 立 停 来 去 回 到 过 穿 脱
data_3_1 = [
    ("站", "zhàn", "Stand", "站立 (stand)、车站 (station)", "立正站好"),
    ("坐", "zuò", "Sit", "坐下 (sit down)、请坐 (please sit)", "坐在椅子上"),
    ("走", "zǒu", "Walk", "走路 (walk)、走开 (go away)", "迈步向前"),
    ("跑", "pǎo", "Run", "跑步 (run)、赛跑 (race)", "快速奔跑"),
    ("跳", "tiào", "Jump", "跳舞 (dance)、跳绳 (jump rope)", "向上跳起"),
    ("飞", "fēi", "Fly", "飞机 (airplane)、飞翔 (fly)", "小鸟在飞"),
    ("爬", "pá", "Climb/Crawl", "爬山 (climb mountain)、爬行 (crawl)", "宝宝在爬"),
    ("游", "yóu", "Swim", "游泳 (swim)、游戏 (game)", "在水里游"),
    ("睡", "shuì", "Sleep", "睡觉 (sleep)、睡着 (asleep)", "闭眼睡觉"),
    ("醒", "xǐng", "Wake", "醒来 (wake up)、清醒 (awake)", "伸懒腰睁眼"),
    ("起", "qǐ", "Up/Rise", "起床 (get up)、起飞 (take off)", "从床上坐起来"),
    ("卧", "wò", "Lie", "卧室 (bedroom)、卧倒 (lie down)", "趴着"),
    ("蹲", "dūn", "Squat", "蹲下 (squat)", "弯腿蹲着"),
    ("追", "zhuī", "Chase", "追赶 (chase)", "后面的人追前面的"),
    ("逃", "táo", "Escape", "逃跑 (escape)", "前面的人跑"),
    ("躲", "duǒ", "Hide", "躲藏 (hide)、躲猫猫 (peek-a-boo)", "藏在树后"),
    ("进", "jìn", "Enter", "进来 (come in)、进步 (progress)", "走进门"),
    ("退", "tuì", "Retreat", "后退 (go back)、退步 (regress)", "向后走"),
    ("出", "chū", "Out", "出去 (go out)、出发 (set off)", "走出门"),
    ("入", "rù", "Enter", "入口 (entrance)、加入 (join)", "箭头指向里面"),
    ("躺", "tǎng", "Lie", "躺下 (lie down)", "平躺在床上"),
    ("翻", "fān", "Turn/Flip", "翻书 (turn page)、翻身 (turn over)", "翻动书页"),
    ("滚", "gǔn", "Roll", "打滚 (roll)、滚动 (roll)", "球在滚"),
    ("转", "zhuǎn", "Turn", "转身 (turn around)、旋转 (rotate)", "转圈圈"),
    ("立", "lì", "Stand", "起立 (stand up)、立正 (attention)", "站得直直的"),
    ("停", "tíng", "Stop", "停车 (stop car)、停止 (stop)", "红灯停"),
    ("来", "lái", "Come", "过来 (come here)、来到 (arrive)", "招手让人来"),
    ("去", "qù", "Go", "过去 (go there)、回去 (go back)", "挥手让人走"),
    ("回", "huí", "Return", "回家 (go home)、回来 (come back)", "转个圈回来"),
    ("到", "dào", "Arrive", "到了 (arrived)、迟到 (late)", "到达终点"),
    ("过", "guò", "Pass", "过去 (pass)、过河 (cross river)", "走过桥"),
    ("穿", "chuān", "Wear", "穿衣 (get dressed)、穿鞋 (put on shoes)", "穿上衣服"),
    ("脱", "tuō", "Take off", "脱衣 (undress)、脱鞋 (take off shoes)", "脱下衣服")
]
for d in data_3_1:
    new_content.append(row(*d))

# 3.2 手部动作
new_content.append("\n### 3.2 手部动作 (Hand Actions)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 打 拍 抱 提 拉 推 找 扫 种 摘 采 扔 接 捉 拿 指 画 写 抬 拔 挑 挖 搬 扛 捧 掰 摇 招 扶 挂 掉 捡 丢 
data_3_2 = [
    ("打", "dǎ", "Hit/Call", "打球 (play ball)、打电话 (call)", "用手击打"),
    ("拍", "pāi", "Clap/Pat", "拍手 (clap)、拍照 (take photo)", "双手击掌"),
    ("抱", "bào", "Hug", "拥抱 (hug)、抱抱 (cuddle)", "张开双臂抱"),
    ("提", "tí", "Lift/Carry", "提水 (carry water)、手提包 (handbag)", "手提东西"),
    ("拉", "lā", "Pull", "拉手 (hold hands)、拉车 (pull cart)", "用力拉绳子"),
    ("推", "tuī", "Push", "推车 (push cart)、推开 (push open)", "用力向前推"),
    ("找", "zhǎo", "Find", "寻找 (look for)、找到 (found)", "用放大镜看"),
    ("扫", "sǎo", "Sweep", "扫地 (sweep floor)", "拿扫把扫地"),
    ("种", "zhòng", "Plant", "种树 (plant tree)、种花 (plant flower)", "把种子埋土里"),
    ("摘", "zhāi", "Pick", "摘花 (pick flower)、摘果子 (pick fruit)", "伸手去采"),
    ("采", "cǎi", "Pick/Gather", "采蘑菇 (pick mushroom)", "弯腰采摘"),
    ("扔", "rēng", "Throw", "扔球 (throw ball)", "用力丢出去"),
    ("接", "jiē", "Catch/Receive", "接球 (catch ball)、接电话 (answer phone)", "双手接住"),
    ("捉", "zhuō", "Catch", "捉迷藏 (hide and seek)、捉虫 (catch bug)", "用网兜捉"),
    ("拿", "ná", "Hold/Take", "拿着 (holding)、拿来 (bring)", "手里拿着苹果"),
    ("指", "zhǐ", "Point", "手指 (finger)、指路 (point way)", "伸出食指"),
    ("画", "huà", "Draw", "画画 (draw)、图画 (picture)", "拿画笔画"),
    ("写", "xiě", "Write", "写字 (write)、作业 (homework)", "拿铅笔写"),
    ("抬", "tái", "Lift", "抬头 (look up)、抬水 (carry water)", "两个人抬东西"),
    ("拔", "bá", "Pull up", "拔萝卜 (pull turnip)、拔牙 (pull tooth)", "用力拔出来"),
    ("挑", "tiāo", "Pick/Carry", "挑选 (choose)、挑水 (carry water)", "挑扁担"),
    ("挖", "wā", "Dig", "挖土 (dig soil)、挖掘机 (excavator)", "用铲子挖"),
    ("搬", "bān", "Move", "搬家 (move house)、搬桌子 (move table)", "搬重物"),
    ("扛", "káng", "Carry on shoulder", "扛枪 (carry gun)", "扛在肩上"),
    ("捧", "pěng", "Hold in both hands", "捧着 (hold in hands)", "双手捧水"),
    ("掰", "bāi", "Break off", "掰开 (break apart)、掰玉米 (break corn)", "双手掰断"),
    ("摇", "yáo", "Shake", "摇手 (wave hand)、摇篮 (cradle)", "摇动"),
    ("招", "zhāo", "Beckon", "招手 (wave)、招呼 (greet)", "招手让人来"),
    ("扶", "fú", "Support", "扶手 (handrail)、扶持 (support)", "扶着老人"),
    ("挂", "guà", "Hang", "挂画 (hang picture)、挂衣 (hang clothes)", "挂钩"),
    ("掉", "diào", "Drop/Fall", "掉下 (fall down)、掉眼泪 (shed tears)", "东西掉地上"),
    ("捡", "jiǎn", "Pick up", "捡起来 (pick up)", "弯腰捡东西"),
    ("丢", "diū", "Lost/Throw", "丢人 (shameful)、弄丢 (lost)", "东西不见了")
]
for d in data_3_2:
    new_content.append(row(*d))

# 3.3 感官与交流
new_content.append("\n### 3.3 感官与交流 (Senses & Communication)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 看 见 听 说 问 叫 喊 唱 吹 呼 吸 视 望 闻 语 音 讲 读 告 诉 谈 论 吵 闹 静 响 声 息 
data_3_3 = [
    ("看", "kàn", "Look", "看见 (see)、看书 (read)", "手搭凉棚看"),
    ("见", "jiàn", "See", "再见 (goodbye)、见面 (meet)", "睁大眼睛"),
    ("听", "tīng", "Listen", "听话 (obedient)、听歌 (listen to music)", "手放在耳边"),
    ("说", "shuō", "Speak", "说话 (speak)、说明 (explain)", "嘴巴在动"),
    ("问", "wèn", "Ask", "问题 (question)、请问 (excuse me)", "嘴巴里有个问号"),
    ("叫", "jiào", "Call/Shout", "大叫 (shout)、名叫 (named)", "张嘴大声喊"),
    ("喊", "hǎn", "Shout", "喊叫 (yell)、大喊 (shout)", "双手围嘴喊"),
    ("唱", "chàng", "Sing", "唱歌 (sing)、歌唱 (singing)", "拿着麦克风"),
    ("吹", "chuī", "Blow", "吹气 (blow)、吹牛 (brag)", "嘴巴吹风"),
    ("呼", "hū", "Exhale/Call", "呼吸 (breathe)、欢呼 (cheer)", "呼出一口气"),
    ("吸", "xī", "Inhale", "吸管 (straw)、吸气 (inhale)", "用吸管喝水"),
    ("视", "shì", "Vision", "电视 (TV)、近视 (nearsighted)", "眼睛"),
    ("望", "wàng", "Gaze", "看望 (visit)、愿望 (wish)", "站在高处看"),
    ("闻", "wén", "Smell", "闻花 (smell flower)、新闻 (news)", "鼻子闻气味"),
    ("语", "yǔ", "Language", "语文 (language)、成语 (idiom)", "对话气泡"),
    ("音", "yīn", "Sound", "音乐 (music)、声音 (sound)", "音符"),
    ("讲", "jiǎng", "Speak/Tell", "讲话 (speak)、讲故事 (tell story)", "老师在讲课"),
    ("读", "dú", "Read", "读书 (read book)、朗读 (read aloud)", "拿着书念"),
    ("告", "gào", "Tell", "告诉 (tell)、广告 (advertisement)", "凑在耳边说"),
    ("诉", "sù", "Tell", "告诉 (tell)、诉说 (recount)", "说话的样子"),
    ("谈", "tán", "Talk", "谈话 (talk)、谈天 (chat)", "两个人聊天"),
    ("论", "lùn", "Discuss", "讨论 (discuss)、理论 (theory)", "一群人讨论"),
    ("吵", "chǎo", "Noisy", "吵架 (quarrel)、吵闹 (noisy)", "两个嘴巴吵"),
    ("闹", "nào", "Noisy", "热闹 (lively)、闹钟 (alarm clock)", "集市或闹钟"),
    ("静", "jìng", "Quiet", "安静 (quiet)、冷静 (calm)", "手指放嘴唇嘘"),
    ("响", "xiǎng", "Loud", "响亮 (loud)、响声 (sound)", "敲锣打鼓"),
    ("声", "shēng", "Sound/Voice", "声音 (voice)、大声 (loud)", "喇叭"),
    ("息", "xī", "Breath/Rest", "休息 (rest)、气息 (breath)", "坐在树下休息")
]
for d in data_3_3:
    new_content.append(row(*d))

# 3.4 饮食与生活动作
new_content.append("\n### 3.4 饮食与生活动作 (Eating & Daily Life)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 吃 喝 咬 尝 饿 饱 香 甜 酸 苦 饭 菜 渴 吞 吐 熟 生 洗 澡 刷 梳 
data_3_4 = [
    ("吃", "chī", "Eat", "吃饭 (eat rice)、好吃 (yummy)", "张嘴吃东西"),
    ("喝", "hē", "Drink", "喝水 (drink water)、喝汤 (drink soup)", "拿杯子喝"),
    ("咬", "yǎo", "Bite", "咬一口 (bite)、咬人 (bite)", "牙齿咬苹果"),
    ("尝", "cháng", "Taste", "品尝 (taste)、尝试 (try)", "舌头舔一舔"),
    ("饿", "è", "Hungry", "肚子饿 (hungry)", "摸着扁肚子"),
    ("饱", "bǎo", "Full", "吃饱 (full)", "摸着圆肚子"),
    ("香", "xiāng", "Fragrant", "真香 (smells good)、香水 (perfume)", "冒着香气的饭"),
    ("甜", "tián", "Sweet", "甜蜜 (sweet)、甜食 (sweets)", "糖果"),
    ("酸", "suān", "Sour", "酸奶 (yogurt)、好酸 (sour)", "柠檬"),
    ("苦", "kǔ", "Bitter", "苦瓜 (bitter melon)、辛苦 (hard work)", "苦瓜或药"),
    ("饭", "fàn", "Rice/Meal", "米饭 (rice)、早饭 (breakfast)", "一碗饭"),
    ("菜", "cài", "Vegetable/Dish", "青菜 (vegetable)、买菜 (buy grocery)", "一盘菜"),
    ("渴", "kě", "Thirsty", "口渴 (thirsty)", "想要水喝"),
    ("吞", "tūn", "Swallow", "吞下 (swallow)、吞吐 (swallow and spit)", "喉咙吞咽"),
    ("吐", "tǔ", "Spit", "吐气 (exhale)、呕吐 (vomit)", "嘴巴吐东西"),
    ("熟", "shú", "Cooked/Ripe", "熟了 (cooked/ripe)、熟悉 (familiar)", "红透的苹果"),
    ("生", "shēng", "Raw/Birth", "生日 (birthday)、生病 (sick)", "发芽的种子"),
    ("洗", "xǐ", "Wash", "洗手 (wash hands)、洗衣 (wash clothes)", "用水冲洗"),
    ("澡", "zǎo", "Bath", "洗澡 (bath)", "浴缸里洗澡"),
    ("刷", "shuā", "Brush", "刷牙 (brush teeth)、刷子 (brush)", "拿着牙刷"),
    ("梳", "shū", "Comb", "梳头 (comb hair)、梳子 (comb)", "用梳子梳头")
]
for d in data_3_4:
    new_content.append(row(*d))

# 3.5 常用形容词
new_content.append("\n### 3.5 常用形容词 (Adjectives)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
# 高 矮 长 短 胖 瘦 远 近 直 弯 快 慢 美 丽 新 旧 好 坏 难 易 真 假 对 错 细 粗 尖 圆 平 扁 独 单 众 双 满 空 干 湿 凉 热 暖 冷 软 硬 轻 重 
data_3_5 = [
    ("高", "gāo", "High/Tall", "高兴 (happy)、高楼 (tall building)", "高高的长颈鹿"),
    ("矮", "ǎi", "Short", "矮小 (short)", "矮矮的小板凳"),
    ("长", "cháng", "Long", "长江 (Long River)、长发 (long hair)", "长长的绳子"),
    ("短", "duǎn", "Short", "短裤 (shorts)、短跑 (sprint)", "短短的尺子"),
    ("胖", "pàng", "Fat", "胖乎乎 (chubby)、肥胖 (fat)", "胖胖的熊猫"),
    ("瘦", "shòu", "Thin", "瘦小 (thin)、瘦肉 (lean meat)", "瘦瘦的猴子"),
    ("远", "yuǎn", "Far", "远方 (distance)、很远 (very far)", "望远镜看远处"),
    ("近", "jìn", "Near", "很近 (near)、最近 (recent)", "就在眼前"),
    ("直", "zhí", "Straight", "直线 (straight line)、一直 (always)", "笔直的公路"),
    ("弯", "wān", "Curved", "弯腰 (bend)、转弯 (turn)", "弯弯的月亮"),
    ("快", "kuài", "Fast", "快乐 (happy)、快速 (fast)", "奔跑的豹子"),
    ("慢", "màn", "Slow", "慢走 (walk slow)、傲慢 (arrogant)", "爬行的蜗牛"),
    ("美", "měi", "Beautiful", "美丽 (beautiful)、美好 (good)", "美丽的孔雀"),
    ("丽", "lì", "Beautiful", "美丽 (beautiful)、华丽 (magnificent)", "漂亮的裙子"),
    ("新", "xīn", "New", "新年 (New Year)、新衣 (new clothes)", "刚买的玩具"),
    ("旧", "jiù", "Old", "破旧 (old/worn)、陈旧 (outdated)", "破旧的书"),
    ("好", "hǎo", "Good", "好人 (good person)、你好 (hello)", "大拇指点赞"),
    ("坏", "huài", "Bad", "坏人 (bad guy)、坏了 (broken)", "烂掉的苹果"),
    ("难", "nán", "Difficult", "困难 (difficult)、难过 (sad)", "解不开的结"),
    ("易", "yì", "Easy", "容易 (easy)、交易 (trade)", "简单的加法"),
    ("真", "zhēn", "Real", "真的 (real)、天真 (innocent)", "真金白银"),
    ("假", "jiǎ", "Fake", "假发 (wig)、放假 (holiday)", "面具"),
    ("对", "duì", "Correct/Pair", "不对 (wrong)、一对 (pair)", "打勾"),
    ("错", "cuò", "Wrong", "不错 (not bad)、做错 (mistake)", "打叉"),
    ("细", "xì", "Thin/Fine", "细线 (thin thread)、仔细 (careful)", "细细的头发"),
    ("粗", "cū", "Thick/Rough", "粗心 (careless)、粗大 (thick)", "粗粗的树干"),
    ("尖", "jiān", "Sharp", "笔尖 (pen tip)、尖叫 (scream)", "尖尖的针"),
    ("圆", "yuán", "Round", "圆形 (circle)、团圆 (reunion)", "圆圆的球"),
    ("平", "píng", "Flat", "平安 (safe)、平时 (usually)", "平坦的地面"),
    ("扁", "biǎn", "Flat", "扁豆 (flat bean)", "被压扁的球"),
    ("独", "dú", "Alone", "独立 (independent)、独自 (alone)", "一只孤单的鸟"),
    ("单", "dān", "Single", "孤单 (lonely)、床单 (bed sheet)", "一根筷子"),
    ("众", "zhòng", "Crowd", "群众 (crowd)、众多 (numerous)", "三个人在一起"),
    ("双", "shuāng", "Pair", "双手 (both hands)、一双 (a pair)", "两只鞋子"),
    ("满", "mǎn", "Full", "满意 (satisfied)、充满 (full of)", "装满水的杯子"),
    ("空", "kōng", "Empty/Sky", "天空 (sky)、空手 (empty handed)", "空的盒子"),
    ("干", "gān", "Dry", "干净 (clean)、饼干 (biscuit)", "晒干的衣服"),
    ("湿", "shī", "Wet", "湿透 (soaked)", "滴水的毛巾"),
    ("凉", "liáng", "Cool", "凉快 (cool)、冰凉 (cold)", "吹电风扇"),
    ("热", "rè", "Hot", "热水 (hot water)、热闹 (lively)", "冒汗的太阳"),
    ("暖", "nuǎn", "Warm", "暖和 (warm)、温暖 (warmth)", "围着火炉"),
    ("冷", "lěng", "Cold", "好冷 (cold)、冷淡 (cold)", "发抖的雪人"),
    ("软", "ruǎn", "Soft", "柔软 (soft)、软糖 (gummy)", "软绵绵的棉花糖"),
    ("硬", "yìng", "Hard", "坚硬 (hard)、硬币 (coin)", "硬硬的石头"),
    ("轻", "qīng", "Light", "轻轻 (gently)、年轻 (young)", "飘起的羽毛"),
    ("重", "zhòng", "Heavy", "重要 (important)、沉重 (heavy)", "举起杠铃")
]
for d in data_3_5:
    new_content.append(row(*d))

# 合并内容
full_text = content + "\n".join(new_content)

# 写入文件
with open(file_path, 'w') as f:
    f.write(full_text)

print(f"Added {len(new_content)} lines of content.")
