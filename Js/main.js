function navToggle(){
    var navbar= document.getElementById('nav');
    navbar.classList.toggle('show');
}

function alertMsg(){
    alert("Website is in development stage !!")
}

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("EV-video");

    function playVideo() {
        video.play();
    }

    // Add event listener for the ended event
    video.addEventListener("ended", function() {
        // Pause the video before restarting to avoid glitches
        video.pause();
        video.currentTime = 0; // Reset the video to the beginning
        
        // Set a 6-second delay before the next loop
        setTimeout(playVideo, 6000);
    });

    // Initial play
    playVideo();
});