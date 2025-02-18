import { GameData } from "../GameData";

export default class GamePlay extends Phaser.Scene {

  private _sprite : Phaser.Physics.Arcade.Sprite;


  private _tile1: Phaser.GameObjects.TileSprite;
	private _tile2: Phaser.GameObjects.TileSprite;
	private _tile3: Phaser.GameObjects.TileSprite; 
	private _tile4: Phaser.GameObjects.TileSprite; 
	private _tile5: Phaser.GameObjects.TileSprite; 
	private _tile6: Phaser.GameObjects.TileSprite; 
	private _tile7: Phaser.GameObjects.TileSprite;
    
	private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({
      key: "GamePlay",
    });
  }


  init() {
    this._sprite= this.physics.add.sprite (0,718, "player").setDepth(1);
    this._sprite.setCollideWorldBounds(true);
    this._cursors = this.input.keyboard.createCursorKeys();
  }


  create() {
    
        

    //Tilesprite
    this._tile1 = this.add.tileSprite(0, 0, 1280, 1800, "bg-1").setOrigin(0,0);
    this._tile2 = this.add.tileSprite(0, 0, 1280, 600, "bg-2").setOrigin(0,0);
    this._tile3 = this.add.tileSprite(0, 600, 1280, 450, "bg-3").setOrigin(0,1);
    this._tile4 = this.add.tileSprite(0, 600, 1280, 450, "bg-4").setOrigin(0,1);
    this._tile5 = this.add.tileSprite(0, 700, 1280, 450, "bg-5").setOrigin(0,1);
    this._tile6 = this.add.tileSprite(0, 750, 1280, 450, "bg-6").setOrigin(0,1);
    this._tile7 = this.add.tileSprite(0, 800, 1280, 450, "bg-7").setOrigin(0,1);


    

    let _animation_idle : Phaser.Types.Animations.Animation = {
      key: "player-idle", 
      frames: this.anims.generateFrameNumbers("player", { frames: [0,1,2,3] }),
      frameRate: 20,
      yoyo: false,
      repeat: -1
    };
    this.anims.create(_animation_idle);


        
      //Animazione corsa

      let _animation: Phaser.Types.Animations.Animation = {
      	key: "player-running", 
        frames: this.anims.generateFrameNumbers("player", { frames: [10,11,12,13,14,15,16,17] }),
        frameRate: 20,
        yoyo: false,
        repeat: -1,
      };
      this.anims.create(_animation);

        //Animazione pugno
      let _animation_pugno: Phaser.Types.Animations.Animation = {
      	key: "player-pugno", 
        frames: this.anims.generateFrameNumbers("player", { frames: [24,25,26,27,28] }),
        frameRate: 10,
        yoyo: false,
        repeat: -1
      };
      this.anims.create(_animation_pugno);

      
        


      
      
    }       

  update(time: number, delta: number): void {

    this._sprite.setVelocity(0);
    
    this._sprite.play("player-idle")
     
    
    if (this._cursors.right.isDown) { 
      console.log("button right is down");
      this._tile3.tilePositionX += 0.2; //velocità lenta
      this._tile4.tilePositionX += 0.4; //velocità media 	
      this._tile5.tilePositionX += 0.6; //velocità alta
      this._tile6.tilePositionX += 0.6; //velocità alta
      this._tile7.tilePositionX += 0.6; //velocità alta 
      this._sprite.anims.play("player-running",true);
      this._sprite.setVelocityX(+300);
  
    }
    else if (this._cursors.left.isDown) { 
      console.log("button right is down");
      this._tile3.tilePositionX += 0.2; //velocità lenta
      this._tile4.tilePositionX += 0.4; //velocità media 	
      this._tile5.tilePositionX += 0.6; //velocità alta
      this._tile6.tilePositionX += 0.6; //velocità alta
      this._tile7.tilePositionX += 0.6; //velocità alta
      this._sprite.anims.play("player-running", true);
      this._sprite.setVelocityX(-300);
  
    }
  
    

  }

}
  



