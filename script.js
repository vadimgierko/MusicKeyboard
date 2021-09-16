const KEYS = ["q", "2", "w", "3", "e", "r", "5", "t", "6", "y", "7", "u", "i", "9", "o", "0", "p", "[", "=", "]"];
const SOUND_ID = ["C", "Cis", "D", "Dis", "E", "F", "Fis", "G", "Gis", "A", "B", "H", "C2", "Cis2", "D2", "Dis2", "E2", "F2", "Fis2", "G2"];

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  //console.log(key);
  const keyIndex = KEYS.indexOf(key);
  //console.log(keyIndex);
  //console.log(SOUND_ID[keyIndex]);
  playSound(SOUND_ID[keyIndex])
});

function playSound(soundId) {
  const soundAudio = document.getElementById(soundId);
  soundAudio.currentTime = 0;
  soundAudio.play();
}

// harmony in left hand => predefined chords ready to play
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.code;

  if (key === "KeyA") {
    document.getElementById("C").play();
    document.getElementById("E").play();
    document.getElementById("A").play();
  } else if (key === "KeyC") {
    document.getElementById("C").play();
    document.getElementById("E").play();
    document.getElementById("G").play();
    document.getElementById("C2").play();
  } else if (key === "KeyF") {
    document.getElementById("F").play();
    document.getElementById("A").play();
    document.getElementById("C2").play();
    document.getElementById("F2").play();
  } else if (key === "KeyG") {
    document.getElementById("G").play();
    document.getElementById("H").play();
    document.getElementById("D2").play();
    document.getElementById("G2").play();
  } else if (key === "KeyD") {
    document.getElementById("D").play();
    document.getElementById("F").play();
    document.getElementById("A").play();
    document.getElementById("D2").play();
  } else if (key === "KeyX") { // E7 CHORD
    document.getElementById("E").play();
    document.getElementById("Gis").play();
    document.getElementById("H").play();
    document.getElementById("D").play();
  }
});