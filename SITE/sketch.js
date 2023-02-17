
let invrand1;
let invrand2;
let invrand3;


let sqr;

let x = 0;
let y = 0;


let touched = false;

let videos = [];

let video1Index = 0;
let video2Index = 0;
let video3Index = 0;

let videoSources = [
  { file: "1.mp4", source: "./1.mp4" },
  { file: "2.mp4", source: "./2.mp4" },
  { file: "3.mp4", source: "./3.mp4" },
  { file: "4.mp4", source: "./4.mp4" },
  { file: "5.mp4", source: "./5.mp4" },
  { file: "6.mp4", source: "./6.mp4" },
  { file: "7.mp4", source: "./7.mp4" },
  { file: "8.mp4", source: "./8.mp4" },
  { file: "9.mp4", source: "./9.mp4" },
  { file: "10.mp4", source: "./10.mp4" },
  { file: "11.mp4", source: "./11.mp4" },
  { file: "12.mp4", source: "./12.mp4" },
  { file: "13.mp4", source: "./13.mp4" },
  { file: "14.mp4", source: "./14.mp4" },
  { file: "15.mp4", source: "./15.mp4" },
  { file: "16.mp4", source: "./16.mp4" },
  { file: "17.mp4", source: "./17.mp4" },
  { file: "18.mp4", source: "./18.mp4" },
  { file: "19.mp4", source: "./19.mp4" },
  { file: "20.mp4", source: "./20.mp4" },
  { file: "21.mp4", source: "./21.mp4" },
  { file: "22.mp4", source: "./22.mp4" },
  { file: "23.mp4", source: "./23.mp4" },
  { file: "24.mp4", source: "./24.mp4" },
  { file: "25.mp4", source: "./25.mp4" },
  { file: "26.mp4", source: "./26.mp4" },
  { file: "27.mp4", source: "./27.mp4" },
  { file: "28.mp4", source: "./28.mp4" },
  { file: "29.mp4", source: "./29.mp4" },
  { file: "30.mp4", source: "./30.mp4" },
  { file: "31.mp4", source: "./31.mp4" },
  { file: "32.mp4", source: "./32.mp4" },
  { file: "33.mp4", source: "./33.mp4" },
  { file: "34.mp4", source: "./34.mp4" },
  { file: "35.mp4", source: "./35.mp4" },
  { file: "36.mp4", source: "./36.mp4" },
  { file: "37.mp4", source: "./37.mp4" },
  { file: "38.mp4", source: "./38.mp4" },
  { file: "39.mp4", source: "./39.mp4" },
  { file: "40.mp4", source: "./40.mp4" },
  { file: "41.mp4", source: "./41.mp4" },
  { file: "42.mp4", source: "./42.mp4" },
  { file: "43.mp4", source: "./43.mp4" }
];

function preload() {
  for (let i = 0; i < videoSources.length; i++) {
    videos[i] = createVideo(videoSources[i].source);
    videos[i].hide();
    videos[i].volume(0);    
    videos[i].speed(1);
    videos[i].center();
    videos[i].hide();
    videos[i].attribute('playsinline', '');
    videos[i].attribute('webkit-playsinline', '');
    videos[i].attribute('muted', '');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

      if (touched){
  
        videos[i].loop();
  
      } else { 
  
        videos[i].pause();

      } 
  
    } else {
  
      videos[i].loop();
  
    }
  


  }
}





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
  
      video1Index = Math.floor(Math.random()*videoSources.length);
      video2Index = Math.floor(Math.random()*videoSources.length);
      video3Index = Math.floor(Math.random()*videoSources.length);
	
}



function carrega1(){

  video2Index.remove();
  video3Index.remove();

  invrand2 = Math.floor(Math.random()*100);
  invrand3 = Math.floor(Math.random()*100);

  video2Index = Math.floor(Math.random()*videoSources.length);
  video3Index = Math.floor(Math.random()*videoSources.length);

}


function carrega2(){

  video1Index.remove();
  invrand1 = Math.floor(Math.random()*100);
  video1Index = Math.floor(Math.random()*videoSources.length);
}



function touchStarted() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobile device detected
    // Start videos on touch
    touched = true;
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
  frame1 = videos[video1Index].get();
  image(frame1,0,0,sqr,sqr)
}


function video2() {
  frame2 = videos[video2Index].get();
  image(frame2,0,0,sqr,sqr)
}


function video3() {
  frame3 = videos[video3Index].get();
  image(frame3,0,0,sqr,sqr)
}
