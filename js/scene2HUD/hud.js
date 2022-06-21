class Game extends Phaser.Scene {
    constructor(){
        super({key: 'hud2'});

    }

    preload(){
        this.load.image('hud1', '../resources/hud_images/scene2hud/hud_1.png');
        this.load.image('hud2', '../resources/hud_images/scene2hud/hud_2.png');
    }

    create(){
       this.hudcentro =  this.add.image(120, 700, 'hu1');
       //this.hudcentro.scale = 0.30;
       this.hudder =  this.add.image(375, 763, 'hu2')
       //this.hudder.scale = 0.30;


    }
   
}