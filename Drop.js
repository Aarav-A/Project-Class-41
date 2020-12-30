class Drop {
    constructor(x, y, r) {
        
        this.r = r
        this.x = x
        this.y = Math.round(random(-500, -100))
        this.yspeed = random(10, 20)
        this.body = Bodies.circle(x, y, this.r )
        World.add(world, this.body)
    }

    

    display() {
        push()
        //translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.x, this.y, this.r, this.r)      
        pop()
    }

    fall() {
        if (this.y > 900) {
            this.y = 0
        } else {
            this.y = this.y + this.yspeed
        }
        console.log("drop - x="+ this.x, " y="+this.y)
    }



}