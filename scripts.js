let bgm = document.getElementById('bgm');
let playMuteBtn = document.getElementById('play-mute-btn');

function playMuteBGM() {
  if (bgm.paused) {
    bgm.play();
    playMuteBtn.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
  } else if (!bgm.muted) {
    bgm.muted = true;
    playMuteBtn.innerHTML = '<i class="fa fa-volume-mute" aria-hidden="true"></i>';
  } else {
    bgm.muted = false;
    playMuteBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  }
}