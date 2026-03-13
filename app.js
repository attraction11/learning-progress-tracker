// ============================================
// AI Agent学习进度跟踪工具 - 重构版
// 单页面应用，包含5个页面：大纲、产品、进度、能力评估、学习资源
// ============================================

// 全局状态和配置
const AppState = {
    currentPage: 'outline',
    lastUpdate: new Date().toISOString().split('T')[0],
    isLoading: false
};

// ============================================
// 数据模型
// ============================================

// 大纲数据 - 从AI-Agent-Fullstack-Outline.md提取的结构
const outlineData = {
    sections: [
        {
            id: 'ai-core',
            title: 'AI Agent核心技术',
            expanded: true,
            items: [
                {
                    id: 'ai-core-1',
                    title: '大模型API深度应用',
                    progress: 10,
                    status: '进行中',
                    children: [
                        { title: 'OpenAI API', progress: 0, status: '未开始' },
                        { title: 'Claude API', progress: 0, status: '未开始' },
                        { title: 'OfoxAI整合', progress: 80, status: '已完成' }
                    ]
                },
                {
                    id: 'ai-core-2',
                    title: 'Prompt工程进阶',
                    progress: 5,
                    status: '进行中',
                    children: [
                        { title: 'Prompt设计原则', progress: 20, status: '进行中' },
                        { title: 'CoT思维链', progress: 0, status: '未开始' },
                        { title: '结构化Prompt', progress: 0, status: '未开始' }
                    ]
                },
                {
                    id: 'ai-core-3',
                    title: 'AI Agent架构设计',
                    progress: 0,
                    status: '未开始',
                    children: [
                        { title: 'LangChain框架', progress: 0, status: '未开始' },
                        { title: '多智能体协作', progress: 0, status: '未开始' },
                        { title: 'Agent核心组件', progress: 0, status: '未开始' }
                    ]
                },
                {
                    id: 'ai-core-4',
                    title: 'RAG（检索增强生成）',
                    progress: 0,
                    status: '未开始',
                    children: [
                        { title: '向量数据库', progress: 0, status: '未开始' },
                        { title: 'Embedding模型', progress: 0, status: '未开始' },
                        { title: '检索策略优化', progress: 0, status: '未开始' }
                    ]
                }
            ]
        },
        {
            id: 'fullstack',
            title: '全栈开发能力',
            expanded: false,
            items: [
                {
                    id: 'fullstack-1',
                    title: '后端开发',
                    progress: 30,
                    status: '进行中',
                    children: [
                        { title: 'Node.js + NestJS', progress: 10, status: '进行中' },
                        { title: 'Python + FastAPI', progress: 0, status: '未开始' },
                        { title: '高并发服务设计', progress: 0, status: '未开始' }
                    ]
                },
                {
                    id: 'fullstack-2',
                    title: '前端开发 - React技术栈',
                    progress: 40,
                    status: '进行中',
                    children: [
                        { title: 'React 18 + TypeScript', progress: 60, status: '进行中' },
                        { title: 'Ant Design组件库', progress: 20, status: '进行中' },
                        { title: '状态管理（Zustand）', progress: 10, status: '进行中' },
                        { title: 'TanStack Query', progress: 0, status: '未开始' },
                        { title: 'React Router v6', progress: 30, status: '进行中' }
                    ]
                },
                {
                    id: 'fullstack-3',
                    title: '工程化能力',
                    progress: 20,
                    status: '进行中',
                    children: [
                        { title: 'Docker容器化', progress: 30, status: '进行中' },
                        { title: 'CI/CD流水线', progress: 0, status: '未开始' },
                        { title: '监控与日志', progress: 0, status: '未开始' }
                    ]
                }
            ]
        },
        {
            id: 'ai-workflow',
            title: 'AI-First Workflow',
            expanded: false,
            items: [
                {
                    id: 'workflow-1',
                    title: 'AI协作开发',
                    progress: 15,
                    status: '进行中',
                    children: [
                        { title: 'OpenCode使用', progress: 40, status: '进行中' },
                        { title: 'Cursor AI', progress: 0, status: '未开始' },
                        { title: 'Claude Code', progress: 0, status: '未开始' }
                    ]
                },
                {
                    id: 'workflow-2',
                    title: 'AI-First思维',
                    progress: 20,
                    status: '进行中',
                    children: [
                        { title: '问题拆解能力', progress: 30, status: '进行中' },
                        { title: '批判性思维', progress: 10, status: '进行中' },
                        { title: '上下文提供能力', progress: 20, status: '进行中' }
                    ]
                }
            ]
        },
        {
            id: 'product',
            title: '产品化能力',
            expanded: false,
            items: [
                {
                    id: 'product-1',
                    title: '需求分析',
                    progress: 70,
                    status: '进行中',
                    children: [
                        { title: '业务目标理解', progress: 80, status: '进行中' },
                        { title: '需求拆解', progress: 60, status: '进行中' }
                    ]
                },
                {
                    id: 'product-2',
                    title: '产品开发全流程',
                    progress: 40,
                    status: '进行中',
                    children: [
                        { title: '产品理解 → 设计', progress: 50, status: '进行中' },
                        { title: '系统设计 → 实现', progress: 30, status: '进行中' }
                    ]
                }
            ]
        }
    ]
};

// 产品迭代数据 - 从PROJECT-PLAN.md提取
const productData = {
    iterations: [
        {
            id: 'iteration-1',
            name: 'AI Agent平台 - 第1阶段',
            period: '2026-03-14 至 2026-04-03',
            status: 'planned',
            progress: 0,
            description: '基础框架搭建，实现最小可行产品',
            features: [
                { id: 'f1', name: 'React项目初始化', status: 'planned' },
                { id: 'f2', name: 'NestJS项目搭建', status: 'planned' },
                { id: 'f3', name: 'Docker环境配置', status: 'planned' },
                { id: 'f4', name: '用户认证模块', status: 'planned' },
                { id: 'f5', name: '工作流编辑器基础', status: 'planned' },
                { id: 'f6', name: 'LangChain.js基础集成', status: 'planned' }
            ],
            learningGoals: [
                '掌握React + TypeScript开发模式',
                '掌握NestJS模块化架构',
                '掌握LangChain.js核心概念',
                '掌握Docker容器化部署'
            ]
        },
        {
            id: 'iteration-2',
            name: 'AI Agent平台 - 第2阶段',
            period: '2026-04-04 至 2026-04-24',
            status: 'planned',
            progress: 0,
            description: '功能完善，提升用户体验',
            features: [
                { id: 'f7', name: '记忆系统开发', status: 'planned' },
                { id: 'f8', name: '向量数据库集成', status: 'planned' },
                { id: 'f9', name: '工具库扩展', status: 'planned' },
                { id: 'f10', name: '数据分析面板', status: 'planned' }
            ],
            learningGoals: [
                '掌握RAG架构实践',
                '掌握向量数据库使用',
                '掌握API安全设计',
                '掌握数据可视化'
            ]
        },
        {
            id: 'iteration-3',
            name: 'AI Agent平台 - 第3阶段',
            period: '2026-04-25 至 2026-06-30',
            status: 'planned',
            progress: 0,
            description: '高级功能，准备生产部署',
            features: [
                { id: 'f11', name: '自反思Agent', status: 'planned' },
                { id: 'f12', name: '动态规划', status: 'planned' },
                { id: 'f13', name: '容器化部署', status: 'planned' },
                { id: 'f14', name: 'CI/CD流水线', status: 'planned' }
            ],
            learningGoals: [
                '掌握高级Agent能力',
                '掌握生产级部署',
                '掌握系统性能优化',
                '掌握安全加固'
            ]
        }
    ]
};

// 进度数据
const progressData = {
    stats: {
        codeLines: 150,
        projects: 1,
        documents: 3,
        learningHours: 25
    },
    masteredSkills: [
        { id: 's1', name: 'OfoxAI API集成', level: '掌握', date: '2026-03-12', category: 'AI技术' },
        { id: 's2', name: 'React基础', level: '熟练', date: '2025-12-01', category: '前端' },
        { id: 's3', name: 'TypeScript基础', level: '熟练', date: '2025-11-15', category: '前端' },
        { id: 's4', name: 'Node.js后端开发', level: '熟练', date: '2025-10-20', category: '后端' },
        { id: 's5', name: 'Docker基础使用', level: '掌握', date: '2025-09-10', category: '工程化' },
        { id: 's6', name: 'Git版本控制', level: '熟练', date: '2025-08-05', category: '工程化' }
    ],
    weeklyProgress: [
        { week: '2026-03-07', commits: 5, features: 2, learningHours: 8 },
        { week: '2026-03-14', commits: 0, features: 0, learningHours: 0 }
    ]
};

// 能力评估数据
const assessmentData = {
    monthlyAssessments: [
        {
            month: '2026-03',
            date: '2026-03-31',
            scores: {
                aiTechnology: 30,
                fullstack: 60,
                aiWorkflow: 40,
                productThinking: 70,
                softSkills: 50
            },
            radarChartData: [30, 60, 40, 70, 50],
            improvementAreas: ['AI技术深度', '英语沟通能力'],
            nextMonthFocus: ['LangChain实战', 'React现代化生态']
        },
        {
            month: '2026-02',
            date: '2026-02-28',
            scores: {
                aiTechnology: 15,
                fullstack: 55,
                aiWorkflow: 25,
                productThinking: 65,
                softSkills: 45
            },
            radarChartData: [15, 55, 25, 65, 45],
            improvementAreas: ['大模型API应用', 'Prompt工程'],
            nextMonthFocus: ['OfoxAI整合', '多模型API调用']
        }
    ],
    categories: ['AI技术深度', '全栈工程能力', 'AI-First工作流', '产品化思维', '软技能综合']
};

// 学习资源数据
const resourcesData = {
    categories: [
        {
            id: 'ai-agent',
            name: 'AI Agent技术',
            icon: 'fas fa-robot',
            resources: [
                { title: 'LangChain官方文档', url: 'https://js.langchain.com/', type: '文档' },
                { title: 'OfoxAI使用指南', url: '#', type: '指南', local: true },
                { title: 'AutoGPT源码分析', url: 'https://github.com/Significant-Gravitas/AutoGPT', type: '开源项目' },
                { title: 'CrewAI多智能体框架', url: 'https://github.com/joaomdmoura/crewAI', type: '开源项目' },
                { title: 'AI Agent架构设计', url: 'https://www.pinecone.io/learn/agents/', type: '教程' }
            ]
        },
        {
            id: 'frontend',
            name: '前端技术',
            icon: 'fas fa-desktop',
            resources: [
                { title: 'React官方文档', url: 'https://react.dev/', type: '文档' },
                { title: 'Ant Design组件库', url: 'https://ant.design/', type: 'UI库' },
                { title: 'Zustand状态管理', url: 'https://docs.pmnd.rs/zustand/', type: '库' },
                { title: 'TanStack Query', url: 'https://tanstack.com/query/latest', type: '库' },
                { title: 'React Hook Form', url: 'https://react-hook-form.com/', type: '库' }
            ]
        },
        {
            id: 'backend',
            name: '后端技术',
            icon: 'fas fa-server',
            resources: [
                { title: 'NestJS官方文档', url: 'https://docs.nestjs.com/', type: '文档' },
                { title: 'Prisma ORM', url: 'https://www.prisma.io/docs/', type: 'ORM' },
                { title: 'PostgreSQL文档', url: 'https://www.postgresql.org/docs/', type: '数据库' },
                { title: 'Redis文档', url: 'https://redis.io/docs/', type: '缓存' }
            ]
        },
        {
            id: 'devops',
            name: '工程化',
            icon: 'fas fa-cogs',
            resources: [
                { title: 'Docker官方文档', url: 'https://docs.docker.com/', type: '文档' },
                { title: 'GitHub Actions指南', url: 'https://docs.github.com/actions', type: 'CI/CD' },
                { title: 'Kubernetes教程', url: 'https://kubernetes.io/docs/tutorials/', type: '容器编排' },
                { title: 'Prometheus监控', url: 'https://prometheus.io/docs/introduction/overview/', type: '监控' }
            ]
        },
        {
            id: 'learning',
            name: '学习资源',
            icon: 'fas fa-graduation-cap',
            resources: [
                { title: 'AI-Agent-Fullstack-Outline.md', url: 'https://github.com/attraction11/2026_fighting/blob/main/AI-Agent-Fullstack-Outline.md', type: '大纲' },
                { title: 'PROJECT-PLAN.md', url: 'https://github.com/attraction11/2026_fighting/blob/main/ai-agent-platform/PROJECT-PLAN.md', type: '项目计划' },
                { title: 'OpenCode学习', url: '#', type: '工具', local: true },
                { title: 'Cursor AI教程', url: 'https://cursor.sh/learn', type: '工具' }
            ]
        }
    ]
};

// ============================================
// DOM元素和工具函数
// ============================================

// 获取DOM元素
const getElement = (id) => document.getElementById(id);
const createElement = (tag, className = '', content = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.innerHTML = content;
    return el;
};

// 格式化日期
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};

// ============================================
// 页面渲染函数
// ============================================

// 渲染大纲页
function renderOutlinePage() {
    const container = createElement('div', 'page outline-page');
    
    const header = createElement('div', 'page-header');
    header.innerHTML = `
        <h1 class="page-title">技术知识大纲</h1>
        <p class="page-subtitle">基于AI Agent全栈工程师技能大纲的可视化展示，点击展开查看详细技能点</p>
    `;
    
    const content = createElement('div', 'page-content');
    
    outlineData.sections.forEach(section => {
        const sectionEl = createElement('div', `outline-section ${section.expanded ? 'expanded' : ''}`);
        sectionEl.dataset.sectionId = section.id;
        
        const sectionHeader = createElement('div', 'outline-section-header');
        sectionHeader.innerHTML = `
            <div class="outline-section-title">
                <i class="fas fa-chevron-right outline-section-icon"></i>
                <span>${section.title}</span>
            </div>
            <span class="text-tertiary">${section.items.length}个技能领域</span>
        `;
        
        const sectionContent = createElement('div', 'outline-section-content');
        sectionContent.style.display = section.expanded ? 'block' : 'none';
        
        section.items.forEach(item => {
            const itemEl = createElement('div', 'outline-item');
            itemEl.innerHTML = `
                <div class="outline-item-title">${item.title}</div>
                <div class="outline-item-progress">
                    <div class="outline-item-progress-bar" style="width: ${item.progress}%"></div>
                </div>
                <div class="outline-item-status">${item.progress}%</div>
            `;
            
            // 添加点击展开子项功能
            itemEl.addEventListener('click', (e) => {
                e.stopPropagation();
                const hasChildren = item.children && item.children.length > 0;
                if (hasChildren) {
                    // 这里可以展开显示子项
                    console.log('展开子项:', item.title);
                }
            });
            
            sectionContent.appendChild(itemEl);
        });
        
        // 展开/折叠点击事件
        sectionHeader.addEventListener('click', () => {
            const isExpanded = sectionEl.classList.contains('expanded');
            sectionEl.classList.toggle('expanded');
            sectionContent.style.display = isExpanded ? 'none' : 'block';
            
            // 更新图标
            const icon = sectionHeader.querySelector('.outline-section-icon');
            icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(90deg)';
        });
        
        sectionEl.appendChild(sectionHeader);
        sectionEl.appendChild(sectionContent);
        content.appendChild(sectionEl);
    });
    
    container.appendChild(header);
    container.appendChild(content);
    
    return container;
}

// 渲染产品页
function renderProductPage() {
    const container = createElement('div', 'page product-page');
    
    const header = createElement('div', 'page-header');
    header.innerHTML = `
        <h1 class="page-title">产品迭代计划</h1>
        <p class="page-subtitle">通过AI Agent平台项目驱动学习，分3个阶段完成，每个阶段2-3周</p>
    `;
    
    const content = createElement('div', 'page-content');
    const iterationsContainer = createElement('div', 'product-iterations');
    
    productData.iterations.forEach(iteration => {
        const iterationCard = createElement('div', `card iteration-card ${iteration.status}`);
        
        const cardHeader = createElement('div', 'card-header');
        cardHeader.innerHTML = `
            <div>
                <h3 class="card-title">${iteration.name}</h3>
                <p class="card-subtitle">${iteration.period}</p>
            </div>
            <span class="iteration-status status-${iteration.status}">
                ${iteration.status === 'planned' ? '计划中' : 
                  iteration.status === 'in-progress' ? '进行中' : '已完成'}
            </span>
        `;
        
        const cardContent = createElement('div', 'card-content');
        cardContent.innerHTML = `
            <p class="mb-md">${iteration.description}</p>
            <div class="mb-lg">
                <strong>学习目标：</strong>
                <ul>
                    ${iteration.learningGoals.map(goal => `<li>${goal}</li>`).join('')}
                </ul>
            </div>
            <div>
                <strong>功能特性：</strong>
                <div class="iteration-features">
                    ${iteration.features.map(feature => `
                        <div class="feature-item">
                            <i class="fas ${feature.status === 'completed' ? 'fa-check-circle feature-checkbox' : 'fa-circle'}"></i>
                            <span class="feature-name">${feature.name}</span>
                            <span class="text-tertiary">${feature.status === 'completed' ? '已完成' : 
                              feature.status === 'in-progress' ? '进行中' : '计划中'}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        iterationCard.appendChild(cardHeader);
        iterationCard.appendChild(cardContent);
        iterationsContainer.appendChild(iterationCard);
    });
    
    content.appendChild(iterationsContainer);
    
    container.appendChild(header);
    container.appendChild(content);
    
    return container;
}

// 渲染进度页
function renderProgressPage() {
    const container = createElement('div', 'page progress-page');
    
    const header = createElement('div', 'page-header');
    header.innerHTML = `
        <h1 class="page-title">学习进度跟踪</h1>
        <p class="page-subtitle">已掌握的技能和项目交付记录，每周更新</p>
    `;
    
    const content = createElement('div', 'page-content');
    
    // 统计数据
    const statsContainer = createElement('div', 'progress-stats');
    statsContainer.innerHTML = `
        <div class="card stat-card">
            <div class="stat-value">${progressData.stats.codeLines}</div>
            <div class="stat-label">代码行数</div>
        </div>
        <div class="card stat-card">
            <div class="stat-value">${progressData.stats.projects}</div>
            <div class="stat-label">完成项目</div>
        </div>
        <div class="card stat-card">
            <div class="stat-value">${progressData.stats.documents}</div>
            <div class="stat-label">技术文档</div>
        </div>
        <div class="card stat-card">
            <div class="stat-value">${progressData.stats.learningHours}</div>
            <div class="stat-label">学习小时</div>
        </div>
    `;
    
    // 已掌握技能
    const skillsHeader = createElement('h2', 'mb-lg');
    skillsHeader.textContent = '已掌握技能';
    
    const skillsContainer = createElement('div', 'skills-grid');
    
    progressData.masteredSkills.forEach(skill => {
        const skillCard = createElement('div', 'card skill-card');
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="skill-info">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">掌握程度: ${skill.level}</div>
                <div class="skill-date">掌握时间: ${formatDate(skill.date)}</div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });
    
    content.appendChild(statsContainer);
    content.appendChild(skillsHeader);
    content.appendChild(skillsContainer);
    
    container.appendChild(header);
    container.appendChild(content);
    
    return container;
}

// 渲染能力评估页
function renderAssessmentPage() {
    const container = createElement('div', 'page assessment-page');
    
    const header = createElement('div', 'page-header');
    header.innerHTML = `
        <h1 class="page-title">能力评估</h1>
        <p class="page-subtitle">每月评估5大核心能力，雷达图展示成长轨迹</p>
    `;
    
    const content = createElement('div', 'page-content');
    const assessmentContainer = createElement('div', 'assessment-container');
    
    // 雷达图容器
    const chartContainer = createElement('div', 'radar-chart-container');
    const canvas = createElement('canvas', 'radar-canvas');
    canvas.id = 'radarChart';
    chartContainer.appendChild(canvas);
    
    // 评估详情
    const detailsContainer = createElement('div', 'assessment-details');
    
    const latestAssessment = assessmentData.monthlyAssessments[0];
    
    // 评估项
    assessmentData.categories.forEach((category, index) => {
        const score = latestAssessment.radarChartData[index];
        let scoreClass = 'score-poor';
        if (score >= 80) scoreClass = 'score-excellent';
        else if (score >= 60) scoreClass = 'score-good';
        else if (score >= 40) scoreClass = 'score-fair';
        
        const assessmentItem = createElement('div', 'card assessment-item');
        assessmentItem.innerHTML = `
            <div class="assessment-category">
                <i class="fas fa-chart-line category-icon"></i>
                <span>${category}</span>
            </div>
            <div class="assessment-score ${scoreClass}">${score}</div>
        `;
        detailsContainer.appendChild(assessmentItem);
    });
    
    // 改进区域
    const improvementCard = createElement('div', 'card');
    improvementCard.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">改进重点</h3>
        </div>
        <div class="card-content">
            <ul>
                ${latestAssessment.improvementAreas.map(area => `<li>${area}</li>`).join('')}
            </ul>
        </div>
    `;
    detailsContainer.appendChild(improvementCard);
    
    // 下月重点
    const focusCard = createElement('div', 'card');
    focusCard.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">下月学习重点</h3>
        </div>
        <div class="card-content">
            <ul>
                ${latestAssessment.nextMonthFocus.map(focus => `<li>${focus}</li>`).join('')}
            </ul>
        </div>
    `;
    detailsContainer.appendChild(focusCard);
    
    assessmentContainer.appendChild(chartContainer);
    assessmentContainer.appendChild(detailsContainer);
    content.appendChild(assessmentContainer);
    
    container.appendChild(header);
    container.appendChild(content);
    
    // 初始化雷达图
    setTimeout(() => initRadarChart(), 100);
    
    return container;
}

// 初始化雷达图
function initRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;
    
    const latestAssessment = assessmentData.monthlyAssessments[0];
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: assessmentData.categories,
            datasets: [{
                label: latestAssessment.month,
                data: latestAssessment.radarChartData,
                backgroundColor: 'rgba(24, 144, 255, 0.2)',
                borderColor: 'rgba(24, 144, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(24, 144, 255, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                            family: "'Segoe UI', Roboto, sans-serif"
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });
}

// 渲染学习资源页
function renderResourcesPage() {
    const container = createElement('div', 'page resources-page');
    
    const header = createElement('div', 'page-header');
    header.innerHTML = `
        <h1 class="page-title">学习资源</h1>
        <p class="page-subtitle">精选学习资源链接，按技术分类整理</p>
    `;
    
    const content = createElement('div', 'page-content');
    const categoriesContainer = createElement('div', 'resource-categories');
    
    resourcesData.categories.forEach(category => {
        const categoryCard = createElement('div', 'card resource-category');
        
        const categoryHeader = createElement('div', 'category-header');
        categoryHeader.innerHTML = `
            <i class="${category.icon} category-icon"></i>
            <h3 class="card-title">${category.name}</h3>
        `;
        
        const resourceList = createElement('div', 'resource-list');
        
        category.resources.forEach(resource => {
            const resourceItem = createElement('a', 'resource-item');
            resourceItem.href = resource.url;
            resourceItem.target = '_blank';
            
            if (resource.local) {
                resourceItem.href = '#';
                resourceItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert('本地资源，将在后续版本中实现');
                });
            }
            
            resourceItem.innerHTML = `
                <i class="fas fa-external-link-alt"></i>
                <span class="resource-title">${resource.title}</span>
                <span class="resource-type">${resource.type}</span>
            `;
            
            resourceList.appendChild(resourceItem);
        });
        
        categoryCard.appendChild(categoryHeader);
        categoryCard.appendChild(resourceList);
        categoriesContainer.appendChild(categoryCard);
    });
    
    content.appendChild(categoriesContainer);
    
    container.appendChild(header);
    container.appendChild(content);
    
    return container;
}

// ============================================
// 路由和页面管理
// ============================================

// 页面映射
const pageRenderers = {
    outline: renderOutlinePage,
    product: renderProductPage,
    progress: renderProgressPage,
    assessment: renderAssessmentPage,
    resources: renderResourcesPage
};

// 页面标题映射
const pageTitles = {
    outline: '技术大纲',
    product: '产品迭代',
    progress: '学习进度',
    assessment: '能力评估',
    resources: '学习资源'
};

// 加载页面
function loadPage(pageId) {
    const container = getElement('pageContainer');
    if (!container) return;
    
    // 显示加载状态
    AppState.isLoading = true;
    container.innerHTML = `
        <div class="page-loading">
            <div class="loading-spinner">
                <i class="fas fa-cog fa-spin"></i>
            </div>
            <p>加载 ${pageTitles[pageId]} 页面...</p>
        </div>
    `;
    
    // 更新导航栏活动状态
    updateNavActiveState(pageId);
    
    // 模拟加载延迟
    setTimeout(() => {
        const renderer = pageRenderers[pageId];
        if (renderer) {
            container.innerHTML = '';
            const pageContent = renderer();
            container.appendChild(pageContent);
            
            // 更新页面标题
            document.title = `AI Agent学习跟踪 - ${pageTitles[pageId]}`;
            
            // 更新URL hash
            window.location.hash = pageId;
            
            // 更新当前页面状态
            AppState.currentPage = pageId;
            AppState.isLoading = false;
            
            // 触发页面加载完成事件
            document.dispatchEvent(new CustomEvent('pageLoaded', { 
                detail: { pageId }
            }));
        }
    }, 300);
}

// 更新导航栏活动状态
function updateNavActiveState(activePageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const pageId = link.dataset.page;
        if (pageId === activePageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// 初始化应用
// ============================================

function initApp() {
    console.log('初始化AI Agent学习进度跟踪工具...');
    
    // 更新最后更新时间
    const lastUpdateEl = getElement('lastUpdate');
    if (lastUpdateEl) {
        lastUpdateEl.textContent = AppState.lastUpdate;
    }
    
    // 设置导航栏点击事件
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            if (pageId && pageId !== AppState.currentPage) {
                loadPage(pageId);
            }
        });
    });
    
    // 监听hash变化
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        if (hash && pageRenderers[hash] && hash !== AppState.currentPage) {
            loadPage(hash);
        }
    });
    
    // 初始加载页面
    const initialHash = window.location.hash.substring(1);
    const initialPage = initialHash && pageRenderers[initialHash] ? initialHash : 'outline';
    loadPage(initialPage);
    
    console.log('应用初始化完成，当前页面:', AppState.currentPage);
}

// ============================================
// 启动应用
// ============================================

// DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// 导出全局对象（用于调试）
window.App = {
    state: AppState,
    data: {
        outline: outlineData,
        product: productData,
        progress: progressData,
        assessment: assessmentData,
        resources: resourcesData
    },
    loadPage,
    initApp
};

console.log('AI Agent学习进度跟踪工具已加载，版本: 2026-03-13重构版');