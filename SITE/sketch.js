let videoIds = ["299066168", "299056435", "235383564", "229153640", "251512330"];
let videos = [];
let currentVideo = null;
let sqr;

function preload() {
  // preload the video files
  for (let i = 0; i < videoIds.length; i++) {
    let videoUrl = "https://player.vimeo.com/video/" + videoIds[i] + "?autoplay=1&loop=0&api=1&mute=1&background=1&title=0&byline=0&portrait=0&quality=540p&pip=false";
    let video = createDiv('<iframe src="' + videoUrl + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    video.style('display', 'none'); // hide the video element
    videos.push(video);
  }
}


function setup() {
  sqr = Math.min(windowWidth, windowHeight);
  createCanvas(sqr, sqr * 0.5625);
  // create the video elements
	for (let i = 0; i < videos.length; i++) {
  videos[i].hide();
  let iframe = videos[i].elt.querySelector('iframe');
  let videoSrc = iframe.src;
  videoSrc = videoSrc + '&background=1&pip=false';
  iframe.src = videoSrc;
  let player = new Vimeo.Player(iframe);
  player.on('ended', function() { // when video ends, play another one
    playRandomVideo();
  });
}

	
	
	
  // create the start button
  let startButton = createButton("Start");
  startButton.position(width / 2 - startButton.width / 2, height / 2 - startButton.height / 2);
  startButton.mousePressed(function() {
    startButton.hide();
    currentVideo = random(videos);
    currentVideo.show();
    let iframe = currentVideo.elt.querySelector('iframe');
    let player = new Vimeo.Player(iframe);
    player.play();
  });
}

function draw() {
  background(0);
  if (currentVideo) {
    currentVideo.position(0, 0);
    currentVideo.size(sqr, sqr * 0.5625);

    // get the iframe element and adjust its size
    let iframe = currentVideo.elt.querySelector('iframe');
    iframe.setAttribute('width', sqr);
    iframe.setAttribute('height', sqr * 0.5625);
  }
}




function playRandomVideo() {
  currentVideo.hide(); // hide the current video element
  currentVideo = random(videos);
  currentVideo.show();
  let iframe = currentVideo.elt.querySelector('iframe');
  let player = new Vimeo.Player(iframe);
  player.play();
  player.setPip(false);
}
