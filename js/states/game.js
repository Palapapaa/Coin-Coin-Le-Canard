var gameState = {

    //chargement des params du niveau
    init : function(){

    },

    preload : function(){

    },

    create : function(){
      game.add.sprite(100,100,"canard_template1");
      this.coin = game.add.audio("sound_coin1");

      this.coin.play();
    },

    update : function(){


    },

};
