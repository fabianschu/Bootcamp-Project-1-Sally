class Display {

    scoreDraw() {
        fill("greenyellow");
        textSize(60);
        text(parseInt(frameCount * 100) , 10, 50);
        textFont(font);
    }

    gameOverDraw() {
        fill("red");
        textSize(150);
        text("GAME OVER" , 100, 150);
        textFont(font);
    }

    effectCounter() {
        push();
        fill("green");
        textSize(40);
        text(effect + ": " + displayText , 350, 50);
        textFont(font);
        pop();
    }

    
    newGame() {
        button = createButton('New Game');
        button.position(WIDTH/2 - 190, HEIGHT/2 + 100);
    }
    
    preload() {
        font = loadFont("assets/stacked-pixel.ttf");
    }

}