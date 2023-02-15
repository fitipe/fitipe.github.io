let rand1;
let rand2;
let rand3;

let vid1num;
let vid2num;
let vid3num;

let invrand1;
let invrand2;
let invrand3;

let lista = [];

let sqr;

let x = 0;
let y = 0;

let vid1;
let vid2;
let vid3;

function setup() {
  sqr = Math.min(windowWidth, windowHeight);
  createCanvas(sqr, sqr);
  frameRate(24);
}

/// D R A W

function draw() {





    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   

        background("white");


        if ( x == 0 ){
          
          if ( y == 0 ){
              carrega3();
          }
        }
        
        vid1.pause();
        vid2.pause();
        vid3.pause();

        if (touched) {
      
        clear();
          
        x = x + 1;
      
      
        if (x < 170){
          if (invrand1 < 30){
            invert();
          } else {
            desinvert();
          }
          video1();
        }
      
      
      
        if (x == 30){
      
          if (y == 1){
      
            carrega1();
      
          }
        }
      
      
      
        if (x > 120 && x < 170){
          if (x % 13 == 0) {
            video2();
            if (invrand2 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        
          if (x % 5 == 0) {
            video2();
            if (invrand2 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        
          if (x % 2 == 0) {
            video2();
            if (invrand2 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        }  
      
        if (x > 170 && x < 350){
          video2();
          if (x < 350){
            if (invrand2 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        } 
      
      
        if (x > 300 && x < 350){
          if (x % 11 == 0) {
            video3();
            if (invrand3 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        
          if (x % 5 == 0) {
            video3();
            if (invrand3 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        
          if (x % 2 == 0) {
            video3();
            if (invrand3 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        }
        
      
        if (x == 330){
      
      
        }
      
      
        if (x > 350 && x < 520){
          video3();
          if (invrand3 < 30){
            invert();
          } else {
            desinvert();
          }
        }
      
        if ( x == 360 ){
      
          carrega2();
      
          if (y==0){
              y += 1;
          }
        }
          
      
        if (x > 475 && x < 520){
      
          if (x % 11 == 0) {
            video1();
            if (invrand1 < 30){
              invert();
            } else {
              desinvert();
            }
          }
          
          if (x % 5 == 0) {
            video1();
            if (invrand1 < 30){
              invert();
            } else {
              desinvert();
            }
          }
          
          if (x % 2 == 0) {
            video1();
            if (invrand1 < 30){
              invert();
            } else {
              desinvert();
            }
          }
        }
        
        if (x > 520){
          video1();
          if (invrand1 < 30){
            invert();
          } else {
            desinvert();
          }
        }
      
        if (x >= 530){
          x = 0;
        }
    }


      } else {

  background("white");

  if ( x == 0 ){
    
    if ( y == 0 ){
	    carrega3();
    }
  }

  clear();
	
  x = x + 1;


  if (x < 170){
    if (invrand1 < 30){
      invert();
    } else {
      desinvert();
    }
    video1();
  }



  if (x == 30){

    if (y == 1){

      carrega1();

    }
  }



  if (x > 120 && x < 170){
    if (x % 13 == 0) {
      video2();
      if (invrand2 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 5 == 0) {
      video2();
      if (invrand2 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 2 == 0) {
      video2();
      if (invrand2 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  }  

  if (x > 170 && x < 350){
    video2();
    if (x < 350){
      if (invrand2 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  } 


  if (x > 300 && x < 350){
    if (x % 11 == 0) {
      video3();
      if (invrand3 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 5 == 0) {
      video3();
      if (invrand3 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  
    if (x % 2 == 0) {
      video3();
      if (invrand3 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  }
  

  if (x == 330){


  }


  if (x > 350 && x < 520){
    video3();
    if (invrand3 < 30){
      invert();
    } else {
      desinvert();
    }
  }

  if ( x == 360 ){

    carrega2();

    if (y==0){
	    y += 1;
    }
  }
	

  if (x > 475 && x < 520){

    if (x % 11 == 0) {
      video1();
      if (invrand1 < 30){
        invert();
      } else {
        desinvert();
      }
    }
    
    if (x % 5 == 0) {
      video1();
      if (invrand1 < 30){
        invert();
      } else {
        desinvert();
      }
    }
    
    if (x % 2 == 0) {
      video1();
      if (invrand1 < 30){
        invert();
      } else {
        desinvert();
      }
    }
  }
  
  if (x > 520){
    video1();
    if (invrand1 < 30){
      invert();
    } else {
      desinvert();
    }
  }

  if (x >= 530){
    x = 0;
  }
}

}


function carrega3(){
	
      invrand1 = Math.floor(Math.random()*100);
      invrand2 = Math.floor(Math.random()*100);
      invrand3 = Math.floor(Math.random()*100);

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
      
      vid1 = createVideo(
        [vid1num],
        vidLoad,
      );
	    
      vid2 = createVideo(
        [vid2num],
        vidLoad,
      );
	    
      vid3 = createVideo(
        [vid3num],
        vidLoad,
      );	    
     
      vid1.hide();
      vid2.hide();
      vid3.hide();	
	
}



function carrega1(){

  vid2.remove();
  vid3.remove();

  invrand2 = Math.floor(Math.random()*100);
  invrand3 = Math.floor(Math.random()*100);

  let lista = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4']
  lista.splice(rand1,1)
  
  rand2 = Math.floor(Math.random()*lista.length);
  vid2num = lista[rand2];
  lista.splice(rand2,1)
  
  rand3 = Math.floor(Math.random()*lista.length);
  vid3num = lista[rand3];
  lista.splice(rand3,1)
	    
      vid2 = createVideo(
        [vid2num],
        vidLoad,
      );
	    
      vid3 = createVideo(
        [vid3num],
        vidLoad,
      );	    

  vid2.hide();
  vid3.hide();
}


function carrega2(){

  vid1.remove();
  invrand1 = Math.floor(Math.random()*100);

  let lista = ['./0.mp4','./1.mp4','./2.mp4','./3.mp4','./4.mp4','./5.mp4','./6.mp4','./7.mp4', './8.mp4', './9.mp4', './10.mp4', './11.mp4', './12.mp4', './13.mp4', './14.mp4','./15.mp4','./16.mp4','./17.mp4', './18.mp4','./19.mp4', './20.mp4', './21.mp4', './22.mp4', './23.mp4', './24.mp4', './25.mp4', './26.mp4', './27.mp4', './28.mp4','./29.mp4', './31.mp4', './32.mp4','./33.mp4','./34.mp4','./35.mp4', './36.mp4','./37.mp4', './38.mp4', './39.mp4', './40.mp4', './41.mp4', './42.mp4','./43.mp4']

  rand1 = Math.floor(Math.random()*lista.length);
  vid1num = lista[rand1];
  lista.splice(rand1,1)
	
      vid1 = createVideo(
        [vid1num],
        vidLoad,	    
  );
  vid1.hide();
}

function vidLoad() {

  vid1.loop();
  vid2.loop();
  vid3.loop();
  

  vid1.speed(1);
  vid1.center();
  vid1.hide();
  vid1.attribute('playsinline', '');
  vid1.attribute('webkit-playsinline', '');
  vid1.attribute('muted', '');

  vid2.speed(1);
  vid2.center();
  vid2.hide();
  vid2.attribute('playsinline', '');
  vid2.attribute('webkit-playsinline', '');
  vid2.attribute('muted', '');

  vid3.speed(1);
  vid3.center();
  vid3.hide();
  vid3.attribute('playsinline', '');
  vid3.attribute('webkit-playsinline', '');
  vid3.attribute('muted', '');
}

function touchStarted() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobile device detected
    // Start videos on touch
    touched = true;
    vid1.loop();
    vid2.loop();
    vid3.loop();
    vid1.play();
    vid2.play();
    vid3.play();
  }
}

// Prevent default touch behavior on mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.addEventListener("touchstart", function(event) {
    event.preventDefault();
  }, {passive: false});
}

window.onclick = function(event) {
  if (event.target == document.getElementById('defaultCanvas0')) {
    event.preventDefault();
  }
};


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
