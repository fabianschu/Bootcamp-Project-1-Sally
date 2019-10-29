class SlowMotion {

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

class SpeedBooster {

    constructor() {
        this.y = random(0, height);
        this.x = width;
        this.height = 50;
        this.width = 50;
    }

    draw() {
        fill('yellow');
        rect(this.x, this.y, this.width, this.height);
        this.x -= 2 * collectibles.speed.xAxis.speedBoosterX;
    }
}