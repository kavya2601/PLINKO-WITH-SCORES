const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var Particles;
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score =0;
var turn = 0;
var count = 0;

var gameState = "start";
var boundary;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  boundary = createSprite(400,450,800,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }   
}
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  Engine.update(engine);
 
  boundary.display();
  text("50",30 , 550);
  text("100",90 , 550);
  text("150",180 , 550);
  text("250",260 , 550);
  text("350",350 , 550);
  text("450",430 , 550);
  text("550",510 , 550);
  text("650",580 , 550);
  text("750",670 , 550);
  text("850",740 , 550);
  
  
  
  
  
  

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score = score+50;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //if(particles.body.position.x>400 && particles.body.position.y>450)
   //{
   //  score = score +50;
  // }
   /*if(Particles!=null)
   {
     Particles.display();
     if(Particles.body.position.y>460)
     {
       if(Particles.body.position.x<300)
       {
         score = score+500;
         Particles=null;
         if(count>=5)
         {
           gameState = "end";
           textSize(20);
           text("GAME OVER",400,400); 
         }
       }
     }
   }*/
   
  
  /* if(particles.x>400 && particles.y>450)
   {
     score = score+1;
   }*/
  }