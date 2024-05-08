// expose.js

const audio = document.querySelector("audio.hidden");
const img = document.querySelector("section > img");
const hornSelect = document.getElementById("horn-select");
function hornSelectChange () {
  switch(hornSelect.value) {
    case "air-horn":
      img.src = "assets/images/air-horn.svg";
      img.alt = "air horn";
      audio.src = "assets/audio/air-horn.mp3";
      break;
    case "party-horn":
      img.src = "assets/images/party-horn.svg";
      img.alt = "party horn";
      audio.src = "assets/audio/party-horn.mp3";
      break;
    case "car-horn":
      img.src = "assets/images/car-horn.svg";
      img.alt = "car horn";
      audio.src = "assets/audio/car-horn.mp3";
      break;
    default:
      img.src = "assets/images/no-image.png";
      img.alt = "no image";
      audio.src = "";
  }
}

const icon = document.querySelector("div > img");
const volumeControls = document.querySelector("div > input");
function volumeControlsChange () {
  if(volumeControls.value == 0)
    icon.src = "assets/icons/volume-level-0.svg";
  else if(volumeControls.value < 33)
    icon.src = "assets/icons/volume-level-1.svg";
  else if(volumeControls.value < 67)
    icon.src = "assets/icons/volume-level-2.svg";
  else
    icon.src = "assets/icons/volume-level-3.svg";
  audio.volume = volumeControls.value / 100;
}

const jsConfetti = new JSConfetti();
function buttonClick () {
  audio.play();
  if(hornSelect.value === "party-horn")
    jsConfetti.addConfetti();
}

const button = document.querySelector("button");

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  hornSelect.addEventListener("change", hornSelectChange);
  volumeControls.addEventListener("change", volumeControlsChange);
  button.addEventListener("click", buttonClick);
}