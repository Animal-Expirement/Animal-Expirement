//importamos el archivo del juego
import { Game } from './game.js';

let pociones = 0;

const config = {
    //canvas o webgl


  //var w : 2560;
  //var h = 640;

  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [Game],
  //definicion del sistema de fisicas
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  }
}

//instanciamos juego con su configuracion
var game = new Phaser.Game(config);