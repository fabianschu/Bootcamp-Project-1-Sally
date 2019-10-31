class Display {

    scoreDraw() {
        fill(245, 99, 66);
        textSize(60);
        text(parseInt(frameCount * 100) , 10, 50);
        textFont(font);
    }

    gameOverDraw() {
        fill("red");
        textSize(150);
        text("GAME OVER" , 100, 200);
        textFont(font);
    }

    effectCounter() {
        push();
        fill(52, 235, 107); 
        textSize(40);
        text(effect + ": " + displayText , 320, 50);
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