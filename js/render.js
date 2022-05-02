export default class Render {
  constructor(obj, lang, toCase) {
    this.obj = obj;
    this.lang = lang;
    this.case = toCase;
  }

  render() {
    console.log(this.obj[this.lang][this.case]);

    document.querySelector('.keyboard-wrap').innerHTML = `
    <div class="keyboard">
      <div class="keyboard--row">
        <button class="btn" id="\\">${this.obj[this.lang][this.case]['Backquote']}</button>
        <button class="btn" id="1">${this.obj[this.lang][this.case]['Digit1']}</button>
        <button class="btn" id="2">${this.obj[this.lang][this.case]['Digit2']}</button>
        <button class="btn" id="3">${this.obj[this.lang][this.case]['Digit3']}</button>
        <button class="btn" id="4">${this.obj[this.lang][this.case]['Digit4']}</button>
        <button class="btn" id="5">${this.obj[this.lang][this.case]['Digit5']}</button>
        <button class="btn" id="6">${this.obj[this.lang][this.case]['Digit6']}</button>
        <button class="btn" id="7">${this.obj[this.lang][this.case]['Digit7']}</button>
        <button class="btn" id="8">${this.obj[this.lang][this.case]['Digit8']}</button>
        <button class="btn" id="9">${this.obj[this.lang][this.case]['Digit9']}</button>
        <button class="btn" id="0">${this.obj[this.lang][this.case]['Digit0']}</button>
        <button class="btn" id="-">${this.obj[this.lang][this.case]['Minus']}</button>
        <button class="btn" id="=">${this.obj[this.lang][this.case]['Equal']}</button>
        <button class="btn btn-double btn-black" id="Backspace">Backspace</button>
      </div>
      <div class="keyboard--row">
        <button class="btn btn-black" id="Tab">Tab</button>
        <button class="btn" id="q">${this.obj[this.lang][this.case]['KeyQ']}</button>
        <button class="btn" id="w">${this.obj[this.lang][this.case]['KeyW']}</button>
        <button class="btn" id="e">${this.obj[this.lang][this.case]['KeyE']}</button>
        <button class="btn" id="r">${this.obj[this.lang][this.case]['KeyR']}</button>
        <button class="btn" id="t">${this.obj[this.lang][this.case]['KeyT']}</button>
        <button class="btn" id="y">${this.obj[this.lang][this.case]['KeyY']}</button>
        <button class="btn" id="u">${this.obj[this.lang][this.case]['KeyU']}</button>
        <button class="btn" id="i">${this.obj[this.lang][this.case]['KeyI']}</button>
        <button class="btn" id="o">${this.obj[this.lang][this.case]['KeyO']}</button>
        <button class="btn" id="p">${this.obj[this.lang][this.case]['KeyP']}</button>
        <button class="btn" id="[">${this.obj[this.lang][this.case]['BracketLeft']}</button>
        <button class="btn" id="]">${this.obj[this.lang][this.case]['BracketRight']}</button>
        <button class="btn" id="\\">${this.obj[this.lang][this.case]['Backslash']}</button>
        <button class="btn btn-black" id="Delete">Del</button>
      </div>
      <div class="keyboard--row">
        <button class="btn btn-double btn-black" id="CapsLock">CapsLock</button>
        <button class="btn" id="a">${this.obj[this.lang][this.case]['KeyA']}</button>
        <button class="btn" id="s">${this.obj[this.lang][this.case]['KeyS']}</button>
        <button class="btn" id="d">${this.obj[this.lang][this.case]['KeyD']}</button>
        <button class="btn" id="f">${this.obj[this.lang][this.case]['KeyF']}</button>
        <button class="btn" id="g">${this.obj[this.lang][this.case]['KeyG']}</button>
        <button class="btn" id="h">${this.obj[this.lang][this.case]['KeyH']}</button>
        <button class="btn" id="j">${this.obj[this.lang][this.case]['KeyJ']}</button>
        <button class="btn" id="k">${this.obj[this.lang][this.case]['KeyK']}</button>
        <button class="btn" id="l">${this.obj[this.lang][this.case]['KeyL']}</button>
        <button class="btn" id=";">${this.obj[this.lang][this.case]['Semicolon']}</button>
        <button class="btn" id="'">${this.obj[this.lang][this.case]['Quote']}</button>
        <button class="btn btn-double btn-black" id="Enter">Enter</button>
       </div>
       <div class="keyboard--row">
        <button class="btn btn-double btn-black" id="ShiftLeft">Shift</button>
        <button class="btn" id="z">${this.obj[this.lang][this.case]['KeyZ']}</button>
        <button class="btn" id="x">${this.obj[this.lang][this.case]['KeyX']}</button>
        <button class="btn" id="c">${this.obj[this.lang][this.case]['KeyC']}</button>
        <button class="btn" id="v">${this.obj[this.lang][this.case]['KeyV']}</button>
        <button class="btn" id="b">${this.obj[this.lang][this.case]['KeyB']}</button>
        <button class="btn" id="n">${this.obj[this.lang][this.case]['KeyN']}</button>
        <button class="btn" id="m">${this.obj[this.lang][this.case]['KeyM']}</button>
        <button class="btn" id=",">${this.obj[this.lang][this.case]['Comma']}</button>
        <button class="btn" id=".">${this.obj[this.lang][this.case]['Period']}</button>
        <button class="btn" id="/">${this.obj[this.lang][this.case]['Slash']}</button>
        <button class="btn btn-black" id="ArrowUp">▲</button>
        <button class="btn btn-double btn-black" id="ShiftRight">Shift</button>
       </div>
       <div class="keyboard--row">
        <button class="btn btn-black" id="ControlLeft">Ctrl</button>
        <button class="btn btn-black" id="AltLeft">Alt</button>
        <button class="btn btn-space" id="Space"></button>
        <button class="btn btn-black" id="AltRight">Alt</button>
        <button class="btn btn-black" id="ArrowLeft">◀</button>
        <button class="btn btn-black" id="ArrowDown">▼</button>
        <button class="btn btn-black" id="ArrowRight">▶</button>
        <button class="btn btn-black" id="ControlRight">Ctrl</button>
       </div>
      </div>
    `;
  } // end method render
}

// npx eslint js/render.js - чтобы проверить на соответсвие из консоли
// npx eslint js/render.js --fix - автоматически из консоли фиксить ошибки в данном файле
