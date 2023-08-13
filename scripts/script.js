const playButton = document.querySelector('.play-button');
const audioPlayer = document.querySelector('#audio-player');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerText = 'Pausar';
  } else {
    audioPlayer.pause();
    playButton.innerText = 'Reproduzir';
  }
});
