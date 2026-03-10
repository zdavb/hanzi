
import os

file_path = '/Users/bytedance/GolandProjects/xiyun/hanzi_content_detailed.md'

with open(file_path, 'r') as f:
    content = f.read()

def row(char, pinyin, english, words, image):
    return f"| **{char}** | {pinyin} | {english} | {words} | {image} |"

new_content = []

# --- Level 4: 社会期 ---
new_content.append("\n## Level 4: 社会期 (160字)")
new_content.append("> 核心目标：进入社会化场景，认识学校、家庭、城市生活。\n")

# 4.1 快乐学校
new_content.append("### 4.1 快乐学校 (Happy School)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_4_1 = [
    ("书", "shū", "Book", "看书 (read book)、书包 (schoolbag)", "一本打开的书"),
    ("包", "bāo", "Bag/Bun", "书包 (schoolbag)、面包 (bread)", "双肩背包"),
    ("笔", "bǐ", "Pen", "铅笔 (pencil)、画笔 (brush)", "一支铅笔"),
    ("尺", "chǐ", "Ruler", "尺子 (ruler)、尺寸 (size)", "一把直尺"),
    ("刀", "dāo", "Knife", "小刀 (knife)、剪刀 (scissors)", "削笔刀"),
    ("本", "běn", "Notebook/Root", "作业本 (notebook)、课本 (textbook)", "写字本"),
    ("课", "kè", "Lesson", "上课 (class)、课本 (textbook)", "黑板前的老师"),
    ("校", "xiào", "School", "学校 (school)、校园 (campus)", "学校大门"),
    ("师", "shī", "Teacher", "老师 (teacher)、教师 (teacher)", "戴眼镜的老师"),
    ("生", "shēng", "Student/Life", "学生 (student)、生活 (life)", "背书包的学生"),
    ("友", "yǒu", "Friend", "朋友 (friend)、友好 (friendly)", "两个小朋友拉手"),
    ("学", "xué", "Study", "学习 (study)、同学 (classmate)", "正在看书"),
    ("习", "xí", "Practice", "练习 (practice)、习惯 (habit)", "写作业"),
    ("字", "zì", "Character", "汉字 (Chinese character)、写字 (write)", "田字格里的字"),
    ("词", "cí", "Word", "词语 (word)、歌词 (lyrics)", "两个字连在一起"),
    ("句", "jù", "Sentence", "句子 (sentence)、造句 (make sentence)", "一行字加句号"),
    ("故", "gù", "Story/Old", "故事 (story)、故乡 (hometown)", "听故事"),
    ("事", "shì", "Thing/Matter", "事情 (matter)、故事 (story)", "正在做的事"),
    ("册", "cè", "Booklet", "画册 (album)、手册 (handbook)", "一叠书"),
    ("页", "yè", "Page", "页码 (page number)、翻页 (turn page)", "书的一页"),
    ("题", "tí", "Question/Topic", "题目 (question)、问题 (problem)", "问号"),
    ("操", "cāo", "Exercise", "做操 (exercise)、操场 (playground)", "伸展运动"),
    ("场", "chǎng", "Field", "操场 (playground)、广场 (square)", "宽阔的空地"),
    ("铃", "líng", "Bell", "铃声 (bell ring)、风铃 (wind chime)", "叮铃铃的闹钟"),
    ("队", "duì", "Team", "排队 (queue)、队长 (captain)", "一排小朋友"),
    ("旗", "qí", "Flag", "红旗 (red flag)、国旗 (national flag)", "飘扬的旗帜"),
    ("班", "bān", "Class", "班级 (class)、上班 (go to work)", "教室里的桌椅"),
    ("级", "jí", "Grade/Level", "年级 (grade)、高级 (high level)", "楼梯台阶"),
    ("举", "jǔ", "Raise", "举手 (raise hand)、举重 (weightlifting)", "举手回答问题"),
    ("考", "kǎo", "Test", "考试 (exam)、思考 (think)", "试卷"),
    ("试", "shì", "Try/Test", "尝试 (try)、考试 (exam)", "正在答题"),
    ("练", "liàn", "Practice", "练习 (practice)、训练 (train)", "练字"),
    ("功", "gōng", "Work/Kung Fu", "用功 (hardworking)、功夫 (Kung Fu)", "练武术"),
    ("劳", "láo", "Labor", "劳动 (labor)、勤劳 (diligent)", "扫地干活"),
    ("动", "dòng", "Move", "运动 (sport)、动物 (animal)", "奔跑")
]
for d in data_4_1:
    new_content.append(row(*d))

# 4.2 温馨家庭
new_content.append("\n### 4.2 温馨家庭 (Cozy Home)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_4_2 = [
    ("门", "mén", "Door", "大门 (gate)、开门 (open door)", "两扇门"),
    ("窗", "chuāng", "Window", "窗户 (window)、窗帘 (curtain)", "打开的窗户"),
    ("桌", "zhuō", "Table", "桌子 (table)、书桌 (desk)", "四条腿的桌子"),
    ("椅", "yǐ", "Chair", "椅子 (chair)、座椅 (seat)", "有靠背的椅子"),
    ("床", "chuáng", "Bed", "起床 (get up)、床单 (bed sheet)", "铺着被子的床"),
    ("灯", "dēng", "Lamp", "电灯 (lamp)、红绿灯 (traffic light)", "发光的台灯"),
    ("伞", "sǎn", "Umbrella", "雨伞 (umbrella)、打伞 (hold umbrella)", "撑开的伞"),
    ("碗", "wǎn", "Bowl", "饭碗 (rice bowl)、洗碗 (wash bowl)", "盛满饭的碗"),
    ("筷", "kuài", "Chopsticks", "筷子 (chopsticks)", "一双筷子"),
    ("盘", "pán", "Plate", "盘子 (plate)、飞盘 (frisbee)", "圆盘子"),
    ("盆", "pén", "Basin", "脸盆 (washbasin)、花盆 (flowerpot)", "装水的盆"),
    ("柜", "guì", "Cabinet", "衣柜 (wardrobe)、柜台 (counter)", "有抽屉的柜子"),
    ("镜", "jìng", "Mirror", "镜子 (mirror)、眼镜 (glasses)", "照镜子"),
    ("箱", "xiāng", "Box", "箱子 (box)、冰箱 (fridge)", "大纸箱"),
    ("房", "fáng", "Room/House", "房子 (house)、房间 (room)", "尖顶的小房子"),
    ("院", "yuàn", "Courtyard", "院子 (courtyard)、医院 (hospital)", "围墙里的房子"),
    ("井", "jǐng", "Well", "水井 (water well)", "圆圆的井口"),
    ("家", "jiā", "Home", "回家 (go home)、大家 (everyone)", "房子里有猪(豕)"),
    ("户", "hù", "Door/Household", "户口 (household)、窗户 (window)", "单扇门"),
    ("居", "jū", "Live", "居住 (live)、邻居 (neighbor)", "住在房子里"),
    ("墙", "qiáng", "Wall", "墙壁 (wall)、围墙 (wall)", "砖砌的墙"),
    ("壁", "bì", "Wall", "墙壁 (wall)、壁虎 (gecko)", "墙面"),
    ("瓦", "wǎ", "Tile", "瓦片 (tile)", "屋顶的瓦片"),
    ("砖", "zhuān", "Brick", "砖头 (brick)", "红色的砖块"),
    ("扫", "sǎo", "Sweep", "打扫 (clean)、扫地 (sweep)", "拿扫把"),
    ("帚", "zhǒu", "Broom", "扫帚 (broom)", "扫把"),
    ("巾", "jīn", "Towel", "毛巾 (towel)、纸巾 (tissue)", "挂着的毛巾"),
    ("皂", "zào", "Soap", "肥皂 (soap)", "一块香皂"),
    ("牙", "yá", "Tooth", "牙齿 (tooth)、牙刷 (toothbrush)", "牙齿"),
    ("刷", "shuā", "Brush", "刷牙 (brush teeth)", "牙刷")
]
for d in data_4_2:
    new_content.append(row(*d))

# 4.3 穿衣与物品
new_content.append("\n### 4.3 穿衣与物品 (Clothing & Items)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_4_3 = [
    ("衣", "yī", "Clothes", "衣服 (clothes)、上衣 (jacket)", "一件T恤"),
    ("裙", "qún", "Skirt", "裙子 (skirt)、连衣裙 (dress)", "漂亮的裙子"),
    ("裤", "kù", "Pants", "裤子 (pants)、短裤 (shorts)", "长裤"),
    ("鞋", "xié", "Shoe", "鞋子 (shoe)、运动鞋 (sneakers)", "一只鞋"),
    ("帽", "mào", "Hat", "帽子 (hat)、草帽 (straw hat)", "戴帽子"),
    ("袜", "wà", "Sock", "袜子 (sock)", "长筒袜"),
    ("针", "zhēn", "Needle", "打针 (injection)、针线 (needle and thread)", "尖尖的针"),
    ("线", "xiàn", "Thread/Line", "毛线 (wool)、直线 (line)", "一卷线"),
    ("布", "bù", "Cloth", "布料 (cloth)、画布 (canvas)", "一块花布"),
    ("纽", "niǔ", "Button", "纽扣 (button)", "圆扣子"),
    ("扣", "kòu", "Button/Buckle", "扣子 (button)、扣好 (button up)", "扣上扣子"),
    ("袋", "dài", "Bag/Pocket", "口袋 (pocket)、袋子 (bag)", "塑料袋"),
    ("珠", "zhū", "Pearl/Bead", "珍珠 (pearl)、眼珠 (eyeball)", "圆圆的珠子"),
    ("宝", "bǎo", "Treasure", "宝贝 (treasure)、宝石 (gem)", "宝箱"),
    ("玉", "yù", "Jade", "玉石 (jade)、玉米 (corn)", "绿色的玉佩"),
    ("器", "qì", "Tool/Vessel", "机器 (machine)、乐器 (instrument)", "工具箱"),
    ("球", "qiú", "Ball", "气球 (balloon)、足球 (soccer)", "圆球"),
    ("绳", "shéng", "Rope", "绳子 (rope)、跳绳 (jump rope)", "打结的绳子"),
    ("棋", "qí", "Chess", "下棋 (play chess)、围棋 (Go)", "棋盘"),
    ("牌", "pái", "Card/Plate", "纸牌 (cards)、车牌 (license plate)", "扑克牌"),
    ("钟", "zhōng", "Clock", "时钟 (clock)、闹钟 (alarm)", "挂钟"),
    ("表", "biǎo", "Watch/Table", "手表 (watch)、表格 (table)", "戴在手上的表"),
    ("礼", "lǐ", "Gift/Manners", "礼物 (gift)、有礼貌 (polite)", "礼盒"),
    ("物", "wù", "Thing", "物品 (item)、动物 (animal)", "礼物")
]
for d in data_4_3:
    new_content.append(row(*d))

# 4.4 交通与城市
new_content.append("\n### 4.4 交通与城市 (Traffic & City)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_4_4 = [
    ("车", "chē", "Car", "汽车 (car)、火车 (train)", "小轿车"),
    ("船", "chuán", "Boat", "轮船 (ship)、小船 (boat)", "帆船"),
    ("飞", "fēi", "Fly", "飞机 (airplane)", "飞机"),
    ("机", "jī", "Machine", "机器 (machine)、手机 (mobile phone)", "机器人"),
    ("站", "zhàn", "Station", "车站 (station)、站台 (platform)", "公交站牌"),
    ("票", "piào", "Ticket", "车票 (ticket)、门票 (ticket)", "一张票"),
    ("路", "lù", "Road", "马路 (road)、走路 (walk)", "宽阔的马路"),
    ("街", "jiē", "Street", "大街 (street)、逛街 (shopping)", "热闹的街道"),
    ("桥", "qiáo", "Bridge", "大桥 (bridge)、天桥 (overpass)", "拱桥"),
    ("村", "cūn", "Village", "农村 (village)、村民 (villager)", "有炊烟的房子"),
    ("乡", "xiāng", "Countryside", "家乡 (hometown)、下乡 (go to countryside)", "田野"),
    ("市", "shì", "City/Market", "城市 (city)、超市 (supermarket)", "高楼大厦"),
    ("店", "diàn", "Shop", "商店 (shop)、书店 (bookstore)", "有招牌的店"),
    ("场", "chǎng", "Field/Place", "商场 (mall)、广场 (square)", "很大的场地"),
    ("园", "yuán", "Garden", "公园 (park)、花园 (garden)", "有花草的园子"),
    ("厂", "chǎng", "Factory", "工厂 (factory)", "冒烟的烟囱"),
    ("医", "yī", "Doctor", "医生 (doctor)、医院 (hospital)", "穿白大褂的人"),
    ("院", "yuàn", "Institution", "医院 (hospital)、法院 (court)", "红十字标志"),
    ("局", "jú", "Bureau", "邮局 (post office)、警察局 (police station)", "办公楼"),
    ("所", "suǒ", "Place", "厕所 (toilet)、派出所 (police station)", "房子"),
    ("馆", "guǎn", "Hall", "图书馆 (library)、饭馆 (restaurant)", "很大的建筑"),
    ("道", "dào", "Road/Way", "道路 (road)、知道 (know)", "小路"),
    ("巷", "xiàng", "Lane", "小巷 (lane)、巷子 (alley)", "窄窄的胡同")
]
for d in data_4_4:
    new_content.append(row(*d))

# 4.5 亲属与人物
new_content.append("\n### 4.5 亲属与人物 (People)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_4_5 = [
    ("哥", "gē", "Older Brother", "哥哥 (older brother)、大哥 (big brother)", "大男孩"),
    ("姐", "jiě", "Older Sister", "姐姐 (older sister)、大姐 (big sister)", "大女孩"),
    ("弟", "dì", "Younger Brother", "弟弟 (younger brother)、兄弟 (brothers)", "小男孩"),
    ("妹", "mèi", "Younger Sister", "妹妹 (younger sister)、姐妹 (sisters)", "扎辫子的小女孩"),
    ("伯", "bó", "Uncle", "伯伯 (uncle - father's elder brother)", "年纪大的叔叔"),
    ("叔", "shū", "Uncle", "叔叔 (uncle - father's younger brother)", "年轻的叔叔"),
    ("姨", "yí", "Aunt", "阿姨 (aunt)、姨妈 (aunt)", "年轻的阿姨"),
    ("婆", "pó", "Grandma", "外婆 (grandma)、老婆婆 (old lady)", "老奶奶"),
    ("公", "gōng", "Grandpa/Public", "外公 (grandpa)、公园 (park)", "老爷爷"),
    ("孩", "hái", "Child", "孩子 (child)、小孩 (kid)", "小朋友"),
    ("娃", "wá", "Baby/Doll", "娃娃 (doll)、女娃 (girl)", "洋娃娃"),
    ("伙", "huǒ", "Partner", "伙伴 (partner)、家伙 (guy)", "两个人"),
    ("伴", "bàn", "Companion", "同伴 (companion)、陪伴 (accompany)", "手拉手"),
    ("众", "zhòng", "Crowd", "群众 (crowd)、观众 (audience)", "三个人"),
    ("亲", "qīn", "Relative/Kiss", "亲人 (relative)、亲亲 (kiss)", "一家人"),
    ("戚", "qī", "Relative", "亲戚 (relative)", "拜访亲戚"),
    ("客", "kè", "Guest", "客人 (guest)、请客 (treat)", "敲门的客人"),
    ("主", "zhǔ", "Host/Main", "主人 (host)、公主 (princess)", "房子的主人")
]
for d in data_4_5:
    new_content.append(row(*d))

# 4.6 数量与单位
new_content.append("\n### 4.6 数量与单位 (Quantifiers)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_4_6 = [
    ("个", "gè", "Measure word", "一个 (one item)、个人 (individual)", "一个苹果"),
    ("只", "zhī", "Measure word", "一只鸟 (one bird)", "一只小鸟"),
    ("把", "bǎ", "Measure word", "一把刀 (one knife)、把手 (handle)", "一把伞"),
    ("头", "tóu", "Head/Measure word", "一头牛 (one cow)、头发 (hair)", "牛头"),
    ("条", "tiáo", "Measure word", "一条鱼 (one fish)、面条 (noodle)", "长长的线"),
    ("张", "zhāng", "Measure word", "一张纸 (one paper)、张开 (open)", "一张画"),
    ("块", "kuài", "Piece", "一块糖 (one candy)、方块 (block)", "积木块"),
    ("颗", "kē", "Grain", "一颗星 (one star)、颗粒 (grain)", "星星"),
    ("棵", "kē", "Measure word", "一棵树 (one tree)", "树"),
    ("支", "zhī", "Measure word", "一支笔 (one pen)", "笔"),
    ("串", "chuàn", "String", "一串葡萄 (bunch of grapes)、羊肉串 (kebab)", "糖葫芦"),
    ("群", "qún", "Group", "一群羊 (flock of sheep)、人群 (crowd)", "好多羊"),
    ("双", "shuāng", "Pair", "一双鞋 (pair of shoes)", "两只手"),
    ("对", "duì", "Pair", "一对 (pair)、对方 (opponent)", "鸳鸯"),
    ("些", "xiē", "Some", "一些 (some)、这些 (these)", "一堆豆子"),
    ("点", "diǎn", "Dot/O'clock", "一点 (a little)、几点 (what time)", "小圆点"),
    ("分", "fēn", "Cent/Minute", "一分钱 (one cent)、分数 (score)", "硬币"),
    ("角", "jiǎo", "Corner/Horn", "三角形 (triangle)、牛角 (horn)", "墙角"),
    ("元", "yuán", "Yuan/First", "一元钱 (one yuan)、元旦 (New Year's Day)", "钱币"),
    ("次", "cì", "Time", "一次 (once)、名次 (ranking)", "第一名"),
    ("遍", "biàn", "Time", "一遍 (one time)、遍地 (everywhere)", "重做一次")
]
for d in data_4_6:
    new_content.append(row(*d))

# --- Level 5: 进阶期 ---
new_content.append("\n## Level 5: 进阶期 (约120字)")
new_content.append("> 核心目标：完善抽象概念，学习虚词、情感及逻辑。\n")

# 5.1 心理与情感
new_content.append("### 5.1 心理与情感 (Emotions)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_5_1 = [
    ("爱", "ài", "Love", "爱你 (love you)、可爱 (cute)", "爱心"),
    ("喜", "xǐ", "Like/Happy", "喜欢 (like)、欢喜 (joy)", "笑脸"),
    ("乐", "lè", "Happy", "快乐 (happy)、可乐 (cola)", "大笑"),
    ("欢", "huān", "Happy", "欢笑 (laugh)、欢迎 (welcome)", "拍手笑"),
    ("怕", "pà", "Fear", "害怕 (afraid)、可怕 (scary)", "发抖"),
    ("惊", "jīng", "Surprise", "吃惊 (surprised)、惊喜 (surprise)", "张大嘴"),
    ("奇", "qí", "Strange", "奇怪 (strange)、好奇 (curious)", "问号"),
    ("忘", "wàng", "Forget", "忘记 (forget)、难忘 (unforgettable)", "挠头想不起来"),
    ("想", "xiǎng", "Think/Miss", "想念 (miss)、想要 (want)", "脑子里的气泡"),
    ("念", "niàn", "Read/Miss", "思念 (miss)、读书 (read)", "想家"),
    ("怒", "nù", "Angry", "发怒 (angry)、愤怒 (furious)", "生气的脸"),
    ("悲", "bēi", "Sad", "悲伤 (sad)、慈悲 (mercy)", "流泪"),
    ("愁", "chóu", "Worry", "发愁 (worry)、忧愁 (sorrow)", "皱眉"),
    ("愿", "yuàn", "Wish", "愿意 (willing)、心愿 (wish)", "许愿"),
    ("意", "yì", "Meaning", "意思 (meaning)、同意 (agree)", "点点头"),
    ("敢", "gǎn", "Dare", "勇敢 (brave)、不敢 (dare not)", "超人"),
    ("望", "wàng", "Hope/Gaze", "希望 (hope)、失望 (disappointed)", "看着远方"),
    ("恐", "kǒng", "Fear", "恐龙 (dinosaur)、恐怖 (horror)", "吓人的鬼脸"),
    ("慌", "huāng", "Panic", "惊慌 (panic)、慌张 (flustered)", "乱跑"),
    ("悔", "huǐ", "Regret", "后悔 (regret)", "低头叹气"),
    ("恨", "hèn", "Hate", "痛恨 (hate)", "咬牙切齿"),
    ("惜", "xī", "Cherish", "可惜 (pity)、爱惜 (cherish)", "捧在手心"),
    ("恋", "liàn", "Love", "留恋 (reluctant to leave)", "依依不舍"),
    ("情", "qíng", "Feeling", "心情 (mood)、事情 (matter)", "心"),
    ("感", "gǎn", "Feel", "感动 (moved)、感觉 (feeling)", "流泪"),
    ("觉", "jué", "Feel", "觉得 (feel)、睡觉 (sleep - jiào)", "摸脑袋")
]
for d in data_5_1:
    new_content.append(row(*d))

# 5.2 疑问与语气
new_content.append("\n### 5.2 疑问与语气 (Questions & Tone)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_5_2 = [
    ("怎", "zěn", "How", "怎么 (how)、怎样 (how)", "摊手"),
    ("什", "shén", "What", "什么 (what)", "问号"),
    ("么", "me", "Suffix", "什么 (what)、怎么 (how)", "问号"),
    ("呢", "ne", "Particle", "你呢 (and you?)", "指向对方"),
    ("吧", "ba", "Particle", "走吧 (let's go)、好吧 (okay)", "挥手"),
    ("吗", "ma", "Particle", "好吗 (okay?)、是吗 (really?)", "问号"),
    ("呀", "ya", "Particle", "来呀 (come on)、好呀 (great)", "感叹号"),
    ("哪", "nǎ", "Where", "哪里 (where)、哪个 (which)", "地图上的定位"),
    ("谁", "shéi", "Who", "是谁 (who is it)", "指着人影"),
    ("几", "jǐ", "How many", "几个 (how many)、几岁 (how old)", "数数"),
    ("许", "xǔ", "Allow/Maybe", "许多 (many)、也许 (maybe)", "点头许可"),
    ("可", "kě", "Can", "可以 (can)、可爱 (cute)", "OK手势"),
    ("乎", "hū", "Particle", "似乎 (seem)、在乎 (care)", "思考"),
    ("哉", "zāi", "Particle", "善哉 (good)", "古人摇头晃脑"),
    ("矣", "yǐ", "Particle", "已矣 (over)", "句号")
]
for d in data_5_2:
    new_content.append(row(*d))

# 5.3 逻辑与介词
new_content.append("\n### 5.3 逻辑与介词 (Logic & Prepositions)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_5_3 = [
    ("和", "hé", "And", "我和你 (me and you)、和平 (peace)", "握手"),
    ("跟", "gēn", "With/Follow", "跟着 (follow)、脚后跟 (heel)", "脚印"),
    ("比", "bǐ", "Compare", "比较 (compare)、比赛 (match)", "天平"),
    ("很", "hěn", "Very", "很好 (very good)、很多 (many)", "大拇指"),
    ("最", "zuì", "Most", "最好 (best)、最后 (last)", "奖杯"),
    ("更", "gèng", "More", "更好 (better)、更多 (more)", "向上的箭头"),
    ("真", "zhēn", "Real", "真心 (sincere)、真正 (real)", "真心"),
    ("因", "yīn", "Because", "因为 (because)、原因 (reason)", "灯泡亮了"),
    ("为", "wèi", "For", "为了 (for)、为什么 (why)", "礼物送给你"),
    ("所", "suǒ", "Therefore/Place", "所以 (therefore)、所有 (all)", "总结"),
    ("以", "yǐ", "By/So", "以为 (thought)、可以 (can)", "思考"),
    ("但", "dàn", "But", "但是 (but)", "转折箭头"),
    ("却", "què", "But", "退却 (retreat)、忘却 (forget)", "后退"),
    ("把", "bǎ", "Particle", "把手 (handle)、把门关上 (close door)", "手拿东西"),
    ("被", "bèi", "By/Quilt", "被子 (quilt)、被打 (hit by)", "盖被子"),
    ("给", "gěi", "Give", "给你 (give you)、送给 (give)", "递礼物"),
    ("对", "duì", "To/Correct", "对面 (opposite)、不对 (wrong)", "面对面"),
    ("从", "cóng", "From", "从前 (before)、跟从 (follow)", "起点"),
    ("向", "xiàng", "Towards", "方向 (direction)、向前 (forward)", "指南针"),
    ("往", "wǎng", "Towards", "来往 (come and go)、往常 (usually)", "双向箭头"),
    ("在", "zài", "At", "在家 (at home)、正在 (doing)", "定位图标"),
    ("当", "dāng", "When/Serve as", "当时 (at that time)、当心 (careful)", "时钟"),
    ("共", "gòng", "Together", "共同 (together)、一共 (total)", "大家手拉手")
]
for d in data_5_3:
    new_content.append(row(*d))

# 5.4 抽象名词与状态
new_content.append("\n### 5.4 抽象名词与状态 (Abstract Nouns)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_5_4 = [
    ("名", "míng", "Name", "名字 (name)、有名 (famous)", "名牌"),
    ("姓", "xìng", "Surname", "姓名 (full name)、百姓 (common people)", "百家姓"),
    ("梦", "mèng", "Dream", "做梦 (dream)、梦想 (dream)", "睡觉时的气泡"),
    ("命", "mìng", "Life", "生命 (life)、救命 (help)", "心跳"),
    ("运", "yùn", "Luck/Move", "运气 (luck)、运动 (sport)", "四叶草"),
    ("力", "lì", "Power", "力量 (power)、用力 (exert force)", "肌肉"),
    ("气", "qì", "Air/Gas", "生气 (angry)、气球 (balloon)", "打气筒"),
    ("办", "bàn", "Do", "办法 (method)、办公 (work)", "灯泡"),
    ("法", "fǎ", "Method/Law", "方法 (method)、魔法 (magic)", "魔杖"),
    ("主", "zhǔ", "Main/Master", "主要 (main)、公主 (princess)", "皇冠"),
    ("意", "yì", "Idea", "主意 (idea)、意思 (meaning)", "脑子亮了"),
    ("消", "xiāo", "Disappear", "消失 (disappear)、消息 (news)", "变没了"),
    ("息", "xī", "Rest/Breath", "休息 (rest)、叹息 (sigh)", "睡觉"),
    ("原", "yuán", "Original", "原来 (originally)、草原 (grassland)", "起点"),
    ("因", "yīn", "Reason", "因为 (because)", "问号"),
    ("结", "jié", "Knot/Result", "结束 (end)、打结 (knot)", "绳结"),
    ("果", "guǒ", "Result/Fruit", "结果 (result)、果实 (fruit)", "苹果"),
    ("始", "shǐ", "Start", "开始 (start)", "起跑线"),
    ("终", "zhōng", "End", "终于 (finally)、终点 (finish line)", "终点线")
]
for d in data_5_4:
    new_content.append(row(*d))

# 5.5 常用姓氏
new_content.append("\n### 5.5 常用姓氏 (Common Surnames)\n")
new_content.append("| 字 | 拼音 | 英文 | 亲子造词 (Compound Words) | 配图/动画创意 (Image Idea) |")
new_content.append("| :--- | :--- | :--- | :--- | :--- |")
data_5_5 = [
    ("赵", "zhào", "Zhao", "赵国 (Zhao State)", "古代旗帜"),
    ("钱", "qián", "Qian/Money", "钱币 (money)、钱包 (wallet)", "金币"),
    ("孙", "sūn", "Sun/Grandchild", "孙子 (grandson)、孙悟空 (Monkey King)", "小男孩"),
    ("李", "lǐ", "Li/Plum", "李子 (plum)、行李 (luggage)", "李子树"),
    ("周", "zhōu", "Zhou/Week", "周围 (surrounding)、周末 (weekend)", "圆圈"),
    ("吴", "wú", "Wu", "东吴 (Wu Kingdom)", "古代士兵"),
    ("郑", "zhèng", "Zheng", "郑重 (serious)", "严肃的脸"),
    ("王", "wáng", "Wang/King", "国王 (king)、王子 (prince)", "皇冠"),
    ("冯", "féng", "Feng", "冯河 (wade across river)", "马在跑"),
    ("陈", "chén", "Chen", "陈旧 (old)", "旧书"),
    ("褚", "chǔ", "Chu", "褚衣 (cotton clothes)", "衣服"),
    ("卫", "wèi", "Wei/Guard", "卫生 (hygiene)、保卫 (defend)", "盾牌"),
    ("蒋", "jiǎng", "Jiang", "奖状 (certificate - sound alike)", "奖状"),
    ("沈", "shěn", "Shen", "沈阳 (Shenyang)", "地名"),
    ("韩", "hán", "Han", "韩国 (Korea)", "国旗"),
    ("杨", "yáng", "Yang/Poplar", "杨树 (poplar tree)", "杨树"),
    ("朱", "zhū", "Zhu/Vermilion", "朱红 (vermilion)", "红色"),
    ("秦", "qín", "Qin", "秦国 (Qin Dynasty)", "兵马俑"),
    ("尤", "yóu", "You", "尤其是 (especially)", "特别"),
    ("许", "xǔ", "Xu/Allow", "许多 (many)、许可 (permit)", "点头"),
    ("何", "hé", "He/What", "为何 (why)、几何 (geometry)", "问号"),
    ("吕", "lǚ", "Lv", "吕布 (Lv Bu)", "古代将军"),
    ("施", "shī", "Shi/Give", "施舍 (give alms)、施工 (construction)", "给东西"),
    ("张", "zhāng", "Zhang/Open", "张开 (open)、一张纸 (a paper)", "张嘴"),
    ("孔", "kǒng", "Kong/Hole", "孔雀 (peacock)、孔子 (Confucius)", "孔雀开屏"),
    ("曹", "cáo", "Cao", "曹操 (Cao Cao)", "古代丞相"),
    ("严", "yán", "Yan/Strict", "严重 (serious)、严格 (strict)", "严肃"),
    ("华", "huá", "Hua/Flower", "中华 (China)、华丽 (magnificent)", "华表")
]
for d in data_5_5:
    new_content.append(row(*d))


full_text = content + "\n".join(new_content)

with open(file_path, 'w') as f:
    f.write(full_text)

print(f"Added {len(new_content)} lines of content.")
