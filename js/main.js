import { data } from './translate.js';
import { Render } from './render.js';
import { setLang } from './change-lang.js';
import { initKeyboard } from './change-lang.js';

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('langKeyBoard')) localStorage.setItem('langKeyBoard', 'en');
    if (localStorage.getItem('register') !== 'unshift') localStorage.setItem('register', 'unshift');
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    setLang(
        "ControlLeft",
        "AltLeft"
    );
    setLang(
        "ControlRight",
        "AltRight"
    );
    initKeyboard(); // формирование верстки при первой загрузки страници


    function keyDownHandler(e) {
        document.querySelector('textarea').focus();
        e.preventDefault();
        if (e.key === 'CapsLock') { // capsLock
            if (localStorage.getItem('register') === 'unshift') {
                localStorage.setItem('register', 'capslock');
            } else if (localStorage.getItem('register') === 'capslock') {
                localStorage.setItem('register', 'unshift');
            }
            initKeyboard();
            if (localStorage.getItem('register') === 'capslock') {
                setAnimatedSingle('CapsLock');
            }
        } // and capsLock


        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { // shift
            if (
                localStorage.getItem('register') === 'shift' ||
                localStorage.getItem('register') === 'capslock_shift'
            ) { return null; }

            if (localStorage.getItem('register') === 'unshift') {
                localStorage.setItem('register', 'shift');
                initKeyboard();
            } else if (localStorage.getItem('register') === 'capslock') {
                localStorage.setItem('register', 'capslock_shift');
                initKeyboard();
                setAnimationDouble('CapsLock', e.code); // добавить класс у capslock и shift
            }
        } // and shift

    }
    function keyUpHandler(e) {
        document.querySelector('textarea').focus();
        e.preventDefault();
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { // shift
            if (localStorage.getItem('register') === 'shift') {
                localStorage.setItem('register', 'unshift');
                initKeyboard();
                //setAnimatedSingle(e.code);
            } else if (localStorage.getItem('register') === 'capslock_shift') {
                localStorage.setItem('register', 'capslock');
                initKeyboard();
                setAnimatedSingle('CapsLock'); // вернуть класс у capslock
            }
        } // and shift
    }
    function mouseDownHandler(e) {
        document.querySelector('textarea').focus();
        e.preventDefault();
    }
    function mouseUpHandler(e) {
        document.querySelector('textarea').focus();
        e.preventDefault();
    }
}); // end DOMContentLoaded


function setAnimatedSingle(selector) {
    document.querySelector(`#${selector}`).classList.add('active');
}
function setAnimationDouble(selector1, selector2) {
    document.querySelector(`#${selector1}`).classList.add('active');
    document.querySelector(`#${selector2}`).classList.add('active');
}
// npx eslint js/main.js - чтобы проверить на соответсвие из консоли
// npx eslint js/main.js --fix - автоматически из консоли фиксить ошибки в данном файле