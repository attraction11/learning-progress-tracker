# AI Agent学习进度跟踪工具 📊

> **重构版本**：2026-03-13  
> **学习模式**：产品驱动学习  
> **目标岗位**：AI Agent全栈工程师（12-30K）  
> **在线访问**：https://attraction11.github.io/learning-progress-tracker/

## 🎯 重构亮点

### **全新导航架构**
- **5个独立页面**：大纲 | 产品 | 进度 | 能力评估 | 学习资源
- **单页面应用**：流畅的页面切换体验
- **响应式设计**：完美适配桌面和移动端

### **核心功能模块**
1. **大纲页**：技术知识树，可展开/折叠查看详细技能点
2. **产品页**：AI Agent平台迭代计划和完成状态
3. **进度页**：已掌握技能和产品交付记录
4. **能力评估页**：月度评估结果（雷达图可视化）
5. **学习资源页**：精选资源链接，按技术分类

### **技术升级**
- **现代化UI**：基于Ant Design设计语言
- **数据可视化**：Chart.js雷达图展示能力成长
- **实时数据**：从学习大纲和项目计划同步数据
- **GitHub Pages**：自动部署，实时更新

## 🚀 快速访问

### **在线版本**
- **主页面**：https://attraction11.github.io/learning-progress-tracker/
- **GitHub仓库**：https://github.com/attraction11/learning-progress-tracker

### **本地运行**
```bash
# 克隆仓库
git clone https://github.com/attraction11/learning-progress-tracker.git
cd learning-progress-tracker

# 直接打开index.html
# 或使用本地服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

## 📋 页面功能详解

### **1. 大纲页 - 技术知识树**
- **结构**：4大模块（AI核心技术、全栈开发能力、AI-First Workflow、产品化能力）
- **交互**：点击展开/折叠详细技能点
- **进度**：每个技能点显示掌握百分比
- **数据源**：`AI-Agent-Fullstack-Outline.md`

### **2. 产品页 - 迭代看板**
- **项目**：AI Agent平台（产品驱动学习）
- **阶段**：3个迭代阶段（基础框架、功能完善、高级功能）
- **状态**：计划中/进行中/已完成
- **功能**：每个迭代的详细功能列表
- **数据源**：`PROJECT-PLAN.md`

### **3. 进度页 - 学习跟踪**
- **统计数据**：代码行数、项目数、文档数、学习小时
- **已掌握技能**：按类别展示已掌握的技能
- **时间线**：每周学习进度记录

### **4. 能力评估页 - 雷达图**
- **5大核心能力**：AI技术深度、全栈工程能力、AI-First工作流、产品化思维、软技能综合
- **可视化**：Chart.js雷达图展示月度评估
- **改进重点**：每月识别需要改进的领域
- **下月重点**：明确下月学习方向

### **5. 学习资源页 - 资源库**
- **分类**：AI Agent技术、前端技术、后端技术、工程化、学习资源
- **资源类型**：文档、教程、开源项目、工具
- **链接**：直接访问精选学习资源

## 🔧 技术栈

### **前端技术**
- **核心**：原生JavaScript + HTML5 + CSS3
- **路由**：Hash路由（单页面应用）
- **图表**：Chart.js（雷达图可视化）
- **图标**：Font Awesome 6.4.0
- **设计**：自定义CSS，基于Ant Design设计语言

### **开发工具**
- **版本控制**：Git + GitHub
- **部署**：GitHub Pages
- **代码规范**：ESLint + Prettier（推荐）

### **数据源**
- **大纲数据**：`AI-Agent-Fullstack-Outline.md`
- **产品数据**：`PROJECT-PLAN.md`
- **进度数据**：本地JSON数据模型
- **评估数据**：月度评估记录

## 📁 项目结构

```
learning-progress-tracker/
├── index.html              # 主入口文件（SPA架构）
├── styles.css              # 主样式文件（现代化UI）
├── app.js                  # 主JavaScript逻辑（数据+路由+渲染）
├── README.md               # 项目说明文档
├── .gitignore              # Git忽略配置
└── .github/                # GitHub配置
    └── workflows/          # GitHub Actions工作流
```

## 🔄 数据同步机制

### **自动同步**
```javascript
// 从学习大纲同步数据
const outlineData = fetchFromOutlineMD();
// 从项目计划同步数据  
const productData = fetchFromProjectPlanMD();
// 更新本地数据模型
updateLocalData(outlineData, productData);
```

### **手动更新**
1. 修改`app.js`中的数据模型
2. 提交更改到GitHub
3. GitHub Pages自动部署更新

## 🎨 设计理念

### **产品驱动学习**
- **核心**：通过构建AI Agent平台来学习技术
- **目标**：在实战中掌握AI Agent全栈技能
- **评估**：每月评估能力成长，调整学习重点

### **可视化跟踪**
- **进度可视化**：清晰看到学习进展
- **能力可视化**：雷达图展示多维能力
- **产品可视化**：迭代看板展示项目进展

### **持续迭代**
- **每晚23:00**：收集AI Agent岗位信息
- **每周更新**：学习进度和产品进展
- **每月评估**：能力评估和学习计划调整

## 🤝 贡献指南

### **报告问题**
1. 访问GitHub Issues页面
2. 描述遇到的问题或建议的功能
3. 提供复现步骤和截图

### **提交改进**
1. Fork本仓库
2. 创建功能分支
3. 提交Pull Request
4. 等待代码审查

### **开发规范**
- 遵循现有的代码风格
- 添加必要的注释
- 确保响应式设计
- 测试不同浏览器兼容性

## 📈 版本历史

### **v2.0 (2026-03-13) - 重大重构**
- ✅ 新增5页面导航架构
- ✅ 技术知识树（可展开/折叠）
- ✅ 产品迭代看板
- ✅ 能力评估雷达图
- ✅ 学习资源分类
- ✅ 响应式设计优化

### **v1.0 (2026-03-11) - 初始版本**
- 季度/月度规划页面
- 基础进度跟踪
- GitHub Pages部署

## 🔗 相关项目

### **学习大纲**
- **AI Agent全栈工程师技能大纲**：https://github.com/attraction11/2026_fighting/blob/main/AI-Agent-Fullstack-Outline.md
- **持续更新**：基于岗位需求逆向推导

### **AI Agent平台项目**
- **项目规划**：https://github.com/attraction11/2026_fighting/blob/main/ai-agent-platform/PROJECT-PLAN.md
- **技术栈**：React + TypeScript + NestJS + LangChain.js + Docker
- **目标**：通过产品驱动学习掌握AI Agent全栈技能

## 📞 联系与支持

### **问题反馈**
- **GitHub Issues**：https://github.com/attraction11/learning-progress-tracker/issues
- **页面问题**：直接访问在线版本查看控制台错误

### **学习交流**
- **学习大纲**：关注`AI-Agent-Fullstack-Outline.md`更新
- **项目进展**：关注`PROJECT-PLAN.md`迭代计划
- **能力成长**：每月查看能力评估雷达图

---

**最后更新**：2026-03-13  
**重构状态**：已完成，已部署到GitHub Pages  
**学习模式**：产品驱动学习 → 技术实战 → 能力评估 → 持续迭代  

> **记住**：工具只是辅助，真正的学习发生在**项目实战**中。通过构建AI Agent平台，在交付产品功能的过程中掌握技术，这才是最高效的学习路径。 🚀