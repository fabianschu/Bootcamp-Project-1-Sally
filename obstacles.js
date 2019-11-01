class Rocket {

    constructor() {
        this.x = random(0.2 * width, 1.5 * width); // canvas width
        // this.y = height - 100;
        this.y = height;
        this.height = obstacles.size.height.rocketHeight;
        this.width = obstacles.size.width.rocketWidth;
        this.img = loadImage("assets/missileusa.png");
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
        this.height = obstacles.size.height.ufoHeight;
        this.width = obstacles.size.width.ufoWidth;
        this.img = loadImage("assets/ufo.png");
        //add alternative images
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.x -= obstacles.speed.xAxis.ufoX;
    }
}

class Anvil {

    constructor() {
        this.height = obstacles.size.height.anvilHeight;
        this.width = obstacles.size.width.anvilWidth;
        this.x =  random(0.2 * width, 1.5 * width); // canvas width
        // this.y = height - 100;
        this.y = - this.height;
        this.img = loadImage("assets/meteor1.png");
        this.img2 = loadImage("assets/meteor2.png");
    }
    
    draw() {
        image(this.img2, this.x, this.y, this.width, this.height);
        this.y += obstacles.speed.yAxis.rocketY;
        this.x -= obstacles.speed.xAxis.rocketX;
    }   

}