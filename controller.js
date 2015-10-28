var game;

window.onload = function() {


    game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

    // Ajout de tous les états du jeu
    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('game', gameState);

    // Etat de départ
    game.state.start('boot');
};
