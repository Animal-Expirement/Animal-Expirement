//desde este modulo exporto a este mismo
export class Game extends Phaser.Scene {



    //inicializacion de la clase
    constructor() {
      super({ key: 'game' });
    }
  
    //precarga 
    preload() {
        //nombre del asset para conocerlo dentro del juego
      this.load.image('background', 'images/fondo.png');
      this.load.image('gameover', 'images/gameover.png');
      this.load.image('player', 'images/conejo2.png');
    }
  
    create() {
      this.add.image(410, 250, 'background');
      this.gameoverImage = this.add.image(400, 90, 'gameover');
      this.gameoverImage.visible = false;

      this.player = this.physics.add.image(400, 360, 'player');
      this.player.body.allowGravity = false;

      this.cursors = this.input.keyboard.createCursorKeys();

      //this.player.setVelocity(500, 0)
      
    }
  
    update(){
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