let video;
let videoStarted = false;

function setup() {
  // Criar canvas que ocupa toda a janela
  createCanvas(windowWidth, windowHeight);
  
  // Carregar o vídeo (substitua pelo nome do seu arquivo)
  video = createVideo('soja100km.mp4');
  
  // Configurar o vídeo para loop e ocultar elemento padrão
  video.loop();
  video.volume(1);
  video.hide();
}

// Quando o usuário clicar, inicia o vídeo
function mousePressed() {
  if (!videoStarted) {
    video.play();
    videoStarted = true;
  }
}

function draw() {
  background(20);
  
  // Calcular dimensões para manter a proporção e centralizar
  let vidWidth, vidHeight;
  
  // Se o vídeo estiver carregado, usar suas dimensões
  if (video.width > 0 && video.height > 0) {
    let vidRatio = video.width / video.height;
    let windowRatio = windowWidth / windowHeight;
    
    if (windowRatio > vidRatio) {
      // A janela é mais larga que o vídeo
      vidHeight = windowHeight * 0.9; // 90% da altura da janela
      vidWidth = vidHeight * vidRatio;
    } else {
      // A janela é mais alta que o vídeo
      vidWidth = windowWidth * 0.9; // 90% da largura da janela
      vidHeight = vidWidth / vidRatio;
    }
    
    // Desenhar o vídeo centralizado
    image(video, 
          (windowWidth - vidWidth) / 2, 
          (windowHeight - vidHeight) / 2, 
          vidWidth, 
          vidHeight);
  }
  
  // Mostrar a mensagem para clicar se o vídeo ainda não iniciou
  if (!videoStarted) {   
    // Mostrar texto de instrução
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("clique aqui", width/2, height/2);
  }
}

// Redimensionar o canvas quando a janela for redimensionada
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
