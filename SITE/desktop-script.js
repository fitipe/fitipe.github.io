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
    let videos = ['./0.mp4','./1.mp4','./2.mp4'];
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
    let videos = ['./0.mp4','./1.mp4','./2.mp4'];
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
