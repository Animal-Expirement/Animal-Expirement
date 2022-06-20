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
let numGenetica
let numPotis



class Game extends Phaser.Scene {

	

    constructor (){
        super('GameScene');
		
    }

    preload (){	
		this.load.image('background', '../resources/fondo.png');
		this.load.image('player', '../resources/conejo.png');
		this.load.image('cientifico', '../resources/cientifico.png');
		this.load.image('pocionBuena', '../resources/potiBuena.png');
		this.load.image('pocionMala', '../resources/potiMala.png');
		this.load.image('conejo_vidas', '../resources/conejo_vidas.png');
	}
	
    create() {
		this.add.image(1280, 360, 'background');

		this.vidas = this.add.image(90, 100, 'conejo_vidas');
		this.vidas.scale = 0.5;
      	this.vidas.setScrollFactor(0,0);
		numvidas = this.add.text (150, 100, jugador.vidas,  {fill: '#0f0' });
		numvidas.setScrollFactor(0,0);

		var genetica = this.add.image(90, 200, 'pocionMala');
		genetica.scale = 0.15;
		genetica.setScrollFactor(0,0);
		numGenetica = this.add.text (150, 200, jugador.genetica,  {fill: '#0f0' });
		numGenetica.setScrollFactor(0,0);

		var potis = this.add.image(90, 300, 'pocionBuena');		
		potis.scale = 0.15;
		potis.setScrollFactor(0,0);
		numPotis = this.add.text (150, 300, jugador.pociones,  {fill: '#0f0' });
		numPotis.setScrollFactor(0,0);


		


		this.cameras.main.setBounds(0,0, 2560, 720);
		this.physics.world.setBounds(0, 0, 2560, 720)

  
  
		this.player = this.physics.add.image(0, 0, 'player');
		this.player.setPosition(initialPosition.x, initialPosition.y)
		this.player.body.allowGravity = false;
		this.player.setBounce(0.5);
		  this.player.setCollideWorldBounds(true);
		this.player.setScale(0.5);
  
  
		this.cientifico = this.physics.add.image(1280, 360, 'cientifico').setImmovable();
		this.cientifico.body.allowGravity = false;
		this.cientifico.setCollideWorldBounds(true);
		this.cientifico.setScale(0.3)
  
	   
  
		
		let x = Math.random()*2560;
		let y = Math.random()*720;
		this.pocion = this.physics.add.image(x, y, 'pocionBuena');
		this.pocion.body.allowGravity = false;
		this.pocion.setScale(0.3);
		x = Math.random()*2560;
		y = Math.random()*720;
		this.pocion2 = this.physics.add.image(x, y, 'pocionBuena');
		this.pocion2.body.allowGravity = false;
		this.pocion2.setScale(0.3);
		
  
  
		this.physics.world.enableBody(this.cientifico);
  

  
		this.physics.add.collider(this.player, this.pocion, function(player, pocion){
			recoger(pocion);
		});
  
		this.physics.add.collider(this.player, this.pocion2, function(player, pocion2){
			recoger(pocion2);
		});

		this.physics.add.collider(this.player, this.cientifico, function(player, cientifico){
			recibirDano(enemigo.dmg, player);
		});


  
		this.cameras.main.startFollow(this.player);
  
		this.cursors = this.input.keyboard.createCursorKeys();	
		
		//TODO ESTOO PUESTO ELDOMINGO
		//timer = game.time.create(true);
		timeText = this.add.text(100, 400);
		timeText.setScrollFactor(0,0);
	  }
	
	update(time){

		//this.game.physics.arcade.collide(this.cientifico, this.player, saoko());
  
		//this.cientifico.body.onCollide = saoko();
  
		this.physics.moveToObject(this.cientifico, this.player, 180);


		//this.numvidas = this.add.text (150, 100, jugador.genetica,  {fill: '#0f0' });

		if(this.cursors.left.isDown){
			this.player.setVelocityX(-500, 0)
		  }
		  else if(this.cursors.right.isDown){
			this.player.setVelocity(500, 0)
		  }
		  else {
			this.player.setVelocityX(0)
		  }
		  if(this.cursors.up.isDown){
			this.player.setVelocityY(-500)
		  }
		  else if(this.cursors.down.isDown){
			this.player.setVelocityY(500)
		  }
		  else {
			this.player.setVelocityY(0)
		  }
		  

		timeText.setText('Time: ' + (time*0.001).toFixed(2));

	}

	


}



function recoger(object){

	jugador.pociones++;
	numPotis.setText(jugador.pociones);
	object.destroy();
	if(jugador.pociones>=2){
	  	loadpage("../html/phasergame2.html")
		this.Scene.stop();
	}
  }


function recibirDano(x, player){

	jugador.genetica -= x;
	player.setPosition(player.x-35, player.y);

	numGenetica.setText(jugador.genetica);
	
	if(jugador.genetica<=0){
	  //aqui deberias vovler a la posicion inicial, perdiendo una vida y rellenando la barra de genetica
	  player.setPosition(initialPosition.x, initialPosition.y) 
	  jugador.genetica=100;
	  jugador.vidas--;
	  numvidas.setText(jugador.vidas);
	  
	  
	  
	 
	}
	if(jugador.vidas<=0){
		alert("perdiste mamahuevo");
		this.Scene.stop();
	  }
}
