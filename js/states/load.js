var loadState = {

    preload : function(){
      game.load.image('canard_template1' , 'assets/graphics/canard_1.jpg');
      game.load.audio('sound_coin1','assets/audio/sound_duck.wav');
    },
    create : function(){
      game.state.start('game');
    },

    update : function(){


    }

};
