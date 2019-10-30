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

class MakeSmall {

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

class RemoveObstacles {

    constructor() {
        this.y = - width;
        this.x = random(0, width);
        this.height = 50;
        this.width = 50;
    }

    draw() {
        push();
        fill("black");
        rect(this.x, this.y, this.width, this.height);
        this.y += collectibles.speed.yAxis.removeObstaclesY;
        pop();
    }
}

class SupersizeObstacles {

    constructor() {
        this.y = - width;
        this.x = random(0, width);
        this.height = 50;
        this.width = 50;
    }

    draw() {
        push();
        fill("brown");
        rect(this.x, this.y, this.width, this.height);
        this.y += collectibles.speed.yAxis.removeObstaclesY;
        pop();
    }
}