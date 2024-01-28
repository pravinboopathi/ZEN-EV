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

// benefit section , title animate :-
document.addEventListener("DOMContentLoaded", function () {
    var element = document.querySelector(".bf-title");

    function handleScroll() {
        var position = element.getBoundingClientRect();

        // If the element is in the viewport, add the 'visible' class to trigger the animation
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add("visible");
        } else {
            // If the element is out of view, remove the 'visible' class
            element.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Initial check on page load
    handleScroll();
});



// field section 
document.addEventListener("DOMContentLoaded", function () {
    var element = document.getElementById("field-section");

    function handleScroll() {
        var position = element.getBoundingClientRect();

        // If the element is in the viewport, trigger the animation
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Initial check on page load
    handleScroll();
});

