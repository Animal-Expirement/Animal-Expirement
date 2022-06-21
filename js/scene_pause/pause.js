class Game extends Phaser.Scene {
    constructor(){
        super({key: 'pause'});

    }

    preload(){

        this.load.image('exit', '../../resources/exit.png');
        this.load.image('resume', '../../resources/resume_game.png');
       
    }

    create(){
       
        this.exitg = this.add.image(480, 480, 'exit' );
        this.exit.scale = 0.1;
        this.resumeg = this.add.image(1000, 480, 'resume');
        this.resumeg.scale = 0.3;


    }
   
}