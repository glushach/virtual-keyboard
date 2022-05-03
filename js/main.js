import data from './translate.js';
import { setLang, initKeyboard } from './change-lang.js';

import { setAnimatedSingle, setAnimationDouble } from './animate.js';

window.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="container">
            <h1>Виртуальная клавиатура</h1>
            <textarea name="output" class="output" cols="50" rows="5"></textarea>
            <div class="keyboard-wrap"></div>
            <div class="warning">Клавиатура создана для OS Windows</div>
            <div class="lang">Для переключения языка используй левую или правую комбинацию <strong>Ctrl + Alt</strong></div>
        </div>`,
  );
  if (!localStorage.getItem('langKeyBoard')) localStorage.setItem('langKeyBoard', 'en');
  if (localStorage.getItem('register') !== 'unshift') localStorage.setItem('register', 'unshift');
  setLang(
    'ControlLeft',
    'AltLeft',
  );
  setLang(
    'ControlRight',
    'AltRight',
  );
  initKeyboard(); // формирование верстки при первой загрузки страници

  function keyDownHandler(e) {
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
        localStorage.getItem('register') === 'shift'
        || localStorage.getItem('register') === 'capslock_shift'
      ) { return null; }

      if (localStorage.getItem('register') === 'unshift') {
        localStorage.setItem('register', 'shift');
        initKeyboard();
        setAnimatedSingle(e.code); // добавить класс у shift
      } else if (localStorage.getItem('register') === 'capslock') {
        localStorage.setItem('register', 'capslock_shift');
        initKeyboard();
        setAnimationDouble('CapsLock', e.code); // добавить класс у capslock и shift
      }
    } // and shift

    const lang = localStorage.getItem('langKeyBoard');
    const register = localStorage.getItem('register');

    const key = e.code; // very important
    let val = document.querySelector('textarea').value; // very important
    const start = document.querySelector('textarea').selectionStart;

    if (data[lang][register][key]) {
      if (start >= 0 && start <= val.length) {
        document.querySelector('textarea').value = val
          .slice(0, start) + data[lang][register][key] + val.slice(start, val.length);
        document.querySelector('textarea').selectionStart = start + data[lang][register][key].length;
        document.querySelector('textarea').selectionEnd = start + data[lang][register][key].length;
      }
    } else if (key === 'Backspace') {
      if (start > 0 && start <= val.length) {
        val = val.slice(0, start - 1) + val.slice(start, val.length);
        document.querySelector('textarea').value = val;
        document.querySelector('textarea').selectionStart = start - 1;
        document.querySelector('textarea').selectionEnd = start - 1;
      }
    } else if (key === 'Delete') {
      if (start >= 0 && start <= val.length - 1) {
        val = val.slice(0, start) + val.slice(start + 1, val.length);
        document.querySelector('textarea').value = val;
        document.querySelector('textarea').selectionStart = start;
        document.querySelector('textarea').selectionEnd = start;
      }
    }
    return null;
  }
  document.addEventListener('keydown', keyDownHandler);

  function keyUpHandler(e) {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { // shift
      if (localStorage.getItem('register') === 'shift') {
        localStorage.setItem('register', 'unshift');
        initKeyboard();
      } else if (localStorage.getItem('register') === 'capslock_shift') {
        localStorage.setItem('register', 'capslock');
        initKeyboard();
        setAnimatedSingle('CapsLock'); // вернуть класс у capslock
      }
    } // and shift
  }
  document.addEventListener('keyup', keyUpHandler);

  function mouseDownHandler(e) {
    if (!e.target.classList.contains('output')) {
      e.preventDefault();
    }
  }
  document.addEventListener('mousedown', mouseDownHandler);

  function mouseUpHandler(e) {
    if (!e.target.classList.contains('output')) {
      e.preventDefault();
    }
  }
  document.addEventListener('mouseup', mouseUpHandler);
}); // end DOMContentLoaded

// npx eslint js/main.js - чтобы проверить на соответсвие из консоли
// npx eslint js/main.js --fix - автоматически из консоли фиксить ошибки в данном файле
// npx eslint --fix
