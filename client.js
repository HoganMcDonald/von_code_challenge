"use strict";

const SLIDE_TRANSITION_TIME = 5000; // ms

// array of background image dom elements
const headerImages =  document.getElementsByClassName("header--background-image");
let currentImage = 0; // displays first image on pageload

// will advance to next or previous image based on boolean value
function advanceImage(forward, reset) {
  /*
    forward: boolean - true will transition to next, false previous
    reset: boolean -  true will reset timer
  */
  const previousImage = currentImage;

  if (forward) {
    currentImage = (currentImage >= headerImages.length - 1) ? 0 : ++currentImage;
  } else {
    currentImage = (currentImage <= 0) ? headerImages.length - 1 : --currentImage;
  }

  // adjust opactity for images.
  headerImages[previousImage].style.opacity = 0;
  headerImages[currentImage].style.opacity = 1;

  //optional reset interval
  if (reset) {
    resetInterval();
  }
}; // advanceImage()

// advances image every 5 seconds
let timer = setInterval(function() {
  advanceImage(true)
}, SLIDE_TRANSITION_TIME);

// resets timer interval - click event
function resetInterval() {
  clearInterval(timer);
  timer = setInterval(function() {
    advanceImage(true)
  }, SLIDE_TRANSITION_TIME);
} // resetInterval()
