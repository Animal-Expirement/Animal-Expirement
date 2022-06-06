//desde este modulo exporto a este mismo


let jugador = {
  vidas : 3,
  genetica  : 100,
  pociones : 0,
};

export class Game extends Phaser.Scene {

    //inicializacion de la clase
    constructor() {
      super({ key: 'game' });
    }
  

    preload() {
        //nombre del asset para conocerlo dentro del juego
      this.load.image('background', 'images/fondo2.png');
      this.load.image('gameover', 'images/gameover.png');
      this.load.image('player', 'images/conejo.png');
      this.load.image('cientifico', 'images/cientifico.png');
      this.load.image('pocion', 'images/potiBuena.png');
      this.load.image('pocion2', 'images/potiBuena.png');
      this.load.image('conejo_vidas', 'images/conejo_vidas.png');

      
      
      
    }
    
    
    create() {
      
      

      this.cameras.main.setBounds(0,0, 2560, 720);
      this.physics.world.setBounds(0, 0, 2560, 720)


      this.add.image(1280, 360, 'background');
      
      
      const pauseButton = this.add.text(100, 600, 'PAUSA', { fill: '#f0f' });
      pauseButton.style.fontSize = "50px";
      pauseButton.setScrollFactor(0,0);
      pauseButton.setInteractive()
      .on('pointerdown', () => this.pausarjuego());
      

    


      this.gameoverImage = this.add.image(400, 90, 'gameover');
      this.gameoverImage.visible = false;


      this.player = this.physics.add.image(400, 360, 'player');
      this.player.body.allowGravity = false;
      this.player.setBounce(0.5);
	    this.player.setCollideWorldBounds(true);
      this.player.setScale(0.5);


      this.cientifico = this.physics.add.image(1280, 360, 'cientifico').setImmovable();
      this.cientifico.body.allowGravity = false;
      this.cientifico.setCollideWorldBounds(true);
      this.cientifico.setScale(0.3)

      this.vidas = this.add.image(90, 100, 'conejo_vidas');
      this.vidas.scale = 0.5;
      this.vidas.setScrollFactor(0,0);
      this.numvidas = this.add.text (150, 100, 3,  {fill: '#0f0' });
      this.numvidas.setScrollFactor(0,0);
     

      
      let x = Math.random()*2560;
      let y = Math.random()*720;
      this.pocion = this.physics.add.image(x, y, 'pocion');
      this.pocion.body.allowGravity = false;
      this.pocion.setScale(0.3);
      x = Math.random()*2560;
      y = Math.random()*720;
      this.pocion2 = this.physics.add.image(x, y, 'pocion2');
      this.pocion2.body.allowGravity = false;
      this.pocion2.setScale(0.3);
      


      this.physics.world.enableBody(this.cientifico);


      this.physics.add.collider(this.player, this.cientifico, function(player, cientifico){
        recibirDaño(10);
      });

      this.physics.add.collider(this.player, this.pocion, function(player, pocion){
        recoger(pocion);
      });

      this.physics.add.collider(this.player, this.pocion2, function(player, pocion2){
        recoger(pocion2);
      });

      this.cameras.main.startFollow(this.player);

      this.cursors = this.input.keyboard.createCursorKeys();


      
        
    }
    pausarjuego(){
      loadpage("./menu_pausa.html");
    }

    
    update(){

      //this.game.physics.arcade.collide(this.cientifico, this.player, saoko());

      //this.cientifico.body.onCollide = saoko();

      this.physics.moveToObject(this.cientifico, this.player, 180);
      this.add.text(1000, 300, "AQUI DEBERÍA IR EL TIEMPO");
      
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

  
    }
    
}

function recibirDaño(daño){
  
  jugador.genetica-=daño;

  if(jugador.genetica<=0){
    //aqui deberias vovler a la posicion inicial, perdiendo una vida y rellenando la barra de genetica
    jugador.genetica=100;
    jugador.vidas--;
    if(jugador.vidas<=0){
      
      alert("perdiste mamahuevo");
      //this.Scene.stop();
      
    }
  }
 // console.log(jugador.vidas + " " + jugador.genetica);
}

function recoger(object){
  jugador.pociones++;
  console.log(jugador.pociones);
  object.destroy();
  if(jugador.pociones>=2){
    loadpage("./index2.html");
      //this.Scene.stop();
  }
}






