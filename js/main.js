import { data } from './translate.js';
import { Render } from './render.js';

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('langKeyBoard')) localStorage.setItem('langKeyBoard', 'en');

    new Render(data, localStorage.getItem('langKeyBoard'), 'unshift').render();
});




// npx eslint js/main.js - чтобы проверить на соответсвие из консоли
// npx eslint js/main.js --fix - автоматически из консоли фиксить ошибки в данном файле