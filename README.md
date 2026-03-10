# 萌芽汉字启蒙 (Moe Hanzi) - 部署指南

这是一个基于 Web 技术构建的静态网页应用，你可以非常方便地将其部署到互联网上，或者在局域网内给孩子使用。

## 方式一：云端部署 (推荐)

使用 Vercel 或 Netlify 等静态托管服务，可以获得最佳的访问速度和体验，且支持从 GitHub 自动更新。

### 使用 Vercel
1.  将代码上传到 GitHub 仓库。
2.  访问 [Vercel](https://vercel.com/) 并使用 GitHub 账号登录。
3.  点击 **"Add New..."** -> **"Project"**。
4.  选择你的 GitHub 仓库。
5.  点击 **"Deploy"**。
6.  等待几秒钟，Vercel 会生成一个类似 `https://moe-hanzi.vercel.app` 的链接，你可以发给家人的手机或 iPad 打开使用。

### 使用 GitHub Pages
1.  将代码上传到 GitHub 仓库。
2.  进入仓库的 **Settings** -> **Pages**。
3.  在 **Build and deployment** 下，选择 **Source** 为 `Deploy from a branch`。
4.  选择 `main` 分支 (或你的主分支) 并保存。
5.  几分钟后，GitHub 会生成一个链接供访问。

## 方式二：局域网部署 (家庭使用)

如果你不想上传代码到公网，只想在家里的 iPad 或电脑上使用，可以在你的电脑上启动一个简单的 Web 服务。

### 前提条件
- 电脑和 iPad 连接在同一个 Wi-Fi 网络下。
- 电脑上安装了 Python 3 (Mac 系统通常自带)。

### 步骤
1.  打开终端 (Terminal)。
2.  进入项目目录：
    ```bash
    cd /Users/bytedance/GolandProjects/xiyun
    ```
3.  启动 HTTP 服务：
    ```bash
    python3 -m http.server 8080
    ```
4.  查看你的电脑 IP 地址：
    - Mac: 按住 Option 点击顶部 Wi-Fi 图标查看 IP 地址 (例如 `192.168.1.5`)。
    - 或者在终端输入 `ipconfig getifaddr en0`。
5.  在 iPad 的 Safari 浏览器中输入：
    ```
    http://192.168.1.5:8080
    ```
    *(请将 192.168.1.5 替换为你实际的电脑 IP)*

## 文件说明
- `index.html`: 主入口文件。
- `style.css`: 样式表。
- `app.js`: 核心逻辑。
- `hanzi_data.js`: 汉字数据源。
- `extract_hanzi.py`: 如果你需要更新汉字数据，修改 `hanzi_content_detailed.md` 后运行此脚本重新生成数据。
