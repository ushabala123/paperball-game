class Ground{
    constructor(x,y,width,height){
        
        this.body=Bodies.rectangle(x,y,width,height)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    }
    
    display() {
        rectMode(CENTER)
      rect(this.x,this.y, this.width, this.height);
    
      }
}