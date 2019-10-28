class Display {

    constructor() {
        this.x = 50;
        this.y = 50;
    }

    draw() {
        textSize(32);
        text(parseInt(frameCount/60 * 10) , 10, 30);
    }

}