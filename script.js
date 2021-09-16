const KEYS = ["q", "2", "w", "3", "e", "r", "5", "t", "6", "y", "7", "u", "i", "9", "o", "0", "p", "[", "=", "]"];
const SOUND_ID = ["C", "Cis", "D", "Dis", "E", "F", "Fis", "G", "Gis", "A", "B", "H", "C2", "Cis2", "D2", "Dis2", "E2", "F2", "Fis2", "G2"];

//const keys = document.querySelectorAll(".key");
//console.log(keys);

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  console.log(key);
  const keyIndex = KEYS.indexOf(key);
  console.log(keyIndex);
  console.log(SOUND_ID[keyIndex]);
  playSound(SOUND_ID[keyIndex])
});

function playSound(soundId) {
  const soundAudio = document.getElementById(soundId);
  soundAudio.currentTime = 0;
  soundAudio.play();
}

// left hand => harmony / chords:
  /*
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
  */