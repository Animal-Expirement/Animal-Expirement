var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: 'game_area',
  //definicion del sistema de fisicas
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  },
  scene: [ GameScene ]

};

var game = new Phaser.Game(config);

