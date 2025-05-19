document.addEventListener('DOMContentLoaded', function() {
    // Бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const body = document.body;

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }

    // Яндекс.Карта
    if (window.ymaps) {
        ymaps.ready(function () {
            var map = new ymaps.Map('yandex-map', {
                center: [53.900601, 27.558972], // Центр Минска
                zoom: 12,
                controls: ['zoomControl', 'fullscreenControl']
            });

            // Точки ресторанов
            var points = [
                {
                    coords: [53.892632, 27.555456],
                    text: 'ул. Кирова, 19'
                },
                {
                    coords: [53.917978, 27.594974],
                    text: 'ТРЦ Галерея'
                },
                {
                    coords: [53.893009, 27.546685],
                    text: 'ТРЦ Галилео'
                }
            ];

            points.forEach(function(point) {
                map.geoObjects.add(new ymaps.Placemark(point.coords, {
                    balloonContent: point.text
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><circle cx="11" cy="11" r="8" fill="orange" stroke="black" stroke-width="2"/></svg>',
                    iconImageSize: [22, 22],
                    iconImageOffset: [-11, -11]
                }));
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Функция для получения URL из data-атрибута
    function getUrlFromDataHref(element) {
        const href = element.getAttribute('data-href');
        switch(href) {
            case 'kirova':
                return 'https://yandex.by/maps/157/minsk/?ll=27.558972,53.900601&mode=search&text=Минск%2C%20ул.%20Кирова%2C%2019&z=17';
            case 'gallery':
                return 'https://yandex.by/maps/157/minsk/?ll=27.558972,53.900601&mode=search&text=Минск%2C%20Проспект%20Победителей%209%20(ТРЦ%20Галерея)&z=17';
            case 'galileo':
                return 'https://yandex.by/maps/157/minsk/?ll=27.558972,53.900601&mode=search&text=Минск%2C%20Улица%20Бобруйская%206%20(ТРЦ%20Галилео)&z=17';
        }
    }

    // Добавляем обработчики кликов для всех элементов с data-href
    document.querySelectorAll('[data-href]').forEach(element => {
        element.addEventListener('click', function() {
            const url = getUrlFromDataHref(this);
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});