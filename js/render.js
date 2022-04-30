export class Render {
  constructor(obj, lang, toCase) {
    this.obj = obj;
    this.lang = lang;
    this.case = toCase;
  }

  render() {
    console.log(this.obj[this.lang][this.case]);

    if (document.body.children.length > 1) { // очистка от предыдущей верстки
      document.body.removeChild(document.body.firstElementChild);
    }

    return document.body.insertAdjacentHTML(
      'afterbegin',
      `   <div class="container">
        <h1>Виртуальная клавиатура</h1>
        <textarea name="output" id="output" cols="50" rows="5"></textarea>
        <div class="keyboard">
            <div class="keyboard--row">
                <button class="btn">${this.obj[this.lang][this.case]['`']}</button>
                <button class="btn">1</button>
                <button class="btn">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
                <button class="btn">5</button>
                <button class="btn">6</button>
                <button class="btn">7</button>
                <button class="btn">8</button>
                <button class="btn">9</button>
                <button class="btn">0</button>
                <button class="btn">-</button>
                <button class="btn">=</button>
                <button class="btn btn-double btn-black">Backspace</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-black">Tab</button>
                <button class="btn">${this.obj[this.lang][this.case].q}</button>
                <button class="btn">${this.obj[this.lang][this.case].w}</button>
                <button class="btn">${this.obj[this.lang][this.case].e}</button>
                <button class="btn">${this.obj[this.lang][this.case].r}</button>
                <button class="btn">${this.obj[this.lang][this.case].t}</button>
                <button class="btn">${this.obj[this.lang][this.case].y}</button>
                <button class="btn">${this.obj[this.lang][this.case].u}</button>
                <button class="btn">${this.obj[this.lang][this.case].i}</button>
                <button class="btn">${this.obj[this.lang][this.case].o}</button>
                <button class="btn">${this.obj[this.lang][this.case].p}</button>
                <button class="btn">${this.obj[this.lang][this.case]['[']}</button>
                <button class="btn">${this.obj[this.lang][this.case][']']}</button>
                <button class="btn">${this.obj[this.lang][this.case]['\\']}</button>
                <button class="btn btn-black">Del</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-double btn-black">CapsLock</button>
                <button class="btn">${this.obj[this.lang][this.case].a}</button>
                <button class="btn">${this.obj[this.lang][this.case].s}</button>
                <button class="btn">${this.obj[this.lang][this.case].d}</button>
                <button class="btn">${this.obj[this.lang][this.case].f}</button>
                <button class="btn">${this.obj[this.lang][this.case].g}</button>
                <button class="btn">${this.obj[this.lang][this.case].h}</button>
                <button class="btn">${this.obj[this.lang][this.case].j}</button>
                <button class="btn">${this.obj[this.lang][this.case].k}</button>
                <button class="btn">${this.obj[this.lang][this.case].l}</button>
                <button class="btn">${this.obj[this.lang][this.case].a}</button>
                <button class="btn">${this.obj[this.lang][this.case][';']}</button>
                <button class="btn">${this.obj[this.lang][this.case]['\'']}</button>
                <button class="btn btn-double btn-black">Enter</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-double btn-black">Shift</button>
                <button class="btn">${this.obj[this.lang][this.case].z}</button>
                <button class="btn">${this.obj[this.lang][this.case].x}</button>
                <button class="btn">${this.obj[this.lang][this.case].c}</button>
                <button class="btn">${this.obj[this.lang][this.case].v}</button>
                <button class="btn">${this.obj[this.lang][this.case].b}</button>
                <button class="btn">${this.obj[this.lang][this.case].n}</button>
                <button class="btn">${this.obj[this.lang][this.case].m}</button>
                <button class="btn">${this.obj[this.lang][this.case][',']}</button>
                <button class="btn">${this.obj[this.lang][this.case]['.']}</button>
                <button class="btn">${this.obj[this.lang][this.case]['/']}</button>
                <button class="btn btn-black">▲</button>
                <button class="btn btn-double btn-black">Shift</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-black transform-btn">Ctrl</button>
                <button class="btn btn-black">Win</button>
                <button class="btn btn-black">Alt</button>
                <button class="btn btn-space transform-btn"></button>
                <button class="btn btn-black">Alt</button>
                <button class="btn btn-black">◀</button>
                <button class="btn btn-black">▼</button>
                <button class="btn btn-black">▶</button>
                <button class="btn btn-black">Ctrl</button>
            </div>
        </div>
        <div class="warning">Клавиатура создана для OS Windows</div>
        <div class="lang">Для переключения языка используй комбинацию <strong>Ctrl + Shift</strong></div>
    </div>`
    );
  } // end method render
}

// npx eslint js/render.js - чтобы проверить на соответсвие из консоли
// npx eslint js/render.js --fix - автоматически из консоли фиксить ошибки в данном файле
