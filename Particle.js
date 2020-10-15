class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        this.Visiblity = 255;
    }  
      display() {
       if(this.body.position.y<750){

       push();
        var pos = this.body.position;
        var angle = this.body.angle;

        translate(pos.x, pos.y);
        rotate(angle);
        
        //imageMode(CENTER);
        
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
       pop();
       }
        else{
            score = score +50;
        World.remove(world , this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
        }
    
    }


};
