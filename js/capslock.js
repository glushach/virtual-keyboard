import { initKeyboard } from './change-lang.js';
import { setActiveClass } from './animate.js';

export default function setCapsLock(e) {
  if (e === 'CapsLock') {
    if (localStorage.getItem('register') === 'unshift') {
      localStorage.setItem('register', 'capslock');
    } else if (localStorage.getItem('register') === 'capslock') {
      localStorage.setItem('register', 'unshift');
    } else if (localStorage.getItem('register') === 'shift') {
      localStorage.setItem('register', 'capslock_shift');
    } else if (localStorage.getItem('register') === 'capslock_shift') {
      localStorage.setItem('register', 'shift');
    }
    initKeyboard();
    if (localStorage.getItem('register') === 'capslock') {
      setActiveClass('CapsLock');
    } else if (localStorage.getItem('register') === 'capslock_shift') {
      setActiveClass('CapsLock');
      setActiveClass('ShiftLeft');
    } else if (localStorage.getItem('register') === 'shift') {
      setActiveClass('ShiftLeft');
    }
  }
}

// npx eslint js/capslock.js - check from console
// npx eslint js/capslock.js --fix - fix from console
