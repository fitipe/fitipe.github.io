let rand1;
let rand2;
let rand3;
let rand4;
let rand5;

let vid1num;
let vid2num;
let vid3num;
let vid4num;
let vid5num;

let invrand;
let invertido;
let invnum;

let lista = [];

let sqr;

function setup() {
	sqr = Math.min(windowWidth, windowHeight);
  createCanvas(sqr, sqr);
	frameRate(23.98);
}

/// D R A W

let x = 0;
let y = 0;

function draw() {

  background("white");

  if ( x == 0 ){

    invrand = Math.floor(Math.random()*100);
  
    invnumlist = ['1st','2nd','3rd','4rth','5th'];

    if (invrand < 15){
      invertido = '1st';
      invnum = invnumlist[0];
    } else if (invrand < 30){
      invertido = '2nd';
      invnum = invnumlist[1];
    } else if (invrand < 45){
      invertido = '3rd';
      invnum = invnumlist[2];
    } else if (invrand < 60){  
      invertido = '4rth';
      invnum = invnumlist[3];
    } else if (invrand < 75){  
      invertido = '5th';
      invnum = invnumlist[4];
    } else if (invrand < 85){  
      invertido = 'variable (super rare)';
      invnum = '';
    } else {
      invertido = 'none (rare)';
    }

    if (invertido == 'variable (super rare)'){
      invnum = random(invnumlist);
    }
    
    if ( y == 0 ){

      let lista = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4']
  
      rand1 = Math.floor(Math.random()*lista.length);
      vid1num = lista[rand1];
      lista.splice(rand1,1)
      
      rand2 = Math.floor(Math.random()*lista.length);
      vid2num = lista[rand2];
      lista.splice(rand2,1)
      
      rand3 = Math.floor(Math.random()*lista.length);
      vid3num = lista[rand3];
      lista.splice(rand3,1)
      
      rand4 = Math.floor(Math.random()*lista.length);
      vid4num = lista[rand4];
      lista.splice(rand4,1)
      
      rand5 = Math.floor(Math.random()*lista.length);
      vid5num = lista[rand5];
      lista.splice(rand5,1)
      
      vid1 = createVideo(
        [vid1num],
        vidLoad1
      );
  
      vid2 = createVideo(
        [vid2num],
        vidLoad2
      );
    
      vid3 = createVideo(
        [vid3num],
        vidLoad3
      );
    
      vid4 = createVideo(
        [vid4num],
        vidLoad4
      );
    
      vid5 = createVideo(
        [vid5num],
        vidLoad5
      );

    } else {
			
      let lista = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4']
            
      rand2 = Math.floor(Math.random()*lista.length);
      vid2num = lista[rand2];
      lista.splice(rand2,1)
      
      rand3 = Math.floor(Math.random()*lista.length);
      vid3num = lista[rand3];
      lista.splice(rand3,1)
      
      rand4 = Math.floor(Math.random()*lista.length);
      vid4num = lista[rand4];
      lista.splice(rand4,1)
      
      rand5 = Math.floor(Math.random()*lista.length);
      vid5num = lista[rand5];
      lista.splice(rand5,1)
  
      vid2 = createVideo(
        [vid2num],
        vidLoad2
      );
    
      vid3 = createVideo(
        [vid3num],
        vidLoad3
      );
    
      vid4 = createVideo(
        [vid4num],
        vidLoad4
      );
    
      vid5 = createVideo(
        [vid5num],
        vidLoad5
      );
    }
  }	

  clear();
	
  x = x + 1;


  if (x < 170){
    if (invnum == '1st'){
      invert();
    } else {
      desinvert();
    }

    video1();
  }

  if (x > 120 && x < 170){
    if (x % 13 == 0) {
      video2();
      if (invnum == '2nd'){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 5 == 0) {
      video2();
      if (invnum == '2nd'){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 2 == 0) {
      video2();
      if (invnum == '2nd'){
        invert();
      } else {
        desinvert();
      }
    }
  }  

  if (x > 170 && x < 350){
    video2();
    if (x < 350){
      if (invnum == '2nd'){
        invert();
      } else {
        desinvert();
      }
    }
  } 

  if (x > 300 && x < 350){
    if (x % 11 == 0) {
      video3();
      if (invnum == '3rd'){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 5 == 0) {
      video3();
      if (invnum == '3rd'){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 2 == 0) {
      video3();
      if (invnum == '3rd'){
        invert();
      } else {
        desinvert();
      }
    }
  }
  
  if (x > 350 && x < 520){
    video3();
    if (invnum == '3rd'){
      invert();
    } else {
      desinvert();
    }
  }
	
	
	
  if (x == 480){

    let lista = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4']

    rand1 = Math.floor(Math.random()*lista.length);
    vid1num = lista[rand1];
    lista.splice(rand1,1)

    vid1 = createVideo(
      [vid1num],
      vidLoad1
    );

    if (y==0){
	y += 1;
    }
  }
  
	
  if (x > 470 && x < 520){

    if (x % 11 == 0) {
      video4();
      if (invnum == '4rth'){
        invert();
      } else {
        desinvert();
      }
    }
    
    if (x % 5 == 0) {
      video4();
      if (invnum == '4rth'){
        invert();
      } else {
        desinvert();
      }
    }
    
    if (x % 2 == 0) {
      video4();
      if (invnum == '4rth'){
        invert();
      } else {
        desinvert();
      }
    }
  }
    
  if (x > 520 && x < 690){
    video4();
    if (invnum == '4rth'){
      invert();
    } else {
      desinvert();
    }
  }

  if (x > 640 && x < 690){

    if (x % 11 == 0) {
      video5();
     if (invnum == '5th'){
        invert();
      } else {
        desinvert();
     }
    }
  
    if (x % 5 == 0) {
      video5();
      if (invnum == '5th'){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 2 == 0) {
      video5();
      if (invnum == '5th'){
        invert();
      } else {
        desinvert();
      }
    }
  }
  
  if (x > 690 && x < 890){
    video5();
    if (invnum == '5th'){
      invert();
    } else {
      desinvert();
    }
  }


  if (x > 840 && x < 890){

    if (x % 11 == 0) {
      video1();
      if (invnum == '1st'){
        invert();
      } else {
        desinvert();
      }
    }
    
    if (x % 5 == 0) {
      video1();
      if (invnum == '1st'){
        invert();
      } else {
        desinvert();
      }
    }
    
    if (x % 2 == 0) {
      video1();
      if (invnum == '1st'){
        invert();
      } else {
        desinvert();
      }
    }
  }
  
  if (x > 890){
    video1();
    if (invnum == '1st'){
      invert();
    } else {
      desinvert();
    }
  }

  if (x >= 900){
    x = 0;
  }
}



function vidLoad1() {
  vid1.loop();
  vid1.speed(1);
  vid1.volume(0);
  vid1.hide();
  vid1.center();
}
function vidLoad2() {
  vid2.loop();
  vid2.speed(1);
  vid2.volume(0);
  vid2.hide();
  vid2.center();
}

function vidLoad3() {
  vid3.loop();
  vid3.speed(1);
  vid3.volume(0);
  vid3.hide();
  vid3.center();
}

function vidLoad4() {
  vid4.loop();
  vid4.speed(1);
  vid4.volume(0);
  vid4.hide();
  vid4.center();
}

function vidLoad5() {
  vid5.loop();
  vid5.speed(1);
  vid5.volume(0);
  vid5.hide();
  vid5.center();
}

function invert (){
  drawingContext.filter = 'invert(100%)'
}

function desinvert(){
  drawingContext.filter = 'invert(0%)'
  
}

function video1() {
  image(vid1,0,0,sqr,sqr)
}


function video2() {
  image(vid2,0,0,sqr,sqr)
}


function video3() {
  image(vid3,0,0,sqr,sqr)
}

function video4() {
  image(vid4,0,0,sqr,sqr)
}

function video5() {
  image(vid5,0,0,sqr,sqr)
}

