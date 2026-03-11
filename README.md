# 学习进度跟踪工具 📊

一个可视化的学习进度跟踪仪表盘，用于监控2026年AI Agent全栈工程师学习计划的执行情况。

## 🎯 功能特性

### 可视化仪表盘
- **总体进度概览**：圆环图表展示整体学习进度
- **关键指标统计**：代码行数、项目数、文档数、博客数
- **胜任力评估**：AI技术、全栈开发、工程化、RAG四大维度

### 季度规划追踪
- 四个季度的详细目标和进度
- 每个季度的关键任务列表
- 实时进度百分比显示

### 月度行动计划
- 12个月的详细任务清单
- 当前月份高亮显示
- 任务状态实时更新

### 自动化部署
- GitHub Pages自动部署
- 每周一自动更新数据
- 支持手动触发更新

## 🚀 快速开始

### 本地运行

1. 克隆仓库
```bash
git clone https://github.com/attraction11/learning-progress-tracker.git
cd learning-progress-tracker
```

2. 打开index.html
```bash
# 使用VS Code Live Server
# 或直接用浏览器打开index.html
```

3. 查看进度
- 页面会自动加载并显示最新的学习进度数据
- 数据每小时自动刷新一次

### 部署到GitHub Pages

1. 推送到GitHub
```bash
git remote add origin https://github.com/attraction11/learning-progress-tracker.git
git branch -M main
git push -u origin main
```

2. 启用GitHub Pages
- 进入仓库设置
- 选择"Pages"选项卡
- 选择"GitHub Actions"作为部署源

3. 访问站点
```
https://attraction11.github.io/learning-progress-tracker/
```

## 📁 项目结构

```
learning-progress-tracker/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── app.js             # 交互逻辑
├── .github/
│   └── workflows/
│       └── deploy.yml  # 自动部署配置
├── public/            # 静态资源
├── data/              # 数据文件
└── README.md          # 项目说明
```

## 📊 数据更新

### 手动更新进度

编辑`app.js`文件中的`progressData`对象：

```javascript
const progressData = {
    lastUpdate: '2026-03-11 23:30',
    overallProgress: 5,  // 修改总体进度
    stats: {
        codeLines: 150,    // 修改代码行数
        projects: 1,       // 修改项目数
        documents: 3,      // 修改文档数
        blogs: 3          // 修改博客数
    },
    // ... 其他数据
};
```

### 自动化数据更新

1. 创建数据源文件
2. 使用API读取外部数据
3. 实现自动同步机制

## 🎨 自定义主题

### 修改颜色主题

编辑`styles.css`中的CSS变量：

```css
:root {
    --primary-color: #3b82f6;      /* 主色调 */
    --secondary-color: #10b981;    /* 次要色调 */
    --accent-color: #8b5cf6;       /* 强调色 */
    --bg-color: #f8fafc;           /* 背景色 */
    --card-bg: #ffffff;            /* 卡片背景 */
}
```

## 📱 响应式设计

- **桌面端**：1200px及以上，多列网格布局
- **平板端**：768px-1199px，自适应网格
- **移动端**：768px以下，单列布局

## 🔧 技术栈

- **HTML5**：语义化标签
- **CSS3**：现代CSS特性（Grid、Flexbox、动画）
- **JavaScript (ES6+)**：原生JavaScript，零依赖
- **GitHub Actions**：自动化部署

## 📝 开发计划

- [x] 基础UI框架
- [x] 数据可视化组件
- [x] 响应式设计
- [x] GitHub Pages部署配置
- [ ] 数据源文件创建
- [ ] API接口开发
- [ ] 历史数据对比功能
- [ ] 数据导出功能

## 🤝 贡献

欢迎提交问题和拉取请求！

## 📄 许可证

MIT License

## 📧 联系方式

- 作者：良 (Y X-ray)
- 项目链接：https://github.com/attraction11/learning-progress-tracker
- 相关博客：https://attraction11.github.io/2026/03/11/2026-fullstack-monthly-planning/

---

**注意**：此项目是2026年AI Agent全栈工程师学习计划的可视化跟踪工具。更多详细内容请参考相关博客文章。