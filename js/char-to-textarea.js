import data from './translate.js';
import { setAnimationSingle } from './animate.js';

export default function charToTextarea(e) {
  const lang = localStorage.getItem('langKeyBoard');
  const register = localStorage.getItem('register');

  const key = e.code; // very important
  let val = document.querySelector('textarea').value; // very important
  const start = document.querySelector('textarea').selectionStart;

  if (data[lang][register][key]) {
    setAnimationSingle(key);
    if (start >= 0 && start <= val.length) {
      document.querySelector('textarea').value = val
        .slice(0, start) + data[lang][register][key] + val.slice(start, val.length);
      document.querySelector('textarea').selectionStart = start + data[lang][register][key].length;
      document.querySelector('textarea').selectionEnd = start + data[lang][register][key].length;
    }
  } else if (key === 'Backspace') {
    setAnimationSingle(key);
    if (start > 0 && start <= val.length) {
      val = val.slice(0, start - 1) + val.slice(start, val.length);
      document.querySelector('textarea').value = val;
      document.querySelector('textarea').selectionStart = start - 1;
      document.querySelector('textarea').selectionEnd = start - 1;
    }
  } else if (key === 'Delete') {
    setAnimationSingle(key);
    if (start >= 0 && start <= val.length - 1) {
      val = val.slice(0, start) + val.slice(start + 1, val.length);
      document.querySelector('textarea').value = val;
      document.querySelector('textarea').selectionStart = start;
      document.querySelector('textarea').selectionEnd = start;
    }
  }
}

// npx eslint js/char-to-textarea.js
// npx eslint js/char-to-textarea.js --fix
// npx eslint --fix
