class Paper {
    constructor(x, y, r) {
       
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
       
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world, this.body);
    }
    display() {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var pos =this.body.position;
        ellipse( this.body.position.x, this.body.position.y,this.r, this.r);
       
      }
    };
    

