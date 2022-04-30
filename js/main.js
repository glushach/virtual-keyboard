import { data } from './translate.js';
import { Render } from './render.js';

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('langKeyBoard')) localStorage.setItem('langKeyBoard', 'en');
    if (localStorage.getItem('register') !== 'unshift') localStorage.setItem('register', 'unshift');

    new Render(
        data,
        localStorage.getItem('langKeyBoard'),
        localStorage.getItem('register')
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
                localStorage.getItem('register')
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


    
    
    
    /////////////////////////////////////////////////////////////
    function setCapsLock() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'CapsLock') { // Из-за всплытия событий обрабатывает функциоеальную кнопку
                // Перерисовываем язык
                if (localStorage.getItem('register') === 'unshift') {
                    localStorage.setItem('register', 'capslock');
                } else if (localStorage.getItem('register') === 'capslock') {
                    localStorage.setItem('register', 'unshift');
                }
                // else {
                //     localStorage.setItem('register', 'unshift');
                // }

                new Render(
                    data,
                    localStorage.getItem('langKeyBoard'),
                    localStorage.getItem('register')
                ).render();
                handlerClick();
                document.querySelector('textarea').focus();
                // добавляем класс активности
                if (localStorage.getItem('register') === 'capslock') {
                    document.querySelector('#CapsLock').classList.add('capslock');
                }
            }
        });
    }
    setCapsLock();
    ///////////////////////////////////////////////////////////////////
    function setShift() {
        document.addEventListener('keydown', (event) => {
            if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                if (localStorage.getItem('register') === 'shift') return null;
                if (localStorage.getItem('register') === 'unshift') {
                    localStorage.setItem('register', 'shift');
                }
                // else if (localStorage.getItem('register') === 'capslock') {
                //     localStorage.setItem('register', 'unshift');
                // }
            }
            new Render(
                data,
                localStorage.getItem('langKeyBoard'),
                localStorage.getItem('register')
            ).render();
            handlerClick();
            setAnimatedSingle(event.code);
        });

        document.addEventListener('keyup', (event) => {
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                if (localStorage.getItem('register') === 'shift') {
                    localStorage.setItem('register', 'unshift');

                    new Render(
                        data,
                        localStorage.getItem('langKeyBoard'),
                        localStorage.getItem('register')
                    ).render();
                    handlerClick();
                    setAnimatedSingle(event.code);
                }
            }
        });
    }
    setShift();

}); // end DOMContentLoaded

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
function setAnimatedSingle(selector) {
    document.querySelector(`#${selector}`).classList.toggle('transform-btn');
}


function handlerClick() {
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', (e) => {
        // Здесь будут обрабатываться все клики, но не комбинации клавиш
        console.log(e)
    });
}



// npx eslint js/main.js - чтобы проверить на соответсвие из консоли
// npx eslint js/main.js --fix - автоматически из консоли фиксить ошибки в данном файле