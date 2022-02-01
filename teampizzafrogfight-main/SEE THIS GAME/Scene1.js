class Scene1 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }
    preload(){
        this.load.image("leaf1", "leaf.png");
        this.load.image("leaf2", "leaf.png");
        this.load.image("leaf3", "leaf.png");
        this.load.image("leaf4", "leaf.png");
        this.load.image("leaf5", "leaf.png");
        this.load.image("leaf6", "leaf.png");
        this.load.image("leaf7", "leaf.png");
        this.load.image("bluefrog", "bluefrog.png");
        this.load.image("redfrog", "redfrog.png");
        this.load.image("fly1", "fly.png");
        this.load.image("fly2", "fly.png");
        this.load.image("fly3", "fly.png");
        this.load.image("fly4", "fly.png");
        this.load.image("fly5", "fly.png");
        this.load.image("fly6", "fly.png");
        this.load.image("fly7", "fly.png");
        this.load.image("fly8", "fly.png");
        this.load.image("fly9", "fly.png");
        this.load.image("fly10", "fly.png");
        this.load.image("fly11", "fly.png");
        this.load.image("fly12","fly.png"); 
      }
    create() {
      /*       1
            2     3
               4
            5     6
               7 
      */
      this.leaf1=this.add.image(540,30,"leaf1");this.leaf1.setOrigin(0.5,0.5);
      this.leaf2=this.add.image(290,180,"leaf2");this.leaf2.setOrigin(0.5,0.5);
      this.leaf3=this.add.image(810,180,"leaf3");this.leaf3.setOrigin(0.5,0.5);
      this.leaf4=this.add.image(540,330,"leaf4");this.leaf4.setOrigin(0.5,0.5);
      this.leaf5=this.add.image(290,480,"leaf5");this.leaf5.setOrigin(0.5,0.5);
      this.leaf6=this.add.image(810,480,"leaf6");this.leaf6.setOrigin(0.5,0.5);
      this.leaf7=this.add.image(540,630,"leaf7");this.leaf7.setOrigin(0.5,0.5);
      this.bluefrog=this.add.image(540,30,"bluefrog");this.bluefrog.setOrigin(0.5,0.5);
      this.redfrog=this.add.image(540,630,"redfrog");this.redfrog.setOrigin(0.5,0.5);
      this.leaf2.setScale(0.3);
      this.leaf3.setScale(0.3);
      this.leaf4.setScale(0.3);
      this.leaf5.setScale(0.3);
      this.leaf6.setScale(0.3);
      this.leaf7.setScale(0.3);
      this.leaf1.setScale(0.3);
      this.bluefrog.setScale(0.3);
      this.redfrog.setScale(0.3);
      this.fly1=this.add.image(415,105,"fly1");this.fly1.setOrigin(0.5,0.5);
      this.fly2=this.add.image(675,105,"fly2");this.fly2.setOrigin(0.5,0.5);
      this.fly3=this.add.image(550,180,"fly3");this.fly3.setOrigin(0.5,0.5);
      this.fly4=this.add.image(415,255,"fly4");this.fly4.setOrigin(0.5,0.5);
      this.fly5=this.add.image(675,255,"fly5");this.fly5.setOrigin(0.5,0.5);
      this.fly6=this.add.image(290,330,"fly6");this.fly6.setOrigin(0.5,0.5);
      this.fly7=this.add.image(810,330,"fly7");this.fly7.setOrigin(0.5,0.5);
      this.fly8=this.add.image(415,405,"fly8");this.fly8.setOrigin(0.5,0.5);
      this.fly9=this.add.image(675,405,"fly9");this.fly9.setOrigin(0.5,0.5);
      this.fly10=this.add.image(550,480,"fly10");this.fly10.setOrigin(0.5,0.5);
      this.fly11=this.add.image(415,555,"fly11");this.fly11.setOrigin(0.5,0.5);
      this.fly12=this.add.image(675,555,"fly12");this.fly12.setOrigin(0.5,0.5);
      this.fly1.setScale(0.25);
      this.fly2.setScale(0.3);
      this.fly3.setScale(0.2);
      this.fly4.setScale(0.3);
      this.fly5.setScale(0.25);
      this.fly6.setScale(0.3);
      this.fly7.setScale(0.25);
      this.fly8.setScale(0.3);
      this.fly9.setScale(0.2);
      this.fly10.setScale(0.3);
      this.fly11.setScale(0.2);
      this.fly12.setScale(0.25);
      this.moveFrog=this.input.keyboard.createCursorKeys();
      this.blueangle=this.bluefrog.angle;
      this.redangle=this.redfrog.angle;
      this.testRed=0;
      this.testBlue=0; 
      this.countBlue=0;
      this.countRed=0;
      this.framecounterRed=0;
      this.framecounterBlue=0;
      this.fly1.visible=false;
      this.fly2.visible=false;
      this.fly3.visible=false;
      this.fly4.visible=false;
      this.fly5.visible=false;
      this.fly6.visible=false;
      this.fly7.visible=false;
      this.fly8.visible=false;
      this.fly9.visible=false;
      this.fly10.visible=false;
      this.fly11.visible=false;
      this.fly12.visible=false;
      this.scorered=0;
      this.scoreblue=0;
      this.scoreblueLabel=this.add.text(10,5,"SCORE BLUE:",{color: '#141c0b'} ,20);
      this.scoreredLabel=this.add.text(10,45,"SCORE RED:",{color: '#141c0b'},20);
      this.flylist=[this.fly1, this.fly2, this.fly3,this.fly4,this.fly5,this.fly6,this.fly7,this.fly8,this.fly9,this.fly10,this.fly11,this.fly12];
      this.flycount=0;
      this.leaflist=[this.leaf1,this.leaf2,this.leaf3,this.leaf4,this.leaf5,this.leaf6,this.leaf7];
      this.randleaf=0;
      this.splash=new Audio('watersplash.mp3');
      this.eat=new Audio('eat.mp3');
      this.jump=new Audio('jump.mp3');  
      this.frameTime=0;  
      this.timer=0;
      this.Timer=this.add.text(10,85,"Timer:",{color:'#141c0b'},20);  
      this.displaytime=60;
      this.blueangle=180;
      }
    update(time,delta) {
      this.frameTime += delta
      this.timer+=1;
      this.displaytime=60-(this.timer-(this.timer)%100)/100;
      this.Timer.text="Timer:"+this.displaytime; 
      if (this.displaytime<=0){
        if (this.scorered>this.scoreblue){
          this.scene.start("redwin");
        }
        else if (this.scoreblue>this.scorered){
          this.scene.start("bluewin");
        }
        else this.scene.start("timeup");
      } 
      this.flycount++;
      if(this.flycount%200==0){
        this.flylist[Math.floor(Math.random() * 12)].visible=true;
      }
      this.countRed=0;
      this.countBlue=0;
      if (this.frameTime > 10) {
        this.frameTime = 0;
        if(this.testBlue!=1)
        {  this.blueangle+=3;
          this.bluefrog.angle =this.blueangle;
        }
        if(this.testRed!=2){
          this.redangle+=3;
          this.redfrog.angle =this.redangle; 
        }
      }
     this.moveFrogManager();
     //bluefrog
     if(this.testBlue==1)
     {this.jumpBlueFrog(10*Math.sin((this.blueangle)*0.01745),-10*Math.cos((this.blueangle)*0.01745));
        if(Math.abs(this.bluefrog.x-this.leaf1.x)<=50 && Math.abs(this.bluefrog.y-this.leaf1.y)<=50 && this.framecounterBlue>=25){ 
            this.bluefrog.x=this.leaf1.x;
            this.bluefrog.y=this.leaf1.y;
            this.countBlue=1;
            this.framecounterBlue=0;
            if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
            { this.jump.play();
              this.scorered-=15;
              this.scoreblue+=15;
              this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
              this.redfrog.x=this.randleaf.x;
              this.redfrog.y=this.randleaf.y;
              
              if (this.randleaf==this.leaf1){
                this.jump.play();
                this.bluefrog.x=this.leaf4.x;
                this.bluefrog.y=this.leaf4.y;
                this.scorered+=15;
                this.scoreblue-=15;
              }
              
            }
           }

        else if (Math.abs(this.bluefrog.x-this.leaf2.x)<=50 && Math.abs(this.bluefrog.y-this.leaf2.y)<=50 && this.framecounterBlue>=25){
          this.bluefrog.x=this.leaf2.x;
          this.bluefrog.y=this.leaf2.y;
          this.countBlue=1;
          this.framecounterBlue=0;
          if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
          { this.jump.play();
            this.scorered-=15;
            this.scoreblue+=15;
            this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
            this.redfrog.x=this.randleaf.x;
            this.redfrog.y=this.randleaf.y;
            if (this.randleaf==this.leaf2){
              this.jump.play();
              this.bluefrog.x=this.leaf4.x;
              this.bluefrog.y=this.leaf4.y;
              this.scorered+=15;
              this.scoreblue-=15;
            }
          }
         }
         else if (Math.abs(this.bluefrog.x-this.leaf3.x)<=50 && Math.abs(this.bluefrog.y-this.leaf3.y)<=50 && this.framecounterBlue>=25){
          this.bluefrog.x=this.leaf3.x;
          this.bluefrog.y=this.leaf3.y;
          this.countBlue=1;
          this.framecounterBlue=0;
          if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
          {
            this.scorered-=15;
            this.scoreblue+=15;
            this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
            this.redfrog.x=this.randleaf.x;
            this.redfrog.y=this.randleaf.y;
            if (this.randleaf==this.leaf3){
              this.jump.play();
              this.bluefrog.x=this.leaf4.x;
              this.bluefrog.y=this.leaf4.y;
              this.scorered+=15;
              this.scoreblue-=15;
            }
          }
         }
         else if (Math.abs(this.bluefrog.x-this.leaf4.x)<=50 && Math.abs(this.bluefrog.y-this.leaf4.y)<=50 && this.framecounterBlue>=25){
          this.bluefrog.x=this.leaf4.x;
          this.bluefrog.y=this.leaf4.y;
          this.countBlue=1;
          this.framecounterBlue=0;
          if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
          { this.jump.play();
            this.scorered-=15;
            this.scoreblue+=15;
            this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
            this.redfrog.x=this.randleaf.x;
            this.redfrog.y=this.randleaf.y;
            if (this.randleaf==this.leaf4){
              this.jump.play();
              this.bluefrog.x=this.leaf1.x;
              this.bluefrog.y=this.leaf1.y;
              this.scorered+=15;
              this.scoreblue-=15;
            }
          }
         }
         else if (Math.abs(this.bluefrog.x-this.leaf5.x)<=50 && Math.abs(this.bluefrog.y-this.leaf5.y)<=50 && this.framecounterBlue>=25){
          this.bluefrog.x=this.leaf5.x;
          this.bluefrog.y=this.leaf5.y;
          this.countBlue=1;
          this.framecounterBlue=0;
          if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
          { this.jump.play();
            this.scorered-=15;
            this.scoreblue+=15;
            this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
            this.redfrog.x=this.randleaf.x;
            this.redfrog.y=this.randleaf.y;
            if (this.randleaf==this.leaf5){
              this.jump.play();
              this.bluefrog.x=this.leaf4.x;
              this.bluefrog.y=this.leaf4.y;
              this.scorered+=15;
              this.scoreblue-=15;
            }
          }
         }
         else if (Math.abs(this.bluefrog.x-this.leaf6.x)<=50 && Math.abs(this.bluefrog.y-this.leaf6.y)<=50 && this.framecounterBlue>=25){
          this.bluefrog.x=this.leaf6.x;
          this.bluefrog.y=this.leaf6.y;
          this.countBlue=1;
          this.framecounterBlue=0;
          if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
          { this.jump.play();
            this.scorered-=15;
            this.scoreblue+=15;
            this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
            this.redfrog.x=this.randleaf.x;
            this.redfrog.y=this.randleaf.y;
            if (this.randleaf==this.leaf6){
              this.jump.play();
              this.bluefrog.x=this.leaf4.x;
              this.bluefrog.y=this.leaf4.y;
              this.scorered+=15;
              this.scoreblue-=15;
            }
          }
         }
         else if (Math.abs(this.bluefrog.x-this.leaf7.x)<=50 && Math.abs(this.bluefrog.y-this.leaf7.y)<=50 && this.framecounterBlue>=25){
          this.bluefrog.x=this.leaf7.x;
          this.bluefrog.y=this.leaf7.y;
          this.countBlue=1;
          this.framecounterBlue=0;
          if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
              { this.jump.play();
                this.scorered-=15;
                this.scoreblue+=15;
                this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
                this.redfrog.x=this.randleaf.x;
                this.redfrog.y=this.randleaf.y;
                if (this.randleaf==this.leaf7){
                  this.jump.play();
                  this.bluefrog.x=this.leaf4.x;
                  this.bluefrog.y=this.leaf4.y;
                  this.scorered+=15;
                  this.scoreblue-=15;
                }
              }
         }
         else if(this.framecounterBlue>=35){
          this.splash.play();
          this.bluefrog.x=this.leaf1.x;
          this.bluefrog.y=this.leaf1.y; 
          if(this.bluefrog.x==this.redfrog.x && this.bluefrog.y==this.redfrog.y)
          { this.jump.play();
            this.scorered-=15;
            this.scoreblue+=15;
            this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
            this.redfrog.x=this.randleaf.x;
            this.redfrog.y=this.randleaf.y;
            if (this.randleaf==this.leaf1){
              this.jump.play();
              this.bluefrog.x=this.leaf4.x;
              this.bluefrog.y=this.leaf4.y;
              this.scorered+=15;
              this.scoreblue-=15;
            }
          }
          this.countBlue=1;
          this.framecounterBlue=0;
          this.scoreblue-=5;
          
         }
         
        
     }



    //redfrog
     if(this.testRed==2){
      this.jumpRedFrog(10*Math.sin((this.redangle)*0.01745),-10*Math.cos((this.redangle)*0.01745));
      if(Math.abs(this.redfrog.x-this.leaf1.x)<=50 && Math.abs(this.redfrog.y-this.leaf1.y)<=50 && this.framecounterRed>=25){
            
            
        this.redfrog.x=this.leaf1.x;
        this.redfrog.y=this.leaf1.y;
        this.countRed=1;
        this.framecounterRed=0;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf1){
            this.jump.play();
            this.redfrog.x=this.leaf4.x;
            this.redfrog.y=this.leaf4.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
       }

       if(Math.abs(this.redfrog.x-this.leaf2.x)<=50 && Math.abs(this.redfrog.y-this.leaf2.y)<=50 && this.framecounterRed>=25){
            
            
        this.redfrog.x=this.leaf2.x;
        this.redfrog.y=this.leaf2.y;
        this.countRed=1;
        this.framecounterRed=0;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf2){
            this.jump.play();
            this.redfrog.x=this.leaf4.x;
            this.redfrog.y=this.leaf4.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
       }
       if(Math.abs(this.redfrog.x-this.leaf3.x)<=50 && Math.abs(this.redfrog.y-this.leaf3.y)<=50 && this.framecounterRed>=25){
            
            
        this.redfrog.x=this.leaf3.x;
        this.redfrog.y=this.leaf3.y;
        this.countRed=1;
        this.framecounterRed=0;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf3){
            this.jump.play();
            this.redfrog.x=this.leaf4.x;
            this.redfrog.y=this.leaf4.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
       }
       if(Math.abs(this.redfrog.x-this.leaf4.x)<=50 && Math.abs(this.redfrog.y-this.leaf4.y)<=50 && this.framecounterRed>=25){
            
            
        this.redfrog.x=this.leaf4.x;
        this.redfrog.y=this.leaf4.y;
        this.countRed=1;
        this.framecounterRed=0;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf4){
            this.jump.play();
            this.redfrog.x=this.leaf7.x;
            this.redfrog.y=this.leaf7.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
       }
       if(Math.abs(this.redfrog.x-this.leaf5.x)<=50 && Math.abs(this.redfrog.y-this.leaf5.y)<=50 && this.framecounterRed>=25){
            
            
        this.redfrog.x=this.leaf5.x;
        this.redfrog.y=this.leaf5.y;
        this.countRed=1;
        this.framecounterRed=0;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf5){
            this.jump.play();
            this.redfrog.x=this.leaf4.x;
            this.redfrog.y=this.leaf4.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
       }
       if(Math.abs(this.redfrog.x-this.leaf6.x)<=50 && Math.abs(this.redfrog.y-this.leaf6.y)<=50 && this.framecounterRed>=25){
            
            
        this.redfrog.x=this.leaf6.x;
        this.redfrog.y=this.leaf6.y;
        this.countRed=1;
        this.framecounterRed=0;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf6){
            this.jump.play();
            this.redfrog.x=this.leaf4.x;
            this.redfrog.y=this.leaf4.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
       }
       else if(Math.abs(this.redfrog.x-this.leaf7.x)<=50 && Math.abs(this.redfrog.y-this.leaf7.y)<=50 && this.framecounterRed>=25){
            
            
        this.redfrog.x=this.leaf7.x;
        this.redfrog.y=this.leaf7.y;
        this.countRed=1;
        this.framecounterRed=0;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf7){
            this.jump.play();
            this.redfrog.x=this.leaf4.x;
            this.redfrog.y=this.leaf4.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
       }
       else if(this.framecounterRed>=35){
        this.splash.play();
        this.redfrog.x=this.leaf7.x;
        this.redfrog.y=this.leaf7.y;
        if(this.redfrog.x==this.bluefrog.x && this.redfrog.y==this.bluefrog.y)
        { this.jump.play();
          this.scoreblue-=15;
          this.scorered+=15;
          this.randleaf=this.leaflist[Math.floor(Math.random() * 7)];
          this.bluefrog.x=this.randleaf.x;
          this.bluefrog.y=this.randleaf.y;
          if (this.randleaf==this.leaf1){
            this.jump.play();
            this.redfrog.x=this.leaf4.x;
            this.redfrog.y=this.leaf4.y;
            this.scoreblue+=15;
            this.scorered-=15;
          }
        }
        this.countRed=1;
        this.framecounterRed=0;
        this.scorered-=5;
       }

     }
     if(this.countRed==1){
      this.testRed=0;
     }
     if(this.countBlue==1){
      this.testBlue=0;
     }

     
     this.pickfly(this.bluefrog,this.fly1);
     this.pickfly(this.bluefrog,this.fly2);
     this.pickfly(this.bluefrog,this.fly3);
     this.pickfly(this.bluefrog,this.fly4);
     this.pickfly(this.bluefrog,this.fly5);
     this.pickfly(this.bluefrog,this.fly6);
     this.pickfly(this.bluefrog,this.fly7);
     this.pickfly(this.bluefrog,this.fly8);
     this.pickfly(this.bluefrog,this.fly9);
     this.pickfly(this.bluefrog,this.fly10);
     this.pickfly(this.bluefrog,this.fly11);
     this.pickfly(this.bluefrog,this.fly12);
     this.pickfly(this.redfrog,this.fly1);
     this.pickfly(this.redfrog,this.fly2);
     this.pickfly(this.redfrog,this.fly3);
     this.pickfly(this.redfrog,this.fly4);
     this.pickfly(this.redfrog,this.fly5);
     this.pickfly(this.redfrog,this.fly6);
     this.pickfly(this.redfrog,this.fly7);
     this.pickfly(this.redfrog,this.fly8);
     this.pickfly(this.redfrog,this.fly9);
     this.pickfly(this.redfrog,this.fly10);
     this.pickfly(this.redfrog,this.fly11);
     this.pickfly(this.redfrog,this.fly12);
    
    
    if(this.scorered>=60){
      this.scene.start("redwin");
       
    }
    if(this.scoreblue>=60){
      this.scene.start("bluewin");
    }
    if(this.scorered<=0)
      this.scorered=0;
    if(this.scoreblue<=0)
      this.scoreblue=0;
    this.scoreblueLabel.text="SCORE BLUE:"+this.scoreblue;
    this.scoreredLabel.text="SCORE RED:"+this.scorered;  
    }





    
    moveFrogManager(){                          //left=blue right=red
      if(this.moveFrog.left.isDown){
        this.jump.play();
        this.testBlue=1;
    }
      if(this.moveFrog.right.isDown){
        this.jump.play();
        this.testRed=2; 
    }
    }
    jumpBlueFrog(vx,vy){
        if(this.framecounterBlue<=35){
          
          this.bluefrog.y+=vy;
          this.bluefrog.x+=vx;
          this.framecounterBlue+=1;
        }}
    jumpRedFrog(vx,vy) {
        if(this.framecounterRed<=35){  
            this.redfrog.y+=vy;
            this.redfrog.x+=vx;
            this.framecounterRed+=1;
        }
    }
    pickfly(frog,fly){
      if(Math.abs(frog.x-fly.x)<=30 && Math.abs(frog.y-fly.y)<=30 && fly.visible==true){
          if(frog==this.bluefrog){
              this.scoreblue+=10;
              this.eat.play();
              fly.visible=false;
          }
          if(frog==this.redfrog){
              this.scorered+=10;
              this.eat.play();
              fly.visible=false;
          } 
      } 
    }
  }

  



