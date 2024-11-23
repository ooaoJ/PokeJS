const musicButton = document.getElementById('musicButton');
const music = document.getElementById('music');


musicButton.addEventListener('click', () => {
    if (music.paused){
        music.play();
        music.volume = 0.2;
        musicButton.classList.remove('fa-volume-xmark');
        musicButton.classList.add('fa-volume-high');
    } else {
        music.pause();
        music.volume = 0.0;
        musicButton.classList.add('fa-volume-xmark');
        musicButton.classList.remove('fa-volume-high');
    }
})