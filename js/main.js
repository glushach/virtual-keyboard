import { data } from './translate.js';
const foo = 'string';
console.log(data);
console.log('\\')

document.querySelector('body').innerHTML = `
<p>${data.en['\\']}</p>
`

// npx eslint js/main.js - чтобы проверить на соответсвие из консоли
// npx eslint js/main.js --fix - автоматически из консоли фиксить ошибки в данном файле