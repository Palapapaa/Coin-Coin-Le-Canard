var bootState = {

    preload : function(){
        console.log("Boot state preload");
    },

    create : function(){
        // Mise en place des paramètres de base du jeu
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // On démarre l'état de chargement
        game.state.start('load');
    },

};
