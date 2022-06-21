class Game extends Phaser.Scene {
    constructor(){
        super({key: 'pause'});

    }

    preload(){

        this.load.image('exit', '../../resources/exit.png')
        this.load.image('resume', '../../resources/resume_game.png')
        this.load.image('prota', '../../resources/cientifico.png')
       
    }

    create(){
       
        let resumeButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.30, 'resume')
        let exitButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'exit')
        exitButton.scale = 0.45



        resumeButton.setInteractive();
        resumeButton.on("pointerover", ()=>{ //raton por encima
            console.log("qw3eqwe")
        })

        resumeButton.on("pointerout", ()=>{ //puntero sale del boton
            console.log("ASDASD")
        })

        resumeButton.on("pointerup", ()=>{ //click
          //aqui iría la redirección al juego
          //loadpage("../scene3/game.js");  -> esta redirección no la pilla la muy zorra de los cojones
        })



        exitButton.setInteractive();
        exitButton.on("pointerover", ()=>{ //raton por encima
            console.log("ad")
        })

        exitButton.on("pointerout", ()=>{ //puntero sale del boton
            console.log("aaaa")
        })

        exitButton.on("pointerup", ()=>{ //click
         loadpage("../../index.html");  
        })


    }
   
}