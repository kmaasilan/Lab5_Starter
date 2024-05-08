// explore.js

const select = document.querySelector("select");
function populateSelectVoice () {
  const voices = speechSynthesis.getVoices();
  for(let i = 0; i < voices.length; i++) {
    const opt = document.createElement("option");
    opt.textContent = `${voices[i].name} (${voices[i].lang})`;
    select.appendChild(opt);
  }
}

const img = document.querySelector("img");
const text = document.querySelector("#text-to-speak");
function buttonClick () {
  const voiceIndex = select.selectedIndex - 1;
  const voices = speechSynthesis.getVoices();
  const speech = new SpeechSynthesisUtterance(text.value);
  speech.voice = voices[voiceIndex];
  speechSynthesis.speak(speech);
  img.src = "assets/images/smiling-open.png";
  speech.addEventListener("end", function doneSpeaking () {img.src = "assets/images/smiling.png";});
}

const button = document.querySelector("button");

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  if(typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined)
    speechSynthesis.onvoiceschanged = populateSelectVoice;
  button.addEventListener("click", buttonClick);

}