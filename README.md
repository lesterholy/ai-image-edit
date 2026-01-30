# AI-Image-Edit - 专业级 AI 图片生成与编辑平台

[![Version](https://img.shields.io/badge/version-v2.0.0-blue.svg)](./VERSION)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)](https://reactjs.org/)
[![Fabric.js](https://img.shields.io/badge/Fabric.js-7.0.0-orange.svg)](http://fabricjs.com/)

[English](./README_EN.md) | 中文

> 🎨 一个功能强大的 AI 驱动图片生成与编辑 Web 应用，支持多图层系统、智能选区工具、浏览器端 AI 抠图和多种 AI 模型接入。

## ✨ 项目简介

**AI-Image-Edit** 是一个专业级的图片编辑工具，结合了 AI 图片生成能力和传统图形编辑功能。它支持精准的局部编辑、多图层管理、智能选区和浏览器端 AI 处理，让您无需专业设计软件即可完成复杂的图片编辑任务。

### 核心优势

- 🎯 **精准局部编辑** - 使用遮罩进行像素级精准编辑，保持原图风格
- 🗂️ **多图层系统** - 支持无限图层叠加，独立管理每一层内容
- 🖌️ **专业选区工具** - 四种选区工具（矩形、自由套索、多边形套索、磁性套索）
- 🤖 **浏览器端 AI** - 本地运行的背景移除功能，无需上传图片
- 🌐 **多模型支持** - 兼容 OpenAI、Gemini 及自定义模型
- 🎨 **无限画布** - 提供无限工作空间，支持缩放和平移
- 💾 **零配置启动** - 支持本地开发和 Docker 一键部署

---

## 📸 作品展示

### V2 版本作品

<div align="center">
<img width="633" alt="多图层编辑示例" src="https://github.com/user-attachments/assets/97108237-77a2-4d34-bf37-e537b98e2585" />
<p><i>多图层系统与选区工具</i></p>

<img width="1521" alt="AI生成示例" src="https://github.com/user-attachments/assets/2564e09d-e795-4296-98ea-cee7fe8c44a4" />
<p><i>文字生成图片</i></p>

<img width="1523" alt="局部编辑示例" src="https://github.com/user-attachments/assets/63f1434f-0fcd-497a-8bbd-ab07e49a96c2" />
<p><i>局部遮罩编辑</i></p>

<img width="1527" alt="抠图功能" src="https://github.com/user-attachments/assets/46f60727-1475-4f6b-aa86-cd189722577b" />
<p><i>AI 背景移除</i></p>

<img width="1706" alt="无限画布" src="https://github.com/user-attachments/assets/c2410025-579c-4856-866f-41e3e6a8bbf6" />
<p><i>无限画布工作区</i></p>
</div>

<details>
<summary>查看 V1 版本作品</summary>

<div align="center">
<img width="1920" alt="V1作品1" src="https://github.com/user-attachments/assets/ece324f0-573d-452e-a976-afdb326e8de4" />
<img width="1920" alt="V1作品2" src="https://github.com/user-attachments/assets/d245e284-741c-4036-a803-fa86ec185c06" />
<img width="1824" alt="V1作品3" src="https://github.com/user-attachments/assets/9ebf0442-00ec-49ae-bde9-14330b280b46" />
</div>

</details>

---

## 🚀 快速开始

### 前置要求

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 或 **Docker** (可选)
- **AI API Key** (OpenAI 兼容格式或 Gemini API)

### 方式一：本地开发 (推荐)

```bash
# 1. 克隆项目
git clone https://github.com/chunxiuxiamo/ai-image-edit.git
cd ai-image-edit

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 浏览器访问
# http://localhost:5173
```

### 方式二：Docker 部署

```bash
# 1. 克隆项目
git clone https://github.com/chunxiuxiamo/ai-image-edit.git
cd ai-image-edit

# 2. 首次构建并启动
docker-compose up -d --build

# 3. 后续启动
docker-compose up -d

# 4. 停止服务
docker-compose down

# 5. 浏览器访问
# http://localhost:8890
```

### 初次使用配置

1. 打开应用后，点击右侧控制面板的 **API 配置** 区域
2. 填写您的 API 配置：
   - **Base URL**: API 服务地址 (如 `https://api.openai.com` 或自定义代理)
   - **API Key**: 您的 API 密钥
   - **Model**: 选择或添加模型 (如 `gemini-2.5-flash-image`)
3. 配置将自动保存到浏览器本地存储

---

## 🎨 核心功能

### 1. AI 图片生成

**从文字到图片，一键生成高质量图像**

- ✅ 支持多种分辨率：1K / 2K / 4K 或自定义尺寸
- ✅ 11 种预设宽高比：1:1, 16:9, 9:16, 4:3, 3:4, 21:9 等
- ✅ 多模型支持：
  - Gemini 系列 (gemini-2.5-flash-image, gemini-3-pro-image-preview)
  - Nano-banana 系列 (nano-banana-2, 2-2k, 2-4k)
  - 自定义模型 (支持动态添加)
- ✅ 提示词模板：内置多种场景预设，快速生成专业提示词

**使用方法**：
1. 确保应用处于 **生成模式** (Generate)
2. 在提示词输入框输入描述 (支持中英文)
3. 选择图片尺寸和宽高比
4. 点击 **生成图片** 按钮
5. 生成的图片自动添加为新图层

### 2. 图片局部编辑

**精准编辑图片的指定区域，保持其他部分不变**

#### 遮罩编辑模式
使用绘图工具创建遮罩，AI 仅修改遮罩区域：

- **画笔工具** - 自由绘制遮罩区域
- **矩形工具** - 快速框选矩形区域（按住 Shift 绘制正方形）
- **橡皮擦** - 擦除已绘制的遮罩
- **多区域编辑** - 同时框选多个区域，分别指定编辑指令

#### 对话式编辑模式 (Chat Models)
对于支持的模型（如 `gemini-3-pro-image-preview`），无需遮罩即可进行整图编辑：

- 直接描述想要的改变
- AI 理解上下文并精准修改
- 支持连续对话，逐步优化图片

**使用方法**：
1. 上传图片或选择已生成的图层
2. 切换到 **编辑模式** (Edit)
3. 选择绘图工具，标记要修改的区域
4. 输入编辑指令（如 "把天空改成日落色"）
5. 点击 **编辑图片** 按钮
6. 编辑结果替换当前图层

### 3. 多图层系统

**像 Photoshop 一样管理多个图层**

- 🗂️ **图层面板** - 左侧显示所有图层缩略图
- 👁️ **显示/隐藏** - 控制图层可见性
- 🔒 **锁定/解锁** - 防止误操作
- ⬆️⬇️ **调整顺序** - 改变图层叠放次序
- ✏️ **重命名** - 双击图层名称进行重命名
- 🗑️ **删除图层** - 一键删除不需要的图层
- 💾 **单独下载** - 按原始格式导出任意图层

**图层操作快捷键**：
- 点击图层缩略图：选中图层
- 双击图层名称：重命名
- 拖拽图层：调整位置（在画布中）

### 4. 专业选区工具

**四种选区工具满足不同场景需求**

#### 矩形选区 (Rectangle)
- 快速框选规则区域
- 按住 **Shift** 键绘制正方形
- 支持多区域同时选择
- 生成结构化 JSON 提示词

#### 自由套索 (Free Lasso)
- 手绘任意形状选区
- 适合不规则物体轮廓
- 自动闭合路径

#### 多边形套索 (Polygonal Lasso)
- 点击创建多边形顶点
- 适合直线边缘物体
- 按 **Enter** 完成选区
- 按 **Escape** 取消绘制

#### 磁性套索 (Magnetic Lasso) ⭐
- **智能边缘检测**，自动吸附物体轮廓
- 基于 Sobel 算子的梯度计算
- 20 像素搜索半径，强度阈值 50
- 适合高对比度边缘

**选区工具操作**：
1. 点击工具栏选择工具
2. 在画布上绘制选区
3. 完成后可以：
   - **生成遮罩** - 转换为白色遮罩图层
   - **抠图** - 提取选区内容为新图层
   - **删除** - 移除选区

### 5. AI 背景移除

**浏览器端运行的高质量抠图功能**

- 🧠 基于 ONNX Runtime 的深度学习模型
- 🔒 完全本地处理，保护隐私
- 📊 实时进度显示（模型加载 + 推理进度）
- 🎯 高精度抠图，支持复杂背景
- 💾 输出透明 PNG，自动添加为新图层

**使用方法**：
1. 在图层面板选择要抠图的图层
2. 点击图层菜单中的 **AI 抠图** 按钮
3. 等待模型加载（首次使用需下载约 50MB 模型）
4. 处理完成后，透明背景图层自动添加

**注意**：首次使用需要下载模型文件，请确保网络连接稳定。

### 6. 无限画布

**专业级的画布操作体验**

- 🖼️ **无限工作空间** - 不受画布尺寸限制
- 🔍 **智能缩放** - 鼠标滚轮缩放，保持光标位置
- ✋ **平移导航** - 按住 **空格键 + 拖拽** 平移视图
- 📐 **缩放控制**：
  - **适应视图** - 一键自动缩放到最佳比例
  - **1:1 显示** - 查看图片实际像素
  - **自由缩放** - 鼠标滚轮控制（10% - 500%）
- 🎯 **实时坐标** - 显示鼠标位置和缩放比例

**画布快捷键**：
- `Space + 拖拽` - 平移画布
- `鼠标滚轮` - 缩放
- `Ctrl + Z` - 撤销
- `Ctrl + Shift + Z` - 重做

### 7. 历史记录

- ↩️ **撤销/重做** - 支持 80 步操作历史
- 💾 **智能快照** - 自动保存操作状态
- ⚡ **快速恢复** - 使用 requestAnimationFrame 优化性能

---

## 📖 使用教程

### 教程 1：生成图片并局部编辑

**场景**：生成一张风景图，然后修改天空颜色

```
步骤：
1. 确保在"生成模式"
2. 输入提示词："一座雪山，蓝天白云，高清摄影"
3. 选择尺寸 2K (2048x2048) 和宽高比 16:9
4. 点击"生成图片"，等待结果
5. 切换到"编辑模式"
6. 选择"画笔工具"，涂抹天空区域
7. 输入编辑指令："将天空改为日落的橙红色"
8. 点击"编辑图片"
9. 编辑完成后，下载图层
```

### 教程 2：使用磁性套索精确抠图

**场景**：从照片中精准提取人物

```
步骤：
1. 上传包含人物的照片
2. 选择"磁性套索"工具
3. 点击人物轮廓，工具会自动吸附边缘
4. 沿着人物轮廓点击，完成选区
5. 点击"生成遮罩"按钮
6. 在图层面板找到新生成的遮罩层
7. 使用遮罩层进行后续编辑或导出
```

### 教程 3：多图层合成

**场景**：制作多层海报效果

```
步骤：
1. 生成背景图层（如森林场景）
2. 生成前景元素（如动物）
3. 使用"AI 抠图"移除前景元素背景
4. 在图层面板调整图层顺序
5. 使用选择工具调整前景位置和大小
6. 锁定背景图层防止误操作
7. 继续添加文字或其他图层
8. 下载最终合成结果
```

### 教程 4：批量区域编辑

**场景**：同时修改图片中的多个位置

```
步骤：
1. 选择要编辑的图层
2. 切换到"编辑模式"
3. 选择"矩形工具"
4. 在图片上框选第一个区域（如商品 A）
5. 继续框选第二个区域（如商品 B）
6. 在控制面板的"区域编辑"中：
   - 区域 1 指令："改为红色"
   - 区域 2 指令："改为蓝色"
7. 点击"生成提示词"查看结构化 JSON
8. 点击"编辑图片"执行批量修改
```

---

## ⚙️ API 配置指南

### 支持的 API 格式

本应用兼容三种 API 格式：

#### 1. OpenAI 标准格式

适用于 OpenAI 及其兼容服务（如 Azure OpenAI、OneAPI 等）

```javascript
// 图片生成端点
POST https://api.openai.com/v1/images/generations

// 图片编辑端点
POST https://api.openai.com/v1/images/edits

// 请求头
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

**配置示例**：
```
Base URL: https://api.openai.com
API Key: sk-proj-xxxxxxxxxxxxx
Model: dall-e-3
```

#### 2. Gemini 原生格式

Google Gemini 专用格式，需启用"使用 Gemini 原生接口"选项

```javascript
// 端点
POST https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent

// 请求头
Authorization: Bearer YOUR_GEMINI_API_KEY
Content-Type: application/json
```

**配置示例**：
```
Base URL: https://generativelanguage.googleapis.com
API Key: AIzaSyxxxxxxxxxxxxx
Model: gemini-2.5-flash-image
✅ 勾选"使用 Gemini 原生接口"
```

#### 3. Chat Completions 格式

用于支持多模态的聊天模型（如 GPT-4V、Gemini Pro Vision）

```javascript
POST https://api.openai.com/v1/chat/completions
```

**适用模型**：`gemini-3-pro-image-preview` (自动识别)

### 自定义模型配置

**添加自定义模型**：
1. 点击模型选择器中的"自定义模型"
2. 输入模型名称（如 `my-custom-model`）
3. 点击"添加"
4. 模型将保存到本地列表

**删除自定义模型**：
- 点击模型右侧的 ❌ 按钮

### 常用服务商配置

<details>
<summary><b>OpenAI 官方</b></summary>

```
Base URL: https://api.openai.com
Model: dall-e-3
备注: 需要国际网络访问
```
</details>

<details>
<summary><b>Google Gemini</b></summary>

```
Base URL: https://generativelanguage.googleapis.com
Model: gemini-2.5-flash-image
✅ 使用 Gemini 原生接口
备注: 需要 Google AI Studio API Key
```
</details>

<details>
<summary><b>第三方代理服务</b></summary>

```
Base URL: https://your-proxy.com
Model: gemini-2.5-flash-image (或其他)
备注: 根据代理商文档配置
```
</details>

### 环境变量配置（可选）

如需预设 API 配置，可在部署时设置环境变量：

```bash
# .env.local
VITE_API_BASE_URL=https://api.openai.com
VITE_DEFAULT_MODEL=dall-e-3
```

---

## 🛠️ 技术栈

### 前端框架与库

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.2.0 | UI 框架 |
| Vite | 5.4.11 | 构建工具 |
| Fabric.js | 7.0.0 | Canvas 引擎 |
| Tailwind CSS | 4.1.18 | 样式框架 |
| lucide-react | 0.562.0 | 图标库 |

### AI 与图像处理

| 库 | 版本 | 用途 |
|----|------|------|
| @imgly/background-removal | 1.7.0 | 浏览器端背景移除 |
| onnxruntime-web | 1.20.1 | ONNX 模型推理引擎 |

### 开发工具

- **ESLint** - 代码规范检查
- **PostCSS** - CSS 处理器
- **Docker** - 容器化部署

### 部署架构

```
┌─────────────────────────────────────┐
│         Nginx (1.27-alpine)         │
│     静态文件服务 + 反向代理         │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│      React SPA (Production Build)   │
│   - 代码分割与懒加载                │
│   - Gzip 压缩                       │
│   - 缓存策略优化                    │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│     AI API (OpenAI / Gemini)        │
│   - 图片生成                        │
│   - 图片编辑                        │
└─────────────────────────────────────┘
```

---

## 🔧 开发指南

### 项目结构

```
ai-image-edit/
├── src/
│   ├── components/          # React 组件
│   │   ├── CanvasEditor.jsx   # 画布编辑器（核心）
│   │   ├── ControlPanel.jsx   # 右侧控制面板
│   │   ├── LayerPanel.jsx     # 左侧图层面板
│   │   ├── Layout.jsx         # 布局组件
│   │   └── ui/                # UI 基础组件
│   ├── lib/                 # 工具库
│   │   ├── api.js            # API 调用逻辑
│   │   ├── backgroundRemoval.js  # AI 抠图
│   │   ├── edgeDetection.js   # 边缘检测
│   │   └── utils.js          # 通用工具
│   ├── App.jsx              # 根组件
│   └── main.jsx             # 入口文件
├── public/                  # 静态资源
├── nginx/                   # Nginx 配置
├── Dockerfile              # Docker 镜像构建
├── docker-compose.yml      # Docker Compose 配置
└── vite.config.js          # Vite 配置
```

### 本地开发命令

```bash
# 开发服务器（热重载）
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint

# 代码格式化（如果配置了）
npm run format
```

### 添加新功能

#### 添加新的绘图工具

1. **在 `CanvasEditor.jsx` 中添加工具模式**
```javascript
const [drawMode, setDrawMode] = useState('new-tool');
```

2. **实现工具逻辑**
```javascript
useEffect(() => {
  if (drawMode === 'new-tool') {
    canvas.on('mouse:down', handleNewToolMouseDown);
    // ... 其他事件
  }
}, [drawMode]);
```

3. **添加工具栏按钮**
```jsx
<Button onClick={() => setDrawMode('new-tool')}>
  <NewToolIcon />
</Button>
```

#### 添加新的 API 提供商

1. **在 `lib/api.js` 中添加响应解析逻辑**
```javascript
const extractBase64FromNewProvider = (payload) => {
  // 解析新提供商的响应格式
  return { mimeType: 'image/png', base64: '...' };
};
```

2. **在 `extractBase64ImageFromChat` 中集成**
```javascript
// 尝试新提供商格式
const newProviderResult = extractBase64FromNewProvider(data);
if (newProviderResult) return newProviderResult;
```

### 代码规范

- 使用 **ES6+** 语法
- 组件使用 **函数式组件 + Hooks**
- 遵循 **ESLint** 配置
- CSS 使用 **Tailwind 工具类**优先
- 提交信息遵循 **Conventional Commits**

---

## ❓ 常见问题 (FAQ)

<details>
<summary><b>Q1: 为什么生成/编辑图片失败？</b></summary>

**可能原因**：
1. **API Key 无效** - 检查 API Key 是否正确
2. **网络问题** - 确保能访问 API 服务
3. **余额不足** - 检查 API 账户余额
4. **模型不支持** - 确认模型名称正确且支持图片生成

**解决方法**：
- 打开浏览器控制台（F12）查看详细错误信息
- 测试 API 连接：`curl -H "Authorization: Bearer YOUR_KEY" YOUR_BASE_URL`
- 尝试切换到其他模型
</details>

<details>
<summary><b>Q2: 图片编辑时为何改变了不想修改的部分？</b></summary>

**原因**：复杂图片中，AI 模型可能难以精确理解遮罩边界，导致影响到邻近区域。

**优化建议**：
1. **扩大遮罩范围** - 留出更多安全边距
2. **使用更精确的描述** - 如"仅修改遮罩内的天空，保持其他区域不变"
3. **分步编辑** - 将复杂编辑拆分为多次简单编辑
4. **使用对话模型** - `gemini-3-pro-image-preview` 等模型更智能
5. **预览遮罩** - 点击"预览遮罩"检查遮罩是否准确
</details>

<details>
<summary><b>Q3: AI 抠图功能加载很慢？</b></summary>

**原因**：首次使用需要下载约 50MB 的 ONNX 模型文件。

**解决方法**：
- 确保网络连接稳定
- 模型下载后会缓存到浏览器，后续使用无需重复下载
- 如果下载失败，清除浏览器缓存后重试
</details>

<details>
<summary><b>Q4: Docker 部署后无法访问？</b></summary>

**检查项**：
1. 容器是否正常运行：`docker-compose ps`
2. 端口是否被占用：`lsof -i :8890`
3. 防火墙是否放行 8890 端口
4. 查看容器日志：`docker-compose logs -f`

**常见问题**：
- **端口冲突** - 修改 `docker-compose.yml` 中的端口映射
- **构建失败** - 删除旧镜像后重新构建：`docker-compose build --no-cache`
</details>

<details>
<summary><b>Q5: 如何添加自定义模型？</b></summary>

**步骤**：
1. 点击模型选择器
2. 选择"自定义模型"选项
3. 输入模型标识符（如 `my-custom-model:latest`）
4. 点击"添加"按钮
5. 模型将出现在列表中，可直接选择使用

**要求**：
- 模型必须兼容 OpenAI API 格式
- Base URL 需指向支持该模型的服务
</details>

<details>
<summary><b>Q6: 图层太多导致性能下降？</b></summary>

**优化建议**：
1. **删除不需要的图层** - 定期清理历史图层
2. **锁定静态图层** - 锁定不再编辑的图层减少渲染负担
3. **隐藏非活动图层** - 暂时隐藏不需要显示的图层
4. **合并图层** - 导出多图层后重新导入为单一图层
5. **降低分辨率** - 使用较低分辨率的图片
</details>

<details>
<summary><b>Q7: 如何保存项目进度？</b></summary>

**当前版本**：暂不支持项目保存功能（计划中）

**临时方案**：
1. 在图层面板逐个下载重要图层
2. API 配置会自动保存到浏览器 localStorage
3. 建议定期导出图层避免数据丢失

**未来规划**：
- 项目文件导入/导出（.aip 格式）
- 云端同步（需要账户系统）
</details>

---

## 🗺️ Roadmap

### 近期计划 (Q2 2026)

- [ ] **项目保存/加载** - 支持 .aip 格式
- [ ] **快捷键配置** - 自定义快捷键
- [ ] **图层分组** - 文件夹式管理
- [ ] **滤镜效果** - 内置常用滤镜（模糊、锐化、色调调整等）
- [ ] **文本图层** - 添加文字标注功能

### 中期计划 (Q3-Q4 2026)

- [ ] **批处理** - 批量应用编辑到多张图片
- [ ] **插件系统** - 支持第三方插件扩展
- [ ] **协作功能** - 多人实时协作编辑
- [ ] **移动端适配** - 响应式布局优化
- [ ] **离线模式** - PWA 支持

### 长期计划 (2027)

- [ ] **3D 图层支持** - Three.js 集成
- [ ] **视频编辑** - 逐帧编辑功能
- [ ] **AI 训练** - 自定义 LoRA 模型训练
- [ ] **云端渲染** - 高性能云端处理

---

## 🤝 贡献指南

我们欢迎各种形式的贡献！无论是报告 Bug、提出功能建议还是提交代码，都非常感谢。

### 如何贡献

1. **Fork 本仓库**
2. **创建特性分支**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **提交更改**
   ```bash
   git commit -m 'feat: Add some AmazingFeature'
   ```
4. **推送到分支**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **开启 Pull Request**

### 贡献方向

#### 🎨 功能开发
- 新的绘图工具和选区工具
- 图层效果和滤镜
- AI 模型集成（Stable Diffusion、Midjourney 等）
- 导入/导出格式支持（PSD、XCF 等）

#### 🐛 Bug 修复
- 性能优化
- 边缘情况处理
- 跨浏览器兼容性

#### 📝 文档改进
- 教程和使用指南
- API 文档
- 视频教程

#### 🌍 国际化
- 多语言翻译（英语、日语、韩语等）
- UI 文本提取
- 本地化测试

#### 🎓 案例分享
- 在 `examples/` 目录分享您的作品
- 编写最佳实践文档
- 制作视频教程

### 开发规范

- 遵循现有代码风格
- 添加必要的注释和文档
- 编写测试用例（如适用）
- 确保所有测试通过
- 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)

### 行为准则

请遵守 [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/)，维护友好、包容的社区氛围。

---

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。

### 您可以自由地

- ✅ **商业使用** - 用于商业项目和产品
- ✅ **修改** - 修改源代码以适应需求
- ✅ **分发** - 分享给他人或公开发布
- ✅ **私用** - 私下使用不公开

### 您需要

- 📋 **保留版权声明** - 保留原作者版权信息
- 📋 **保留许可证** - 附带 MIT License 副本

### 免责声明

本软件"按原样"提供，不提供任何明示或暗示的保证。作者不对使用本软件造成的任何损害负责。

---

## 🙏 致谢

感谢以下开源项目和服务：

- [React](https://reactjs.org/) - 强大的 UI 框架
- [Fabric.js](http://fabricjs.com/) - Canvas 操作库
- [Tailwind CSS](https://tailwindcss.com/) - 实用的 CSS 框架
- [Vite](https://vitejs.dev/) - 快速的构建工具
- [@imgly/background-removal](https://github.com/imgly/background-removal-js) - 背景移除库
- [Lucide Icons](https://lucide.dev/) - 精美的图标库

---

## 📞 联系方式

- **问题反馈**: [GitHub Issues](https://github.com/chunxiuxiamo/ai-image-edit/issues)
- **功能建议**: [GitHub Discussions](https://github.com/chunxiuxiamo/ai-image-edit/discussions)
- **项目主页**: [https://github.com/chunxiuxiamo/ai-image-edit](https://github.com/chunxiuxiamo/ai-image-edit)
- **作者**: [@chunxiuxiamo](https://github.com/chunxiuxiamo)

### 个人微信

![微信二维码](https://github.com/user-attachments/assets/4d601a83-d19e-48e2-85f6-f36d957cebfc)

---

## ⭐ Star History

如果这个项目对您有帮助，请点击右上角的 ⭐ Star 支持一下！

[![Star History Chart](https://api.star-history.com/svg?repos=chunxiuxiamo/ai-image-edit&type=Date)](https://star-history.com/#chunxiuxiamo/ai-image-edit&Date)

---

<div align="center">

**[⬆ 回到顶部](#ai-image-edit---专业级-ai-图片生成与编辑平台)**

Made with ❤️ by [chunxiuxiamo](https://github.com/chunxiuxiamo)

</div>
