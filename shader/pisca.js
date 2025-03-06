let video;
var warpSrc;
let warp;
let sqr;
let x = 0;
let y = 0;
let xMais;

let v1; 
let v2; 
let v3; 
let v4; 
let v5;
let v6;
let v7;
let v8;
let v9;
let v10;
let v11; 
let v12; 
let v13; 
let v14; 
let v15;
let v16;
let v17;
let v18;
let v19;
let v20;
let v21; 
let v22; 
let v23; 
let v24; 
let v25;
let v26;
let v27;
let v28;
let v29;
let v30;
let v31;
let v32;
let v33;

let videosLoaded = 0;

let carregou = false;

let videos = [];

let velEfeito;
let velRaridade = hl.randomInt(100);

if (velRaridade < 30){
  velEfeito = 'Slow';
  xMais = 0.7;
} else if (velRaridade < 85){
  velEfeito = 'Normal';
  xMais = 1;
} else if (velRaridade < 100){
  velEfeito = 'Fast';
  xMais = 1.3;
}


console.log(xMais);
console.log(velEfeito);

var fun1;
var fun2;

let xy;
let xy2;

var w1;
var t1;

var w2;
var t2;


let w1Mais;
let w2Mais;
let t1Mais;
let t2Mais;

var vid1;
var vid2;
var vid3;

funs();

warpSrc = `
precision highp float;

uniform sampler2D tex0;
varying vec2 vTexCoord;

void main() {
  // Offset the input coordinate
  vec2 warpedCoord = vTexCoord;
  warpedCoord.x += ` + w1 + ` / `+ fun1 + `(vTexCoord.`+ xy + ` * ` + t1 + `);
  warpedCoord.y += ` + w2 + ` / `+ fun2 + `(vTexCoord.`+ xy2 + ` * ` + t2 + `);

  // Set the new color by looking up the warped coordinate
  gl_FragColor = texture2D(tex0, warpedCoord);
}
`;


console.log('w1='+w1);
console.log('w2='+w2);
console.log('t1='+t1);
console.log('t2='+t2);


function preload(){

  v1 = createVideo('./2.mp4', videoLoaded);
  v1.hide();

  v2 = createVideo('./3.mp4', videoLoaded);
  v2.hide();

  v3 = createVideo('./4.mp4', videoLoaded);
  v3.hide();

  v4 = createVideo('./5.mp4', videoLoaded);
  v4.hide();

  v5 = createVideo('./6.mp4', videoLoaded);
  v5.hide();

  v6 = createVideo('./7.mp4', videoLoaded);
  v6.hide();

  v7 = createVideo('./8.mp4', videoLoaded);
  v7.hide();

  v8 = createVideo('./9.mp4', videoLoaded);
  v8.hide();

  v9 = createVideo('./10.mp4', videoLoaded);
  v9.hide();

  v10 = createVideo('./11.mp4', videoLoaded);
  v10.hide();

  v11 = createVideo('./12.mp4', videoLoaded);
  v11.hide();

  v12 = createVideo('./13.mp4', videoLoaded);
  v12.hide();

  v13 = createVideo('./14.mp4', videoLoaded);
  v13.hide();

  v14 = createVideo('./17.mp4', videoLoaded);
  v14.hide();

  v15 = createVideo('./18.mp4', videoLoaded);
  v15.hide();

  v16 = createVideo('./19.mp4', videoLoaded);
  v16.hide();

  v17 = createVideo('./20.mp4', videoLoaded);
  v17.hide();

  v18 = createVideo('./21.mp4', videoLoaded);
  v18.hide();

  v19 = createVideo('./22.mp4', videoLoaded);
  v19.hide();

  v20 = createVideo('./23.mp4', videoLoaded);
  v20.hide();

  v21 = createVideo('./24.mp4', videoLoaded);
  v21.hide();

  v22 = createVideo('./25.mp4', videoLoaded);
  v22.hide();

  v23 = createVideo('./26.mp4', videoLoaded);
  v23.hide();

  v24 = createVideo('./27.mp4', videoLoaded);
  v24.hide();

  v25 = createVideo('./28.mp4', videoLoaded);
  v25.hide();

  v26 = createVideo('./29.mp4', videoLoaded);
  v26.hide();

  v27 = createVideo('./30.mp4', videoLoaded);
  v27.hide();

  v28 = createVideo('./31.mp4', videoLoaded);
  v28.hide();

  v29 = createVideo('./33.mp4', videoLoaded);
  v29.hide();

  v30 = createVideo('./34.mp4', videoLoaded);
  v30.hide();

  v31 = createVideo('./DJI_0023_QUAD.mp4', videoLoaded);
  v31.hide();

  v32 = createVideo('./x.mp4', videoLoaded);
  v32.hide();

  v33 = createVideo('./y.mp4', videoLoaded);
  v33.hide();

}

function videoLoaded() {
  videosLoaded++;
  if (videosLoaded === 33) {
    console.log('All videos loaded!');
    carregou = true;
    startVideos();
  }
}

function startVideos() {

  videos = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33];

  vid1 = videos[hl.randomInt(0, 32)];
  vid1.volume(0);
  vid1.hide();
  vid1.loop();

  vid2 = videos[hl.randomInt(0, 32)];
  vid2.volume(0);
  vid2.hide();
  vid2.loop();

  vid3 = videos[hl.randomInt(0, 32)];
  vid3.volume(0);
  vid3.hide();
  vid3.loop();

}



function setup() {
  
  sqr = Math.min(windowWidth, windowHeight);
  createCanvas(sqr,sqr);

  if (!carregou) {
    console.log('Videos are still loading...');
  }
}


function draw() {

  x = x+xMais;
  y = y+1;
  warp = createFilterShader(warpSrc);
  clear();
  frameRate(60)
  background(255);
  push();
  pop();


  if (!carregou){
    stroke(hl.randomInt(0, 255),hl.randomInt(0, 255),hl.randomInt(0, 255));
    strokeWeight(37);
    line(sqr/4, sqr/2,sqr/3+videosLoaded*6.8, sqr/2);
  }


  ///console.log(y)

  if (carregou){

  if (y > 1 && y < 1205){

      video1();

      ///troca arquivo vid3:
      if (y == 10){
        vid3 = videos[hl.randomInt(0, 32)];
        vid3.volume(0);
        vid3.hide();
        vid3.loop();
        console.log(vid3)
      }

  }

  if (y == 600){};

/// Troca VID2



  if (y > 1000 && y < 1050){

    if (y % 11 == 0) {
      video2();
    }
  }


  if (y > 1050 && y < 1110){
    if (y % 7 == 0) {
      video2();
    }
    if (y % 11 == 0) {
      video2();
    }
  }

  if (y > 1110 && y < 1200){
    if (y % 2 == 0) {
      video2();
    }
    if (y % 5 == 0) {
      video2();
    }
    if (y % 11 == 0) {
      video2();
    }
  }


  if (y > 1200 && y < 2405){
    if (y % 1 == 0) {
      video2();

      if (y == 1220){
        console.log("vid2="+vid2);
      }

      /// troca arquivo vid1:
      if (y == 1205){
        vid1 = videos[hl.randomInt(0, 32)];
        vid1.volume(0);
        vid1.hide();
        vid1.loop();
        console.log(vid1)
      }
    }
  }

/// Troca VID3



  if (y > 2200 && y < 2290){
    if (y % 7 == 0) {
      video3();
    }
    if (y % 11 == 0) {
      video3();
    }
  }

  if (y > 2290 && y < 2400){
    if (y % 2 == 0) {
      video3();
    }
    if (y % 7 == 0) {
      video3();
    }
    if (y % 11 == 0) {
      video3();
    }
  }



  if (y > 2400){
    if (y % 1 == 0) {

      video3();
      if (y == 2420){
        console.log("vid3="+vid3);
      }

      /// troca arquivo vid2:
      if (y == 2405){
        vid2 = videos[hl.randomInt(0, 32)];
        vid2.volume(0);
        vid2.hide();
        vid2.loop();
        console.log(vid2)
      }
    }
  }



  if (y > 3400 && y < 3490){
    if (y % 7 == 0) {
      video1();
    }
    if (y % 11 == 0) {
      video1();
    }
  }

  if (y > 3490 && y < 3600){
    if (y % 2 == 0) {
      video1();
    }
    if (y % 7 == 0) {
      video1();
    }
    if (y % 11 == 0) {
      video1();
    }
  }



  if(y > 3601){
    y = 2;
  }

  

/// ++

  if (x > 180 && x < 680){

    w1 = w1 + w1Mais*1.5;
    w2 = w2 + w2Mais*1.5;
    t1 = t1 + t1Mais*1.5;
    t2 = t2 + t2Mais*1.5;

  }

/// --

  if (x > 700 && x < 1200 ){

    w1 = w1 - w1Mais*1.5;
    w2 = w2 - w2Mais*1.5;
    t1 = t1 - t1Mais*1.5;
    t2 = t2 - t2Mais*1.5;


  }

  if (x == 1299){funs();}

  if (x > 1300 ){x=0;}


warpSrc = `
precision highp float;

uniform sampler2D tex0;
varying vec2 vTexCoord;

void main() {
  // Offset the input coordinate
  vec2 warpedCoord = vTexCoord;
  warpedCoord.x += ` + w1.toString() + ` / `+ fun1 + `(vTexCoord.`+ xy + ` * ` + t1.toString() + `);
  warpedCoord.y += ` + w2.toString() + ` / `+ fun2 + `(vTexCoord.`+ xy2 + ` * ` + t2.toString() + `);

  // Set the new color by looking up the warped coordinate
  gl_FragColor = texture2D(tex0, warpedCoord);
}
`;

if (x > 180 && x < 1201){filter(warp);}




  /*  PISCA:

if (x > 450 && x < 500){
  if (x % 11 == 0) {
    filter(warp);
  }
}

if (x > 500 && x < 600){
  if (x % 7 == 0) {
    filter(warp);
  }
  if (x % 11 == 0) {
    filter(warp);
  }
}

if (x > 600 && x < 650){
  if (x % 5 == 0) {
    filter(warp);
  }
  if (x % 7 == 0) {
    filter(warp);
  }
  if (x % 11 == 0) {
    filter(warp);
  }
}

if (x > 650 && x < 800){
  if (x % 2 == 0) {
    filter(warp);
  }
  if (x % 5 == 0) {
    filter(warp);
  }
  if (x % 7 == 0) {
    filter(warp);
  }
  if (x % 11 == 0) {
    filter(warp);
  }
}


if (x > 800 && x < 1450){
  if (x % 1 == 0) {
    filter(warp);
  }
}

*/



///console.log('w1='+w1);
///console.log('w2='+w2);
///console.log('t1='+t1);
///console.log('t2='+t2);

  }
}





function funs(){
    fun1 = hl.randomElement(['sin','cos','tan','atan','abs']);
  if (fun1 == 'cos'){
    fun2 = hl.randomElement(['sin','tan','atan','abs']);
  } else {
    fun2 = hl.randomElement(['sin','cos','tan','atan','abs']);
  }


  xy = hl.randomElement(['x','y']);

  xy2 = hl.randomElement(['x','y']);


  console.log(xy);
  console.log(fun1);
  console.log(fun2);

  /// FUN1 valores

  if (fun1 == 'sin'){
    w1 = 0.001;
    t1 = 1.01;

    w1Mais = hl.random(0.0000101, 0.000101);
    t1Mais = hl.random(0.00101, 0.0101);

  } else if (fun1 == 'cos'){
    w1 = 0.001;
    t1 = 1.01;

    w1Mais = hl.random(0.0000101, 0.000101);
    t1Mais = hl.random(0.00101, 0.0101);

  } else if (fun1 == 'tan'){

    w1 = 0.001;
    t1 = 1.1;

    w1Mais = hl.random(0.0000101, 0.0000201);
    t1Mais = hl.random(0.00501, 0.0101);


  } else if (fun1 == 'atan'){
    w1 = 0.001;
    t1 = 0.98;

    w1Mais = hl.random(0.000101, 0.000201);
    t1Mais = hl.random(0.00501, 0.0101);
  } else if (fun1 == 'abs'){

    w1 = 0.0001;
    t1 = 0.98;

    w1Mais = hl.random(0.0000501, 0.000101);
    t1Mais = hl.random(0.0101, 0.0201);

  }

  /// FUN2 valores

  if (fun2 == 'sin'){

    w2 = 0.001;
    t2 = 1.01;

    w2Mais = hl.random(0.0000101, 0.000101);
    t2Mais = hl.random(0.00101, 0.0101);

  } else if (fun2 == 'cos'){

    w2 = 0.001;
    t2 = 1.01;

    w2Mais = hl.random(0.0000101, 0.000101);
    t2Mais = hl.random(0.00101, 0.0101);

  } else if (fun2 == 'tan'){

    w2 = 0.001;
    t2 = 1.1;

    w2Mais = hl.random(0.0000101, 0.0000201);
    t2Mais = hl.random(0.00501, 0.0101);

  } else if (fun2 == 'atan'){
    w2 = 0.001;
    t2 = 0.98;

    w2Mais = hl.random(0.000101, 0.000201);
    t2Mais = hl.random(0.00501, 0.0101);
  } else if (fun2 == 'abs'){

    w2 = 0.0001;
    t2 = 0.98;

    w2Mais = hl.random(0.0000501, 0.000101);
    t2Mais = hl.random(0.0101, 0.0201);
  }

}

function video1(){
  image(vid1, 0, 0, sqr, sqr);
}

function video2(){
  image(vid2, 0, 0, sqr, sqr);
}

function video3(){
  image(vid3, 0, 0, sqr, sqr);
}


/*

function calculateHLTraits(hl) {
  numberOfRectangles = hl.randomInt(3, 10);
  randomSaturation = hl.randomInt(100);
  randomBrightness = hl.randomInt(100);
  backgroundColor = hl.randomElement(['white', 'black']);

  const traits = {
    'Number of Rectangles': numberOfRectangles,
    'Background Color': backgroundColor,
    'Color Saturation': randomSaturation,
    'Color Brightness': randomBrightness,
  };

  return traits;
}


function draw() {
  let textColor = backgroundColor === 'white' ? 'black' : 'white';

  if (hl.context.previewMode) {
    hl.token.capturePreview();
    return;
  }

  hl.token.capturePreview();
}

*/
