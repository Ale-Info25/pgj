import { GameData } from "../GameData";

export default class GamePlay extends Phaser.Scene {

  private _sprite : Phaser.GameObjects.Sprite;
  private _image1: Phaser.GameObjects.Image;
  private _image2: Phaser.GameObjects.Image;
  private _image3: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: "GamePlay",
    });
  }


  init() {
    this._sprite= this.add.sprite (0,640, "player");
  
  }


  create() {
    this._image1= this.add.image(0, 200, 'bg-2');
    this._image2=this.add.image(0, 505, 'bg-7');
    this._image3=this.add.image(1100, 700, 'omino');


    let _animation_idle : Phaser.Types.Animations.Animation = {
      key: "player-idle", 
      frames: this.anims.generateFrameNumbers("player", { frames: [0,1,2,3] }),
      frameRate: 20,
      yoyo: false,
      repeat: -1
    };
    this.anims.create(_animation_idle);


        


      let _animation: Phaser.Types.Animations.Animation = {
      	key: "player-running", 
        frames: this.anims.generateFrameNumbers("player", { frames: [10,11,12,13,14,15,16,17] }),
        frameRate: 20,
        yoyo: false,
        repeat: -1
      };
      this.anims.create(_animation);
	
      this._image3.setInteractive().on("pointerup", ()=> {
        this._sprite.play("player-idle");
        });

      this._image3.setInteractive().on("pointerdown", ()=> {

      this._sprite.play("player-running");
      });
      
      
    }       
  ;
      



  update(time: number, delta: number): void {
   
    this._image1.x += 2;

    if (this._image1.x > 2000)
    {
       this._image1.x = -150;
    }


       this._image2.x += 2;

       if (this._image2.x > 2000)
       {
          this._image2.x = -150;
       }

   this._sprite.x += 2;

    if (this._sprite.x > 2000)
    {
       this._sprite.x = -150;
  }


}
}
