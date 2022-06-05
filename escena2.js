//desde este modulo exporto a este mismo

//var spaceKey;
var bullets;

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
      this.load.image('player', 'images/raton.png');
      this.load.image('cientifico', 'images/cientifico.png');
      this.load.image('bullet', 'images/quesito.png');
    }

  
    create() {
      this.cameras.main.setBounds(0,0, 2560, 720);
      this.physics.world.setBounds(0, 0, 2560, 720);


      this.add.image(1280, 360, 'background');


      this.player = this.physics.add.image(400, 360, 'player');
      this.player.body.allowGravity = false;
      this.player.setBounce(0.5);
	    this.player.setCollideWorldBounds(true);
      this.player.setScale(0.5);

    
      //this.quesito.setScale(0.5);

      /*this.physics.add.collider(this.player, this.cientifico, function(player, cientifico){
        recibirDaño(10);
      });*/

      

      this.cameras.main.startFollow(this.player);

      this.cursors = this.input.keyboard.createCursorKeys();


      this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

      bullets = this.add.group();
      bullets.enableBody = true;
      bullets.physicsBodyType = Phaser.Physics.ARCADE;
  
      bullets.createMultiple(10, 'bullet');
      //bullets.body.setVelocity(50);
      //bullets.setAll('checkWorldBounds', true);
      //bullets.setAll('outOfBoundsKill', true);

      /*bullets = this.add.group();
      bullets.enableBody = true;
      bullets.physicsBodyType = Phaser.Physics.ARCADE;
      //nuts.setVelocity(100,10);
      //nuts.setScale(0.5);

      
      //nuts.setAll('scale.y', 0.5);

     
      //nuts.setVelocityX(300);

      nuts.setAll('anchor.x', 0.5);
      nuts.setAll('anchor.y', 0.5);

      ;*/

      //nuts.setAll('checkWorldBounds', true);
      //nuts.setAll('outOfBoundsKill', true);
    }

    
    update(){

      //this.physics.moveToObject(this.cientifico, this.player, 180);
      //this.add.text(1000, 300, "AQUI DEBERÍA IR EL TIEMPO");
      
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

      if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
        //alert("paaaaaaaaa");
        disparar(this.player.x, this.player.y);
    }


    }
}

/*function recibirDaño(daño)
{
  jugador.genetica-=daño;
  if(jugador.genetica<=0){
    //aqui deberias vovler a la posicion inicial, perdiendo una vida y rellenando la barra de genetica
    jugador.genetica=100;
    jugador.vidas--;
    if(jugador.vidas<=0){
      alert("perdiste mamahuevo");
      this.Scene.stop();
    }
  }
  console.log(jugador.vidas + " " + jugador.genetica);
}*/


function disparar(x, y){
  //bullets
  bullets.create(x, y, 'bullet');
  
  /*bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(x, y + 8);
            bullet.body.velocity.y = -400;
        }*/


}



