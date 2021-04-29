class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
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
  }

  play(){
    form.hide();
    Player.getInfo();
    if(allPlayers!== undefined){
     fill("blue");
     textSize(20);
     text("Contestants whose answers were correct  ",20,230); 
     text("have been highlited in green !!",20,250);
     var display_position = 280;
     for(var plr in allPlayers){
       var correctAns = "3";
       if(correctAns === allPlayers[plr].ans){
         fill("green");
       }else{
         fill("red");
       }
       display_position+=20;
       textSize(15);
       text(allPlayers[plr].name + ": " + allPlayers[plr].ans,40,display_position)
     }
  }
     
  }

}

  

