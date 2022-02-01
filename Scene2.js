
   
class Scene2 extends Phaser.Scene {
  constructor() {
      super("game rules");
  }
  preload(){
    this.load.image("start","start.png");
    this.load.bitmapFont("pixelFont","textfont.jpg");
  }
  create(){
      this.add.text(540,10,"RULES",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:50 ,color: '#141c0b'},16);
      this.add.text(10,50,">TWO PLAYER",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,90,">CHOOSE YOUR FROG: RED OR BLUE",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,130,">PRESS LEFT KEY TO MOVE BLUE FROG",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,170,">PRESS RIGHT KEY TO MOVE RED FROG",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,210,">THE MOTTO OF THE GAME IS TO JUMP YOUR FROG FROM ONE LEAF TO ANOTHER",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,245,"WHILE COLLECTING THE MAXIMUM FLIES! 1 FLY=10 POINTS",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,280,">THERE IS NO NEED TO WAIT FOR TURNS",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,315,"PRESS YOUR KEY AS MANY TIMES YOU WANT",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,350,">BUT BEWARE!!  FALLING INTO WATER CAUSES PENALTY OF 5 POINTS AND TAKES YOU TO YOUR BASE LEAF",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,385,">STEAL 15 POINTS FROM OPPONENT'S SCORE IF YOU ARE ABLE TO LAND ON ENEMY FROG",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,420,"AND DISPLACE THEM FROM THEIR POSITION !!",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      
      this.add.text(10,455,">GAME ENDS WHEN A PLAYER REACHES 60 POINTS",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(10,490,">OR WHEN THE TIMER RUNS OUT! WHICHEVER HAPPENS SOONER!",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:20 ,color: '#141c0b'},10);
      this.add.text(300,530,"LET THE FUN BEGIN!",{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize:40 ,color: '#141c0b'},10);
      this.play=this.input.keyboard.createCursorKeys();
      this.sprite=this.add.sprite(500,700,'start').setInteractive();
        this.sprite.on('pointerdown',function(pointer)  {
          this.scene.start("playGame");
        },this);
     
  }
 
 }

  