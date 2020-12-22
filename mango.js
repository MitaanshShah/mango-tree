class Mango{
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("mango.png");
    }
    display(){
    var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width, this.height);
            pop();
    }
}