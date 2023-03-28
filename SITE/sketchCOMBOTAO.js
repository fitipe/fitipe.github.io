let videoFiles = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4']
let videos = [];
let currentVideo = null;
let sqr;

function preload() {
  // preload the video files
  for (let i = 0; i < videoFiles.length; i++) {
    let video = createVideo(videoFiles[i]);
    video.style('display', 'none'); // hide the video element
    video.hide();
    videos.push(video);
  }
}

function setup() {
	sqr = Math.min(windowWidth, windowHeight);
  createCanvas(sqr, sqr);
  // create the video elements
  for (let i = 0; i < videos.length; i++) {
    videos[i].hide();
    videos[i].onended(function() { // when video ends, play another one
      playRandomVideo();
    });
  }
  
  // create the start button
  let startButton = createButton("Start");
  startButton.position(width / 2 - startButton.width / 2, height / 2 - startButton.height / 2);
  startButton.mousePressed(function() {
		startButton.hide();
    currentVideo = random(videos);
    currentVideo.play();
  });
}

function draw() {
  background(0);
  if (currentVideo) {
    image(currentVideo, 0, 0, width, height);
  }
}

function playRandomVideo() {
  currentVideo.hide(); // hide the current video element
  currentVideo = random(videos);
  currentVideo.elt.load(); // load video before playing
  if (currentVideo.elt.readyState === 4) { // check if video is ready to play
    currentVideo.play();
  } else {
    currentVideo.elt.oncanplay = function() {
      currentVideo.play();
    }
  }
}
