class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        'gameState': state
      });
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
          
        } 
      
      
        // runner1 = createSprite(50,height/2-25);
        // runner1.addAnimation("runner1",runner1_img);
        // runner1.scale = 0.9;
        // runner2 = createSprite(50,height/2);
        // runner2.addAnimation("runner2",runner2_img);
        // runner2.scale = 0.9;
        // runner3 = createSprite(50,height-200);
        // runner3.addAnimation("runner3",runner3_img);
        // runner3.scale = 0.9;
        // runner4 = createSprite(50,height-100);
        // runner4.addAnimation("runner4",runner4_img);
        // runner4.scale = 0.2;
        // runners = [runner1, runner2, runner3,runner4];

        player1 = createSprite(50,height/-25);
        player1.addAnimation("player1", char1_img);
        player1.scale = 0.9;

        player2 = createSprite(120,height/2);
        player2.addAnimation("player2", char2_img);
        player2.scale = 0.9;

        players = [player1,player2];
    
      }
    play(){
        form.hide();
        
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          background(rgb(198,135,103));
          image(court, 0, 0 ,width*4, height);
          var index = 0;
          var x ;
          var y = 60;
    
          for(var plr in allPlayers){
            index = index + 1 ;
            y = y + 100;
            x = x + allPlayer[plr].score;
            players[index-1].x = x;
            players[index-1].y = y;
    
            if (index === player.index){
              stroke(10);
              fill('red');
              ellipse(x,y,60,60);
              camera.position.y = height/2;
              camera.position.x = players[index-1].x;
             // console.log(runners[index-1].x);
            }
          } }
    
        if(keyIsDown(SPACE_BAR) && player.index !== null){
          player.score +=50;
          player.update();
        }
    
         if(player.score > 2000){
          gameState = 2;
          player.rank +=1
          Player.updatePlayersAtEnd(player.rank);
          alert("Your Rank : " + player.rank);
        }
       
        drawSprites();
      }
    
      end(){
        console.log("Game Ended");
      }
}
