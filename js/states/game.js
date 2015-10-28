var gameState = {

    //chargement des params du niveau
    init : function(){

    },

    preload : function(){

    },

    create : function(){

      var that = this;
      this.konami = {};
      this.konami.KEY_LEFT      = 37;
      this.konami.KEY_UP        = 38;
      this.konami.KEY_RIGHT     = 39;
      this.konami.KEY_DOWN      = 40;
      this.konami.KEY_A         = 65;
      this.konami.KEY_B         = 66;
      this.konami.CODE_SEQUENCE = '38384040373937396665';  // ⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ b a
      this.konami.maxDelay      = 15000;
      this.konami.buffer = "";
      this.konami.lastDate = new Date();
      this.konami.validKeys       = [ this.konami.KEY_LEFT, this.konami.KEY_UP, this.konami.KEY_RIGHT, this.konami.KEY_DOWN, this.konami.KEY_A, this.konami.KEY_B];

      function _contains(a, b) {
        return !!~a.indexOf(b)
      }

      document.addEventListener('keyup', function (ev) {
        if (_contains(that.konami.validKeys, ev.keyCode) && ((new Date() - that.konami.lastDate) <= 3000)) {
          that.konami.lastDate = new Date();
          that.konami.buffer = that.konami.buffer + ev.keyCode;

          if (_contains(that.konami.buffer, that.konami.CODE_SEQUENCE)) {
            that.shitStormActivated = true;
            that.konami.buffer = '';
          }
        } else {
          that.konami.lastDate = new Date()
          that.konami.buffer = '';
        }
      }, that);


      this.randomGenerator = new Phaser.RandomDataGenerator(1337);

      this.canard = game.add.sprite(100,100,"canard_template1");
      this.coin = game.add.audio("sound_coin1");

      this.coin.play();
      this.canard.inputEnabled = true;
      this.canard.events.onInputDown.add(this.playCoin, this);


      this.shitStormActivated = false;

    },

    update : function(){
      if (this.shitStormActivated) {
        this.coin.play();
      }

    },

    playCoin: function(){
      this.coin.play();

      this.canard.x = this.randomGenerator.integerInRange(0,650);
      this.canard.y = this.randomGenerator.integerInRange(0,450);

    }

};
