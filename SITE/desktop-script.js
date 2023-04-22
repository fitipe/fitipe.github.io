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
    let videos = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4'];
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
    let videos = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4'];
    let nextVideo = videos[Math.floor(Math.random() * videos.length)];
    nextMedia = createVideo(nextVideo);
    nextMedia.elt.muted = true;
    nextMedia.hide();
    nextMedia.loop();
    document.body.appendChild(nextMedia.elt);

    // remove current media after next media starts playing
    nextMedia.elt.onplay = function() {
        media.remove();
        media = nextMedia;
        nextMedia = undefined;
    };
}

function draw() {
    if (media !== undefined) {
        // clear the canvas
        clear();

        // draw the current media
        image(media, 0, 0, sqr, sqr);
    }
}
