class SceneRedWin extends Phaser.Scene {
    constructor() {
      super("redwin");
    }
    preload(){
      this.load.image("playagain","playagain.png");
    }
    create(){
        this.redwin=this.add.text(340,360,"RED FROG WINS !",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:50 ,color: '#141c0b'},100);
        this.sprite=this.add.sprite(540,500,'playagain').setInteractive();
        this.sprite.on('pointerdown',function(pointer)  {
          this.scene.start("playGame");
        },this);

    }
}
