class Display {

    scoreDraw() {
        fill("green");
        textSize(60);
        text(parseInt(frameCount/60 * 10) , 10, 50);
        textFont(font);
    }

    gameOverDraw() {
        fill("red");
        textSize(150);
        text("GAME OVER" , 100, 150);
        textFont(font);
    }

    newGame() {
        button = createButton('New Game');
        button.position(WIDTH/2 - 190, HEIGHT/2 + 100);
    }

    preload() {
        font = loadFont("assets/stacked-pixel.ttf");
    }

}