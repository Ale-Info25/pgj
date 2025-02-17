import { GameData } from "../GameData";
import WebFontFile from '../scenes/webFontFile';
export default class Intro extends Phaser.Scene {

  private _image1: Phaser.GameObjects.Image;
  private _text: Phaser.GameObjects.Text;


  constructor() {
    super({
      key: "Intro",
    });

  }

  preload() {

    this._text= this.add.text(this.game.canvas.width / 2, 640,  "Tocca per andare avanti !!", {font: "65px Arial", color: "white"});
    
    this._text.setOrigin(0.5).setInteractive().on("pointerdown",()=>{

      //fermiamo la scena corrente
      this.scene.stop("Intro");
      //richiamiamo il metodo start della far partire la scena Intro
      this.scene.start("GamePlay");

    });

    this._text.on ("pointerover",()=> {

      this._text.setColor("#00ff00");

    })

    this._text.on ("pointerout",()=> {

      this._text.setColor("white");

    })

  }
  create() {

    //setta il background di sfondo a bianco
    this.cameras.main.setBackgroundColor("#000000");

    this._image1 = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "phaser");
   
    this._image1.setInteractive().on("pointerdown",()=>{

      //fermiamo la scena corrente
      this.scene.stop("Intro");
      //richiamiamo il metodo start della far partire la scena Intro
      this.scene.start("Preloader");

    });

  }
  

    

  update(time: number, delta: number): void {

    this._image1.angle += 1;

  }
  
}

