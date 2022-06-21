class Game extends Phaser.Scene {
    constructor(){
        super({key: 'hud'});

    }

    preload(){
        this.load.image('hud_side1', '../resources/hud_images/hud_side1.png');
        this.load.image('hud_side2', '../resources/hud_images/hud_side2.png');
        this.load.image('hud_side3', '../resources/hud_images/hud_side3.png');
		this.load.image('hud_pj', '../resources/hud_images/hud_pj.png');
    }

    create(){
       this.hudcentro =  this.add.image(800, 700, 'hud_pj');
       this.hudcentro.scale = 0.30;
       this.hudder =  this.add.image(1060, 760, 'hud_side1')
       this.hudder.scale = 0.30;
       this.hudder2 =  this.add.image(1345, 760, 'hud_side3')
       this.hudder2.scale = 0.30;
       this.hudizq =  this.add.image(1630, 790, 'hud_side2')
       this.hudizq.scale = 0.30;


    }
   
}