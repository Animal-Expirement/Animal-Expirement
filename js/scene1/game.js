let platforms
let platformsMoving
let platformsMoving2
let player
let cursors

class GameScene extends Phaser.Scene {
    constructor (){
        super('GameScene');
    }

    preload (){	
		this.load.image('player', '../resources/raton.png');
		this.load.image('cientifico', '../resources/cabezon.png');
		this.load.image('pocionBuena', '../resources/potiBuena.png');
		this.load.image('pocionMala', '../resources/potiMala.png');
		this.load.image('conejo_vidas', '../resources/cerdo_vidas.png');
		this.load.image('queso', '../resources/quesito.png');
		this.load.image('quesoMalo', '../resources/quesitoMalo.png');
		this.load.image('background', '../resources/fondo3.png');
		this.load.image('platform', '../resources/plataforma.png');
	}
	
    create (){	
		this.add.image(960, 540, 'background');


		player = this.physics.add.sprite(450, 450, 'player');
		player.setBounce(0.0);
		player.setScale(0.5);
		//estoo no porque quiero que tire pa arriba
    	//player.setCollideWorldBounds(true);

		platforms = this.physics.add.staticGroup();
		platforms.create(400, 700, 'platform').refreshBody();
		platforms.create(800, 700, 'platform').refreshBody();
		platforms.create(1200, 700, 'platform').refreshBody();

		//CAMBIAR ESTO, crear grupo
		platformsMoving = this.physics.add.image(800, 450, 'platform');
		platformsMoving2 = this.physics.add.image(1200, 300, 'platform');
	
		platformsMoving.setImmovable(true);
		platformsMoving.body.allowGravity = false;
		platformsMoving.setVelocityX(50);
		platformsMoving2.setImmovable(true);
		platformsMoving2.body.allowGravity = false;
		platformsMoving2.setVelocityX(50);

		this.physics.add.collider(player, platforms);
		//CAMBIAR ESTO
		this.physics.add.collider(player, platformsMoving);
		this.physics.add.collider(player, platformsMoving2);

		cursors = this.input.keyboard.createCursorKeys();
	}
	
	update (){
		if(cursors.left.isDown){
			player.setVelocityX(-500)
		}
		else if(cursors.right.isDown){
			player.setVelocityX(500)
		}
		else {
			player.setVelocityX(0)
		}
		if (cursors.up.isDown && player.body.touching.down)
    	{
        player.setVelocityY(-700);
    	}
    	if (cursors.down.isDown) 
    	{
        player.setVelocityY(420);
    	}


	}
}

