import { setLang, initKeyboard, changeLangClick } from './change-lang.js';
import setCapsLock from './capslock.js';
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
    setCapsLock(e.key); // установить capslock
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

  const ctrlAltClickLeft = new Set();
  const ctrlAltClickRight = new Set();
  function mouseClickHandler(e) {
    if (!e.target.classList.contains('output')) {
      e.preventDefault();
    }

    setCapsLock(e.target.id); // установить capslock на unshift и capslock
    charToTextarea(e.target.id); // вводить символы в textarea

    // Обработка двух клавиш Shift только при клике по них
    if (e.target.id === 'ShiftLeft' || e.target.id === 'ShiftRight') {
      if (localStorage.getItem('register') === 'unshift') {
        localStorage.setItem('register', 'shift');
        initKeyboard();
        setActiveClass(e.target.id);
      } else if (localStorage.getItem('register') === 'shift') {
        localStorage.setItem('register', 'unshift');
        initKeyboard();
      } else if (localStorage.getItem('register') === 'capslock') {
        localStorage.setItem('register', 'capslock_shift');
        initKeyboard();
        setActiveClass('CapsLock');
        setActiveClass(e.target.id);
      } else if (localStorage.getItem('register') === 'capslock_shift') {
        if (e.target.id === 'ShiftLeft' || e.target.id === 'ShiftRight') {
          localStorage.setItem('register', 'capslock');
          initKeyboard();
          setActiveClass('CapsLock');
        }
      }
    }

    // Обработака смены языка по клику на левую комбинацию клавиш
    if (e.target.id === 'ControlLeft' || e.target.id === 'AltLeft') {
      if (ctrlAltClickRight.size === 0) {
        if (ctrlAltClickLeft.size <= 2 && (ctrlAltClickLeft.has(e.target.id) !== true)) {
          ctrlAltClickLeft.add(e.target.id);
          setActiveClass(e.target.id);
        }
        if (ctrlAltClickLeft.size === 2) {
          ctrlAltClickLeft.clear();
          changeLangClick(e.target.id);
        }
      }
    } // end left
    // Обработака смены языка по клику на правую комбинацию клавиш
    if (e.target.id === 'AltRight' || e.target.id === 'ControlRight') {
      if (ctrlAltClickLeft.size === 0) {
        if (ctrlAltClickRight.size < 2 && (ctrlAltClickRight.has(e.target.id) !== true)) {
          ctrlAltClickRight.add(e.target.id)
          setActiveClass(e.target.id);
        }
        if (ctrlAltClickRight.size === 2) {
          ctrlAltClickRight.clear();
          changeLangClick(e.target.id);
        }
      }

    } // end right
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
