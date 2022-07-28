import Render from './render.js';
import data from './translate.js';
import { setActiveClass } from './animate.js';

// For CtrlLeft + AltLeft и CtrlRight + AltRight
export function initKeyboard() {
  new Render(
    data,
    localStorage.getItem('langKeyBoard'),
    localStorage.getItem('register'),
  ).render();
}

function setAnimateLang(pressed) {
  if (pressed.size === 2) { // add animate
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

  // If switch capslock
  if (localStorage.getItem('register') === 'capslock') {
    document.querySelector('#CapsLock').classList.add('active');
  }
}

export function setLang(...codes) {
  const pressed = new Set();
  document.addEventListener('keyup', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) { // all key press?
        return;
      }
    }

    // drown lang
    if (localStorage.getItem('langKeyBoard') === 'en') {
      localStorage.setItem('langKeyBoard', 'ru');
    } else {
      localStorage.setItem('langKeyBoard', 'en');
    }

    initKeyboard();
    setAnimateLang(pressed);
    pressed.clear();
  });

  document.addEventListener('keydown', () => {
    pressed.clear();
  });
}

// switch lang click
export function changeLangClick(e) {
  if (localStorage.getItem('langKeyBoard') === 'en') {
    localStorage.setItem('langKeyBoard', 'ru');
  } else {
    localStorage.setItem('langKeyBoard', 'en');
  }
  initKeyboard();
  document.querySelector(`#${e}`).classList.add('transform-btn');
  if (localStorage.getItem('register') === 'shift') {
    setActiveClass('ShiftLeft');
  }
}

// npx eslint js/change-lang.js
// npx eslint js/change-lang.js --fix
// npx eslint --fix
