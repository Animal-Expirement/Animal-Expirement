class Game extends Phaser.Scene {
    constructor (){
        super('GameScene');
    }

    preload (){	
		this.load.image('background', '../resources/fondo2.png');
		this.load.image('player', '../resources/conejo.png');
		this.load.image('cientifico', '../resources/cientifico.png');
		this.load.image('pocionBuena', '../resources/potiBuena.png');
		this.load.image('pocionMala', '../resources/potiMala.png');
		this.load.image('conejoVidas', '../resources/conejo_vidas.png');
	}
	
    create (){	
		this.add.image(1280, 360, 'background');
		this.player = this.physics.add.image(400, 360, 'player');
		this.vidas = this.add.image(90, 100, 'conejoVidas');
		this.cientifico = this.physics.add.image(1280, 360, 'cientifico').setImmovable();


	}
	
	update (){	}
}

