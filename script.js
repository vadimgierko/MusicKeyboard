// zrób array key - file

// .pause()

const keyGis = document.getElementById("Gis");
const soundGis = new Audio("sounds/Gis.wav");
keyGis.addEventListener("click", () => {
  soundGis.play();
});

const keyA = document.getElementById("A");
const soundA = new Audio("sounds/A.wav");
keyA.addEventListener("click", () => {
  soundA.play();
});

const keyAis = document.getElementById("Ais");
const soundAis = new Audio("sounds/Ais.wav");
keyAis.addEventListener("click", () => {
  soundAis.play();
});

const keyB = document.getElementById("B");
const soundB = new Audio("sounds/B.wav");
keyB.addEventListener("click", () => {
  soundB.play();
});

const keyC = document.getElementById("C");
const soundC = new Audio("sounds/C.wav");
keyC.addEventListener("click", () => {
  soundC.play();
});

const keyCis = document.getElementById("Cis");
const soundCis = new Audio("sounds/Cis.wav");
keyCis.addEventListener("click", () => {
  soundCis.play();
});

const keyD = document.getElementById("D");
const soundD = new Audio("sounds/D.wav");
keyD.addEventListener("click", () => {
  soundD.play();
});

const keyDis = document.getElementById("Dis");
const soundDis = new Audio("sounds/Dis.wav");
keyDis.addEventListener("click", () => {
  soundDis.play();
});

const keyE = document.getElementById("E");
const soundE = new Audio("sounds/E.wav");
keyE.addEventListener("click", () => {
  soundE.play();
});

const keyF = document.getElementById("F");
const soundF = new Audio("sounds/F.wav");
keyF.addEventListener("click", () => {
  soundF.play();
});

const keyFis = document.getElementById("Fis");
const soundFis = new Audio("sounds/Fis.wav");
keyFis.addEventListener("click", () => {
  soundFis.play();
});

const keyG = document.getElementById("G");
const soundG = new Audio("sounds/G.wav");
keyG.addEventListener("click", () => {
  soundG.play();
});

// keyboard listeners:
document.addEventListener("keypress", (e) => {
  let key = e.code;
  /*
  if (key === "KeyA" || key === "Digit6") {
    soundGis.play();
  } else if (key === "KeyZ" || key === "KeyY") {
    soundA.play();
  } else if (key === "KeyS" || key === "Digit7") {
    soundAis.play();
  } else if (key === "KeyX" || key === "KeyU") {
    soundB.play();
  } else if (key === "KeyC" || key === "KeyI") {
    soundC.play();
  } else if (key === "KeyF" || key === "Digit9") {
    soundCis.play();
  } else if (key === "KeyV" || key === "KeyO") {
    soundD.play();
  } else if (key === "KeyG" || key === "Digit0") {
    soundDis.play();
  } else if (key === "KeyB" || key === "KeyP") {
    soundE.play();
  } else if (key === "KeyN" || key === "BracketLeft") {
    soundF.play();
  } else if (key === "KeyJ" || key === "Equal") {
    soundFis.play();
  } else if (key === "KeyM" || key === "BracketRight") {
    soundG.play();
  }
  */
  // right hand => melody
  if (key === "Digit6") {
    soundGis.play();
  } else if (key === "KeyY") {
    soundA.play();
  } else if (key === "Digit7") {
    soundAis.play();
  } else if (key === "KeyU") {
    soundB.play();
  } else if (key === "KeyI") {
    soundC.play();
  } else if (key === "Digit9") {
    soundCis.play();
  } else if (key === "KeyO") {
    soundD.play();
  } else if (key === "Digit0") {
    soundDis.play();
  } else if (key === "KeyP") {
    soundE.play();
  } else if (key === "BracketLeft") {
    soundF.play();
  } else if (key === "Equal") {
    soundFis.play();
  } else if (key === "BracketRight") {
    soundG.play();
  }
  
  // left hand => harmony / chords:
  if (key === "KeyA") {
    soundA.play();
    soundC.play();
    soundE.play();
  } else if (key === "KeyC") {
    soundC.play();
    soundE.play();
    soundG.play();
  } else if (key === "KeyF") {
    soundA.play();
    soundC.play();
    soundF.play();
  } else if (key === "KeyG") {
    soundB.play();
    soundD.play();
    soundG.play();
  } else if (key === "KeyD") {
    soundA.play();
    soundD.play();
    soundF.play();
  } else if (key === "KeyE") {
    soundGis.play();
    soundB.play();
    soundD.play();
    soundE.play();
  }
});