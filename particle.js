class Particles
{
    constructor(x,y,radius)
    {
        var options = {
           
            "restitution":0.4,
            
        
           
            
            
        }
       this.body = Bodies.circle(x,y,radius/4,options);
       this.color = color(random(0,255),random(0,255),random(0,255))
       this.radius = radius;
       World.add(world,this.body);
    }

    display()
   {    var pos = this.body.position;
        fill(this.color);
        this.body.velocityY = 20;
        ellipse(pos.x,pos.y,this.radius/2,this.radius/2)
       

}

}