class SlowMotion {

    constructor() {
        this.y = random(0, height);
        this.x = width;
        this.height = 50;
        this.width = 50;
        this.img = loadImage("assets/diamond.png");
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.x -= collectibles.speed.xAxis.slowTimeX;
    }
}

class MakeSmall {

    constructor() {
        this.y = random(0, height);
        this.x = width;
        this.height = 50;
        this.width = 50;
        this.img = loadImage("assets/diamond-green.png");
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.x -= collectibles.speed.xAxis.makeSmallX;
    }
}


class RemoveObstacles {

    constructor() {
        this.y = - width;
        this.x = random(0, width);
        this.height = 50;
        this.width = 50;
        this.img = loadImage("assets/diamond-weird.png");
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.y += collectibles.speed.yAxis.removeObstaclesY;
    }
}

class SpeedUp {

    constructor() {
        this.y = - width;
        this.x = random(0, width);
        this.height = 50;
        this.width = 50;
        this.img = loadImage("assets/diamond-blue.png");
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.y += collectibles.speed.yAxis.speedBonusY;
    }
}

class SupersizeObstacles {

    constructor() {
        this.y = - width;
        this.x = random(0, width);
        this.height = 50;
        this.width = 50;
        this.img = loadImage("assets/diamond-yellow.png");
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.y += collectibles.speed.yAxis.removeObstaclesY;
    }
}