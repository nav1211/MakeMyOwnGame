class Game{

    constructor(){
    }

    play(){
        //if(backgroundImg)
        //background(255);
        //image(trackImage, 200, 200);
        storyObject.hide();
        //player.addImage("boy image", veggieImg);
        cactii = createSprite(600, 600, 30, 30);
        cactii.addImage("cactii", cactiiImg);
        bison = createSprite(700, 700, 30, 30);
        bison.addImage("bison", bisonImg);
        ravine = createSprite(1100, 800, 30, 30);
        ravine.addImage("ravine", ravineImg);
        track = createSprite(displayWidth/2,750, displayWidth, 30);
        //var random = Math.round(Math.random()*3);
        if(keyIsDown(UP_ARROW) && player.y >= displayWidth  - 852){
            player.velocityY = -20;
        }
        console.log(player.y);
        //console.log(displayWidth);
        if(player.y >= 684){
        }
        else{
            player.velocityY = player.velocityY + 1;
        }
        if(score % 200 === 0){
            if(score > 0 && score < 1000){
                rocks = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                rocks.addImage("rocks", rockImg);
                rocks.velocityX = -10;
            }
            else if(score >= 1000 && score < 2000){
                
            }
        }
        else if(score % 100 === 0 && fatigue < 100){
            var random = Math.round(Math.random()*displayWidth);
            console.log(random);
            var fruitRandom = Math.round(Math.random());
            if(fruitRandom === 0){
                fruits = createSprite(random, displayHeight-800, 10, 10);
                fruits.addImage("fruit", fruitImg);
                fruits.velocityY = 10
            }
            else{
                veggies = createSprite(random, displayHeight-800, 10, 10);
                veggies.addImage("carrot", veggieImg);
                veggies.velocityY = 10;
            }
        }
        
    }

    //spriteCreation(){
        //player = createSprite(600, 600, 30, 30);
        //player.addImage("boy image", playerImage);
    //}

}