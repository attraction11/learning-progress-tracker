// 学习进度跟踪工具 - 主JavaScript文件
// 数据存储和更新逻辑

// 模拟数据 - 实际应用中应该从API或JSON文件加载
const progressData = {
    lastUpdate: '2026-03-11 23:30',
    overallProgress: 5, // 总体进度百分比
    stats: {
        codeLines: 150,
        projects: 1,
        documents: 3,
        blogs: 3
    },
    competencies: {
        aiTech: 20,
        fullstack: 40,
        engineering: 15,
        rag: 5
    },
    quarters: {
        q1: {
            progress: 5,
            status: 'in-progress',
            tasks: ['大模型API学习', 'LangChain基础', '智能问答系统']
        },
        q2: {
            progress: 0,
            status: 'not-started',
            tasks: ['AI Agent系统', 'Python FastAPI', '基础RAG实现']
        },
        q3: {
            progress: 0,
            status: 'not-started',
            tasks: ['容器化部署', 'CI/CD流水线', 'RAG优化']
        },
        q4: {
            progress: 0,
            status: 'not-started',
            tasks: ['Flutter开发', 'Go语言', '作品集准备']
        }
    },
    months: [
        { month: '1月', status: 'in-progress', tasks: ['大模型API深度', '智能问答系统MVP'] },
        { month: '2月', status: 'not-started', tasks: ['LangChain基础', '文档检索Agent'] },
        { month: '3月', status: 'not-started', tasks: ['NestJS工程化', '高并发API系统'] },
        { month: '4月', status: 'not-started', tasks: ['Python FastAPI', '后端服务对比'] },
        { month: '5月', status: 'not-started', tasks: ['AI Agent系统', '多智能体协作'] },
        { month: '6月', status: 'not-started', tasks: ['RAG架构基础', '向量数据库'] },
        { month: '7月', status: 'not-started', tasks: ['Docker容器化', '多服务编排'] },
        { month: '8月', status: 'not-started', tasks: ['CI/CD流水线', '监控告警'] },
        { month: '9月', status: 'not-started', tasks: ['RAG优化', '生产级系统'] },
        { month: '10月', status: 'not-started', tasks: ['Flutter基础', '移动端App'] },
        { month: '11月', status: 'not-started', tasks: ['Go语言入门', 'Web服务开发'] },
        { month: '12月', status: 'not-started', tasks: ['作品集整理', '岗位申请准备'] }
    ]
};

// DOM元素
let lastUpdateEl, overallProgressEl, overallPercentageEl;
let codeCountEl, projectCountEl, docCountEl, blogCountEl;
let aiTechEl, fullstackEl, engineeringEl, ragEl;
let aiTechValueEl, fullstackValueEl, engineeringValueEl, ragValueEl;

// 初始化函数
function init() {
    // 获取DOM元素
    lastUpdateEl = document.getElementById('lastUpdate');
    overallProgressEl = document.getElementById('overallProgress');
    overallPercentageEl = document.getElementById('overallPercentage');
    
    codeCountEl = document.getElementById('codeCount');
    projectCountEl = document.getElementById('projectCount');
    docCountEl = document.getElementById('docCount');
    blogCountEl = document.getElementById('blogCount');
    
    aiTechEl = document.getElementById('aiTech');
    fullstackEl = document.getElementById('fullstack');
    engineeringEl = document.getElementById('engineering');
    ragEl = document.getElementById('rag');
    
    aiTechValueEl = document.getElementById('aiTechValue');
    fullstackValueEl = document.getElementById('fullstackValue');
    engineeringValueEl = document.getElementById('engineeringValue');
    ragValueEl = document.getElementById('ragValue');
    
    // 更新页面数据
    updatePageData();
    
    // 生成月度卡片
    generateMonthCards();
    
    // 更新季度卡片
    updateQuarterCards();
    
    // 设置自动刷新（每小时一次）
    setInterval(updatePageData, 3600000);
}

// 更新页面数据
function updatePageData() {
    // 更新最后更新时间
    lastUpdateEl.textContent = progressData.lastUpdate;
    
    // 更新总体进度
    updateOverallProgress();
    
    // 更新统计数据
    updateStats();
    
    // 更新胜任力评估
    updateCompetencies();
}

// 更新总体进度
function updateOverallProgress() {
    const progress = progressData.overallProgress;
    const circumference = 2 * Math.PI * 15.9155;
    const dashArray = `${progress * circumference / 100}, ${circumference}`;
    
    overallProgressEl.setAttribute('stroke-dasharray', dashArray);
    overallPercentageEl.textContent = `${progress}%`;
}

// 更新统计数据
function updateStats() {
    codeCountEl.textContent = progressData.stats.codeLines.toLocaleString();
    projectCountEl.textContent = progressData.stats.projects;
    docCountEl.textContent = progressData.stats.documents;
    blogCountEl.textContent = progressData.stats.blogs;
}

// 更新胜任力评估
function updateCompetencies() {
    const competencies = progressData.competencies;
    
    aiTechEl.style.width = `${competencies.aiTech}%`;
    fullstackEl.style.width = `${competencies.fullstack}%`;
    engineeringEl.style.width = `${competencies.engineering}%`;
    ragEl.style.width = `${competencies.rag}%`;
    
    aiTechValueEl.textContent = `${competencies.aiTech}%`;
    fullstackValueEl.textContent = `${competencies.fullstack}%`;
    engineeringValueEl.textContent = `${competencies.engineering}%`;
    ragValueEl.textContent = `${competencies.rag}%`;
}

// 生成月度卡片
function generateMonthCards() {
    const monthsGrid = document.getElementById('monthsGrid');
    monthsGrid.innerHTML = '';
    
    const currentMonth = new Date().getMonth() + 1; // 1-12
    
    progressData.months.forEach((monthData, index) => {
        const monthNumber = index + 1;
        let cardClass = 'month-card';
        
        if (monthNumber === currentMonth) {
            cardClass += ' active';
        } else if (monthNumber < currentMonth) {
            cardClass += ' completed';
        }
        
        const tasksHtml = monthData.tasks.map(task => `<li>${task}</li>`).join('');
        
        const monthCard = document.createElement('div');
        monthCard.className = cardClass;
        monthCard.innerHTML = `
            <div class="month-header">${monthData.month}</div>
            <div class="month-status ${monthData.status}">${getStatusText(monthData.status)}</div>
            <ul class="month-tasks">${tasksHtml}</ul>
        `;
        
        monthsGrid.appendChild(monthCard);
    });
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'not-started': '未开始',
        'in-progress': '进行中',
        'completed': '已完成'
    };
    return statusMap[status] || status;
}

// 更新季度卡片
function updateQuarterCards() {
    const quarters = progressData.quarters;
    
    // Q1
    document.getElementById('q1-status').textContent = getStatusText(quarters.q1.status);
    document.getElementById('q1-status').className = `quarter-status ${quarters.q1.status}`;
    document.getElementById('q1-progress').style.width = `${quarters.q1.progress}%`;
    document.getElementById('q1-progress-text').textContent = `${quarters.q1.progress}%`;
    
    // Q2
    document.getElementById('q2-status').textContent = getStatusText(quarters.q2.status);
    document.getElementById('q2-status').className = `quarter-status ${quarters.q2.status}`;
    document.getElementById('q2-progress').style.width = `${quarters.q2.progress}%`;
    document.getElementById('q2-progress-text').textContent = `${quarters.q2.progress}%`;
    
    // Q3
    document.getElementById('q3-status').textContent = getStatusText(quarters.q3.status);
    document.getElementById('q3-status').className = `quarter-status ${quarters.q3.status}`;
    document.getElementById('q3-progress').style.width = `${quarters.q3.progress}%`;
    document.getElementById('q3-progress-text').textContent = `${quarters.q3.progress}%`;
    
    // Q4
    document.getElementById('q4-status').textContent = getStatusText(quarters.q4.status);
    document.getElementById('q4-status').className = `quarter-status ${quarters.q4.status}`;
    document.getElementById('q4-progress').style.width = `${quarters.q4.progress}%`;
    document.getElementById('q4-progress-text').textContent = `${quarters.q4.progress}%`;
}

// 模拟进度更新（实际应用中应该从API获取）
function simulateProgressUpdate() {
    // 模拟代码行数增加
    progressData.stats.codeLines += Math.floor(Math.random() * 50);
    
    // 模拟总体进度增加
    if (progressData.overallProgress < 100) {
        progressData.overallProgress += 0.5;
    }
    
    // 模拟胜任力提升
    if (progressData.competencies.aiTech < 100) {
        progressData.competencies.aiTech += 1;
    }
    
    // 更新页面
    updatePageData();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 导出函数供外部使用（如果需要）
window.LearningProgressTracker = {
    init,
    updatePageData,
    simulateProgressUpdate
};