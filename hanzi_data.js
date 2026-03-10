const hanziData = [
  {
    "char": "一",
    "pinyin": "yī",
    "english": "One",
    "words": "一个 (one item)、第一 (first)",
    "idea": "一根手指，或者一根横放的骨头",
    "emoji": "☝️",
    "hasSpecialCSS": true,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "二",
    "pinyin": "èr",
    "english": "Two",
    "words": "二月 (February)、独一无二 (unique)",
    "idea": "两只鸭子游水，或者两根筷子",
    "emoji": "✌️",
    "hasSpecialCSS": true,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "三",
    "pinyin": "sān",
    "english": "Three",
    "words": "三天 (three days)、三角形 (triangle)",
    "idea": "三只小猪，或者汉堡包的三层",
    "emoji": "👌",
    "hasSpecialCSS": true,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "四",
    "pinyin": "sì",
    "english": "Four",
    "words": "四季 (four seasons)、四方 (square)",
    "idea": "窗户的四个角，或者汽车的四个轮子",
    "emoji": "🍀",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "五",
    "pinyin": "wǔ",
    "english": "Five",
    "words": "五星 (five stars)、五颜六色 (colorful)",
    "idea": "一只手张开五指",
    "emoji": "🖐️",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "六",
    "pinyin": "liù",
    "english": "Six",
    "words": "六个 (six items)、星期六 (Saturday)",
    "idea": "电话听筒的手势（大拇指和小指伸出）",
    "emoji": "🤙",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "七",
    "pinyin": "qī",
    "english": "Seven",
    "words": "七天 (seven days)、七彩 (rainbow colors)",
    "idea": "拐杖的形状，或者七星瓢虫",
    "emoji": "🐞",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "八",
    "pinyin": "bā",
    "english": "Eight",
    "words": "八爪鱼 (octopus)、八个 (eight items)",
    "idea": "八字胡须，或者西瓜切开的两瓣",
    "emoji": "🐙",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "九",
    "pinyin": "jiǔ",
    "english": "Nine",
    "words": "九月 (September)、九个 (nine items)",
    "idea": "像个钩子，或者蝌蚪游动的样子",
    "emoji": "🎣",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "十",
    "pinyin": "shí",
    "english": "Ten",
    "words": "十个 (ten items)、十字路口 (crossroads)",
    "idea": "救护车上的红十字，或者双手交叉",
    "emoji": "➕",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "上",
    "pinyin": "shàng",
    "english": "Up / On",
    "words": "上去 (go up)、上面 (on top)",
    "idea": "手指指向天空，或者小猫跳**上**桌子",
    "emoji": "⬆️",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "下",
    "pinyin": "xià",
    "english": "Down / Under",
    "words": "下来 (come down)、下面 (under)",
    "idea": "手指指向地面，或者雨滴落**下**",
    "emoji": "⬇️",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "日",
    "pinyin": "rì",
    "english": "Sun / Day",
    "words": "日出 (sunrise)、节日 (holiday)",
    "idea": "圆圆的太阳，中间有一点光芒",
    "emoji": "☀️",
    "hasSpecialCSS": true,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "月",
    "pinyin": "yuè",
    "english": "Moon / Month",
    "words": "月亮 (moon)、月饼 (mooncake)",
    "idea": "弯弯的月牙，或者像香蕉的形状",
    "emoji": "🌙",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "水",
    "pinyin": "shuǐ",
    "english": "Water",
    "words": "喝水 (drink water)、水果 (fruit)",
    "idea": "流动的波浪线，或者瀑布流下的样子",
    "emoji": "💧",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "火",
    "pinyin": "huǒ",
    "english": "Fire",
    "words": "着火 (on fire)、火车 (train)",
    "idea": "燃烧的火焰，或者篝火",
    "emoji": "🔥",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "山",
    "pinyin": "shān",
    "english": "Mountain",
    "words": "爬山 (climb mountain)、火山 (volcano)",
    "idea": "三座连绵的山峰，中间高两边低",
    "emoji": "⛰️",
    "hasSpecialCSS": true,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "石",
    "pinyin": "shí",
    "english": "Stone",
    "words": "石头 (stone)、宝石 (gem)",
    "idea": "悬崖下掉落的一块大石头",
    "emoji": "🪨",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "田",
    "pinyin": "tián",
    "english": "Field",
    "words": "种田 (farming)、田地 (field)",
    "idea": "分割整齐的农田格子",
    "emoji": "🌾",
    "hasSpecialCSS": true,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "禾",
    "pinyin": "hé",
    "english": "Grain",
    "words": "禾苗 (seedling)",
    "idea": "田里长出的一棵弯着腰的稻谷",
    "emoji": "🌾",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "土",
    "pinyin": "tǔ",
    "english": "Soil / Earth",
    "words": "泥土 (mud)、土地 (land)",
    "idea": "地面上冒出的一棵小嫩芽",
    "emoji": "🌱",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "木",
    "pinyin": "mù",
    "english": "Wood / Tree",
    "words": "木头 (wood)、积木 (blocks)",
    "idea": "一棵树的形状，有树干和树枝",
    "emoji": "🪵",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "人",
    "pinyin": "rén",
    "english": "Person",
    "words": "大人 (adult)、好人 (good person)",
    "idea": "侧面站立正在走路的人",
    "emoji": "🧍",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "口",
    "pinyin": "kǒu",
    "english": "Mouth",
    "words": "张口 (open mouth)、口水 (saliva)",
    "idea": "张大的嘴巴形状",
    "emoji": "👄",
    "hasSpecialCSS": true,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "耳",
    "pinyin": "ěr",
    "english": "Ear",
    "words": "耳朵 (ear)、耳机 (headphones)",
    "idea": "耳廓的形状",
    "emoji": "👂",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "目",
    "pinyin": "mù",
    "english": "Eye",
    "words": "目光 (gaze)、耳聪目明 (sharp ears and eyes)",
    "idea": "横着的眼睛，中间有眼珠",
    "emoji": "👁️",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "手",
    "pinyin": "shǒu",
    "english": "Hand",
    "words": "小手 (little hand)、拍手 (clap)",
    "idea": "张开的手掌，能看到五指",
    "emoji": "✋",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "足",
    "pinyin": "zú",
    "english": "Foot",
    "words": "足球 (soccer)、手足 (siblings/hands and feet)",
    "idea": "正在踢球的一只脚",
    "emoji": "🦶",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "身",
    "pinyin": "shēn",
    "english": "Body",
    "words": "身体 (body)、转身 (turn around)",
    "idea": "一个大肚子的人侧面像",
    "emoji": "🧍",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "心",
    "pinyin": "xīn",
    "english": "Heart",
    "words": "开心 (happy)、爱心 (love heart)",
    "idea": "红色的爱心形状",
    "emoji": "❤️",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "头",
    "pinyin": "tóu",
    "english": "Head",
    "words": "头发 (hair)、点头 (nod)",
    "idea": "一个大大的脑袋，上面有头发",
    "emoji": "🐮",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "牙",
    "pinyin": "yá",
    "english": "Tooth",
    "words": "刷牙 (brush teeth)、牙齿 (teeth)",
    "idea": "上下两排咬合的牙齿",
    "emoji": "🦷",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "你",
    "pinyin": "nǐ",
    "english": "You",
    "words": "你们 (you plural)、你好 (hello)",
    "idea": "手指指向对方（屏幕外的小朋友）",
    "emoji": "👉",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "我",
    "pinyin": "wǒ",
    "english": "Me / I",
    "words": "我们 (us)、我家 (my home)",
    "idea": "手拍自己的胸口",
    "emoji": "🙋",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "他",
    "pinyin": "tā",
    "english": "He",
    "words": "他们 (they)、他人 (others)",
    "idea": "手指指向旁边的一个小男孩",
    "emoji": "👉",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "她",
    "pinyin": "tā",
    "english": "She",
    "words": "她们 (they - female)、她家 (her home)",
    "idea": "手指指向旁边的一个小女孩",
    "emoji": "👉",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "爸",
    "pinyin": "bà",
    "english": "Dad",
    "words": "爸爸 (dad)、老爸 (daddy)",
    "idea": "一个戴眼镜或者留胡子的男士形象",
    "emoji": "👨",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "妈",
    "pinyin": "mā",
    "english": "Mom",
    "words": "妈妈 (mom)、妈妈咪呀 (mamma mia)",
    "idea": "一个长发温柔的女士形象",
    "emoji": "👩",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "爷",
    "pinyin": "yé",
    "english": "Grandpa",
    "words": "爷爷 (grandpa)、大爷 (uncle)",
    "idea": "拄着拐杖、有白胡子的老爷爷",
    "emoji": "👴",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "奶",
    "pinyin": "nǎi",
    "english": "Grandma / Milk",
    "words": "奶奶 (grandma)、牛奶 (milk)",
    "idea": "戴老花镜、慈祥的老奶奶",
    "emoji": "👵",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "宝",
    "pinyin": "bǎo",
    "english": "Baby / Treasure",
    "words": "宝贝 (baby)、宝宝 (baby)",
    "idea": "一个包在襁褓里的婴儿，或者一个宝箱",
    "emoji": "💎",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "贝",
    "pinyin": "bèi",
    "english": "Shell",
    "words": "贝壳 (shell)、宝贝 (treasure)",
    "idea": "海滩上漂亮的贝壳",
    "emoji": "🐚",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "大",
    "pinyin": "dà",
    "english": "Big",
    "words": "大象 (elephant)、大人 (adult)",
    "idea": "一个张开双臂双腿的人，显得很大",
    "emoji": "🐘",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "小",
    "pinyin": "xiǎo",
    "english": "Small",
    "words": "小鸟 (bird)、小朋友 (kid)",
    "idea": "一个人缩着手像企鹅一样，显得很小",
    "emoji": "🐜",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "多",
    "pinyin": "duō",
    "english": "Many",
    "words": "很多 (many)、多少 (how many)",
    "idea": "两个“夕”叠在一起，画很多苹果",
    "emoji": "🍎",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "少",
    "pinyin": "shǎo",
    "english": "Few",
    "words": "很少 (few)、多少 (how much)",
    "idea": "盘子里只有一个苹果",
    "emoji": "🍏",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "左",
    "pinyin": "zuǒ",
    "english": "Left",
    "words": "左手 (left hand)、左边 (left side)",
    "idea": "左手拿着工字具（辅助记忆）",
    "emoji": "👈",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "右",
    "pinyin": "yòu",
    "english": "Right",
    "words": "右手 (right hand)、右边 (right side)",
    "idea": "右手拿着口（吃饭的手）",
    "emoji": "👉",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "男",
    "pinyin": "nán",
    "english": "Male",
    "words": "男生 (boy)、男人 (man)",
    "idea": "田里出力的劳动力，或者画一个小男孩符号",
    "emoji": "🚹",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "女",
    "pinyin": "nǚ",
    "english": "Female",
    "words": "女生 (girl)、女儿 (daughter)",
    "idea": "跪坐淑女的象形，或者画一个小女孩符号",
    "emoji": "🚺",
    "hasSpecialCSS": false,
    "level": "Level 1: 萌芽期 (50字)"
  },
  {
    "char": "红",
    "pinyin": "hóng",
    "english": "Red",
    "words": "红色 (red)、红花 (red flower)",
    "idea": "红色的苹果、消防车",
    "emoji": "🔴",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "黄",
    "pinyin": "huáng",
    "english": "Yellow",
    "words": "黄色 (yellow)、黄瓜 (cucumber)",
    "idea": "黄色的香蕉、柠檬",
    "emoji": "🟡",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "蓝",
    "pinyin": "lán",
    "english": "Blue",
    "words": "蓝天 (blue sky)、蓝色 (blue)",
    "idea": "蓝色的大海、蓝莓",
    "emoji": "🔵",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "绿",
    "pinyin": "lǜ",
    "english": "Green",
    "words": "绿草 (green grass)、绿色 (green)",
    "idea": "绿色的树叶、青蛙",
    "emoji": "🟢",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "白",
    "pinyin": "bái",
    "english": "White",
    "words": "白云 (white cloud)、白天 (daytime)",
    "idea": "白色的雪人、棉花",
    "emoji": "⚪",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "黑",
    "pinyin": "hēi",
    "english": "Black",
    "words": "黑色 (black)、黑夜 (night)",
    "idea": "黑色的乌鸦、煤炭",
    "emoji": "⚫",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "金",
    "pinyin": "jīn",
    "english": "Gold",
    "words": "金鱼 (goldfish)、金色 (gold)",
    "idea": "闪闪发光的金币",
    "emoji": "🪙",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "紫",
    "pinyin": "zǐ",
    "english": "Purple",
    "words": "紫色 (purple)、紫菜 (seaweed)",
    "idea": "紫色的葡萄、茄子",
    "emoji": "🟣",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 缤纷色彩)"
  },
  {
    "char": "马",
    "pinyin": "mǎ",
    "english": "Horse",
    "words": "骑马 (ride horse)、木马 (wooden horse)",
    "idea": "奔跑的马，鬃毛飞扬",
    "emoji": "🐎",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "牛",
    "pinyin": "niú",
    "english": "Cow",
    "words": "牛奶 (milk)、小牛 (calf)",
    "idea": "有两只弯角的牛头",
    "emoji": "🐄",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "羊",
    "pinyin": "yáng",
    "english": "Sheep",
    "words": "绵羊 (sheep)、山羊 (goat)",
    "idea": "两个羊角，卷卷的毛",
    "emoji": "🐑",
    "hasSpecialCSS": true,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鸟",
    "pinyin": "niǎo",
    "english": "Bird",
    "words": "小鸟 (bird)、飞鸟 (flying bird)",
    "idea": "站在树枝上的小鸟，有眼睛和羽毛",
    "emoji": "🐦",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "虫",
    "pinyin": "chóng",
    "english": "Worm / Insect",
    "words": "虫子 (worm)、毛毛虫 (caterpillar)",
    "idea": "一条扭动的毛毛虫",
    "emoji": "🐛",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鱼",
    "pinyin": "yú",
    "english": "Fish",
    "words": "金鱼 (goldfish)、钓鱼 (fishing)",
    "idea": "游动的鱼，有鳞片和尾巴",
    "emoji": "🐟",
    "hasSpecialCSS": true,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "橙",
    "pinyin": "chéng",
    "english": "Orange",
    "words": "橙子 (orange)、橙色 (orange color)",
    "idea": "切开的橙子",
    "emoji": "🟠",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "青",
    "pinyin": "qīng",
    "english": "Green/Cyan",
    "words": "青草 (green grass)、青蛙 (frog)",
    "idea": "青青的草地",
    "emoji": "🟢",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "彩",
    "pinyin": "cǎi",
    "english": "Colorful",
    "words": "彩虹 (rainbow)、彩色 (colorful)",
    "idea": "五颜六色的彩虹",
    "emoji": "🌈",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "色",
    "pinyin": "sè",
    "english": "Color",
    "words": "颜色 (color)、红色 (red color)",
    "idea": "调色盘",
    "emoji": "🎨",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "亮",
    "pinyin": "liàng",
    "english": "Bright",
    "words": "亮晶晶 (sparkling)、月亮 (moon)",
    "idea": "发光的灯泡",
    "emoji": "💡",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "暗",
    "pinyin": "àn",
    "english": "Dark",
    "words": "黑暗 (dark)、暗处 (dark place)",
    "idea": "关灯后的房间",
    "emoji": "🌑",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "光",
    "pinyin": "guāng",
    "english": "Light",
    "words": "阳光 (sunlight)、灯光 (light)",
    "idea": "太阳发出的光芒",
    "emoji": "✨",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "影",
    "pinyin": "yǐng",
    "english": "Shadow",
    "words": "影子 (shadow)、电影 (movie)",
    "idea": "人在太阳下的影子",
    "emoji": "👤",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "闪",
    "pinyin": "shǎn",
    "english": "Flash",
    "words": "闪电 (lightning)、闪亮 (shiny)",
    "idea": "天空中的闪电",
    "emoji": "⚡",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "狗",
    "pinyin": "gǒu",
    "english": "Dog",
    "words": "小狗 (puppy)、热狗 (hotdog)",
    "idea": "摇尾巴的小狗",
    "emoji": "🐶",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "猫",
    "pinyin": "māo",
    "english": "Cat",
    "words": "小猫 (kitten)、熊猫 (panda)",
    "idea": "有胡须的小猫脸",
    "emoji": "🐱",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鸡",
    "pinyin": "jī",
    "english": "Chicken",
    "words": "母鸡 (hen)、鸡蛋 (egg)",
    "idea": "正在啄米的公鸡",
    "emoji": "🐔",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鸭",
    "pinyin": "yā",
    "english": "Duck",
    "words": "鸭子 (duck)、烤鸭 (roast duck)",
    "idea": "游水的鸭子",
    "emoji": "🦆",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鹅",
    "pinyin": "é",
    "english": "Goose",
    "words": "白鹅 (white goose)、天鹅 (swan)",
    "idea": "曲项向天歌的白鹅",
    "emoji": "🦢",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "兔",
    "pinyin": "tù",
    "english": "Rabbit",
    "words": "兔子 (rabbit)、白兔 (white rabbit)",
    "idea": "长耳朵的兔子",
    "emoji": "🐇",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "猪",
    "pinyin": "zhū",
    "english": "Pig",
    "words": "小猪 (piggy)、肥猪 (fat pig)",
    "idea": "圆鼻子的猪头",
    "emoji": "🐖",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鼠",
    "pinyin": "shǔ",
    "english": "Mouse",
    "words": "老鼠 (mouse)、松鼠 (squirrel)",
    "idea": "尖嘴巴的老鼠",
    "emoji": "🐁",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "虎",
    "pinyin": "hǔ",
    "english": "Tiger",
    "words": "老虎 (tiger)、虎头 (tiger head)",
    "idea": "头上有“王”字的老虎",
    "emoji": "🐅",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "龙",
    "pinyin": "lóng",
    "english": "Dragon",
    "words": "恐龙 (dinosaur)、龙舟 (dragon boat)",
    "idea": "长长的中国龙",
    "emoji": "🐉",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "猴",
    "pinyin": "hóu",
    "english": "Monkey",
    "words": "猴子 (monkey)、孙猴子 (Monkey King)",
    "idea": "挠头的猴子",
    "emoji": "🐒",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "象",
    "pinyin": "xiàng",
    "english": "Elephant",
    "words": "大象 (elephant)、象牙 (ivory)",
    "idea": "长鼻子的大象",
    "emoji": "🐘",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "蛙",
    "pinyin": "wā",
    "english": "Frog",
    "words": "青蛙 (frog)、牛蛙 (bullfrog)",
    "idea": "荷叶上的青蛙",
    "emoji": "🐸",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鸦",
    "pinyin": "yā",
    "english": "Crow",
    "words": "乌鸦 (crow)",
    "idea": "黑色的鸟",
    "emoji": "🐦‍⬛",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "蜻",
    "pinyin": "qīng",
    "english": "Dragonfly",
    "words": "蜻蜓 (dragonfly)",
    "idea": "蜻蜓点水",
    "emoji": "🚁",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "蜓",
    "pinyin": "tíng",
    "english": "Dragonfly",
    "words": "蜻蜓 (dragonfly)",
    "idea": "长尾巴的昆虫",
    "emoji": "🚁",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "蚂",
    "pinyin": "mǎ",
    "english": "Ant",
    "words": "蚂蚁 (ant)",
    "idea": "搬东西的小蚂蚁",
    "emoji": "🐜",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "蚁",
    "pinyin": "yǐ",
    "english": "Ant",
    "words": "蚂蚁 (ant)、工蚁 (worker ant)",
    "idea": "排队的蚂蚁",
    "emoji": "🐜",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "蜘",
    "pinyin": "zhī",
    "english": "Spider",
    "words": "蜘蛛 (spider)",
    "idea": "织网的虫子",
    "emoji": "🕷️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "蛛",
    "pinyin": "zhū",
    "english": "Spider",
    "words": "蜘蛛网 (spider web)",
    "idea": "八条腿的虫子",
    "emoji": "🕸️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "熊",
    "pinyin": "xióng",
    "english": "Bear",
    "words": "熊猫 (panda)、狗熊 (bear)",
    "idea": "笨笨的黑熊",
    "emoji": "🐻",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "鹿",
    "pinyin": "lù",
    "english": "Deer",
    "words": "长颈鹿 (giraffe)、梅花鹿 (deer)",
    "idea": "有角的鹿",
    "emoji": "🦌",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "狼",
    "pinyin": "láng",
    "english": "Wolf",
    "words": "大灰狼 (big bad wolf)",
    "idea": "对着月亮叫的狼",
    "emoji": "🐺",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "贝",
    "pinyin": "bèi",
    "english": "Shell",
    "words": "贝壳 (shell)",
    "idea": "海边的贝壳",
    "emoji": "🐚",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "壳",
    "pinyin": "ké",
    "english": "Shell",
    "words": "蛋壳 (eggshell)、外壳 (shell)",
    "idea": "破开的鸡蛋壳",
    "emoji": "🥚",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "翅",
    "pinyin": "chì",
    "english": "Wing",
    "words": "翅膀 (wing)、鸡翅 (chicken wing)",
    "idea": "鸟的翅膀",
    "emoji": "🕊️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "膀",
    "pinyin": "bǎng",
    "english": "Wing/Shoulder",
    "words": "翅膀 (wing)、肩膀 (shoulder)",
    "idea": "飞翔的姿态",
    "emoji": "💪",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "尾",
    "pinyin": "wěi",
    "english": "Tail",
    "words": "尾巴 (tail)、结尾 (end)",
    "idea": "猴子的长尾巴",
    "emoji": "🐒",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "巴",
    "pinyin": "bā",
    "english": "Tail/Bar",
    "words": "尾巴 (tail)、巴士 (bus)",
    "idea": "卷卷的尾巴",
    "emoji": "🚌",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "花",
    "pinyin": "huā",
    "english": "Flower",
    "words": "花朵 (flower)、开花 (bloom)",
    "idea": "一朵盛开的红花",
    "emoji": "🌺",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "草",
    "pinyin": "cǎo",
    "english": "Grass",
    "words": "小草 (grass)、草地 (lawn)",
    "idea": "地上的三棵小草",
    "emoji": "🌿",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "树",
    "pinyin": "shù",
    "english": "Tree",
    "words": "大树 (tree)、树林 (woods)",
    "idea": "一棵茂盛的大树",
    "emoji": "🌳",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "叶",
    "pinyin": "yè",
    "english": "Leaf",
    "words": "树叶 (leaf)、茶叶 (tea leaf)",
    "idea": "一片绿色的叶子",
    "emoji": "🍃",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "果",
    "pinyin": "guǒ",
    "english": "Fruit",
    "words": "水果 (fruit)、苹果 (apple)",
    "idea": "树上结的果子",
    "emoji": "🍎",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "瓜",
    "pinyin": "guā",
    "english": "Melon",
    "words": "西瓜 (watermelon)、南瓜 (pumpkin)",
    "idea": "圆圆的西瓜",
    "emoji": "🍉",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "豆",
    "pinyin": "dòu",
    "english": "Bean",
    "words": "豆子 (bean)、土豆 (potato)",
    "idea": "豆荚里的豆子",
    "emoji": "🫘",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "林",
    "pinyin": "lín",
    "english": "Woods",
    "words": "树林 (woods)、森林 (forest)",
    "idea": "两棵树并排",
    "emoji": "🌲",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "森",
    "pinyin": "sēn",
    "english": "Forest",
    "words": "森林 (forest)",
    "idea": "三棵树堆在一起",
    "emoji": "🌲",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "苗",
    "pinyin": "miáo",
    "english": "Seedling",
    "words": "禾苗 (seedling)、树苗 (sapling)",
    "idea": "田里刚长出的小芽",
    "emoji": "🌱",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "朵",
    "pinyin": "duǒ",
    "english": "Measure word/Flower",
    "words": "花朵 (flower)、云朵 (cloud)",
    "idea": "一朵花或一朵云",
    "emoji": "🌹",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "桃",
    "pinyin": "táo",
    "english": "Peach",
    "words": "桃子 (peach)、桃花 (peach blossom)",
    "idea": "粉红色的桃子",
    "emoji": "🍑",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "苹",
    "pinyin": "píng",
    "english": "Apple",
    "words": "苹果 (apple)",
    "idea": "红红的苹果",
    "emoji": "🍎",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "杏",
    "pinyin": "xìng",
    "english": "Apricot",
    "words": "杏子 (apricot)、银杏 (ginkgo)",
    "idea": "黄色的杏子",
    "emoji": "🍑",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "李",
    "pinyin": "lǐ",
    "english": "Plum",
    "words": "李子 (plum)、行李 (luggage)",
    "idea": "紫色的李子",
    "emoji": "🟣",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "杨",
    "pinyin": "yáng",
    "english": "Poplar",
    "words": "杨树 (poplar tree)",
    "idea": "高高的杨树",
    "emoji": "🌳",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "竹",
    "pinyin": "zhú",
    "english": "Bamboo",
    "words": "竹子 (bamboo)、竹笋 (bamboo shoot)",
    "idea": "一节节的竹子",
    "emoji": "🎋",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "莲",
    "pinyin": "lián",
    "english": "Lotus",
    "words": "莲花 (lotus)、莲藕 (lotus root)",
    "idea": "水里的莲蓬",
    "emoji": "🪷",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "菊",
    "pinyin": "jú",
    "english": "Chrysanthemum",
    "words": "菊花 (chrysanthemum)",
    "idea": "黄色的菊花",
    "emoji": "🌼",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "荷",
    "pinyin": "hé",
    "english": "Lotus",
    "words": "荷花 (lotus flower)、荷叶 (lotus leaf)",
    "idea": "粉色的荷花",
    "emoji": "🪷",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "柳",
    "pinyin": "liǔ",
    "english": "Willow",
    "words": "柳树 (willow)、柳条 (willow twig)",
    "idea": "垂下的柳枝",
    "emoji": "🌿",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "柏",
    "pinyin": "bǎi",
    "english": "Cypress",
    "words": "柏树 (cypress)、松柏 (pine and cypress)",
    "idea": "尖尖的柏树",
    "emoji": "🌲",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "芽",
    "pinyin": "yá",
    "english": "Bud",
    "words": "发芽 (sprout)、豆芽 (bean sprout)",
    "idea": "刚冒头的小绿芽",
    "emoji": "🌱",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "根",
    "pinyin": "gēn",
    "english": "Root",
    "words": "树根 (root)、根本 (fundamental)",
    "idea": "地下的树根",
    "emoji": "🥕",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "粮",
    "pinyin": "liáng",
    "english": "Grain",
    "words": "粮食 (grain)、干粮 (rations)",
    "idea": "一袋米",
    "emoji": "🍚",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "米",
    "pinyin": "mǐ",
    "english": "Rice",
    "words": "大米 (rice)、米饭 (cooked rice)",
    "idea": "散落的米粒",
    "emoji": "🍚",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "麦",
    "pinyin": "mài",
    "english": "Wheat",
    "words": "小麦 (wheat)、麦片 (oatmeal)",
    "idea": "金黄的麦穗",
    "emoji": "🌾",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "棉",
    "pinyin": "mián",
    "english": "Cotton",
    "words": "棉花 (cotton)、棉被 (quilt)",
    "idea": "白白的棉花团",
    "emoji": "☁️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "谷",
    "pinyin": "gǔ",
    "english": "Valley/Grain",
    "words": "山谷 (valley)、谷子 (millet)",
    "idea": "两山之间的凹陷",
    "emoji": "🌾",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "植",
    "pinyin": "zhí",
    "english": "Plant",
    "words": "植物 (plant)、植树 (plant trees)",
    "idea": "种下一棵树",
    "emoji": "🪴",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "物",
    "pinyin": "wù",
    "english": "Thing",
    "words": "动物 (animal)、礼物 (gift)",
    "idea": "一个礼物盒子",
    "emoji": "🎁",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "天",
    "pinyin": "tiān",
    "english": "Sky/Day",
    "words": "蓝天 (blue sky)、今天 (today)",
    "idea": "头顶的天空",
    "emoji": "☁️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "地",
    "pinyin": "dì",
    "english": "Ground",
    "words": "大地 (earth)、地板 (floor)",
    "idea": "脚下的草地",
    "emoji": "🌍",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "风",
    "pinyin": "fēng",
    "english": "Wind",
    "words": "大风 (wind)、吹风 (blow)",
    "idea": "被风吹弯的树",
    "emoji": "🌬️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "雨",
    "pinyin": "yǔ",
    "english": "Rain",
    "words": "下雨 (rain)、雨伞 (umbrella)",
    "idea": "从云里掉下的水滴",
    "emoji": "🌧️",
    "hasSpecialCSS": true,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "雪",
    "pinyin": "xuě",
    "english": "Snow",
    "words": "下雪 (snow)、雪人 (snowman)",
    "idea": "六角形的雪花",
    "emoji": "❄️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "云",
    "pinyin": "yún",
    "english": "Cloud",
    "words": "白云 (cloud)、乌云 (dark cloud)",
    "idea": "飘浮的云朵",
    "emoji": "☁️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "电",
    "pinyin": "diàn",
    "english": "Electricity",
    "words": "闪电 (lightning)、电视 (TV)",
    "idea": "插座或闪电",
    "emoji": "⚡",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "雷",
    "pinyin": "léi",
    "english": "Thunder",
    "words": "打雷 (thunder)、雷雨 (thunderstorm)",
    "idea": "云层里的轰隆声",
    "emoji": "🌩️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "雾",
    "pinyin": "wù",
    "english": "Fog",
    "words": "大雾 (fog)、雾气 (mist)",
    "idea": "模糊的景象",
    "emoji": "🌫️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "冰",
    "pinyin": "bīng",
    "english": "Ice",
    "words": "冰块 (ice cube)、滑冰 (skate)",
    "idea": "透明的冰块",
    "emoji": "🧊",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "霜",
    "pinyin": "shuāng",
    "english": "Frost",
    "words": "冰霜 (frost)、霜降 (Frost's Descent)",
    "idea": "叶子上的白霜",
    "emoji": "❄️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "气",
    "pinyin": "qì",
    "english": "Air/Gas",
    "words": "空气 (air)、生气 (angry)",
    "idea": "飘起的热气",
    "emoji": "💨",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "阴",
    "pinyin": "yīn",
    "english": "Cloudy",
    "words": "阴天 (cloudy day)、阴凉 (shade)",
    "idea": "遮住太阳的云",
    "emoji": "☁️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "晴",
    "pinyin": "qíng",
    "english": "Sunny",
    "words": "晴天 (sunny day)",
    "idea": "大太阳",
    "emoji": "☀️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "露",
    "pinyin": "lù",
    "english": "Dew",
    "words": "露水 (dew)、露珠 (dewdrop)",
    "idea": "叶子上的水珠",
    "emoji": "💧",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "霞",
    "pinyin": "xiá",
    "english": "Rosy clouds",
    "words": "晚霞 (sunset glow)、彩霞 (rosy clouds)",
    "idea": "傍晚红色的云",
    "emoji": "🌅",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "虹",
    "pinyin": "hóng",
    "english": "Rainbow",
    "words": "彩虹 (rainbow)",
    "idea": "弯弯的彩虹",
    "emoji": "🌈",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "洞",
    "pinyin": "dòng",
    "english": "Hole/Cave",
    "words": "山洞 (cave)、破洞 (hole)",
    "idea": "黑黑的洞口",
    "emoji": "🕳️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "海",
    "pinyin": "hǎi",
    "english": "Sea",
    "words": "大海 (sea)、海水 (seawater)",
    "idea": "广阔的蓝色大海",
    "emoji": "🌊",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "河",
    "pinyin": "hé",
    "english": "River",
    "words": "小河 (river)、河水 (river water)",
    "idea": "弯弯曲曲的河流",
    "emoji": "〰️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "江",
    "pinyin": "jiāng",
    "english": "River",
    "words": "长江 (Yangtze River)、江水 (river water)",
    "idea": "宽阔的大江",
    "emoji": "🌊",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "湖",
    "pinyin": "hú",
    "english": "Lake",
    "words": "湖水 (lake)、西湖 (West Lake)",
    "idea": "平静的湖面",
    "emoji": "🏞️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "池",
    "pinyin": "chí",
    "english": "Pool",
    "words": "池塘 (pond)、游泳池 (pool)",
    "idea": "小水坑",
    "emoji": "🏊",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "泉",
    "pinyin": "quán",
    "english": "Spring",
    "words": "泉水 (spring water)、温泉 (hot spring)",
    "idea": "从地下冒出的水",
    "emoji": "⛲",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "溪",
    "pinyin": "xī",
    "english": "Stream",
    "words": "小溪 (stream)",
    "idea": "山间的小水流",
    "emoji": "💧",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "流",
    "pinyin": "liú",
    "english": "Flow",
    "words": "流水 (flowing water)、流血 (bleed)",
    "idea": "流动的水",
    "emoji": "🌊",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "沙",
    "pinyin": "shā",
    "english": "Sand",
    "words": "沙子 (sand)、沙滩 (beach)",
    "idea": "一堆沙子",
    "emoji": "🏖️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "滩",
    "pinyin": "tān",
    "english": "Beach",
    "words": "沙滩 (beach)、海滩 (beach)",
    "idea": "海边的沙地",
    "emoji": "🏖️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "浪",
    "pinyin": "làng",
    "english": "Wave",
    "words": "海浪 (wave)、浪花 (spray)",
    "idea": "卷起的大浪",
    "emoji": "🌊",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "潮",
    "pinyin": "cháo",
    "english": "Tide",
    "words": "潮湿 (damp)、涨潮 (high tide)",
    "idea": "水漫上来",
    "emoji": "🌊",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "湿",
    "pinyin": "shī",
    "english": "Wet",
    "words": "湿透 (soaked)、湿润 (moist)",
    "idea": "滴水的衣服",
    "emoji": "💦",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "东",
    "pinyin": "dōng",
    "english": "East",
    "words": "东方 (east)、东边 (east side)",
    "idea": "太阳升起的方向",
    "emoji": "➡️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "西",
    "pinyin": "xī",
    "english": "West",
    "words": "西瓜 (watermelon)、西方 (west)",
    "idea": "太阳落下的方向",
    "emoji": "⬅️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "南",
    "pinyin": "nán",
    "english": "South",
    "words": "南方 (south)、南瓜 (pumpkin)",
    "idea": "指南针指向南",
    "emoji": "⬇️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "北",
    "pinyin": "běi",
    "english": "North",
    "words": "北方 (north)、北极熊 (polar bear)",
    "idea": "指南针指向北",
    "emoji": "⬆️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "中",
    "pinyin": "zhōng",
    "english": "Middle",
    "words": "中间 (middle)、中国 (China)",
    "idea": "靶心或正中间",
    "emoji": "🎯",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "春",
    "pinyin": "chūn",
    "english": "Spring",
    "words": "春天 (spring)、春节 (Spring Festival)",
    "idea": "花开的季节",
    "emoji": "🌸",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "夏",
    "pinyin": "xià",
    "english": "Summer",
    "words": "夏天 (summer)、夏日 (summer day)",
    "idea": "吃西瓜的季节",
    "emoji": "🍉",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "秋",
    "pinyin": "qiū",
    "english": "Autumn",
    "words": "秋天 (autumn)、秋千 (swing)",
    "idea": "落叶的季节",
    "emoji": "🍁",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "冬",
    "pinyin": "dōng",
    "english": "Winter",
    "words": "冬天 (winter)、冬瓜 (winter melon)",
    "idea": "下雪的季节",
    "emoji": "☃️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "早",
    "pinyin": "zǎo",
    "english": "Morning/Early",
    "words": "早上 (morning)、早安 (good morning)",
    "idea": "太阳刚升起",
    "emoji": "🌅",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "晚",
    "pinyin": "wǎn",
    "english": "Evening/Late",
    "words": "晚上 (evening)、晚安 (good night)",
    "idea": "月亮升起",
    "emoji": "🌃",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "年",
    "pinyin": "nián",
    "english": "Year",
    "words": "过年 (New Year)、今年 (this year)",
    "idea": "放鞭炮",
    "emoji": "🧧",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "月",
    "pinyin": "yuè",
    "english": "Month",
    "words": "一月 (January)、岁月 (years)",
    "idea": "日历上的一页",
    "emoji": "🌙",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "日",
    "pinyin": "rì",
    "english": "Day",
    "words": "日子 (day)、日记 (diary)",
    "idea": "太阳",
    "emoji": "☀️",
    "hasSpecialCSS": true,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "时",
    "pinyin": "shí",
    "english": "Time",
    "words": "时间 (time)、小时 (hour)",
    "idea": "时钟",
    "emoji": "⏰",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "候",
    "pinyin": "hòu",
    "english": "Wait/Time",
    "words": "时候 (time)、等候 (wait)",
    "idea": "在车站等人",
    "emoji": "⏳",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "秒",
    "pinyin": "miǎo",
    "english": "Second",
    "words": "秒针 (second hand)",
    "idea": "滴答滴答的秒针",
    "emoji": "⏱️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "分",
    "pinyin": "fēn",
    "english": "Minute/Divide",
    "words": "分钟 (minute)、分开 (separate)",
    "idea": "切开的西瓜",
    "emoji": "🪙",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "昨",
    "pinyin": "zuó",
    "english": "Yesterday",
    "words": "昨天 (yesterday)",
    "idea": "日历的上一页",
    "emoji": "📅",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "今",
    "pinyin": "jīn",
    "english": "Today",
    "words": "今天 (today)",
    "idea": "日历的这一页",
    "emoji": "📅",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "明",
    "pinyin": "míng",
    "english": "Tomorrow/Bright",
    "words": "明天 (tomorrow)、明白 (understand)",
    "idea": "日历的下一页",
    "emoji": "📅",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "晨",
    "pinyin": "chén",
    "english": "Morning",
    "words": "早晨 (morning)、清晨 (early morning)",
    "idea": "公鸡打鸣",
    "emoji": "🌅",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "午",
    "pinyin": "wǔ",
    "english": "Noon",
    "words": "中午 (noon)、午睡 (nap)",
    "idea": "太阳在头顶",
    "emoji": "☀️",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "夜",
    "pinyin": "yè",
    "english": "Night",
    "words": "夜晚 (night)、夜空 (night sky)",
    "idea": "星星满天",
    "emoji": "🌌",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "节",
    "pinyin": "jié",
    "english": "Festival/Knot",
    "words": "节日 (festival)、竹节 (bamboo joint)",
    "idea": "灯笼",
    "emoji": "🏮",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "岁",
    "pinyin": "suì",
    "english": "Year/Age",
    "words": "几岁 (how old)、岁月 (years)",
    "idea": "生日蛋糕上的蜡烛",
    "emoji": "🎂",
    "hasSpecialCSS": false,
    "level": "Level 2: 探索期 (部分示例 - 可爱动物)"
  },
  {
    "char": "站",
    "pinyin": "zhàn",
    "english": "Stand",
    "words": "站立 (stand)、车站 (station)",
    "idea": "立正站好",
    "emoji": "🧍",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "坐",
    "pinyin": "zuò",
    "english": "Sit",
    "words": "坐下 (sit down)、请坐 (please sit)",
    "idea": "坐在椅子上",
    "emoji": "🪑",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "走",
    "pinyin": "zǒu",
    "english": "Walk",
    "words": "走路 (walk)、走开 (go away)",
    "idea": "迈步向前",
    "emoji": "🚶",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "跑",
    "pinyin": "pǎo",
    "english": "Run",
    "words": "跑步 (run)、赛跑 (race)",
    "idea": "快速奔跑",
    "emoji": "🏃",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "跳",
    "pinyin": "tiào",
    "english": "Jump",
    "words": "跳舞 (dance)、跳绳 (jump rope)",
    "idea": "向上跳起",
    "emoji": "🦘",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "飞",
    "pinyin": "fēi",
    "english": "Fly",
    "words": "飞机 (airplane)、飞翔 (fly)",
    "idea": "小鸟在飞",
    "emoji": "✈️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "爬",
    "pinyin": "pá",
    "english": "Climb/Crawl",
    "words": "爬山 (climb mountain)、爬行 (crawl)",
    "idea": "宝宝在爬",
    "emoji": "🧗",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "游",
    "pinyin": "yóu",
    "english": "Swim",
    "words": "游泳 (swim)、游戏 (game)",
    "idea": "在水里游",
    "emoji": "🏊",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "睡",
    "pinyin": "shuì",
    "english": "Sleep",
    "words": "睡觉 (sleep)、睡着 (asleep)",
    "idea": "闭眼睡觉",
    "emoji": "😴",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "醒",
    "pinyin": "xǐng",
    "english": "Wake",
    "words": "醒来 (wake up)、清醒 (awake)",
    "idea": "伸懒腰睁眼",
    "emoji": "😃",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "起",
    "pinyin": "qǐ",
    "english": "Up/Rise",
    "words": "起床 (get up)、起飞 (take off)",
    "idea": "从床上坐起来",
    "emoji": "🛌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "卧",
    "pinyin": "wò",
    "english": "Lie",
    "words": "卧室 (bedroom)、卧倒 (lie down)",
    "idea": "趴着",
    "emoji": "🛌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "蹲",
    "pinyin": "dūn",
    "english": "Squat",
    "words": "蹲下 (squat)",
    "idea": "弯腿蹲着",
    "emoji": "🧎",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "追",
    "pinyin": "zhuī",
    "english": "Chase",
    "words": "追赶 (chase)",
    "idea": "后面的人追前面的",
    "emoji": "🏃",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "逃",
    "pinyin": "táo",
    "english": "Escape",
    "words": "逃跑 (escape)",
    "idea": "前面的人跑",
    "emoji": "🏃",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "躲",
    "pinyin": "duǒ",
    "english": "Hide",
    "words": "躲藏 (hide)、躲猫猫 (peek-a-boo)",
    "idea": "藏在树后",
    "emoji": "🫣",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "进",
    "pinyin": "jìn",
    "english": "Enter",
    "words": "进来 (come in)、进步 (progress)",
    "idea": "走进门",
    "emoji": "➡️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "退",
    "pinyin": "tuì",
    "english": "Retreat",
    "words": "后退 (go back)、退步 (regress)",
    "idea": "向后走",
    "emoji": "⬅️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "出",
    "pinyin": "chū",
    "english": "Out",
    "words": "出去 (go out)、出发 (set off)",
    "idea": "走出门",
    "emoji": "🚪",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "入",
    "pinyin": "rù",
    "english": "Enter",
    "words": "入口 (entrance)、加入 (join)",
    "idea": "箭头指向里面",
    "emoji": "🚪",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "躺",
    "pinyin": "tǎng",
    "english": "Lie",
    "words": "躺下 (lie down)",
    "idea": "平躺在床上",
    "emoji": "🛌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "翻",
    "pinyin": "fān",
    "english": "Turn/Flip",
    "words": "翻书 (turn page)、翻身 (turn over)",
    "idea": "翻动书页",
    "emoji": "📖",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "滚",
    "pinyin": "gǔn",
    "english": "Roll",
    "words": "打滚 (roll)、滚动 (roll)",
    "idea": "球在滚",
    "emoji": "⚽",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "转",
    "pinyin": "zhuǎn",
    "english": "Turn",
    "words": "转身 (turn around)、旋转 (rotate)",
    "idea": "转圈圈",
    "emoji": "🔄",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "立",
    "pinyin": "lì",
    "english": "Stand",
    "words": "起立 (stand up)、立正 (attention)",
    "idea": "站得直直的",
    "emoji": "🧍",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "停",
    "pinyin": "tíng",
    "english": "Stop",
    "words": "停车 (stop car)、停止 (stop)",
    "idea": "红灯停",
    "emoji": "🛑",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "来",
    "pinyin": "lái",
    "english": "Come",
    "words": "过来 (come here)、来到 (arrive)",
    "idea": "招手让人来",
    "emoji": "👋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "去",
    "pinyin": "qù",
    "english": "Go",
    "words": "过去 (go there)、回去 (go back)",
    "idea": "挥手让人走",
    "emoji": "👋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "回",
    "pinyin": "huí",
    "english": "Return",
    "words": "回家 (go home)、回来 (come back)",
    "idea": "转个圈回来",
    "emoji": "↩️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "到",
    "pinyin": "dào",
    "english": "Arrive",
    "words": "到了 (arrived)、迟到 (late)",
    "idea": "到达终点",
    "emoji": "📍",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "过",
    "pinyin": "guò",
    "english": "Pass",
    "words": "过去 (pass)、过河 (cross river)",
    "idea": "走过桥",
    "emoji": "🌉",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "穿",
    "pinyin": "chuān",
    "english": "Wear",
    "words": "穿衣 (get dressed)、穿鞋 (put on shoes)",
    "idea": "穿上衣服",
    "emoji": "👕",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "脱",
    "pinyin": "tuō",
    "english": "Take off",
    "words": "脱衣 (undress)、脱鞋 (take off shoes)",
    "idea": "脱下衣服",
    "emoji": "👙",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "打",
    "pinyin": "dǎ",
    "english": "Hit/Call",
    "words": "打球 (play ball)、打电话 (call)",
    "idea": "用手击打",
    "emoji": "👊",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "拍",
    "pinyin": "pāi",
    "english": "Clap/Pat",
    "words": "拍手 (clap)、拍照 (take photo)",
    "idea": "双手击掌",
    "emoji": "👏",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "抱",
    "pinyin": "bào",
    "english": "Hug",
    "words": "拥抱 (hug)、抱抱 (cuddle)",
    "idea": "张开双臂抱",
    "emoji": "🫂",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "提",
    "pinyin": "tí",
    "english": "Lift/Carry",
    "words": "提水 (carry water)、手提包 (handbag)",
    "idea": "手提东西",
    "emoji": "👜",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "拉",
    "pinyin": "lā",
    "english": "Pull",
    "words": "拉手 (hold hands)、拉车 (pull cart)",
    "idea": "用力拉绳子",
    "emoji": "🤝",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "推",
    "pinyin": "tuī",
    "english": "Push",
    "words": "推车 (push cart)、推开 (push open)",
    "idea": "用力向前推",
    "emoji": "✋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "找",
    "pinyin": "zhǎo",
    "english": "Find",
    "words": "寻找 (look for)、找到 (found)",
    "idea": "用放大镜看",
    "emoji": "🔍",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "扫",
    "pinyin": "sǎo",
    "english": "Sweep",
    "words": "扫地 (sweep floor)",
    "idea": "拿扫把扫地",
    "emoji": "🧹",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "种",
    "pinyin": "zhòng",
    "english": "Plant",
    "words": "种树 (plant tree)、种花 (plant flower)",
    "idea": "把种子埋土里",
    "emoji": "🌱",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "摘",
    "pinyin": "zhāi",
    "english": "Pick",
    "words": "摘花 (pick flower)、摘果子 (pick fruit)",
    "idea": "伸手去采",
    "emoji": "🤏",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "采",
    "pinyin": "cǎi",
    "english": "Pick/Gather",
    "words": "采蘑菇 (pick mushroom)",
    "idea": "弯腰采摘",
    "emoji": "🍄",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "扔",
    "pinyin": "rēng",
    "english": "Throw",
    "words": "扔球 (throw ball)",
    "idea": "用力丢出去",
    "emoji": "🚮",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "接",
    "pinyin": "jiē",
    "english": "Catch/Receive",
    "words": "接球 (catch ball)、接电话 (answer phone)",
    "idea": "双手接住",
    "emoji": "🤲",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "捉",
    "pinyin": "zhuō",
    "english": "Catch",
    "words": "捉迷藏 (hide and seek)、捉虫 (catch bug)",
    "idea": "用网兜捉",
    "emoji": "🦋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "拿",
    "pinyin": "ná",
    "english": "Hold/Take",
    "words": "拿着 (holding)、拿来 (bring)",
    "idea": "手里拿着苹果",
    "emoji": "✊",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "指",
    "pinyin": "zhǐ",
    "english": "Point",
    "words": "手指 (finger)、指路 (point way)",
    "idea": "伸出食指",
    "emoji": "👆",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "画",
    "pinyin": "huà",
    "english": "Draw",
    "words": "画画 (draw)、图画 (picture)",
    "idea": "拿画笔画",
    "emoji": "🎨",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "写",
    "pinyin": "xiě",
    "english": "Write",
    "words": "写字 (write)、作业 (homework)",
    "idea": "拿铅笔写",
    "emoji": "✍️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "抬",
    "pinyin": "tái",
    "english": "Lift",
    "words": "抬头 (look up)、抬水 (carry water)",
    "idea": "两个人抬东西",
    "emoji": "🏋️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "拔",
    "pinyin": "bá",
    "english": "Pull up",
    "words": "拔萝卜 (pull turnip)、拔牙 (pull tooth)",
    "idea": "用力拔出来",
    "emoji": "🥕",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "挑",
    "pinyin": "tiāo",
    "english": "Pick/Carry",
    "words": "挑选 (choose)、挑水 (carry water)",
    "idea": "挑扁担",
    "emoji": "🧺",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "挖",
    "pinyin": "wā",
    "english": "Dig",
    "words": "挖土 (dig soil)、挖掘机 (excavator)",
    "idea": "用铲子挖",
    "emoji": "⛏️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "搬",
    "pinyin": "bān",
    "english": "Move",
    "words": "搬家 (move house)、搬桌子 (move table)",
    "idea": "搬重物",
    "emoji": "📦",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "扛",
    "pinyin": "káng",
    "english": "Carry on shoulder",
    "words": "扛枪 (carry gun)",
    "idea": "扛在肩上",
    "emoji": "🏋️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "捧",
    "pinyin": "pěng",
    "english": "Hold in both hands",
    "words": "捧着 (hold in hands)",
    "idea": "双手捧水",
    "emoji": "🤲",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "掰",
    "pinyin": "bāi",
    "english": "Break off",
    "words": "掰开 (break apart)、掰玉米 (break corn)",
    "idea": "双手掰断",
    "emoji": "🌽",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "摇",
    "pinyin": "yáo",
    "english": "Shake",
    "words": "摇手 (wave hand)、摇篮 (cradle)",
    "idea": "摇动",
    "emoji": "👋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "招",
    "pinyin": "zhāo",
    "english": "Beckon",
    "words": "招手 (wave)、招呼 (greet)",
    "idea": "招手让人来",
    "emoji": "👋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "扶",
    "pinyin": "fú",
    "english": "Support",
    "words": "扶手 (handrail)、扶持 (support)",
    "idea": "扶着老人",
    "emoji": "🤝",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "挂",
    "pinyin": "guà",
    "english": "Hang",
    "words": "挂画 (hang picture)、挂衣 (hang clothes)",
    "idea": "挂钩",
    "emoji": "🖼️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "掉",
    "pinyin": "diào",
    "english": "Drop/Fall",
    "words": "掉下 (fall down)、掉眼泪 (shed tears)",
    "idea": "东西掉地上",
    "emoji": "⬇️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "捡",
    "pinyin": "jiǎn",
    "english": "Pick up",
    "words": "捡起来 (pick up)",
    "idea": "弯腰捡东西",
    "emoji": "🤏",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "丢",
    "pinyin": "diū",
    "english": "Lost/Throw",
    "words": "丢人 (shameful)、弄丢 (lost)",
    "idea": "东西不见了",
    "emoji": "🗑️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "看",
    "pinyin": "kàn",
    "english": "Look",
    "words": "看见 (see)、看书 (read)",
    "idea": "手搭凉棚看",
    "emoji": "👀",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "见",
    "pinyin": "jiàn",
    "english": "See",
    "words": "再见 (goodbye)、见面 (meet)",
    "idea": "睁大眼睛",
    "emoji": "👀",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "听",
    "pinyin": "tīng",
    "english": "Listen",
    "words": "听话 (obedient)、听歌 (listen to music)",
    "idea": "手放在耳边",
    "emoji": "👂",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "说",
    "pinyin": "shuō",
    "english": "Speak",
    "words": "说话 (speak)、说明 (explain)",
    "idea": "嘴巴在动",
    "emoji": "🗣️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "问",
    "pinyin": "wèn",
    "english": "Ask",
    "words": "问题 (question)、请问 (excuse me)",
    "idea": "嘴巴里有个问号",
    "emoji": "❓",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "叫",
    "pinyin": "jiào",
    "english": "Call/Shout",
    "words": "大叫 (shout)、名叫 (named)",
    "idea": "张嘴大声喊",
    "emoji": "📢",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "喊",
    "pinyin": "hǎn",
    "english": "Shout",
    "words": "喊叫 (yell)、大喊 (shout)",
    "idea": "双手围嘴喊",
    "emoji": "📣",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "唱",
    "pinyin": "chàng",
    "english": "Sing",
    "words": "唱歌 (sing)、歌唱 (singing)",
    "idea": "拿着麦克风",
    "emoji": "🎤",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "吹",
    "pinyin": "chuī",
    "english": "Blow",
    "words": "吹气 (blow)、吹牛 (brag)",
    "idea": "嘴巴吹风",
    "emoji": "🌬️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "呼",
    "pinyin": "hū",
    "english": "Exhale/Call",
    "words": "呼吸 (breathe)、欢呼 (cheer)",
    "idea": "呼出一口气",
    "emoji": "😮",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "吸",
    "pinyin": "xī",
    "english": "Inhale",
    "words": "吸管 (straw)、吸气 (inhale)",
    "idea": "用吸管喝水",
    "emoji": "🥤",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "视",
    "pinyin": "shì",
    "english": "Vision",
    "words": "电视 (TV)、近视 (nearsighted)",
    "idea": "眼睛",
    "emoji": "📺",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "望",
    "pinyin": "wàng",
    "english": "Gaze",
    "words": "看望 (visit)、愿望 (wish)",
    "idea": "站在高处看",
    "emoji": "👀",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "闻",
    "pinyin": "wén",
    "english": "Smell",
    "words": "闻花 (smell flower)、新闻 (news)",
    "idea": "鼻子闻气味",
    "emoji": "👃",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "语",
    "pinyin": "yǔ",
    "english": "Language",
    "words": "语文 (language)、成语 (idiom)",
    "idea": "对话气泡",
    "emoji": "💬",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "音",
    "pinyin": "yīn",
    "english": "Sound",
    "words": "音乐 (music)、声音 (sound)",
    "idea": "音符",
    "emoji": "🎵",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "讲",
    "pinyin": "jiǎng",
    "english": "Speak/Tell",
    "words": "讲话 (speak)、讲故事 (tell story)",
    "idea": "老师在讲课",
    "emoji": "👨‍🏫",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "读",
    "pinyin": "dú",
    "english": "Read",
    "words": "读书 (read book)、朗读 (read aloud)",
    "idea": "拿着书念",
    "emoji": "📖",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "告",
    "pinyin": "gào",
    "english": "Tell",
    "words": "告诉 (tell)、广告 (advertisement)",
    "idea": "凑在耳边说",
    "emoji": "🤫",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "诉",
    "pinyin": "sù",
    "english": "Tell",
    "words": "告诉 (tell)、诉说 (recount)",
    "idea": "说话的样子",
    "emoji": "🗣️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "谈",
    "pinyin": "tán",
    "english": "Talk",
    "words": "谈话 (talk)、谈天 (chat)",
    "idea": "两个人聊天",
    "emoji": "💬",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "论",
    "pinyin": "lùn",
    "english": "Discuss",
    "words": "讨论 (discuss)、理论 (theory)",
    "idea": "一群人讨论",
    "emoji": "🗨️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "吵",
    "pinyin": "chǎo",
    "english": "Noisy",
    "words": "吵架 (quarrel)、吵闹 (noisy)",
    "idea": "两个嘴巴吵",
    "emoji": "🤬",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "闹",
    "pinyin": "nào",
    "english": "Noisy",
    "words": "热闹 (lively)、闹钟 (alarm clock)",
    "idea": "集市或闹钟",
    "emoji": "⏰",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "静",
    "pinyin": "jìng",
    "english": "Quiet",
    "words": "安静 (quiet)、冷静 (calm)",
    "idea": "手指放嘴唇嘘",
    "emoji": "🤫",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "响",
    "pinyin": "xiǎng",
    "english": "Loud",
    "words": "响亮 (loud)、响声 (sound)",
    "idea": "敲锣打鼓",
    "emoji": "🔊",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "声",
    "pinyin": "shēng",
    "english": "Sound/Voice",
    "words": "声音 (voice)、大声 (loud)",
    "idea": "喇叭",
    "emoji": "🔈",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "息",
    "pinyin": "xī",
    "english": "Breath/Rest",
    "words": "休息 (rest)、气息 (breath)",
    "idea": "坐在树下休息",
    "emoji": "😌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "吃",
    "pinyin": "chī",
    "english": "Eat",
    "words": "吃饭 (eat rice)、好吃 (yummy)",
    "idea": "张嘴吃东西",
    "emoji": "🍽️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "喝",
    "pinyin": "hē",
    "english": "Drink",
    "words": "喝水 (drink water)、喝汤 (drink soup)",
    "idea": "拿杯子喝",
    "emoji": "🥤",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "咬",
    "pinyin": "yǎo",
    "english": "Bite",
    "words": "咬一口 (bite)、咬人 (bite)",
    "idea": "牙齿咬苹果",
    "emoji": "🦷",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "尝",
    "pinyin": "cháng",
    "english": "Taste",
    "words": "品尝 (taste)、尝试 (try)",
    "idea": "舌头舔一舔",
    "emoji": "😋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "饿",
    "pinyin": "è",
    "english": "Hungry",
    "words": "肚子饿 (hungry)",
    "idea": "摸着扁肚子",
    "emoji": "😫",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "饱",
    "pinyin": "bǎo",
    "english": "Full",
    "words": "吃饱 (full)",
    "idea": "摸着圆肚子",
    "emoji": "😌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "香",
    "pinyin": "xiāng",
    "english": "Fragrant",
    "words": "真香 (smells good)、香水 (perfume)",
    "idea": "冒着香气的饭",
    "emoji": "👃",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "甜",
    "pinyin": "tián",
    "english": "Sweet",
    "words": "甜蜜 (sweet)、甜食 (sweets)",
    "idea": "糖果",
    "emoji": "🍬",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "酸",
    "pinyin": "suān",
    "english": "Sour",
    "words": "酸奶 (yogurt)、好酸 (sour)",
    "idea": "柠檬",
    "emoji": "🍋",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "苦",
    "pinyin": "kǔ",
    "english": "Bitter",
    "words": "苦瓜 (bitter melon)、辛苦 (hard work)",
    "idea": "苦瓜或药",
    "emoji": "☕",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "饭",
    "pinyin": "fàn",
    "english": "Rice/Meal",
    "words": "米饭 (rice)、早饭 (breakfast)",
    "idea": "一碗饭",
    "emoji": "🍚",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "菜",
    "pinyin": "cài",
    "english": "Vegetable/Dish",
    "words": "青菜 (vegetable)、买菜 (buy grocery)",
    "idea": "一盘菜",
    "emoji": "🥬",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "渴",
    "pinyin": "kě",
    "english": "Thirsty",
    "words": "口渴 (thirsty)",
    "idea": "想要水喝",
    "emoji": "🥵",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "吞",
    "pinyin": "tūn",
    "english": "Swallow",
    "words": "吞下 (swallow)、吞吐 (swallow and spit)",
    "idea": "喉咙吞咽",
    "emoji": "🤤",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "吐",
    "pinyin": "tǔ",
    "english": "Spit",
    "words": "吐气 (exhale)、呕吐 (vomit)",
    "idea": "嘴巴吐东西",
    "emoji": "🤮",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "熟",
    "pinyin": "shú",
    "english": "Cooked/Ripe",
    "words": "熟了 (cooked/ripe)、熟悉 (familiar)",
    "idea": "红透的苹果",
    "emoji": "🍎",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "生",
    "pinyin": "shēng",
    "english": "Raw/Birth",
    "words": "生日 (birthday)、生病 (sick)",
    "idea": "发芽的种子",
    "emoji": "🎒",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "洗",
    "pinyin": "xǐ",
    "english": "Wash",
    "words": "洗手 (wash hands)、洗衣 (wash clothes)",
    "idea": "用水冲洗",
    "emoji": "🧼",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "澡",
    "pinyin": "zǎo",
    "english": "Bath",
    "words": "洗澡 (bath)",
    "idea": "浴缸里洗澡",
    "emoji": "🛁",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "刷",
    "pinyin": "shuā",
    "english": "Brush",
    "words": "刷牙 (brush teeth)、刷子 (brush)",
    "idea": "拿着牙刷",
    "emoji": "🪥",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "梳",
    "pinyin": "shū",
    "english": "Comb",
    "words": "梳头 (comb hair)、梳子 (comb)",
    "idea": "用梳子梳头",
    "emoji": "🪮",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "高",
    "pinyin": "gāo",
    "english": "High/Tall",
    "words": "高兴 (happy)、高楼 (tall building)",
    "idea": "高高的长颈鹿",
    "emoji": "🦒",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "矮",
    "pinyin": "ǎi",
    "english": "Short",
    "words": "矮小 (short)",
    "idea": "矮矮的小板凳",
    "emoji": "🍄",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "长",
    "pinyin": "cháng",
    "english": "Long",
    "words": "长江 (Long River)、长发 (long hair)",
    "idea": "长长的绳子",
    "emoji": "📏",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "短",
    "pinyin": "duǎn",
    "english": "Short",
    "words": "短裤 (shorts)、短跑 (sprint)",
    "idea": "短短的尺子",
    "emoji": "📏",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "胖",
    "pinyin": "pàng",
    "english": "Fat",
    "words": "胖乎乎 (chubby)、肥胖 (fat)",
    "idea": "胖胖的熊猫",
    "emoji": "🐼",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "瘦",
    "pinyin": "shòu",
    "english": "Thin",
    "words": "瘦小 (thin)、瘦肉 (lean meat)",
    "idea": "瘦瘦的猴子",
    "emoji": "🐒",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "远",
    "pinyin": "yuǎn",
    "english": "Far",
    "words": "远方 (distance)、很远 (very far)",
    "idea": "望远镜看远处",
    "emoji": "🔭",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "近",
    "pinyin": "jìn",
    "english": "Near",
    "words": "很近 (near)、最近 (recent)",
    "idea": "就在眼前",
    "emoji": "👓",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "直",
    "pinyin": "zhí",
    "english": "Straight",
    "words": "直线 (straight line)、一直 (always)",
    "idea": "笔直的公路",
    "emoji": "📏",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "弯",
    "pinyin": "wān",
    "english": "Curved",
    "words": "弯腰 (bend)、转弯 (turn)",
    "idea": "弯弯的月亮",
    "emoji": "🌙",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "快",
    "pinyin": "kuài",
    "english": "Fast",
    "words": "快乐 (happy)、快速 (fast)",
    "idea": "奔跑的豹子",
    "emoji": "🐆",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "慢",
    "pinyin": "màn",
    "english": "Slow",
    "words": "慢走 (walk slow)、傲慢 (arrogant)",
    "idea": "爬行的蜗牛",
    "emoji": "🐌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "美",
    "pinyin": "měi",
    "english": "Beautiful",
    "words": "美丽 (beautiful)、美好 (good)",
    "idea": "美丽的孔雀",
    "emoji": "🦚",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "丽",
    "pinyin": "lì",
    "english": "Beautiful",
    "words": "美丽 (beautiful)、华丽 (magnificent)",
    "idea": "漂亮的裙子",
    "emoji": "👗",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "新",
    "pinyin": "xīn",
    "english": "New",
    "words": "新年 (New Year)、新衣 (new clothes)",
    "idea": "刚买的玩具",
    "emoji": "🆕",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "旧",
    "pinyin": "jiù",
    "english": "Old",
    "words": "破旧 (old/worn)、陈旧 (outdated)",
    "idea": "破旧的书",
    "emoji": "🏚️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "好",
    "pinyin": "hǎo",
    "english": "Good",
    "words": "好人 (good person)、你好 (hello)",
    "idea": "大拇指点赞",
    "emoji": "👍",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "坏",
    "pinyin": "huài",
    "english": "Bad",
    "words": "坏人 (bad guy)、坏了 (broken)",
    "idea": "烂掉的苹果",
    "emoji": "👎",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "难",
    "pinyin": "nán",
    "english": "Difficult",
    "words": "困难 (difficult)、难过 (sad)",
    "idea": "解不开的结",
    "emoji": "🤯",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "易",
    "pinyin": "yì",
    "english": "Easy",
    "words": "容易 (easy)、交易 (trade)",
    "idea": "简单的加法",
    "emoji": "👌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "真",
    "pinyin": "zhēn",
    "english": "Real",
    "words": "真的 (real)、天真 (innocent)",
    "idea": "真金白银",
    "emoji": "✅",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "假",
    "pinyin": "jiǎ",
    "english": "Fake",
    "words": "假发 (wig)、放假 (holiday)",
    "idea": "面具",
    "emoji": "🎭",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "对",
    "pinyin": "duì",
    "english": "Correct/Pair",
    "words": "不对 (wrong)、一对 (pair)",
    "idea": "打勾",
    "emoji": "✔️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "错",
    "pinyin": "cuò",
    "english": "Wrong",
    "words": "不错 (not bad)、做错 (mistake)",
    "idea": "打叉",
    "emoji": "❌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "细",
    "pinyin": "xì",
    "english": "Thin/Fine",
    "words": "细线 (thin thread)、仔细 (careful)",
    "idea": "细细的头发",
    "emoji": "🧵",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "粗",
    "pinyin": "cū",
    "english": "Thick/Rough",
    "words": "粗心 (careless)、粗大 (thick)",
    "idea": "粗粗的树干",
    "emoji": "🪵",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "尖",
    "pinyin": "jiān",
    "english": "Sharp",
    "words": "笔尖 (pen tip)、尖叫 (scream)",
    "idea": "尖尖的针",
    "emoji": "📌",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "圆",
    "pinyin": "yuán",
    "english": "Round",
    "words": "圆形 (circle)、团圆 (reunion)",
    "idea": "圆圆的球",
    "emoji": "⚪",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "平",
    "pinyin": "píng",
    "english": "Flat",
    "words": "平安 (safe)、平时 (usually)",
    "idea": "平坦的地面",
    "emoji": "➖",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "扁",
    "pinyin": "biǎn",
    "english": "Flat",
    "words": "扁豆 (flat bean)",
    "idea": "被压扁的球",
    "emoji": "💳",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "独",
    "pinyin": "dú",
    "english": "Alone",
    "words": "独立 (independent)、独自 (alone)",
    "idea": "一只孤单的鸟",
    "emoji": "🧍",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "单",
    "pinyin": "dān",
    "english": "Single",
    "words": "孤单 (lonely)、床单 (bed sheet)",
    "idea": "一根筷子",
    "emoji": "1️⃣",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "众",
    "pinyin": "zhòng",
    "english": "Crowd",
    "words": "群众 (crowd)、众多 (numerous)",
    "idea": "三个人在一起",
    "emoji": "👨‍👩‍👧",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "双",
    "pinyin": "shuāng",
    "english": "Pair",
    "words": "双手 (both hands)、一双 (a pair)",
    "idea": "两只鞋子",
    "emoji": "2️⃣",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "满",
    "pinyin": "mǎn",
    "english": "Full",
    "words": "满意 (satisfied)、充满 (full of)",
    "idea": "装满水的杯子",
    "emoji": "🌕",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "空",
    "pinyin": "kōng",
    "english": "Empty/Sky",
    "words": "天空 (sky)、空手 (empty handed)",
    "idea": "空的盒子",
    "emoji": "🈳",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "干",
    "pinyin": "gān",
    "english": "Dry",
    "words": "干净 (clean)、饼干 (biscuit)",
    "idea": "晒干的衣服",
    "emoji": "☀️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "湿",
    "pinyin": "shī",
    "english": "Wet",
    "words": "湿透 (soaked)",
    "idea": "滴水的毛巾",
    "emoji": "💦",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "凉",
    "pinyin": "liáng",
    "english": "Cool",
    "words": "凉快 (cool)、冰凉 (cold)",
    "idea": "吹电风扇",
    "emoji": "🍃",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "热",
    "pinyin": "rè",
    "english": "Hot",
    "words": "热水 (hot water)、热闹 (lively)",
    "idea": "冒汗的太阳",
    "emoji": "🔥",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "暖",
    "pinyin": "nuǎn",
    "english": "Warm",
    "words": "暖和 (warm)、温暖 (warmth)",
    "idea": "围着火炉",
    "emoji": "🧣",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "冷",
    "pinyin": "lěng",
    "english": "Cold",
    "words": "好冷 (cold)、冷淡 (cold)",
    "idea": "发抖的雪人",
    "emoji": "🥶",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "软",
    "pinyin": "ruǎn",
    "english": "Soft",
    "words": "柔软 (soft)、软糖 (gummy)",
    "idea": "软绵绵的棉花糖",
    "emoji": "🧸",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "硬",
    "pinyin": "yìng",
    "english": "Hard",
    "words": "坚硬 (hard)、硬币 (coin)",
    "idea": "硬硬的石头",
    "emoji": "🪨",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "轻",
    "pinyin": "qīng",
    "english": "Light",
    "words": "轻轻 (gently)、年轻 (young)",
    "idea": "飘起的羽毛",
    "emoji": "🪶",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "重",
    "pinyin": "zhòng",
    "english": "Heavy",
    "words": "重要 (important)、沉重 (heavy)",
    "idea": "举起杠铃",
    "emoji": "🏋️",
    "hasSpecialCSS": false,
    "level": "Level 3: 表达期 (150字)"
  },
  {
    "char": "书",
    "pinyin": "shū",
    "english": "Book",
    "words": "看书 (read book)、书包 (schoolbag)",
    "idea": "一本打开的书",
    "emoji": "📖",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "包",
    "pinyin": "bāo",
    "english": "Bag/Bun",
    "words": "书包 (schoolbag)、面包 (bread)",
    "idea": "双肩背包",
    "emoji": "🎒",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "笔",
    "pinyin": "bǐ",
    "english": "Pen",
    "words": "铅笔 (pencil)、画笔 (brush)",
    "idea": "一支铅笔",
    "emoji": "✏️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "尺",
    "pinyin": "chǐ",
    "english": "Ruler",
    "words": "尺子 (ruler)、尺寸 (size)",
    "idea": "一把直尺",
    "emoji": "📏",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "刀",
    "pinyin": "dāo",
    "english": "Knife",
    "words": "小刀 (knife)、剪刀 (scissors)",
    "idea": "削笔刀",
    "emoji": "🔪",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "本",
    "pinyin": "běn",
    "english": "Notebook/Root",
    "words": "作业本 (notebook)、课本 (textbook)",
    "idea": "写字本",
    "emoji": "📒",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "课",
    "pinyin": "kè",
    "english": "Lesson",
    "words": "上课 (class)、课本 (textbook)",
    "idea": "黑板前的老师",
    "emoji": "🏫",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "校",
    "pinyin": "xiào",
    "english": "School",
    "words": "学校 (school)、校园 (campus)",
    "idea": "学校大门",
    "emoji": "🏫",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "师",
    "pinyin": "shī",
    "english": "Teacher",
    "words": "老师 (teacher)、教师 (teacher)",
    "idea": "戴眼镜的老师",
    "emoji": "👩‍🏫",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "生",
    "pinyin": "shēng",
    "english": "Student/Life",
    "words": "学生 (student)、生活 (life)",
    "idea": "背书包的学生",
    "emoji": "🎒",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "友",
    "pinyin": "yǒu",
    "english": "Friend",
    "words": "朋友 (friend)、友好 (friendly)",
    "idea": "两个小朋友拉手",
    "emoji": "🤝",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "学",
    "pinyin": "xué",
    "english": "Study",
    "words": "学习 (study)、同学 (classmate)",
    "idea": "正在看书",
    "emoji": "📝",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "习",
    "pinyin": "xí",
    "english": "Practice",
    "words": "练习 (practice)、习惯 (habit)",
    "idea": "写作业",
    "emoji": "✍️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "词",
    "pinyin": "cí",
    "english": "Word",
    "words": "词语 (word)、歌词 (lyrics)",
    "idea": "两个字连在一起",
    "emoji": "🔤",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "句",
    "pinyin": "jù",
    "english": "Sentence",
    "words": "句子 (sentence)、造句 (make sentence)",
    "idea": "一行字加句号",
    "emoji": "💬",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "故",
    "pinyin": "gù",
    "english": "Story/Old",
    "words": "故事 (story)、故乡 (hometown)",
    "idea": "听故事",
    "emoji": "📖",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "事",
    "pinyin": "shì",
    "english": "Thing/Matter",
    "words": "事情 (matter)、故事 (story)",
    "idea": "正在做的事",
    "emoji": "📋",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "册",
    "pinyin": "cè",
    "english": "Booklet",
    "words": "画册 (album)、手册 (handbook)",
    "idea": "一叠书",
    "emoji": "📚",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "页",
    "pinyin": "yè",
    "english": "Page",
    "words": "页码 (page number)、翻页 (turn page)",
    "idea": "书的一页",
    "emoji": "📄",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "题",
    "pinyin": "tí",
    "english": "Question/Topic",
    "words": "题目 (question)、问题 (problem)",
    "idea": "问号",
    "emoji": "❓",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "操",
    "pinyin": "cāo",
    "english": "Exercise",
    "words": "做操 (exercise)、操场 (playground)",
    "idea": "伸展运动",
    "emoji": "🤸",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "场",
    "pinyin": "chǎng",
    "english": "Field",
    "words": "操场 (playground)、广场 (square)",
    "idea": "宽阔的空地",
    "emoji": "🏟️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "铃",
    "pinyin": "líng",
    "english": "Bell",
    "words": "铃声 (bell ring)、风铃 (wind chime)",
    "idea": "叮铃铃的闹钟",
    "emoji": "🔔",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "队",
    "pinyin": "duì",
    "english": "Team",
    "words": "排队 (queue)、队长 (captain)",
    "idea": "一排小朋友",
    "emoji": "🚶‍♂️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "旗",
    "pinyin": "qí",
    "english": "Flag",
    "words": "红旗 (red flag)、国旗 (national flag)",
    "idea": "飘扬的旗帜",
    "emoji": "🚩",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "班",
    "pinyin": "bān",
    "english": "Class",
    "words": "班级 (class)、上班 (go to work)",
    "idea": "教室里的桌椅",
    "emoji": "🏫",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "级",
    "pinyin": "jí",
    "english": "Grade/Level",
    "words": "年级 (grade)、高级 (high level)",
    "idea": "楼梯台阶",
    "emoji": "📶",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "举",
    "pinyin": "jǔ",
    "english": "Raise",
    "words": "举手 (raise hand)、举重 (weightlifting)",
    "idea": "举手回答问题",
    "emoji": "🙋",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "考",
    "pinyin": "kǎo",
    "english": "Test",
    "words": "考试 (exam)、思考 (think)",
    "idea": "试卷",
    "emoji": "📝",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "试",
    "pinyin": "shì",
    "english": "Try/Test",
    "words": "尝试 (try)、考试 (exam)",
    "idea": "正在答题",
    "emoji": "🧪",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "练",
    "pinyin": "liàn",
    "english": "Practice",
    "words": "练习 (practice)、训练 (train)",
    "idea": "练字",
    "emoji": "🏋️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "功",
    "pinyin": "gōng",
    "english": "Work/Kung Fu",
    "words": "用功 (hardworking)、功夫 (Kung Fu)",
    "idea": "练武术",
    "emoji": "🥋",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "劳",
    "pinyin": "láo",
    "english": "Labor",
    "words": "劳动 (labor)、勤劳 (diligent)",
    "idea": "扫地干活",
    "emoji": "🧹",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "动",
    "pinyin": "dòng",
    "english": "Move",
    "words": "运动 (sport)、动物 (animal)",
    "idea": "奔跑",
    "emoji": "🏃",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "门",
    "pinyin": "mén",
    "english": "Door",
    "words": "大门 (gate)、开门 (open door)",
    "idea": "两扇门",
    "emoji": "🚪",
    "hasSpecialCSS": true,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "窗",
    "pinyin": "chuāng",
    "english": "Window",
    "words": "窗户 (window)、窗帘 (curtain)",
    "idea": "打开的窗户",
    "emoji": "🪟",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "桌",
    "pinyin": "zhuō",
    "english": "Table",
    "words": "桌子 (table)、书桌 (desk)",
    "idea": "四条腿的桌子",
    "emoji": "🪑",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "椅",
    "pinyin": "yǐ",
    "english": "Chair",
    "words": "椅子 (chair)、座椅 (seat)",
    "idea": "有靠背的椅子",
    "emoji": "🪑",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "床",
    "pinyin": "chuáng",
    "english": "Bed",
    "words": "起床 (get up)、床单 (bed sheet)",
    "idea": "铺着被子的床",
    "emoji": "🛏️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "灯",
    "pinyin": "dēng",
    "english": "Lamp",
    "words": "电灯 (lamp)、红绿灯 (traffic light)",
    "idea": "发光的台灯",
    "emoji": "💡",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "伞",
    "pinyin": "sǎn",
    "english": "Umbrella",
    "words": "雨伞 (umbrella)、打伞 (hold umbrella)",
    "idea": "撑开的伞",
    "emoji": "☂️",
    "hasSpecialCSS": true,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "碗",
    "pinyin": "wǎn",
    "english": "Bowl",
    "words": "饭碗 (rice bowl)、洗碗 (wash bowl)",
    "idea": "盛满饭的碗",
    "emoji": "🥣",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "筷",
    "pinyin": "kuài",
    "english": "Chopsticks",
    "words": "筷子 (chopsticks)",
    "idea": "一双筷子",
    "emoji": "🥢",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "盘",
    "pinyin": "pán",
    "english": "Plate",
    "words": "盘子 (plate)、飞盘 (frisbee)",
    "idea": "圆盘子",
    "emoji": "🍽️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "盆",
    "pinyin": "pén",
    "english": "Basin",
    "words": "脸盆 (washbasin)、花盆 (flowerpot)",
    "idea": "装水的盆",
    "emoji": "🪴",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "柜",
    "pinyin": "guì",
    "english": "Cabinet",
    "words": "衣柜 (wardrobe)、柜台 (counter)",
    "idea": "有抽屉的柜子",
    "emoji": "🗄️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "镜",
    "pinyin": "jìng",
    "english": "Mirror",
    "words": "镜子 (mirror)、眼镜 (glasses)",
    "idea": "照镜子",
    "emoji": "🪞",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "箱",
    "pinyin": "xiāng",
    "english": "Box",
    "words": "箱子 (box)、冰箱 (fridge)",
    "idea": "大纸箱",
    "emoji": "📦",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "房",
    "pinyin": "fáng",
    "english": "Room/House",
    "words": "房子 (house)、房间 (room)",
    "idea": "尖顶的小房子",
    "emoji": "🏠",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "院",
    "pinyin": "yuàn",
    "english": "Courtyard",
    "words": "院子 (courtyard)、医院 (hospital)",
    "idea": "围墙里的房子",
    "emoji": "🏥",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "井",
    "pinyin": "jǐng",
    "english": "Well",
    "words": "水井 (water well)",
    "idea": "圆圆的井口",
    "emoji": "🕳️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "家",
    "pinyin": "jiā",
    "english": "Home",
    "words": "回家 (go home)、大家 (everyone)",
    "idea": "房子里有猪(豕)",
    "emoji": "🏠",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "户",
    "pinyin": "hù",
    "english": "Door/Household",
    "words": "户口 (household)、窗户 (window)",
    "idea": "单扇门",
    "emoji": "🚪",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "居",
    "pinyin": "jū",
    "english": "Live",
    "words": "居住 (live)、邻居 (neighbor)",
    "idea": "住在房子里",
    "emoji": "🏘️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "墙",
    "pinyin": "qiáng",
    "english": "Wall",
    "words": "墙壁 (wall)、围墙 (wall)",
    "idea": "砖砌的墙",
    "emoji": "🧱",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "壁",
    "pinyin": "bì",
    "english": "Wall",
    "words": "墙壁 (wall)、壁虎 (gecko)",
    "idea": "墙面",
    "emoji": "🧱",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "瓦",
    "pinyin": "wǎ",
    "english": "Tile",
    "words": "瓦片 (tile)",
    "idea": "屋顶的瓦片",
    "emoji": "🏠",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "砖",
    "pinyin": "zhuān",
    "english": "Brick",
    "words": "砖头 (brick)",
    "idea": "红色的砖块",
    "emoji": "🧱",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "扫",
    "pinyin": "sǎo",
    "english": "Sweep",
    "words": "打扫 (clean)、扫地 (sweep)",
    "idea": "拿扫把",
    "emoji": "🧹",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "帚",
    "pinyin": "zhǒu",
    "english": "Broom",
    "words": "扫帚 (broom)",
    "idea": "扫把",
    "emoji": "🧹",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "巾",
    "pinyin": "jīn",
    "english": "Towel",
    "words": "毛巾 (towel)、纸巾 (tissue)",
    "idea": "挂着的毛巾",
    "emoji": "🧣",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "皂",
    "pinyin": "zào",
    "english": "Soap",
    "words": "肥皂 (soap)",
    "idea": "一块香皂",
    "emoji": "🧼",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "牙",
    "pinyin": "yá",
    "english": "Tooth",
    "words": "牙齿 (tooth)、牙刷 (toothbrush)",
    "idea": "牙齿",
    "emoji": "🦷",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "刷",
    "pinyin": "shuā",
    "english": "Brush",
    "words": "刷牙 (brush teeth)",
    "idea": "牙刷",
    "emoji": "🪥",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "衣",
    "pinyin": "yī",
    "english": "Clothes",
    "words": "衣服 (clothes)、上衣 (jacket)",
    "idea": "一件T恤",
    "emoji": "👕",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "裙",
    "pinyin": "qún",
    "english": "Skirt",
    "words": "裙子 (skirt)、连衣裙 (dress)",
    "idea": "漂亮的裙子",
    "emoji": "👗",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "裤",
    "pinyin": "kù",
    "english": "Pants",
    "words": "裤子 (pants)、短裤 (shorts)",
    "idea": "长裤",
    "emoji": "👖",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "鞋",
    "pinyin": "xié",
    "english": "Shoe",
    "words": "鞋子 (shoe)、运动鞋 (sneakers)",
    "idea": "一只鞋",
    "emoji": "👟",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "帽",
    "pinyin": "mào",
    "english": "Hat",
    "words": "帽子 (hat)、草帽 (straw hat)",
    "idea": "戴帽子",
    "emoji": "🧢",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "袜",
    "pinyin": "wà",
    "english": "Sock",
    "words": "袜子 (sock)",
    "idea": "长筒袜",
    "emoji": "🧦",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "针",
    "pinyin": "zhēn",
    "english": "Needle",
    "words": "打针 (injection)、针线 (needle and thread)",
    "idea": "尖尖的针",
    "emoji": "🪡",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "线",
    "pinyin": "xiàn",
    "english": "Thread/Line",
    "words": "毛线 (wool)、直线 (line)",
    "idea": "一卷线",
    "emoji": "🧵",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "布",
    "pinyin": "bù",
    "english": "Cloth",
    "words": "布料 (cloth)、画布 (canvas)",
    "idea": "一块花布",
    "emoji": "🧶",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "纽",
    "pinyin": "niǔ",
    "english": "Button",
    "words": "纽扣 (button)",
    "idea": "圆扣子",
    "emoji": "🔘",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "扣",
    "pinyin": "kòu",
    "english": "Button/Buckle",
    "words": "扣子 (button)、扣好 (button up)",
    "idea": "扣上扣子",
    "emoji": "🔒",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "袋",
    "pinyin": "dài",
    "english": "Bag/Pocket",
    "words": "口袋 (pocket)、袋子 (bag)",
    "idea": "塑料袋",
    "emoji": "🛍️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "珠",
    "pinyin": "zhū",
    "english": "Pearl/Bead",
    "words": "珍珠 (pearl)、眼珠 (eyeball)",
    "idea": "圆圆的珠子",
    "emoji": "🔮",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "宝",
    "pinyin": "bǎo",
    "english": "Treasure",
    "words": "宝贝 (treasure)、宝石 (gem)",
    "idea": "宝箱",
    "emoji": "💎",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "玉",
    "pinyin": "yù",
    "english": "Jade",
    "words": "玉石 (jade)、玉米 (corn)",
    "idea": "绿色的玉佩",
    "emoji": "🟢",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "器",
    "pinyin": "qì",
    "english": "Tool/Vessel",
    "words": "机器 (machine)、乐器 (instrument)",
    "idea": "工具箱",
    "emoji": "🤖",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "球",
    "pinyin": "qiú",
    "english": "Ball",
    "words": "气球 (balloon)、足球 (soccer)",
    "idea": "圆球",
    "emoji": "⚽",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "绳",
    "pinyin": "shéng",
    "english": "Rope",
    "words": "绳子 (rope)、跳绳 (jump rope)",
    "idea": "打结的绳子",
    "emoji": "🪢",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "棋",
    "pinyin": "qí",
    "english": "Chess",
    "words": "下棋 (play chess)、围棋 (Go)",
    "idea": "棋盘",
    "emoji": "♟️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "牌",
    "pinyin": "pái",
    "english": "Card/Plate",
    "words": "纸牌 (cards)、车牌 (license plate)",
    "idea": "扑克牌",
    "emoji": "🃏",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "钟",
    "pinyin": "zhōng",
    "english": "Clock",
    "words": "时钟 (clock)、闹钟 (alarm)",
    "idea": "挂钟",
    "emoji": "🕰️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "表",
    "pinyin": "biǎo",
    "english": "Watch/Table",
    "words": "手表 (watch)、表格 (table)",
    "idea": "戴在手上的表",
    "emoji": "⌚",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "礼",
    "pinyin": "lǐ",
    "english": "Gift/Manners",
    "words": "礼物 (gift)、有礼貌 (polite)",
    "idea": "礼盒",
    "emoji": "🎁",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "物",
    "pinyin": "wù",
    "english": "Thing",
    "words": "物品 (item)、动物 (animal)",
    "idea": "礼物",
    "emoji": "🎁",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "车",
    "pinyin": "chē",
    "english": "Car",
    "words": "汽车 (car)、火车 (train)",
    "idea": "小轿车",
    "emoji": "🚗",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "船",
    "pinyin": "chuán",
    "english": "Boat",
    "words": "轮船 (ship)、小船 (boat)",
    "idea": "帆船",
    "emoji": "🚢",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "飞",
    "pinyin": "fēi",
    "english": "Fly",
    "words": "飞机 (airplane)",
    "idea": "飞机",
    "emoji": "✈️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "机",
    "pinyin": "jī",
    "english": "Machine",
    "words": "机器 (machine)、手机 (mobile phone)",
    "idea": "机器人",
    "emoji": "🤖",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "站",
    "pinyin": "zhàn",
    "english": "Station",
    "words": "车站 (station)、站台 (platform)",
    "idea": "公交站牌",
    "emoji": "🧍",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "票",
    "pinyin": "piào",
    "english": "Ticket",
    "words": "车票 (ticket)、门票 (ticket)",
    "idea": "一张票",
    "emoji": "🎫",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "路",
    "pinyin": "lù",
    "english": "Road",
    "words": "马路 (road)、走路 (walk)",
    "idea": "宽阔的马路",
    "emoji": "🛣️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "街",
    "pinyin": "jiē",
    "english": "Street",
    "words": "大街 (street)、逛街 (shopping)",
    "idea": "热闹的街道",
    "emoji": "🏙️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "桥",
    "pinyin": "qiáo",
    "english": "Bridge",
    "words": "大桥 (bridge)、天桥 (overpass)",
    "idea": "拱桥",
    "emoji": "🌉",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "村",
    "pinyin": "cūn",
    "english": "Village",
    "words": "农村 (village)、村民 (villager)",
    "idea": "有炊烟的房子",
    "emoji": "🏘️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "乡",
    "pinyin": "xiāng",
    "english": "Countryside",
    "words": "家乡 (hometown)、下乡 (go to countryside)",
    "idea": "田野",
    "emoji": "🌾",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "市",
    "pinyin": "shì",
    "english": "City/Market",
    "words": "城市 (city)、超市 (supermarket)",
    "idea": "高楼大厦",
    "emoji": "🏙️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "店",
    "pinyin": "diàn",
    "english": "Shop",
    "words": "商店 (shop)、书店 (bookstore)",
    "idea": "有招牌的店",
    "emoji": "🏪",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "场",
    "pinyin": "chǎng",
    "english": "Field/Place",
    "words": "商场 (mall)、广场 (square)",
    "idea": "很大的场地",
    "emoji": "🏟️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "园",
    "pinyin": "yuán",
    "english": "Garden",
    "words": "公园 (park)、花园 (garden)",
    "idea": "有花草的园子",
    "emoji": "🏞️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "厂",
    "pinyin": "chǎng",
    "english": "Factory",
    "words": "工厂 (factory)",
    "idea": "冒烟的烟囱",
    "emoji": "🏭",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "医",
    "pinyin": "yī",
    "english": "Doctor",
    "words": "医生 (doctor)、医院 (hospital)",
    "idea": "穿白大褂的人",
    "emoji": "👨‍⚕️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "院",
    "pinyin": "yuàn",
    "english": "Institution",
    "words": "医院 (hospital)、法院 (court)",
    "idea": "红十字标志",
    "emoji": "🏥",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "局",
    "pinyin": "jú",
    "english": "Bureau",
    "words": "邮局 (post office)、警察局 (police station)",
    "idea": "办公楼",
    "emoji": "🏢",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "所",
    "pinyin": "suǒ",
    "english": "Place",
    "words": "厕所 (toilet)、派出所 (police station)",
    "idea": "房子",
    "emoji": "🚻",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "馆",
    "pinyin": "guǎn",
    "english": "Hall",
    "words": "图书馆 (library)、饭馆 (restaurant)",
    "idea": "很大的建筑",
    "emoji": "🏛️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "道",
    "pinyin": "dào",
    "english": "Road/Way",
    "words": "道路 (road)、知道 (know)",
    "idea": "小路",
    "emoji": "🛣️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "巷",
    "pinyin": "xiàng",
    "english": "Lane",
    "words": "小巷 (lane)、巷子 (alley)",
    "idea": "窄窄的胡同",
    "emoji": "🏘️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "哥",
    "pinyin": "gē",
    "english": "Older Brother",
    "words": "哥哥 (older brother)、大哥 (big brother)",
    "idea": "大男孩",
    "emoji": "👦",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "姐",
    "pinyin": "jiě",
    "english": "Older Sister",
    "words": "姐姐 (older sister)、大姐 (big sister)",
    "idea": "大女孩",
    "emoji": "👧",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "弟",
    "pinyin": "dì",
    "english": "Younger Brother",
    "words": "弟弟 (younger brother)、兄弟 (brothers)",
    "idea": "小男孩",
    "emoji": "👶",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "妹",
    "pinyin": "mèi",
    "english": "Younger Sister",
    "words": "妹妹 (younger sister)、姐妹 (sisters)",
    "idea": "扎辫子的小女孩",
    "emoji": "👶",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "伯",
    "pinyin": "bó",
    "english": "Uncle",
    "words": "伯伯 (uncle - father's elder brother)",
    "idea": "年纪大的叔叔",
    "emoji": "👨",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "叔",
    "pinyin": "shū",
    "english": "Uncle",
    "words": "叔叔 (uncle - father's younger brother)",
    "idea": "年轻的叔叔",
    "emoji": "👨",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "姨",
    "pinyin": "yí",
    "english": "Aunt",
    "words": "阿姨 (aunt)、姨妈 (aunt)",
    "idea": "年轻的阿姨",
    "emoji": "👩",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "婆",
    "pinyin": "pó",
    "english": "Grandma",
    "words": "外婆 (grandma)、老婆婆 (old lady)",
    "idea": "老奶奶",
    "emoji": "👵",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "公",
    "pinyin": "gōng",
    "english": "Grandpa/Public",
    "words": "外公 (grandpa)、公园 (park)",
    "idea": "老爷爷",
    "emoji": "👴",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "孩",
    "pinyin": "hái",
    "english": "Child",
    "words": "孩子 (child)、小孩 (kid)",
    "idea": "小朋友",
    "emoji": "🧒",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "娃",
    "pinyin": "wá",
    "english": "Baby/Doll",
    "words": "娃娃 (doll)、女娃 (girl)",
    "idea": "洋娃娃",
    "emoji": "🎎",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "伙",
    "pinyin": "huǒ",
    "english": "Partner",
    "words": "伙伴 (partner)、家伙 (guy)",
    "idea": "两个人",
    "emoji": "👥",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "伴",
    "pinyin": "bàn",
    "english": "Companion",
    "words": "同伴 (companion)、陪伴 (accompany)",
    "idea": "手拉手",
    "emoji": "🤝",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "众",
    "pinyin": "zhòng",
    "english": "Crowd",
    "words": "群众 (crowd)、观众 (audience)",
    "idea": "三个人",
    "emoji": "👨‍👩‍👧",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "亲",
    "pinyin": "qīn",
    "english": "Relative/Kiss",
    "words": "亲人 (relative)、亲亲 (kiss)",
    "idea": "一家人",
    "emoji": "👨‍👩‍👧",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "戚",
    "pinyin": "qī",
    "english": "Relative",
    "words": "亲戚 (relative)",
    "idea": "拜访亲戚",
    "emoji": "👨‍👩‍👧‍👦",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "客",
    "pinyin": "kè",
    "english": "Guest",
    "words": "客人 (guest)、请客 (treat)",
    "idea": "敲门的客人",
    "emoji": "☕",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "主",
    "pinyin": "zhǔ",
    "english": "Host/Main",
    "words": "主人 (host)、公主 (princess)",
    "idea": "房子的主人",
    "emoji": "👑",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "个",
    "pinyin": "gè",
    "english": "Measure word",
    "words": "一个 (one item)、个人 (individual)",
    "idea": "一个苹果",
    "emoji": "1️⃣",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "只",
    "pinyin": "zhī",
    "english": "Measure word",
    "words": "一只鸟 (one bird)",
    "idea": "一只小鸟",
    "emoji": "🐦",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "把",
    "pinyin": "bǎ",
    "english": "Measure word",
    "words": "一把刀 (one knife)、把手 (handle)",
    "idea": "一把伞",
    "emoji": "☂️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "头",
    "pinyin": "tóu",
    "english": "Head/Measure word",
    "words": "一头牛 (one cow)、头发 (hair)",
    "idea": "牛头",
    "emoji": "🐮",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "条",
    "pinyin": "tiáo",
    "english": "Measure word",
    "words": "一条鱼 (one fish)、面条 (noodle)",
    "idea": "长长的线",
    "emoji": "🐟",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "张",
    "pinyin": "zhāng",
    "english": "Measure word",
    "words": "一张纸 (one paper)、张开 (open)",
    "idea": "一张画",
    "emoji": "😮",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "块",
    "pinyin": "kuài",
    "english": "Piece",
    "words": "一块糖 (one candy)、方块 (block)",
    "idea": "积木块",
    "emoji": "🧊",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "颗",
    "pinyin": "kē",
    "english": "Grain",
    "words": "一颗星 (one star)、颗粒 (grain)",
    "idea": "星星",
    "emoji": "⭐",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "棵",
    "pinyin": "kē",
    "english": "Measure word",
    "words": "一棵树 (one tree)",
    "idea": "树",
    "emoji": "🌳",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "支",
    "pinyin": "zhī",
    "english": "Measure word",
    "words": "一支笔 (one pen)",
    "idea": "笔",
    "emoji": "✏️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "串",
    "pinyin": "chuàn",
    "english": "String",
    "words": "一串葡萄 (bunch of grapes)、羊肉串 (kebab)",
    "idea": "糖葫芦",
    "emoji": "🍡",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "群",
    "pinyin": "qún",
    "english": "Group",
    "words": "一群羊 (flock of sheep)、人群 (crowd)",
    "idea": "好多羊",
    "emoji": "🐑",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "双",
    "pinyin": "shuāng",
    "english": "Pair",
    "words": "一双鞋 (pair of shoes)",
    "idea": "两只手",
    "emoji": "2️⃣",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "对",
    "pinyin": "duì",
    "english": "Pair",
    "words": "一对 (pair)、对方 (opponent)",
    "idea": "鸳鸯",
    "emoji": "✔️",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "些",
    "pinyin": "xiē",
    "english": "Some",
    "words": "一些 (some)、这些 (these)",
    "idea": "一堆豆子",
    "emoji": "🔢",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "点",
    "pinyin": "diǎn",
    "english": "Dot/O'clock",
    "words": "一点 (a little)、几点 (what time)",
    "idea": "小圆点",
    "emoji": "•",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "分",
    "pinyin": "fēn",
    "english": "Cent/Minute",
    "words": "一分钱 (one cent)、分数 (score)",
    "idea": "硬币",
    "emoji": "🪙",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "角",
    "pinyin": "jiǎo",
    "english": "Corner/Horn",
    "words": "三角形 (triangle)、牛角 (horn)",
    "idea": "墙角",
    "emoji": "📐",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "元",
    "pinyin": "yuán",
    "english": "Yuan/First",
    "words": "一元钱 (one yuan)、元旦 (New Year's Day)",
    "idea": "钱币",
    "emoji": "💴",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "次",
    "pinyin": "cì",
    "english": "Time",
    "words": "一次 (once)、名次 (ranking)",
    "idea": "第一名",
    "emoji": "1️⃣",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "遍",
    "pinyin": "biàn",
    "english": "Time",
    "words": "一遍 (one time)、遍地 (everywhere)",
    "idea": "重做一次",
    "emoji": "🔁",
    "hasSpecialCSS": false,
    "level": "Level 4: 社会期 (160字)"
  },
  {
    "char": "爱",
    "pinyin": "ài",
    "english": "Love",
    "words": "爱你 (love you)、可爱 (cute)",
    "idea": "爱心",
    "emoji": "❤️",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "喜",
    "pinyin": "xǐ",
    "english": "Like/Happy",
    "words": "喜欢 (like)、欢喜 (joy)",
    "idea": "笑脸",
    "emoji": "😄",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "乐",
    "pinyin": "lè",
    "english": "Happy",
    "words": "快乐 (happy)、可乐 (cola)",
    "idea": "大笑",
    "emoji": "🎵",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "欢",
    "pinyin": "huān",
    "english": "Happy",
    "words": "欢笑 (laugh)、欢迎 (welcome)",
    "idea": "拍手笑",
    "emoji": "🥳",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "怕",
    "pinyin": "pà",
    "english": "Fear",
    "words": "害怕 (afraid)、可怕 (scary)",
    "idea": "发抖",
    "emoji": "😱",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "惊",
    "pinyin": "jīng",
    "english": "Surprise",
    "words": "吃惊 (surprised)、惊喜 (surprise)",
    "idea": "张大嘴",
    "emoji": "😲",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "奇",
    "pinyin": "qí",
    "english": "Strange",
    "words": "奇怪 (strange)、好奇 (curious)",
    "idea": "问号",
    "emoji": "❓",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "忘",
    "pinyin": "wàng",
    "english": "Forget",
    "words": "忘记 (forget)、难忘 (unforgettable)",
    "idea": "挠头想不起来",
    "emoji": "🤔",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "想",
    "pinyin": "xiǎng",
    "english": "Think/Miss",
    "words": "想念 (miss)、想要 (want)",
    "idea": "脑子里的气泡",
    "emoji": "💭",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "念",
    "pinyin": "niàn",
    "english": "Read/Miss",
    "words": "思念 (miss)、读书 (read)",
    "idea": "想家",
    "emoji": "📖",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "怒",
    "pinyin": "nù",
    "english": "Angry",
    "words": "发怒 (angry)、愤怒 (furious)",
    "idea": "生气的脸",
    "emoji": "😡",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "悲",
    "pinyin": "bēi",
    "english": "Sad",
    "words": "悲伤 (sad)、慈悲 (mercy)",
    "idea": "流泪",
    "emoji": "😢",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "愁",
    "pinyin": "chóu",
    "english": "Worry",
    "words": "发愁 (worry)、忧愁 (sorrow)",
    "idea": "皱眉",
    "emoji": "😟",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "愿",
    "pinyin": "yuàn",
    "english": "Wish",
    "words": "愿意 (willing)、心愿 (wish)",
    "idea": "许愿",
    "emoji": "🙏",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "意",
    "pinyin": "yì",
    "english": "Meaning",
    "words": "意思 (meaning)、同意 (agree)",
    "idea": "点点头",
    "emoji": "💡",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "敢",
    "pinyin": "gǎn",
    "english": "Dare",
    "words": "勇敢 (brave)、不敢 (dare not)",
    "idea": "超人",
    "emoji": "🦸",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "望",
    "pinyin": "wàng",
    "english": "Hope/Gaze",
    "words": "希望 (hope)、失望 (disappointed)",
    "idea": "看着远方",
    "emoji": "👀",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "恐",
    "pinyin": "kǒng",
    "english": "Fear",
    "words": "恐龙 (dinosaur)、恐怖 (horror)",
    "idea": "吓人的鬼脸",
    "emoji": "🦖",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "慌",
    "pinyin": "huāng",
    "english": "Panic",
    "words": "惊慌 (panic)、慌张 (flustered)",
    "idea": "乱跑",
    "emoji": "😰",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "悔",
    "pinyin": "huǐ",
    "english": "Regret",
    "words": "后悔 (regret)",
    "idea": "低头叹气",
    "emoji": "🤦",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "恨",
    "pinyin": "hèn",
    "english": "Hate",
    "words": "痛恨 (hate)",
    "idea": "咬牙切齿",
    "emoji": "😠",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "惜",
    "pinyin": "xī",
    "english": "Cherish",
    "words": "可惜 (pity)、爱惜 (cherish)",
    "idea": "捧在手心",
    "emoji": "🤲",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "恋",
    "pinyin": "liàn",
    "english": "Love",
    "words": "留恋 (reluctant to leave)",
    "idea": "依依不舍",
    "emoji": "💑",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "情",
    "pinyin": "qíng",
    "english": "Feeling",
    "words": "心情 (mood)、事情 (matter)",
    "idea": "心",
    "emoji": "❤️",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "感",
    "pinyin": "gǎn",
    "english": "Feel",
    "words": "感动 (moved)、感觉 (feeling)",
    "idea": "流泪",
    "emoji": "😌",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "觉",
    "pinyin": "jué",
    "english": "Feel",
    "words": "觉得 (feel)、睡觉 (sleep - jiào)",
    "idea": "摸脑袋",
    "emoji": "🧠",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "怎",
    "pinyin": "zěn",
    "english": "How",
    "words": "怎么 (how)、怎样 (how)",
    "idea": "摊手",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "什",
    "pinyin": "shén",
    "english": "What",
    "words": "什么 (what)",
    "idea": "问号",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "么",
    "pinyin": "me",
    "english": "Suffix",
    "words": "什么 (what)、怎么 (how)",
    "idea": "问号",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "呢",
    "pinyin": "ne",
    "english": "Particle",
    "words": "你呢 (and you?)",
    "idea": "指向对方",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "吧",
    "pinyin": "ba",
    "english": "Particle",
    "words": "走吧 (let's go)、好吧 (okay)",
    "idea": "挥手",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "吗",
    "pinyin": "ma",
    "english": "Particle",
    "words": "好吗 (okay?)、是吗 (really?)",
    "idea": "问号",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "呀",
    "pinyin": "ya",
    "english": "Particle",
    "words": "来呀 (come on)、好呀 (great)",
    "idea": "感叹号",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "哪",
    "pinyin": "nǎ",
    "english": "Where",
    "words": "哪里 (where)、哪个 (which)",
    "idea": "地图上的定位",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "谁",
    "pinyin": "shéi",
    "english": "Who",
    "words": "是谁 (who is it)",
    "idea": "指着人影",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "几",
    "pinyin": "jǐ",
    "english": "How many",
    "words": "几个 (how many)、几岁 (how old)",
    "idea": "数数",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "许",
    "pinyin": "xǔ",
    "english": "Allow/Maybe",
    "words": "许多 (many)、也许 (maybe)",
    "idea": "点头许可",
    "emoji": "🆗",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "可",
    "pinyin": "kě",
    "english": "Can",
    "words": "可以 (can)、可爱 (cute)",
    "idea": "OK手势",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "乎",
    "pinyin": "hū",
    "english": "Particle",
    "words": "似乎 (seem)、在乎 (care)",
    "idea": "思考",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "哉",
    "pinyin": "zāi",
    "english": "Particle",
    "words": "善哉 (good)",
    "idea": "古人摇头晃脑",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "矣",
    "pinyin": "yǐ",
    "english": "Particle",
    "words": "已矣 (over)",
    "idea": "句号",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "和",
    "pinyin": "hé",
    "english": "And",
    "words": "我和你 (me and you)、和平 (peace)",
    "idea": "握手",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "跟",
    "pinyin": "gēn",
    "english": "With/Follow",
    "words": "跟着 (follow)、脚后跟 (heel)",
    "idea": "脚印",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "比",
    "pinyin": "bǐ",
    "english": "Compare",
    "words": "比较 (compare)、比赛 (match)",
    "idea": "天平",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "很",
    "pinyin": "hěn",
    "english": "Very",
    "words": "很好 (very good)、很多 (many)",
    "idea": "大拇指",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "最",
    "pinyin": "zuì",
    "english": "Most",
    "words": "最好 (best)、最后 (last)",
    "idea": "奖杯",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "更",
    "pinyin": "gèng",
    "english": "More",
    "words": "更好 (better)、更多 (more)",
    "idea": "向上的箭头",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "真",
    "pinyin": "zhēn",
    "english": "Real",
    "words": "真心 (sincere)、真正 (real)",
    "idea": "真心",
    "emoji": "✅",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "因",
    "pinyin": "yīn",
    "english": "Because",
    "words": "因为 (because)、原因 (reason)",
    "idea": "灯泡亮了",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "为",
    "pinyin": "wèi",
    "english": "For",
    "words": "为了 (for)、为什么 (why)",
    "idea": "礼物送给你",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "所",
    "pinyin": "suǒ",
    "english": "Therefore/Place",
    "words": "所以 (therefore)、所有 (all)",
    "idea": "总结",
    "emoji": "🚻",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "以",
    "pinyin": "yǐ",
    "english": "By/So",
    "words": "以为 (thought)、可以 (can)",
    "idea": "思考",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "但",
    "pinyin": "dàn",
    "english": "But",
    "words": "但是 (but)",
    "idea": "转折箭头",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "却",
    "pinyin": "què",
    "english": "But",
    "words": "退却 (retreat)、忘却 (forget)",
    "idea": "后退",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "把",
    "pinyin": "bǎ",
    "english": "Particle",
    "words": "把手 (handle)、把门关上 (close door)",
    "idea": "手拿东西",
    "emoji": "☂️",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "被",
    "pinyin": "bèi",
    "english": "By/Quilt",
    "words": "被子 (quilt)、被打 (hit by)",
    "idea": "盖被子",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "给",
    "pinyin": "gěi",
    "english": "Give",
    "words": "给你 (give you)、送给 (give)",
    "idea": "递礼物",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "对",
    "pinyin": "duì",
    "english": "To/Correct",
    "words": "对面 (opposite)、不对 (wrong)",
    "idea": "面对面",
    "emoji": "✔️",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "从",
    "pinyin": "cóng",
    "english": "From",
    "words": "从前 (before)、跟从 (follow)",
    "idea": "起点",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "向",
    "pinyin": "xiàng",
    "english": "Towards",
    "words": "方向 (direction)、向前 (forward)",
    "idea": "指南针",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "往",
    "pinyin": "wǎng",
    "english": "Towards",
    "words": "来往 (come and go)、往常 (usually)",
    "idea": "双向箭头",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "在",
    "pinyin": "zài",
    "english": "At",
    "words": "在家 (at home)、正在 (doing)",
    "idea": "定位图标",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "当",
    "pinyin": "dāng",
    "english": "When/Serve as",
    "words": "当时 (at that time)、当心 (careful)",
    "idea": "时钟",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "共",
    "pinyin": "gòng",
    "english": "Together",
    "words": "共同 (together)、一共 (total)",
    "idea": "大家手拉手",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "名",
    "pinyin": "míng",
    "english": "Name",
    "words": "名字 (name)、有名 (famous)",
    "idea": "名牌",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "姓",
    "pinyin": "xìng",
    "english": "Surname",
    "words": "姓名 (full name)、百姓 (common people)",
    "idea": "百家姓",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "梦",
    "pinyin": "mèng",
    "english": "Dream",
    "words": "做梦 (dream)、梦想 (dream)",
    "idea": "睡觉时的气泡",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "命",
    "pinyin": "mìng",
    "english": "Life",
    "words": "生命 (life)、救命 (help)",
    "idea": "心跳",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "运",
    "pinyin": "yùn",
    "english": "Luck/Move",
    "words": "运气 (luck)、运动 (sport)",
    "idea": "四叶草",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "力",
    "pinyin": "lì",
    "english": "Power",
    "words": "力量 (power)、用力 (exert force)",
    "idea": "肌肉",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "气",
    "pinyin": "qì",
    "english": "Air/Gas",
    "words": "生气 (angry)、气球 (balloon)",
    "idea": "打气筒",
    "emoji": "💨",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "办",
    "pinyin": "bàn",
    "english": "Do",
    "words": "办法 (method)、办公 (work)",
    "idea": "灯泡",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "法",
    "pinyin": "fǎ",
    "english": "Method/Law",
    "words": "方法 (method)、魔法 (magic)",
    "idea": "魔杖",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "主",
    "pinyin": "zhǔ",
    "english": "Main/Master",
    "words": "主要 (main)、公主 (princess)",
    "idea": "皇冠",
    "emoji": "👑",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "意",
    "pinyin": "yì",
    "english": "Idea",
    "words": "主意 (idea)、意思 (meaning)",
    "idea": "脑子亮了",
    "emoji": "💡",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "消",
    "pinyin": "xiāo",
    "english": "Disappear",
    "words": "消失 (disappear)、消息 (news)",
    "idea": "变没了",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "息",
    "pinyin": "xī",
    "english": "Rest/Breath",
    "words": "休息 (rest)、叹息 (sigh)",
    "idea": "睡觉",
    "emoji": "😌",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "原",
    "pinyin": "yuán",
    "english": "Original",
    "words": "原来 (originally)、草原 (grassland)",
    "idea": "起点",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "因",
    "pinyin": "yīn",
    "english": "Reason",
    "words": "因为 (because)",
    "idea": "问号",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "结",
    "pinyin": "jié",
    "english": "Knot/Result",
    "words": "结束 (end)、打结 (knot)",
    "idea": "绳结",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "果",
    "pinyin": "guǒ",
    "english": "Result/Fruit",
    "words": "结果 (result)、果实 (fruit)",
    "idea": "苹果",
    "emoji": "🍎",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "始",
    "pinyin": "shǐ",
    "english": "Start",
    "words": "开始 (start)",
    "idea": "起跑线",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "终",
    "pinyin": "zhōng",
    "english": "End",
    "words": "终于 (finally)、终点 (finish line)",
    "idea": "终点线",
    "emoji": "",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "赵",
    "pinyin": "zhào",
    "english": "Zhao",
    "words": "赵国 (Zhao State)",
    "idea": "古代旗帜",
    "emoji": "🚩",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "钱",
    "pinyin": "qián",
    "english": "Qian/Money",
    "words": "钱币 (money)、钱包 (wallet)",
    "idea": "金币",
    "emoji": "💰",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "孙",
    "pinyin": "sūn",
    "english": "Sun/Grandchild",
    "words": "孙子 (grandson)、孙悟空 (Monkey King)",
    "idea": "小男孩",
    "emoji": "👶",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "李",
    "pinyin": "lǐ",
    "english": "Li/Plum",
    "words": "李子 (plum)、行李 (luggage)",
    "idea": "李子树",
    "emoji": "🟣",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "周",
    "pinyin": "zhōu",
    "english": "Zhou/Week",
    "words": "周围 (surrounding)、周末 (weekend)",
    "idea": "圆圈",
    "emoji": "⭕",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "吴",
    "pinyin": "wú",
    "english": "Wu",
    "words": "东吴 (Wu Kingdom)",
    "idea": "古代士兵",
    "emoji": "⚔️",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "郑",
    "pinyin": "zhèng",
    "english": "Zheng",
    "words": "郑重 (serious)",
    "idea": "严肃的脸",
    "emoji": "😐",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "王",
    "pinyin": "wáng",
    "english": "Wang/King",
    "words": "国王 (king)、王子 (prince)",
    "idea": "皇冠",
    "emoji": "👑",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "冯",
    "pinyin": "féng",
    "english": "Feng",
    "words": "冯河 (wade across river)",
    "idea": "马在跑",
    "emoji": "🐎",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "陈",
    "pinyin": "chén",
    "english": "Chen",
    "words": "陈旧 (old)",
    "idea": "旧书",
    "emoji": "📚",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "褚",
    "pinyin": "chǔ",
    "english": "Chu",
    "words": "褚衣 (cotton clothes)",
    "idea": "衣服",
    "emoji": "👕",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "卫",
    "pinyin": "wèi",
    "english": "Wei/Guard",
    "words": "卫生 (hygiene)、保卫 (defend)",
    "idea": "盾牌",
    "emoji": "🛡️",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "蒋",
    "pinyin": "jiǎng",
    "english": "Jiang",
    "words": "奖状 (certificate - sound alike)",
    "idea": "奖状",
    "emoji": "🏆",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "沈",
    "pinyin": "shěn",
    "english": "Shen",
    "words": "沈阳 (Shenyang)",
    "idea": "地名",
    "emoji": "🏙️",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "韩",
    "pinyin": "hán",
    "english": "Han",
    "words": "韩国 (Korea)",
    "idea": "国旗",
    "emoji": "🇰🇷",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "杨",
    "pinyin": "yáng",
    "english": "Yang/Poplar",
    "words": "杨树 (poplar tree)",
    "idea": "杨树",
    "emoji": "🌳",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "朱",
    "pinyin": "zhū",
    "english": "Zhu/Vermilion",
    "words": "朱红 (vermilion)",
    "idea": "红色",
    "emoji": "🔴",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "秦",
    "pinyin": "qín",
    "english": "Qin",
    "words": "秦国 (Qin Dynasty)",
    "idea": "兵马俑",
    "emoji": "🗿",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "尤",
    "pinyin": "yóu",
    "english": "You",
    "words": "尤其是 (especially)",
    "idea": "特别",
    "emoji": "🌟",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "许",
    "pinyin": "xǔ",
    "english": "Xu/Allow",
    "words": "许多 (many)、许可 (permit)",
    "idea": "点头",
    "emoji": "🆗",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "何",
    "pinyin": "hé",
    "english": "He/What",
    "words": "为何 (why)、几何 (geometry)",
    "idea": "问号",
    "emoji": "❓",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "吕",
    "pinyin": "lǚ",
    "english": "Lv",
    "words": "吕布 (Lv Bu)",
    "idea": "古代将军",
    "emoji": "🧔",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "施",
    "pinyin": "shī",
    "english": "Shi/Give",
    "words": "施舍 (give alms)、施工 (construction)",
    "idea": "给东西",
    "emoji": "🤲",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "张",
    "pinyin": "zhāng",
    "english": "Zhang/Open",
    "words": "张开 (open)、一张纸 (a paper)",
    "idea": "张嘴",
    "emoji": "😮",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "孔",
    "pinyin": "kǒng",
    "english": "Kong/Hole",
    "words": "孔雀 (peacock)、孔子 (Confucius)",
    "idea": "孔雀开屏",
    "emoji": "🦚",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "曹",
    "pinyin": "cáo",
    "english": "Cao",
    "words": "曹操 (Cao Cao)",
    "idea": "古代丞相",
    "emoji": "🧔",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "严",
    "pinyin": "yán",
    "english": "Yan/Strict",
    "words": "严重 (serious)、严格 (strict)",
    "idea": "严肃",
    "emoji": "😐",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  },
  {
    "char": "华",
    "pinyin": "huá",
    "english": "Hua/Flower",
    "words": "中华 (China)、华丽 (magnificent)",
    "idea": "华表",
    "emoji": "🏯",
    "hasSpecialCSS": false,
    "level": "Level 5: 进阶期 (约120字)"
  }
];