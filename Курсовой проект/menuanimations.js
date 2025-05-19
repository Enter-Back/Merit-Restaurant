document.addEventListener('DOMContentLoaded', function() {
    // Бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Код для слайдера
    const slider = document.querySelector('.slider-container');
    const leftNav = document.querySelector('.slider-nav-left');
    const rightNav = document.querySelector('.slider-nav-right');
    let currentPosition = 0;
    const totalSlides = 3;
    const slideWidth = 33.333;

    function moveSlider(direction) {
        if (direction === 'right') {
            currentPosition = (currentPosition + 1) % totalSlides;
        } else {
            currentPosition = (currentPosition - 1 + totalSlides) % totalSlides;
        }
        slider.style.transform = `translateX(-${currentPosition * slideWidth}%)`;
    }

    leftNav.addEventListener('click', () => moveSlider('left'));
    rightNav.addEventListener('click', () => moveSlider('right'));

    // Код для раскрывающихся секций меню
    const expandableSections = document.querySelectorAll('.expandable');
    expandableSections.forEach(section => {
        section.addEventListener('click', () => {
            const menuContainer = section.nextElementSibling;
            const menuImg = menuContainer.querySelector('.menu-img');
            const menuContent = menuContainer.querySelector('.menu-items-columns');
            
            section.classList.toggle('active');
            
            if (menuImg.style.display === 'none') {
                menuImg.style.display = 'block';
                menuContent.classList.add('show');
                // Добавляем небольшую задержку для анимации картинки
                setTimeout(() => {
                    menuImg.classList.add('visible');
                }, 50);
            } else {
                menuImg.classList.remove('visible');
                menuContent.classList.remove('show');
                // Ждем окончания анимации перед скрытием
                setTimeout(() => {
                    menuImg.style.display = 'none';
                }, 300);
            }
        });
    });

    // Анимация появления картинок меню (для завтраков)
    document.querySelectorAll('.menu-section:not(:has(.expandable)) .menu-img').forEach(menuImg => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    menuImg.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        observer.observe(menuImg);
    });
}); 