function Player(name, teamColor){
   this.enemies = [];//敌人
   this.partners = [];//队友 
   this.name = name;
   this.teamColor = teamColor;
   this.state = 'live';
}
Player.prototype.win = function(){
    // kill all enemies
    console.log(`${this.name}win`);
}
Player.prototype.lose = function(){
    console.log(`${this.name}lose`);
}
Player.prototype.die = function(){
    console.log(`${this.name}die`);
    this.state = 'die';
    let all_dead =true;
    for(var i=0,partner;partner = this.partners[i++];){
        if(partner.state === 'live'){
            all_dead = false;
            break;
        }
    }
    if(all_dead){
        for(var i=0,partner; partner = this.partners[i++];){
            partner.lose();
        }
        this.lose();
        for(var i=0,enemies;enemies = this.enemies[i++];){
            enemies.win();
        }
    }
}

//组队 生成玩家 工厂类负责
var players =[];
var PlayerFactory = function(name, teamColor){
    var newPlayer = new Player(name, teamColor);
    for(var i=0,player;player = players[i++];){
        if(player.teamColor === newPlayer.teamColor){
            player.partners.push(newPlayer);
            newPlayer.partners.push(player)
        }else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}
var player1 = PlayerFactory('皮蛋', 'red');
var player2 = PlayerFactory('小乖', 'red');
var player3 = PlayerFactory('发工', 'red');
var player4 = PlayerFactory('宝宝', 'red');
var player5 = PlayerFactory('黑妞', 'blue');
var player6 = PlayerFactory('葱头', 'blue');
var player8 = PlayerFactory('海盗', 'blue');
var player7 = PlayerFactory('胖墩', 'blue');
console.log(player1.partners,player1.enemies);

player1.die();
player2.die();
player3.die();
player4.die();
