function togglePlayPause(trackId) {
    // Pause all other audio elements
    var allAudios = document.querySelectorAll('audio');
    for (var i = 0; i < allAudios.length; i++) {
        var audio = allAudios[i];
        var currentPlayPauseButton = audio.parentNode.querySelector('.fa-pause');
        if (audio.id !== trackId) {
            if (!audio.paused) {
                audio.pause();
                if (currentPlayPauseButton) {
                    currentPlayPauseButton.classList.remove('fa-pause');
                    currentPlayPauseButton.classList.add('fa-play');
                }
            }
        }
    }
    
    // Play or pause the clicked track
    var clickedAudio = document.getElementById(trackId);
    var clickedPlayPauseButton = clickedAudio.parentNode.querySelector('.fa-play, .fa-pause');
    if (clickedAudio.paused) {
        clickedAudio.play();
        clickedPlayPauseButton.classList.remove('fa-play');
        clickedPlayPauseButton.classList.add('fa-pause');
    } else {
        clickedAudio.pause();
        clickedPlayPauseButton.classList.add('fa-play');
        clickedPlayPauseButton.classList.remove('fa-pause');
    }
}


