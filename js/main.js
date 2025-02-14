// Инициализация анимаций
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация библиотеки анимаций
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });

    // Инициализация модального окна для изображений
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');

    // Функция открытия модального окна
    function openModal(imgSrc) {
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = 'none';
        modalImg.src = '';
        document.body.style.overflow = ''; // Возвращаем прокрутку страницы
    }

    // Добавляем обработчики для всех изображений
    document.querySelectorAll('.testimonial-image, .certificate-image, .before-after img').forEach(img => {
        img.addEventListener('click', () => openModal(img.src));
    });

    // Закрытие модального окна при клике на крестик
    closeBtn.addEventListener('click', closeModal);

    // Закрытие модального окна при клике вне изображения
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Закрытие модального окна при нажатии Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Плавная прокрутка к секциям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми секциями
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Обработка формы
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Здесь будет логика отправки формы
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        });
    }

    // FAQ аккордеон
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Закрываем все элементы
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                    }
                });
                
                // Открываем текущий элемент, если он был закрыт
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });
});

// Анимация фиксированного меню при скролле
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (currentScroll > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Параллакс эффект для hero секции
const heroSection = document.querySelector('.hero');
const heroBanner = document.querySelector('.hero-banner');

if (heroSection && heroBanner) {
    heroSection.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = heroSection;
        const { clientX: x, clientY: y } = e;
        
        const moveX = (x - width/2) * 0.01;
        const moveY = (y - height/2) * 0.01;
        
        heroBanner.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
}

// Анимация для кнопок
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = button;
        const { clientX: x, clientY: y } = e;
        const { left, top } = button.getBoundingClientRect();
        
        const xPos = ((x - left) / width) * 100;
        const yPos = ((y - top) / height) * 100;
        
        button.style.setProperty('--x', `${xPos}%`);
        button.style.setProperty('--y', `${yPos}%`);
    });
});

// Социальные доказательства
const names = ['Александр', 'Мария', 'Елена', 'Дмитрий', 'Анна', 'Сергей', 'Ольга', 'Иван', 'Татьяна', 'Михаил'];
const actions = [
    'только что прошел(а) тест дыхания',
    'оформил(а) покупку полного курса',
    'начал(а) заниматься по базовой технике',
    'получил(а) первые результаты',
    'улучшил(а) качество сна после курса',
    'избавился(ась) от тревожности',
    'отметил(а) повышение энергии',
    'поделился(ась) успехами с друзьями',
    'отметил(а) улучшение самочувствия',
    'научился(ась) справляться со стрессом'
];

function showSocialProof() {
    const proofElement = document.querySelector('.social-proof');
    const nameElement = proofElement.querySelector('.social-proof-name');
    const actionElement = proofElement.querySelector('.social-proof-action');
    const timeElement = proofElement.querySelector('.social-proof-time');
    const avatarElement = proofElement.querySelector('.social-proof-avatar');

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    nameElement.textContent = randomName;
    actionElement.textContent = randomAction;
    timeElement.textContent = 'только что';
    avatarElement.textContent = randomName[0];

    proofElement.classList.add('show');

    setTimeout(() => {
        proofElement.classList.remove('show');
    }, 5000);
}

// Показываем уведомление каждые 20 секунд (уменьшил интервал для большей активности)
setInterval(showSocialProof, 20000);

// Показываем первое уведомление через 5 секунд после загрузки
setTimeout(showSocialProof, 5000); 