class GameScene extends Phaser.Scene {
    constructor (){
        super('GameScene');
    }

    preload (){	
		this.load.image('back', '../resources/back.png');
		this.load.image('cb', '../resources/cb.png');
		this.load.image('co', '../resources/co.png');
		this.load.image('sb', '../resources/sb.png');
		this.load.image('so', '../resources/so.png');
		this.load.image('tb', '../resources/tb.png');
		this.load.image('to', '../resources/to.png');
		this.load.image('background', '../resources/fondo.png');
	}
	
    create (){	
		this.add.image(1280, 360, 'background');
	}
	
	update (){	}
}

