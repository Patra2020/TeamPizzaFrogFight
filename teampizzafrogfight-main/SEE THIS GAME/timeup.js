class timeup extends Phaser.Scene {
    constructor() {
        super("timeup");
    }
    preload(){
        this.load.image("playagain","playagain.png");
      }
    create(){
      this.add.text(400,100,"GAME OVER!",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:50 ,color: '#141c0b'},10);
      this.add.text(400,200,"TIE!",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:50 ,color: '#141c0b'},10);
      this.sprite=this.add.sprite(540,500,'playagain').setInteractive();
        this.sprite.on('pointerdown',function(pointer)  {
          this.scene.start("playGame");
        },this);
    }






}