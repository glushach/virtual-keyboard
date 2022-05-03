export function setActiveClass(selector) {
  document.querySelector(`#${selector}`).classList.add('active');
}
export function setAnimationSingle(selector) {
  const btn = document.querySelector(`#${selector}`);
  btn.classList.add('transform-btn');
  btn.addEventListener('animationend', () => {
    btn.classList.remove('transform-btn');
  });
}
export function setAnimationDouble(selector1, selector2) {
  document.querySelector(`#${selector1}`).classList.add('active');
  document.querySelector(`#${selector2}`).classList.add('active');
}

// npx eslint js/animate.js - чтобы проверить на соответсвие из консоли
// npx eslint js/animate.js --fix - автоматически из консоли фиксить ошибки в данном файле
