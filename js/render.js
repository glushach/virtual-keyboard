export default class Render {
  constructor(obj, lang, toCase) {
    this.obj = obj;
    this.lang = lang;
    this.case = toCase;
  }

  render() {
    document.querySelector('.keyboard-wrap').innerHTML = `
    <div class="keyboard">
      <div class="keyboard--row">
        <button class="btn" id="Backquote">${this.obj[this.lang][this.case].Backquote}</button>
        <button class="btn" id="Digit1">${this.obj[this.lang][this.case].Digit1}</button>
        <button class="btn" id="Digit2">${this.obj[this.lang][this.case].Digit2}</button>
        <button class="btn" id="Digit3">${this.obj[this.lang][this.case].Digit3}</button>
        <button class="btn" id="Digit4">${this.obj[this.lang][this.case].Digit4}</button>
        <button class="btn" id="Digit5">${this.obj[this.lang][this.case].Digit5}</button>
        <button class="btn" id="Digit6">${this.obj[this.lang][this.case].Digit6}</button>
        <button class="btn" id="Digit7">${this.obj[this.lang][this.case].Digit7}</button>
        <button class="btn" id="Digit8">${this.obj[this.lang][this.case].Digit8}</button>
        <button class="btn" id="Digit9">${this.obj[this.lang][this.case].Digit9}</button>
        <button class="btn" id="Digit0">${this.obj[this.lang][this.case].Digit0}</button>
        <button class="btn" id="Minus">${this.obj[this.lang][this.case].Minus}</button>
        <button class="btn" id="Equal">${this.obj[this.lang][this.case].Equal}</button>
        <button class="btn btn-double btn-black" id="Backspace">Backspace</button>
      </div>
      <div class="keyboard--row">
        <button class="btn btn-black" id="Tab">Tab</button>
        <button class="btn" id="KeyQ">${this.obj[this.lang][this.case].KeyQ}</button>
        <button class="btn" id="KeyW">${this.obj[this.lang][this.case].KeyW}</button>
        <button class="btn" id="KeyE">${this.obj[this.lang][this.case].KeyE}</button>
        <button class="btn" id="KeyR">${this.obj[this.lang][this.case].KeyR}</button>
        <button class="btn" id="KeyT">${this.obj[this.lang][this.case].KeyT}</button>
        <button class="btn" id="KeyY">${this.obj[this.lang][this.case].KeyY}</button>
        <button class="btn" id="KeyU">${this.obj[this.lang][this.case].KeyU}</button>
        <button class="btn" id="KeyI">${this.obj[this.lang][this.case].KeyI}</button>
        <button class="btn" id="KeyO">${this.obj[this.lang][this.case].KeyO}</button>
        <button class="btn" id="KeyP">${this.obj[this.lang][this.case].KeyP}</button>
        <button class="btn" id="BracketLeft">${this.obj[this.lang][this.case].BracketLeft}</button>
        <button class="btn" id="BracketRight">${this.obj[this.lang][this.case].BracketRight}</button>
        <button class="btn" id="Backslash">${this.obj[this.lang][this.case].Backslash}</button>
        <button class="btn btn-black" id="Delete">Del</button>
      </div>
      <div class="keyboard--row">
        <button class="btn btn-double btn-black" id="CapsLock">CapsLock</button>
        <button class="btn" id="KeyA">${this.obj[this.lang][this.case].KeyA}</button>
        <button class="btn" id="KeyS">${this.obj[this.lang][this.case].KeyS}</button>
        <button class="btn" id="KeyD">${this.obj[this.lang][this.case].KeyD}</button>
        <button class="btn" id="KeyF">${this.obj[this.lang][this.case].KeyF}</button>
        <button class="btn" id="KeyG">${this.obj[this.lang][this.case].KeyG}</button>
        <button class="btn" id="KeyH">${this.obj[this.lang][this.case].KeyH}</button>
        <button class="btn" id="KeyJ">${this.obj[this.lang][this.case].KeyJ}</button>
        <button class="btn" id="KeyK">${this.obj[this.lang][this.case].KeyK}</button>
        <button class="btn" id="KeyL">${this.obj[this.lang][this.case].KeyL}</button>
        <button class="btn" id="Semicolon">${this.obj[this.lang][this.case].Semicolon}</button>
        <button class="btn" id="Quote">${this.obj[this.lang][this.case].Quote}</button>
        <button class="btn btn-double btn-black" id="Enter">Enter</button>
       </div>
       <div class="keyboard--row">
        <button class="btn btn-double btn-black" id="ShiftLeft">Shift</button>
        <button class="btn" id="KeyZ">${this.obj[this.lang][this.case].KeyZ}</button>
        <button class="btn" id="KeyX">${this.obj[this.lang][this.case].KeyX}</button>
        <button class="btn" id="KeyC">${this.obj[this.lang][this.case].KeyC}</button>
        <button class="btn" id="KeyV">${this.obj[this.lang][this.case].KeyV}</button>
        <button class="btn" id="KeyB">${this.obj[this.lang][this.case].KeyB}</button>
        <button class="btn" id="KeyN">${this.obj[this.lang][this.case].KeyN}</button>
        <button class="btn" id="KeyM">${this.obj[this.lang][this.case].KeyM}</button>
        <button class="btn" id="Comma">${this.obj[this.lang][this.case].Comma}</button>
        <button class="btn" id="Period">${this.obj[this.lang][this.case].Period}</button>
        <button class="btn" id="Slash">${this.obj[this.lang][this.case].Slash}</button>
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

// npx eslint js/render.js
// npx eslint js/render.js --fix
