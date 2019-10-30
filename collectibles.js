class Collectible {

    constructor() {
        this.y = random(0, height);
        this.x = width;
        this.height = 50;
        this.width = 50;
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
        this.x -= collectibleSpeed;
    }
}