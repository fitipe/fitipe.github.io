console.log("Mobile script is running!");

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

function cropImage(img) {
  let x = random(img.width - 720);
  let y = random(img.height - 720);
  return img.get(x, y, 720, 720);
}

function preloadMedia() {
  let images = ['./0.jpg', './1.jpg', './2.jpg'];
  let randomImage = images[Math.floor(Math.random() * images.length)];
  media = createImg(randomImage, '', '', true, function() {
    media.hide();
    media.parent("canvas-container");

    // set timer to select next image after a certain duration
    timer = setInterval(selectNextImage, imageDuration);
  });
}

function selectNextImage() {
  let images = ['./0.jpg', './1.jpg', './2.jpg'];
  let nextImage = images[Math.floor(Math.random() * images.length)];
  nextMedia = createImg(nextImage, '', '', true, function() {
    nextMedia.hide();
    nextMedia.parent("canvas-container");

    let croppedImage = cropImage(nextMedia.elt);
    media.attribute('src', croppedImage.canvas.toDataURL());
    nextMedia.remove();
    nextMedia = undefined;
  });
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

