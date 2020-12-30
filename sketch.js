const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder1Img, thunder2Img, thunder3Img, thunder4Img,
    thunder1, thunder
var boyAni, boy
var umbrella
var rainGroup = []
var thunderGroup
var drops = []
var MAX_DROPS = 200


function preload() {
    thunder1Img = loadImage("images/thunderbolt/1.png")
    thunder2Img = loadImage("images/thunderbolt/2.png")
    thunder3Img = loadImage("images/thunderbolt/3.png")
    thunder4Img = loadImage("images/thunderbolt/4.png")



    boyAni = loadAnimation("images/Walking Frame/walking_8.png",
        "images/Walking Frame/walking_7.png",
        "images/Walking Frame/walking_6.png",
        "images/Walking Frame/walking_5.png",
        "images/Walking Frame/walking_4.png",
        "images/Walking Frame/walking_3.png",
        "images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_1.png")
}

function setup() {
    createCanvas(500, 900)
    engine = Engine.create();
    world = engine.world;

    thunderGroup = new Group()

    boy = createSprite(250, 738)
    boy.addAnimation("walkingBoy", boyAni)
    boy.scale = 0.5
    umbrella = new Umbrella(105, 750, 75)

    createRain()
}



function draw() {
    background("black")
    Engine.update(engine)
    umbrella.display()
    drawSprites()
    createThunder()

    for (var i = 0; i < MAX_DROPS; i++) {
    drops[i].fall()
    drops[i].display()
    }
}


function createThunder() {
    if (frameCount % 100 == 0) {
        thunder = createSprite(random(0, 500), 0);
        thunder.lifetime = 5
        var rand = Math.round(random(1, 4));
        switch (rand) {
            case 1: thunder.addImage("thunder1", thunder1Img);
                break;
            case 2: thunder.addImage("thunder2", thunder2Img);
                break;
            case 3: thunder.addImage("thunder3", thunder3Img);
                break;
            case 4: thunder.addImage("thunder4", thunder4Img);
                break;
        }
        thunderGroup.add(thunder)
    }
}

function createRain() {

    for (var i = 0; i < MAX_DROPS; i++) {
        var rainX = random(0, 500)
        var rainY = random(-2000, 0)
        var radius = Math.round(random(2, 5))
        var drop = new Drop(rainX, rainY, radius)
        // drop.lifetime = 1000
        drops.push(drop)
    }
}
