var fundo,cat,rat,catImg1,ratImg1,catImg2,ratImg2,catImg3,ratImg3;


function preload() {
    //carregue as imagens aqui
    fundo = loadImage('images/garden.png');
    catImg1 = loadImage('images/cat1.png');
    ratImg1 = loadImage('images/mouse1.png');
    catImg2 = loadAnimation('images/cat2.png','images/cat3.png');
    ratImg2 = loadAnimation('images/mouse2.png','images/mouse3.png');
    catImg3 = loadImage('images/cat4.png');
    ratImg3 = loadImage('images/mouse4.png');

}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(700,700,50,50);
    cat.addAnimation('gatosentado',catImg1);
    cat.scale = 0.2;

    rat = createSprite(150,700,50,50);
    rat.addImage(ratImg1);
    rat.scale = 0.2;

}

function draw() {

    background(fundo);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    
if(cat.x - rat.x < (cat.width - rat.width)){

   cat.velocityX = 0;
   cat.addImage('fimcat',catImg3);
   cat.changeImage('fimcat');
   cat.x=300;
   cat.scale =0.2
   
   rat.addImage('fimrat',ratImg3);
   rat.changeImage('fimrat');
   rat.x=150;
   rat.scale =0.2
}

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animaçã o, escreva o código aqui
  if (keyDown('space')){

    rat.addAnimation('ratoProvocando',ratImg2);
    rat.changeAnimation('ratoProvocando');
    rat.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation('gatoAndando',catImg2);
    cat.changeAnimation('gatoAndando');
    cat.frameDelay = 25;

  }

}
