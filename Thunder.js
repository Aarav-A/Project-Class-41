class Thunder {
    constructor(){
    }

createThunder(){
    if (frameCount % 100 == 0) {
        thunder = createSprite(random(0, 500), 0);
    var rand = Math.round(random(1, 5));
    switch (rand) {
        case 1: thunder.addImage("thunder1",thunder1Img);
            break;
        case 2: thunder.addImage("thunder2",thunder2Img);
            break;
        case 3: thunder.addImage("thunder3",thunder3Img);
            break;
        case 4: thunder.addImage("thunder4",thunder4Img);
            break;
    }

    thunderGroup.add(thunder)
    drawSprites()
    }
}

}