import Render from './render.js';
import { data } from './translate.js';

// Только комбинация CtrlLeft + AltLeft и CtrlRight + AltRight
export function initKeyboard() {
  new Render(
    data,
    localStorage.getItem('langKeyBoard'),
    localStorage.getItem('register'),
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
    document.querySelector('#CapsLock').classList.add('active');
  }
}

export function setLang(...codes) {
  const pressed = new Set();
  document.addEventListener('keyup', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) { // все ли клавиши из набора нажаты?
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
    pressed.clear(); // чтобы избежать "залипания" клавиши
  });

  document.addEventListener('keydown', (event) => {
    pressed.delete(event.code);
  });
}

// npx eslint js/change-lang.js
// npx eslint js/change-lang.js --fix
// npx eslint --fix
