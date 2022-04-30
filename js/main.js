import { data } from './translate.js';
import { Render } from './render.js';

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('langKeyBoard')) localStorage.setItem('langKeyBoard', 'en');

    new Render(data, localStorage.getItem('langKeyBoard'), 'unshift').render();
    handlerClick();

    function runOnKeys(...codes) {
        let pressed = new Set();

        document.addEventListener('keydown', (event) => {
            pressed.add(event.code);

            for (let code of codes) { // все ли клавиши из набора нажаты?
                if (!pressed.has(code)) {
                    return;
                }
            }

            pressed.clear(); // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново

            // Перерисовываем язык
            if (localStorage.getItem('langKeyBoard') === 'en') {
                localStorage.setItem('langKeyBoard', 'ru');
            } else {
                localStorage.setItem('langKeyBoard', 'en');
            }
            new Render(data, localStorage.getItem('langKeyBoard'), 'unshift').render();
            handlerClick();
        });

        document.addEventListener('keyup', (event) => {
            pressed.delete(event.code);
        });

    }

    runOnKeys(
        "ControlLeft",
        "ShiftLeft"
    );
    runOnKeys(
        "ControlRight",
        "ShiftRight"
    );

    function handlerClick() {
        const keyboard = document.querySelector('.keyboard');
        keyboard.addEventListener('click', (e) => {
            console.log('Event', e)
        });
    }
});




// npx eslint js/main.js - чтобы проверить на соответсвие из консоли
// npx eslint js/main.js --fix - автоматически из консоли фиксить ошибки в данном файле