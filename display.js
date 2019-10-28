class Display {

    constructor() {
        this.x = 50;
        this.y = 50;
    }

    draw() {
        textSize(60);
        text(parseInt(frameCount/60 * 10) , 10, 50);
        textFont(font);
        fill("red");
    }

    preload() {
        font = loadFont("assets/stacked-pixel.ttf");
    }

}