/* ============================================================
   NEPWN / 杭州涅普科技 — 双语切换与交互
   ============================================================ */

'use strict';

const I18N = {
    zh: {
        'brand.sub': '杭州涅普科技',
        'nav.home': '首页',
        'nav.product': '产品',
        'nav.features': '核心特性',
        'nav.applications': '应用场景',
        'nav.contact': '联系我们',
        'nav.cta': '联系我们',
        'hero.eyebrow': '软件定义无线电开发平台',
        'hero.title': '让无线电，\n随软件而动。',
        'hero.subtitle': '以 K210 SDR 开发板为核心，集成 XILINX Zynq-7020 与 AD9361，为通信算法、人工智能与工业控制打造高性能开发底座。',
        'hero.ctaPrimary': '探索 K210',
        'hero.ctaSecondary': '开源项目',
        'hero.company': '杭州涅普科技有限责任公司 · Hangzhou Niepu Technology Co., Ltd.',
        'board.rf': '射频收发器',
        'board.io': '外设接口',
        'board.tagA': '4 核 ARM Cortex-A9',
        'board.tagB': 'LVDS / CMOS',
        'stat.soc': 'XILINX SoC',
        'stat.rf': '射频收发芯片',
        'stat.ddr': '高速 DDR3 SDRAM',
        'stat.flash': 'QSPI FLASH',
        'product.kicker': '旗舰产品',
        'product.title': 'K210 SDR 开发平台',
        'product.subtitle': '释放 XILINX Zynq-7020 + AD9361 的强大潜能，让软件定义无线电开发更简单、更高效。',
        'product.badge': 'SDR 开发板',
        'product.cardTitle': '一体化软件定义无线电解决方案',
        'product.cardText': '将四核 ARM 处理器、FPGA 可编程逻辑与高性能射频收发器集成于一块开发板，覆盖从算法验证到原型交付的完整链路。',
        'video.title': 'K210 实战演示',
        'video.hint': '点击观看演示视频',
        'features.kicker': '为什么选择 K210',
        'features.title': '为硬核开发而生',
        'features.subtitle': '从射频前端到可编程逻辑，每一项设计都面向真实的工程需求。',
        'feature.1t': '高度集成的方案',
        'feature.1d': '集成 XILINX Zynq 7020 + AD9361 一体化方案。',
        'feature.2t': 'ARM + FPGA 异构架构',
        'feature.2d': '四核 ARM Cortex-A9 处理器与 FPGA 可编程逻辑。',
        'feature.3t': '大容量高速存储',
        'feature.3d': '1GB 高速 DDR3 SDRAM 与 256Mb QSPI FLASH。',
        'feature.4t': '丰富外设接口',
        'feature.4d': 'BTB、USB 2.0 OTG、千兆以太网、UART、SD 卡、JTAG 等。',
        'feature.5t': '双模式射频通信',
        'feature.5d': '支持与 AD9361 芯片的 LVDS 与 CMOS 通信模式。',
        'feature.6t': '面向多样负载',
        'feature.6d': '适用于高速数据交换、存储、视频传输、深度学习、AI 与工业控制。',
        'feature.7t': '友好的开发生态',
        'feature.7d': '非常适合通信算法开发、学生、工程师及更多开发者快速上手。',
        'apps.kicker': '应用场景',
        'apps.title': '从算法验证到产品落地',
        'apps.subtitle': '一块开发板，覆盖无线通信与边缘智能的典型工作流。',
        'app.1': '高速数据交换',
        'app.1d': '板内高速互联与实时传输',
        'app.2': '数据存储',
        'app.2d': '高速缓存与采集记录',
        'app.3': '视频传输',
        'app.3d': '低延时视频链路验证',
        'app.4': '深度学习与 AI',
        'app.4d': 'FPGA 加速推理实验',
        'app.5': '工业控制',
        'app.5d': '确定性实时控制原型',
        'app.6': '通信算法开发',
        'app.6d': 'SDR 波形与协议快速验证',
        'contact.kicker': '联系我们',
        'contact.title': '聊聊你的下一个项目',
        'contact.text': '如需咨询报价、技术支持或合作事宜，欢迎随时联系我们。',
        'contact.github': '查看开源项目',
        'footer.company': '杭州涅普科技有限责任公司',
        'footer.copy': '© 2026 杭州涅普科技有限责任公司 · 保留所有权利',
        'footer.top': '返回顶部 ↑',
        'meta.description': '杭州涅普科技有限责任公司 —— K210 SDR 软件定义无线电开发平台，集成 XILINX Zynq-7020 与 AD9361。',
        'meta.title': '杭州涅普科技有限责任公司 | K210 SDR 开发平台',
        'aria.menu': '打开菜单',
        'aria.video': '播放 K210 演示视频',
        'aria.lang': '语言切换 / Language',
        'aria.nav': '主导航'
    },
    en: {
        'brand.sub': 'Hangzhou Niepu Tech',
        'nav.home': 'Home',
        'nav.product': 'Product',
        'nav.features': 'Features',
        'nav.applications': 'Applications',
        'nav.contact': 'Contact',
        'nav.cta': 'Get in Touch',
        'hero.eyebrow': 'SOFTWARE-DEFINED RADIO PLATFORM',
        'hero.title': 'Software defined.\nRadio reimagined.',
        'hero.subtitle': 'Powered by the K210 SDR development board, integrating the XILINX Zynq-7020 and AD9361 — a high-performance foundation for communication algorithms, AI and industrial control.',
        'hero.ctaPrimary': 'Explore K210',
        'hero.ctaSecondary': 'GitHub Project',
        'hero.company': 'Hangzhou Niepu Technology Co., Ltd.',
        'board.rf': 'RF Transceiver',
        'board.io': 'I/O Interfaces',
        'board.tagA': 'Quad-core ARM Cortex-A9',
        'board.tagB': 'LVDS / CMOS',
        'stat.soc': 'XILINX SoC',
        'stat.rf': 'RF Transceiver IC',
        'stat.ddr': 'High-speed DDR3 SDRAM',
        'stat.flash': 'QSPI FLASH',
        'product.kicker': 'FLAGSHIP PRODUCT',
        'product.title': 'K210 SDR Development Platform',
        'product.subtitle': 'Unleash the power of the XILINX Zynq-7020 + AD9361 and make software-defined radio development simpler and faster.',
        'product.badge': 'SDR Dev Board',
        'product.cardTitle': 'An all-in-one SDR solution',
        'product.cardText': 'A quad-core ARM processor, FPGA programmable logic and high-performance RF transceiver on a single board — covering the full flow from algorithm validation to prototyping.',
        'video.title': 'K210 in Action',
        'video.hint': 'Click to play the demo video',
        'features.kicker': 'WHY K210',
        'features.title': 'Built for Serious Engineering',
        'features.subtitle': 'From the RF front end to programmable logic, every design decision serves real engineering needs.',
        'feature.1t': 'Integrated Solution',
        'feature.1d': 'Integrated XILINX Zynq 7020 + AD9361 solution.',
        'feature.2t': 'ARM + FPGA Architecture',
        'feature.2d': 'Quad-core ARM Cortex-A9 processor and FPGA programmable logic.',
        'feature.3t': 'High-speed Memory',
        'feature.3d': '1GB high-speed DDR3 SDRAM and 256Mb QSPI FLASH.',
        'feature.4t': 'Rich I/O',
        'feature.4d': 'BTB, USB 2.0 OTG, Gigabit Ethernet, UART, SD card, JTAG and more.',
        'feature.5t': 'Dual-mode RF Link',
        'feature.5d': 'LVDS and CMOS communication modes with the AD9361 chip.',
        'feature.6t': 'Diverse Workloads',
        'feature.6d': 'Designed for high-speed data exchange, storage, video transmission, deep learning, AI and industrial control.',
        'feature.7t': 'Developer-friendly',
        'feature.7d': 'Ideal for communication algorithm development, students, engineers and more.',
        'apps.kicker': 'APPLICATIONS',
        'apps.title': 'From Algorithm to Deployment',
        'apps.subtitle': 'One board for the entire workflow of wireless communication and edge intelligence.',
        'app.1': 'High-speed Data Exchange',
        'app.1d': 'On-board interconnect and real-time transfer',
        'app.2': 'Data Storage',
        'app.2d': 'High-speed buffering and capture',
        'app.3': 'Video Transmission',
        'app.3d': 'Low-latency video link validation',
        'app.4': 'Deep Learning & AI',
        'app.4d': 'FPGA-accelerated inference experiments',
        'app.5': 'Industrial Control',
        'app.5d': 'Deterministic real-time control prototypes',
        'app.6': 'Communication Algorithms',
        'app.6d': 'Rapid SDR waveform and protocol validation',
        'contact.kicker': 'CONTACT US',
        'contact.title': 'Let’s Build Your Next Project',
        'contact.text': 'For pricing, technical support or partnership inquiries, feel free to get in touch.',
        'contact.github': 'View Open-source Project',
        'footer.company': 'Hangzhou Niepu Technology Co., Ltd.',
        'footer.copy': '© 2026 Hangzhou Niepu Technology Co., Ltd. All rights reserved.',
        'footer.top': 'Back to top ↑',
        'meta.description': 'Hangzhou Niepu Technology Co., Ltd. — K210 SDR development platform integrating the XILINX Zynq-7020 and AD9361.',
        'meta.title': 'Hangzhou Niepu Technology Co., Ltd. | K210 SDR Platform',
        'aria.menu': 'Toggle menu',
        'aria.video': 'Play the K210 demo video',
        'aria.lang': 'Language switcher',
        'aria.nav': 'Main navigation'
    }
};

const STORAGE_KEY = 'nepwn-language';

function setLanguage(lang) {
    const bundle = I18N[lang] || I18N.zh;
    const activeLang = I18N[lang] ? lang : 'zh';

    document.documentElement.lang = activeLang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = bundle[element.dataset.i18n];
        if (value !== undefined) {
            element.textContent = value;
        }
    });

    document.title = bundle['meta.title'];
    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute('content', bundle['meta.description']);
    }

    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) menuToggle.setAttribute('aria-label', bundle['aria.menu']);

    const videoPoster = document.getElementById('videoPoster');
    if (videoPoster && !videoPoster.querySelector('iframe')) {
        videoPoster.setAttribute('aria-label', bundle['aria.video']);
    }

    document.querySelectorAll('.lang-btn').forEach((button) => {
        const isActive = button.dataset.lang === activeLang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    try {
        localStorage.setItem(STORAGE_KEY, activeLang);
    } catch (error) {
        /* 隐私模式下忽略存储失败 */
    }
}

function initLanguage() {
    let saved = 'zh';
    try {
        saved = localStorage.getItem(STORAGE_KEY) || 'zh';
    } catch (error) {
        saved = 'zh';
    }
    setLanguage(saved);

    document.querySelectorAll('.lang-btn').forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });
}

function initMenu() {
    const toggle = document.getElementById('menuToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    const close = () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const open = !links.classList.contains('open');
        links.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
    });

    links.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));

    document.addEventListener('click', (event) => {
        if (!links.contains(event.target) && !toggle.contains(event.target)) close();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') close();
    });
}

function initVideo() {
    const poster = document.getElementById('videoPoster');
    if (!poster) return;

    const play = () => {
        if (poster.querySelector('iframe')) return;

        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/Qk-M8yRsKvs?autoplay=1&rel=0';
        iframe.title = 'K210 SDR demo video';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        poster.appendChild(iframe);
        poster.setAttribute('role', 'group');
        poster.removeAttribute('tabindex');
    };

    poster.addEventListener('click', play);
    poster.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            play();
        }
    });
}

function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach((element, index) => {
        element.style.transitionDelay = `${(index % 4) * 60}ms`;
        observer.observe(element);
    });
}

function initScrollSpy() {
    const sections = [...document.querySelectorAll('main section[id]')];
    const links = [...document.querySelectorAll('.nav-links a')];
    if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: '-25% 0px -65% 0px' });

    sections.forEach((section) => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMenu();
    initVideo();
    initReveal();
    initScrollSpy();
});
