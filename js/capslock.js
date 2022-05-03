import {initKeyboard} from "./change-lang.js";
import {setActiveClass} from "./animate.js";

export default function setCapsLock(e) {
    if (e === 'CapsLock') {
        if (localStorage.getItem('register') === 'unshift') {
            localStorage.setItem('register', 'capslock');
        } else if (localStorage.getItem('register') === 'capslock') {
            localStorage.setItem('register', 'unshift');
        }
        initKeyboard();
        if (localStorage.getItem('register') === 'capslock') {
            setActiveClass('CapsLock');
        }
    }
}