class Game {
  constructor(){

  }

  async start(){
    if(gameState === 0){
      form = new Form()
      form.display();
    }

   
  }

  play(){
    form.hide();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    
      var index = 0;

     
      var x = 175 ;
      var y;

    }

   
    drawSprites();
  }

}
