var soundID = "Thunder";

function loadSound() {
  createjs.Sound.registerSound("assets/1.m4a", soundID);
}

function playSound() {
  createjs.Sound.play(soundID);
}
