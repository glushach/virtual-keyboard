import { data } from './translate.js';
import { Render } from './render.js';

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('langKeyBoard')) localStorage.setItem('langKeyBoard', 'en');
    if (!localStorage.getItem('capsLock')) localStorage.setItem('capsLock', 'unshift');

    new Render(
        data,
        localStorage.getItem('langKeyBoard'),
        localStorage.getItem('capsLock')
    ).render();
    handlerClick();

    function setLang(...codes) {
        let pressed = new Set();

        document.addEventListener('keydown', (event) => {
            document.querySelector('textarea').focus();
            pressed.add(event.code);

            for (let code of codes) { // все ли клавиши из набора нажаты?
                if (!pressed.has(code)) {
                    return;
                }
            }


            // Перерисовываем язык
            if (localStorage.getItem('langKeyBoard') === 'en') {
                localStorage.setItem('langKeyBoard', 'ru');
            } else {
                localStorage.setItem('langKeyBoard', 'en');
            }

            new Render(
                data,
                localStorage.getItem('langKeyBoard'),
                localStorage.getItem('capsLock')
            ).render();
            setAnimateLang(pressed);
            handlerClick();
            pressed.clear(); // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
        });

        document.addEventListener('keyup', (event) => {
            pressed.delete(event.code);
        });

    }

    setLang(
        "ControlLeft",
        "ShiftLeft"
    );
    setLang(
        "ControlRight",
        "ShiftRight"
    );

    function handlerClick() {
        const keyboard = document.querySelector('.keyboard');
        keyboard.addEventListener('click', (e) => {
           // Здесь будут обрабатываться все клики, но не комбинации клавиш
            console.log(e)
        });
    }

    function setAnimateLang(pressed) {

        if (pressed.size === 2) { // добавить анимацию
            if (pressed.has('ControlLeft')) {
                const controlLeft = document.querySelector('#ControlLeft');
                const shiftLeft = document.querySelector('#ShiftLeft');
                controlLeft.classList.add('transform-btn');
                shiftLeft.classList.add('transform-btn');
            } else {
                const controlRight = document.querySelector('#ControlRight');
                const shiftRight = document.querySelector('#ShiftRight');
                controlRight.classList.add('transform-btn');
                shiftRight.classList.add('transform-btn');
            }
        }
    }
    
    
    
    /////////////////////////////////////////////////////////////
    function setCapsLock() {
        document.addEventListener('keydown', (event) => {
            console.log('Event', event)
            if (event.key === 'CapsLock') { // Из-за всплытия событий обрабатывает функциоеальную кнопку
                // Перерисовываем язык
                if (localStorage.getItem('capsLock') === 'unshift') {
                    localStorage.setItem('capsLock', 'shift');
                } else {
                    localStorage.setItem('capsLock', 'unshift');
                }

                new Render(
                    data,
                    localStorage.getItem('langKeyBoard'),
                    localStorage.getItem('capsLock')
                ).render();
            }
        });
    }
    setCapsLock();
});




// npx eslint js/main.js - чтобы проверить на соответсвие из консоли
// npx eslint js/main.js --fix - автоматически из консоли фиксить ошибки в данном файле