class Rocket {

    constructor() {
        this.x = random(0.2 * width, width); // canvas width
        // this.y = height - 100;
        this.y = height;
        this.height = 150;
        this.width = 75;
        this.img = loadImage("assets/Angry-Pittpull-01.png");
    }
    
    draw() {
        //rect(this.x, this.y, this.width, this.height);
        image(this.img, this.x, this.y, this.width, this.height);
        this.y -= obstacles.speed.yAxis.rocketY;
        this.x -= obstacles.speed.xAxis.rocketX;
    }

}

class Ufo {

    constructor() {
        this.y = random(0, height);
        this.x = width;
        this.height = 100;
        this.width = 160;
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
        this.x -= obstacles.speed.xAxis.ufoX;
    }
}