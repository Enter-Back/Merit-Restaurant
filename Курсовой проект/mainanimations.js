// Анимация появления элементов
document.addEventListener("DOMContentLoaded", () => {
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

    setTimeout(() => {
        document.querySelector(".about-img img").classList.add("visible");
        document.querySelector(".about-text").classList.add("visible");
        
        // Анимация для картинки интерьера и текста
        setTimeout(() => {
            const interiorImg = document.querySelector(".interior-image img");
            const interiorText = document.querySelector(".about-interior");
            
            if (interiorImg) {
                interiorImg.classList.add("visible");
            }
            if (interiorText) {
                interiorText.classList.add("visible");
            }
            
            // Анимация для секции о кухне
            setTimeout(() => {
                const cuisineText = document.querySelector(".cuisine-text");
                const dishesSlider = document.querySelector(".dishes-slider");
                if (cuisineText) {
                    cuisineText.classList.add("visible");
                }
                if (dishesSlider) {
                    dishesSlider.classList.add("visible");
                }
            }, 1000);
        }, 1000);
    }, 500);
});

// Слайдер
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-container');
    const leftNav = document.querySelector('.slider-nav-left');
    const rightNav = document.querySelector('.slider-nav-right');
    let currentPosition = 0;
    const totalSlides = 3; // Изменено на 3, так как у нас только 3 картинки
    const slideWidth = 33.333;

    function moveSlider(direction) {
        if (direction === 'right') {
            currentPosition = (currentPosition + 1) % totalSlides; // Изменено: +1 для движения вправо
        } else {
            currentPosition = (currentPosition - 1 + totalSlides) % totalSlides; // Изменено: -1 для движения влево
        }
        slider.style.transform = `translateX(-${currentPosition * slideWidth}%)`;
    }

    leftNav.addEventListener('click', () => moveSlider('left'));
    rightNav.addEventListener('click', () => moveSlider('right'));
});

// Слайдер с блюдами
const dishSlides = document.querySelectorAll(".dish-slide");
const prevButton = document.querySelector(".slide-arrow.prev");
const nextButton = document.querySelector(".slide-arrow.next");
const images = [
    "Images/mainm.jpg",
    "Images/CWAycbbuowKsfvum9U5Okmainn.jpg",
    "Images/img1.jpg"
];
let currentIndex = 0;

function updateSlides(direction) {
    if (!dishSlides.length) return;
    
    const rightSlide = dishSlides[1].querySelector('img');
    const leftSlide = dishSlides[0].querySelector('img');
    
    const isNext = direction === 'next';
    const activeSlide = isNext ? rightSlide : leftSlide;
    const passiveSlide = isNext ? leftSlide : rightSlide;
    
    // Активная картинка уходит
    activeSlide.classList.add(isNext ? 'slide-right' : 'slide-left');
    // Пассивная картинка появляется
    passiveSlide.classList.add(isNext ? 'slide-left' : 'slide-right');
    
    setTimeout(() => {
        // Обновляем изображения
        if (isNext) {
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        
        activeSlide.src = passiveSlide.src;
        passiveSlide.src = images[currentIndex];
        
        // Возвращаем картинки в центр
        activeSlide.classList.remove(isNext ? 'slide-right' : 'slide-left');
        passiveSlide.classList.remove(isNext ? 'slide-left' : 'slide-right');
        activeSlide.classList.add('slide-center');
        passiveSlide.classList.add('slide-center');
        
        // Сбрасываем классы после анимации
        setTimeout(() => {
            activeSlide.classList.remove('slide-center');
            passiveSlide.classList.remove('slide-center');
        }, 500);
    }, 500);
}

if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => updateSlides('prev'));
    nextButton.addEventListener("click", () => updateSlides('next'));
}

document.addEventListener('DOMContentLoaded', function() {
    // Код для слайдера
    const slider = document.querySelector('.slider-container');
    const leftNav = document.querySelector('.slider-nav-left');
    const rightNav = document.querySelector('.slider-nav-right');
    let currentPosition = 0;
    const totalSlides = 4;
    const slideWidth = 33.333; // Процент ширины одного слайда

    function moveSlider(direction) {
        if (direction === 'right') {
            currentPosition = (currentPosition - 1 + totalSlides) % totalSlides;
        } else {
            currentPosition = (currentPosition + 1) % totalSlides;
        }
        slider.style.transform = `translateX(-${currentPosition * slideWidth}%)`;
    }

    leftNav.addEventListener('click', () => moveSlider('right'));
    rightNav.addEventListener('click', () => moveSlider('left'));
});
