import { setLang, initKeyboard } from './change-lang.js';
import { setActiveClass, setAnimationDouble } from './animate.js';
import charToTextarea from './char-to-textarea.js';

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
        setActiveClass('CapsLock');
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
        setActiveClass(e.code); // добавить класс у shift
      } else if (localStorage.getItem('register') === 'capslock') {
        localStorage.setItem('register', 'capslock_shift');
        initKeyboard();
        setAnimationDouble('CapsLock', e.code); // добавить класс у capslock и shift
      }
    } // and shift

    charToTextarea(e.code); // вводить символы в textarea
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
        setActiveClass('CapsLock'); // вернуть класс у capslock
      }
    } // and shift
  }
  document.addEventListener('keyup', keyUpHandler);

  function mouseClickHandler(e) {
    if (!e.target.classList.contains('output')) {
      e.preventDefault();
    }
    charToTextarea(e.target.id); // вводить символы в textarea

    // const lang = localStorage.getItem('langKeyBoard');
    // const register = localStorage.getItem('register');
    //
    // const key = e.target.id;
    // console.log(e.target.id);
  }
  document.addEventListener('click', mouseClickHandler);

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
