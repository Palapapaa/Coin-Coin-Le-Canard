var gameState = {

    //chargement des params du niveau
    init : function(){

    },

    preload : function(){

    },

    create : function(){
       this.randomGenerator = new Phaser.RandomDataGenerator(1337);

      this.canard = game.add.sprite(100,100,"canard_template1");
      this.coin = game.add.audio("sound_coin1");

      this.coin.play();
      this.canard.inputEnabled = true;
      this.canard.events.onInputDown.add(this.playCoin, this);

    },

    update : function(){


    },

    playCoin: function(){
      this.coin.play();

      this.canard.x = this.randomGenerator.integerInRange(0,650);
      this.canard.y = this.randomGenerator.integerInRange(0,450);

    }

};
