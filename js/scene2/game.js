let jugador = {
	vidas : 3,
	genetica  : 100,
	pociones : 0,
  };

let enemigo = {
	dmg : 10
};

let initialPosition = {
	x : 400 ,
	y : 360 ,
};

var timeText;
let numvidas
let enemies

let bullets 
let bulletsEnemy




class Game extends Phaser.Scene {

	

    constructor (){
        super('GameScene');
		
    }

    preload (){	
		this.load.image('background', '../resources/fondo2.png');
		this.load.image('player', '../resources/cerdo.png');
		this.load.image('cientifico', '../resources/cabezon.png');
		this.load.image('pocionBuena', '../resources/potiBuena.png');
		this.load.image('pocionMala', '../resources/potiMala.png');
		this.load.image('conejo_vidas', '../resources/cerdo_vidas.png');
		this.load.image('queso', '../resources/quesito.png');
		this.load.image('quesoMalo', '../resources/quesitoMalo.png');
	}
	
    create() {
		this.add.image(1280, 360, 'background');

		this.vidas = this.add.image(90, 100, 'conejo_vidas');
		this.vidas.scale = 0.5;
      	this.vidas.setScrollFactor(0,0);
		numvidas = this.add.text (150, 100, jugador.vidas,  {fill: '#0f0' });
		numvidas.setScrollFactor(0,0);



		


		this.cameras.main.setBounds(0,0, 2560, 720);
		this.physics.world.setBounds(0, 0, 2560, 720)

  
  
		this.player = this.physics.add.image(0, 600, 'player');
		//this.player.setPosition(initialPosition.x, initialPosition.y)
		this.player.body.allowGravity = false;
		this.player.setBounce(0.5);
		this.player.setCollideWorldBounds(true);

  
		this.cameras.main.startFollow(this.player);
  
		this.cursors = this.input.keyboard.createCursorKeys();	
		
		//TODO ESTOO PUESTO ELDOMINGO
		//timer = game.time.create(true);
		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		timeText = this.add.text(100, 400);
		timeText.setScrollFactor(0,0);
	  
		enemies = this.physics.add.group();
		createEnemy();
		//this.physics.add.collider(this.player, enemies, function(){
		//	alert("asdas")
		//});

		
		bullets = this.physics.add.group();
		this.physics.add.collider(bullets, enemies, function(){
			this.enemies.destroy();
		});
	
		bulletsEnemy = this.physics.add.group();
	}
	
	update(time){

		//this.game.physics.arcade.collide(this.cientifico, this.player, saoko());
		//this.cientifico.body.onCollide = saoko();
		//this.numvidas = this.add.text (150, 100, jugador.genetica,  {fill: '#0f0' });

		if(this.cursors.left.isDown){
			this.player.setVelocityX(-150, 0)
		  }
		  else if(this.cursors.right.isDown){
			this.player.setVelocity(150, 0)
		  }
		  else {
			this.player.setVelocityX(0)
		  }
	
		  if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
	
			disparar(this.player.x, this.player.y);
		}
		  

		timeText.setText('Time: ' + (time*0.001).toFixed(2));

	}
}


function createEnemy () {

    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 12; x++)
        {
            var enemy = enemies.create(75 + x * 150, 75 + y * 75, 'cientifico');
			enemy.body.allowGravity = false;
			enemy.setScale(0.35);
			//enemy.physics.add.collider(enemy,this.player);
            //enemy.setCollideWorldBounds(true);
            //enemy.body.moves = false;
        }
    }
}


function disparar(x, y){
	var bullet = bullets.create(x, y, 'queso');
	bullet.body.allowGravity=false;
	bullet.setScale(0.25);
	bullet.setVelocityY(-150)
 }

 function dispararEnemigo(x, y){
	var bulletEnemy = bulletsEnemy.create(x, y, 'quesoMalo');
	bulletEnemy.body.allowGravity=false;
	bulletEnemy.setScale(0.25);
	bulletEnemy.setVelocityY(150)
 }