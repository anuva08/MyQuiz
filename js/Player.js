class Player {
  constructor(){
   this.index = null;
   this.name = null;
   this.ans = 0;
       
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name   : this.name,
      ans    : this.ans
    });
  }

 static getInfo(){
   database.ref('players').on("value",(data) => {
     allPlayers = data.val();
   })
 }

  
}
