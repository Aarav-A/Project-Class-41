class Umbrella {
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.r = r
        this.x = x
        this.y = y
        this.body = Bodies.circle(x, y, this.r, options)
        World.add(world, this.body)


    }
    display() {
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("white")
        ellipseMode(RADIUS)
        ellipse(this.x, this.y, this.r, this.r)
        pop()
    }
}