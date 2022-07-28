export function setActiveClass(selector) {
  document.querySelector(`#${selector}`).classList.add('active');
}
export function setAnimationSingle(selector) {
  const btn = document.getElementById(`${selector}`);
  if (btn) {
    btn.classList.add('transform-btn');
    btn.addEventListener('animationend', () => {
      btn.classList.remove('transform-btn');
    });
  }
}
export function setAnimationDouble(selector1, selector2) {
  document.querySelector(`#${selector1}`).classList.add('active');
  document.querySelector(`#${selector2}`).classList.add('active');
}

// npx eslint js/animate.js - check from console
// npx eslint js/animate.js --fix - fix bugs from console
