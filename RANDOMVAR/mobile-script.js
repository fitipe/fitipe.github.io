console.log("Mobile!");

let media;
let nextMedia;
var sqr;
var imageDuration = 5000; // time in milliseconds before selecting new image
var timer; // holds the timer ID

function setup() {
    sqr = Math.min(windowWidth, windowHeight);
    let canvas = createCanvas(sqr, sqr);
    canvas.parent("canvas-container");
    preloadMedia();
}

function preloadMedia() {
    let images = ['./0.jpg', './1.jpg', './2.jpg'];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    media = createElement('img', '', '', true);
    media.attribute('src', randomImage);
    media.attribute('width', sqr);
    media.attribute('height', sqr);
    media.hide();
    media.parent("canvas-container");

    // set timer to select next image after a certain duration
    timer = setInterval(selectNextImage, imageDuration);
}

function selectNextImage() {
    let images = ['./0.jpg', './1.jpg', './2.jpg'];
    let nextImage = images[Math.floor(Math.random() * images.length)];
    nextMedia = createElement('img', '', '', true);
    nextMedia.attribute('src', nextImage);
    nextMedia.attribute('width', sqr);
    nextMedia.attribute('height', sqr);
    nextMedia.hide();
    nextMedia.parent("canvas-container");

    // remove current media after next media loads
    nextMedia.elt.onload = function() {
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
      let ctx = canvas.getContext('2d');
      ctx.drawImage(media.elt, 0, 0, sqr, sqr);
    }
}

