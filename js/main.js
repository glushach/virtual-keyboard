import { data } from './translate.js';
import { setLang } from './change-lang.js';
import { initKeyboard } from './change-lang.js';

window.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="container">
            <h1>Виртуальная клавиатура</h1>
            <textarea name="output" class="output" cols="50" rows="5"></textarea>
            <div class="keyboard-wrap"></div>
            <div class="warning">Клавиатура создана для OS Windows</div>
            <div class="lang">Для переключения языка используй левую или правую комбинацию <strong>Ctrl + Alt</strong></div>
        </div>`
  );
  if (!localStorage.getItem('langKeyBoard')) localStorage.setItem('langKeyBoard', 'en');
  if (localStorage.getItem('register') !== 'unshift') localStorage.setItem('register', 'unshift');
  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
  document.addEventListener('mousedown', mouseDownHandler);
  document.addEventListener('mouseup', mouseUpHandler);
  setLang(
    'ControlLeft',
    'AltLeft'
  );
  setLang(
    'ControlRight',
    'AltRight'
  );
  initKeyboard(); // формирование верстки при первой загрузки страници

  let string = ''; // FOR TEXTAREA
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
      } else if (localStorage.getItem('register') === 'capslock') {
        localStorage.setItem('register', 'capslock_shift');
        initKeyboard();
        setAnimationDouble('CapsLock', e.code); // добавить класс у capslock и shift
      }
    } // and shift

    let lang = localStorage.getItem('langKeyBoard');
    let register = localStorage.getItem('register');
    let key = (e.key).toLowerCase();
    const start = document.querySelector('textarea').selectionStart;
    console.log('Start', start)

    if (data[lang][register][key]) {
      // string.split(' ').splice(0, start, data[lang][register][key]).join(''); ПОДУМАТЬ????????????????????????
      document.querySelector('textarea').value = string;
    } else if (e.key === 'Enter') {
      string += '\n';
    } else if (e.key === 'Tab') {
      string += '   ';
    }
  }
  function keyUpHandler(e) {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { // shift
      if (localStorage.getItem('register') === 'shift') {
        localStorage.setItem('register', 'unshift');
        initKeyboard();
        // setAnimatedSingle(e.code);
      } else if (localStorage.getItem('register') === 'capslock_shift') {
        localStorage.setItem('register', 'capslock');
        initKeyboard();
        setAnimatedSingle('CapsLock'); // вернуть класс у capslock
      }
    } // and shift
  }
  function mouseDownHandler(e) {
    if (!e.target.classList.contains('output')) {
      e.preventDefault();
    }

  }
  function mouseUpHandler(e) {
    if (!e.target.classList.contains('output')) {
      e.preventDefault();
    }
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
