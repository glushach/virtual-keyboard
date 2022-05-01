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
                <button class="btn" id="\`">${this.obj[this.lang][this.case]['`']}</button>
                <button class="btn" id="1">${this.obj[this.lang][this.case][1]}</button>
                <button class="btn" id="2">${this.obj[this.lang][this.case][2]}</button>
                <button class="btn" id="3">${this.obj[this.lang][this.case][3]}</button>
                <button class="btn" id="4">${this.obj[this.lang][this.case][4]}</button>
                <button class="btn" id="5">${this.obj[this.lang][this.case][5]}</button>
                <button class="btn" id="6">${this.obj[this.lang][this.case][6]}</button>
                <button class="btn" id="7">${this.obj[this.lang][this.case][7]}</button>
                <button class="btn" id="8">${this.obj[this.lang][this.case][8]}</button>
                <button class="btn" id="9">${this.obj[this.lang][this.case][9]}</button>
                <button class="btn" id="0">${this.obj[this.lang][this.case][0]}</button>
                <button class="btn" id="-">${this.obj[this.lang][this.case]['-']}</button>
                <button class="btn" id="=">${this.obj[this.lang][this.case]['=']}</button>
                <button class="btn btn-double btn-black" id="Backspace">Backspace</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-black" id="Tab">Tab</button>
                <button class="btn" id="q">${this.obj[this.lang][this.case].q}</button>
                <button class="btn" id="w">${this.obj[this.lang][this.case].w}</button>
                <button class="btn" id="e">${this.obj[this.lang][this.case].e}</button>
                <button class="btn" id="r">${this.obj[this.lang][this.case].r}</button>
                <button class="btn" id="t">${this.obj[this.lang][this.case].t}</button>
                <button class="btn" id="y">${this.obj[this.lang][this.case].y}</button>
                <button class="btn" id="u">${this.obj[this.lang][this.case].u}</button>
                <button class="btn" id="i">${this.obj[this.lang][this.case].i}</button>
                <button class="btn" id="o">${this.obj[this.lang][this.case].o}</button>
                <button class="btn" id="p">${this.obj[this.lang][this.case].p}</button>
                <button class="btn" id="[">${this.obj[this.lang][this.case]['[']}</button>
                <button class="btn" id="]">${this.obj[this.lang][this.case][']']}</button>
                <button class="btn" id="\">${this.obj[this.lang][this.case]['\\']}</button>
                <button class="btn btn-black" id="Delete">Del</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-double btn-black" id="CapsLock">CapsLock</button>
                <button class="btn" id="a">${this.obj[this.lang][this.case].a}</button>
                <button class="btn" id="s">${this.obj[this.lang][this.case].s}</button>
                <button class="btn" id="d">${this.obj[this.lang][this.case].d}</button>
                <button class="btn" id="f">${this.obj[this.lang][this.case].f}</button>
                <button class="btn" id="g">${this.obj[this.lang][this.case].g}</button>
                <button class="btn" id="h">${this.obj[this.lang][this.case].h}</button>
                <button class="btn" id="j">${this.obj[this.lang][this.case].j}</button>
                <button class="btn" id="k">${this.obj[this.lang][this.case].k}</button>
                <button class="btn" id="l">${this.obj[this.lang][this.case].l}</button>
                <button class="btn" id=";">${this.obj[this.lang][this.case][';']}</button>
                <button class="btn" id="'">${this.obj[this.lang][this.case]['\'']}</button>
                <button class="btn btn-double btn-black" id="Enter">Enter</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-double btn-black" id="ShiftLeft">Shift</button>
                <button class="btn" id="z">${this.obj[this.lang][this.case].z}</button>
                <button class="btn" id="x">${this.obj[this.lang][this.case].x}</button>
                <button class="btn" id="c">${this.obj[this.lang][this.case].c}</button>
                <button class="btn" id="v">${this.obj[this.lang][this.case].v}</button>
                <button class="btn" id="b">${this.obj[this.lang][this.case].b}</button>
                <button class="btn" id="n">${this.obj[this.lang][this.case].n}</button>
                <button class="btn" id="m">${this.obj[this.lang][this.case].m}</button>
                <button class="btn" id=",">${this.obj[this.lang][this.case][',']}</button>
                <button class="btn" id=".">${this.obj[this.lang][this.case]['.']}</button>
                <button class="btn" id="/">${this.obj[this.lang][this.case]['/']}</button>
                <button class="btn btn-black" id="ArrowUp">▲</button>
                <button class="btn btn-double btn-black" id="ShiftRight">Shift</button>
            </div>
            <div class="keyboard--row">
                <button class="btn btn-black" id="ControlLeft">Ctrl</button>
<!--                <button class="btn btn-black" id="MetaLeft">Win</button>-->
                <button class="btn btn-black" id="AltLeft">Alt</button>
                <button class="btn btn-space" id="Space"></button>
                <button class="btn btn-black" id="AltRight">Alt</button>
                <button class="btn btn-black" id="ArrowLeft">◀</button>
                <button class="btn btn-black" id="ArrowDown">▼</button>
                <button class="btn btn-black" id="ArrowRight">▶</button>
                <button class="btn btn-black" id="ControlRight">Ctrl</button>
            </div>
        </div>
        <div class="warning">Клавиатура создана для OS Windows</div>
        <div class="lang">Для переключения языка используй левую или правую комбинацию <strong>Ctrl + Alt</strong></div>
    </div>`
    );
  } // end method render
}

// npx eslint js/render.js - чтобы проверить на соответсвие из консоли
// npx eslint js/render.js --fix - автоматически из консоли фиксить ошибки в данном файле
