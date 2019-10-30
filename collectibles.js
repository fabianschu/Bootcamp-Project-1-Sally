class slowMotion {

    constructor() {
        this.y = random(0, height);
        this.x = width;
        this.height = 50;
        this.width = 50;
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
        this.x -= collectibles.speed.xAxis.slowTimeX;
    }
}

class makeSmall {

    constructor() {
        this.y = random(0, height);
        this.x = width;
        this.height = 50;
        this.width = 50;
    }

    draw() {
        push();
        fill("blue");
        rect(this.x, this.y, this.width, this.height);
        this.x -= collectibles.speed.xAxis.makeSmallX;
        pop();
    }
}