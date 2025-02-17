//importiamo la classe GameData
import { GameData } from "../GameData";
import WebFontFile from '../scenes/webFontFile';

export default class Scena1 extends Phaser.Scene {

    private _text :Phaser.GameObjects.Text;
    private _image2: Phaser.GameObjects.Image;


  constructor() {
    super({
      key: "Scena1",
    });
};

preload() {

    this._text= this.add.text(this.game.canvas.width / 2, 640,  "Tocca per tornare indietro !!", {font: "65px Arial", color: "gray"});
  
  this._text.setOrigin(0.5).setInteractive().on("pointerdown",()=>{

    //fermiamo la scena corrente
    this.scene.stop("Scena1");
    //richiamiamo il metodo start della far partire la scena Intro
    this.scene.start("Intro");

  });

  this._text.on ("pointerover",()=> {

    this._text.setColor("#FF69B4");

  });

  this._text.on ("pointerout",()=> {

    this._text.setColor("gray");

  });

};

create() {

  this.cameras.main.setBackgroundColor("#f5f5dc");

  this._image2 = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "joestic");
 
  this._image2.setInteractive().on("pointerdown",()=>{

    //fermiamo la scena corrente
    this.scene.stop("Scena1");
    //richiamiamo il metodo start della far partire la scena Intro
    this.scene.start("Preloader");

  });

};




}