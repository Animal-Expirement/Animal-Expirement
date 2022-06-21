var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	scene: [Game],

physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  }
}


var game = new Phaser.Game(config);