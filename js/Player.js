class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        
    }

    //will simply read the playerCount from the database
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    //will udpate the playerCount to/fro the database
    updateCount(count){
        database.ref('/').update({
            'playerCount' : count
        })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            'name' : this.name,
          'distance' : this.distance 
        })
    }

    //collect all the info of the 4 players
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}