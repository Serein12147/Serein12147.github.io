document.addEventListener('DOMContentLoaded', function() {
    // 主题切换逻辑
    const tabItems = document.querySelectorAll('.tab-item');
    const heroSection = document.querySelector('.hero');
    
    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有活动状态
            tabItems.forEach(t => t.classList.remove('active'));
            
            // 添加活动状态到当前选项
            item.classList.add('active');
            
            // 应用对应主题样式
            const theme = item.getAttribute('data-theme');
            applyTheme(theme);
        });
    });
    
    // 应用主题样式
    function applyTheme(theme) {
        switch(theme) {
            case 'slate':
                document.body.style.backgroundColor = '#31363b';
                document.body.style.color = '#e0e0e0';
                heroSection.style.background = 'linear-gradient(135deg, #222, #31363b)';
                break;
            case 'merlot':
                document.body.style.backgroundColor = '#60223b';
                document.body.style.color = '#f8e8f0';
                heroSection.style.background = 'linear-gradient(135deg, #4c122d, #60223b)';
                break;
            case 'time-machine':
                document.body.style.backgroundColor = '#e3e8e8';
                document.body.style.color = '#333';
                heroSection.style.background = 'linear-gradient(135deg, #d0d0d0, #e3e8e8)';
                break;
            case 'minimal':
                document.body.style.backgroundColor = '#f0f0f0';
                document.body.style.color = '#333';
                heroSection.style.background = 'linear-gradient(135deg, #e8e8e8, #f0f0f0)';
                break;
            case 'leap-day':
                document.body.style.backgroundColor = '#ffeb3b';
                document.body.style.color = '#333';
                heroSection.style.background = 'linear-gradient(135deg, #fdd835, #ffeb3b)';
                break;
            default:
                document.body.style.backgroundColor = '#f8f9fa';
                document.body.style.color = '#333';
                heroSection.style.background = 'linear-gradient(135deg, #1a5f7a, #58c1b2)';
        }
    }
    
    // 初始主题设置
    applyTheme('cayman');
});
