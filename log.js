class Log{
    constructor(x,y,height,angle){
       var log_options={restitution:0.8,friction:2,density:1.0}
       this.body = Bodies.rectangle(x,y,20,height,log_options)
       Matter.Body.setAngle(this.body, angle)
       World.add(world,this.body)
       this.width= 20
       this.height= height
       this.image = loadImage("sprites/wood2.png")
    } 
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
       imageMode(CENTER)
       fill("brown")
       image(this.image,0,0,this.width,this.height)
       pop()
   
    }
   }