import {Render} from "./render.js";
import {data} from "./translate.js";

// Только комбинация CtrlLeft + AltLeft и CtrlRight + AltRight
export function setLang(...codes) {
    let pressed = new Set();
    document.addEventListener('keyup', (event) => {
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

        initKeyboard();
        setAnimateLang(pressed);
        pressed.clear(); // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
    });

    document.addEventListener('keydown', (event) => {
        pressed.delete(event.code);
    });
}
export function initKeyboard() {
    new Render(
        data,
        localStorage.getItem('langKeyBoard'),
        localStorage.getItem('register')
    ).render();
}
function setAnimateLang(pressed) {
    if (pressed.size === 2) { // добавить анимацию
        if (pressed.has('ControlLeft')) {
            const controlLeft = document.querySelector('#ControlLeft');
            const altLeft = document.querySelector('#AltLeft');
            controlLeft.classList.add('transform-btn');
            altLeft.classList.add('transform-btn');
        } else {
            const controlRight = document.querySelector('#ControlRight');
            const altRight = document.querySelector('#AltRight');
            controlRight.classList.add('transform-btn');
            altRight.classList.add('transform-btn');
        }
    }

    // Если включен capslock
    if (localStorage.getItem('register') === 'capslock') {
        document.querySelector(`#CapsLock`).classList.add('active');
    }
}