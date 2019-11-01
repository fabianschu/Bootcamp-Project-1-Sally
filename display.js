class Display {

    constructor() {
        this.makeSmallDuration = collectibles.duration.makeSmallDuration;
        this.speedBonusDuration = collectibles.duration.speedBonusDuration;
    }

    scoreDraw() {
        fill(245, 99, 66);
        textSize(60);
        text(parseInt(frameCount * 100) , 10, 50);
        textFont(font);
    }

    gameOverDraw() {
        fill("black");
        textSize(150);
        text("GAME OVER" , 100, 200);
        textFont(font);
    }

    faster() {
        push();
        fill(219, 87, 57); 
        textSize(40);
        text("fast" , 10, 100);
        textFont(font);
        pop();
    }

    smaller() {
        push();
        fill(235, 126, 101); 
        textSize(40);
        text("tiny" , 10, 150);
        textFont(font);
        pop();
    }

    supersized() {
        push();
        fill(237, 139, 116); 
        textSize(40);
        text("sheeeeet" , 10, 200);
        textFont(font);
        pop();
    }


    puff() {
        push();
        fill(252, 176, 159); 
        textSize(40);
        text("*puff*" , 10, 250);
        textFont(font);
        pop();
    }

    teckel() {
        push();
        fill(247, 207, 198); 
        textSize(40);
        text("TECKEL?" , 10, 300);
        textFont(font);
        pop();
    }

    newGame() {
        button = createButton('New Game');
        button.position(430, 550);
    }
    
    preload() {
        font = loadFont("assets/stacked-pixel.ttf");
    }

}