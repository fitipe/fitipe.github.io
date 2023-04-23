let media;
let nextMedia;
var sqr;
var videoDuration = 5000; // time in milliseconds before selecting new video
var timer; // holds the timer ID

function setup() {
    sqr = Math.min(windowWidth, windowHeight);
    let canvas = createCanvas(sqr, sqr);
    canvas.parent("canvas-container");
    preloadMedia();
}

function preloadMedia() {
    let videos = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4','./30.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4'];
    let randomVideo = videos[Math.floor(Math.random() * videos.length)];
    media = createVideo(randomVideo);
    media.elt.muted = true;
    media.hide();
    media.loop();
    document.body.appendChild(media.elt);

    // set timer to select next video after a certain duration
    timer = setInterval(selectNextVideo, videoDuration);
}

function selectNextVideo() {
  let videos = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4','./30.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4'];
  let nextVideo = videos[Math.floor(Math.random() * videos.length)];
  nextMedia = createVideo(nextVideo);
  nextMedia.elt.muted = true;
  nextMedia.hide();
  nextMedia.loop();

  // Set opacity to 0 and add nextMedia to the DOM
  nextMedia.style('opacity', 0);
  document.body.appendChild(nextMedia.elt);

  // Fade out current media and fade in nextMedia
  media.style('transition', 'opacity 1s');
  nextMedia.style('transition', 'opacity 1s');

  // Fade out current media and set opacity of nextMedia to 1
  media.style('opacity', 0);
  nextMedia.style('opacity', 1);

  // Remove current media from the DOM after it finishes fading out
  setTimeout(function() {
    media.remove();
  }, 1000);

  // Set nextMedia as the new current media after it finishes fading in
  setTimeout(function() {
    media = nextMedia;
    nextMedia = undefined;
  }, 1000);
}



function draw() {
    if (media !== undefined) {
        // clear the canvas

        // draw the current media
        image(media, 0, 0, sqr, sqr);
    }
}
