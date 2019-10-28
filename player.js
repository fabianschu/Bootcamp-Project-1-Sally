class Player {
    constructor() {
        this.x = 50;
        this.velocity = 0;
        this.gravity = 0.2;
    
        //gravity
    }

    preload() {
        this.img1 = loadImage("assets/Teckel_Position_1.png");
        this.img2 = loadImage("assets/Teckel_Position_2.png");
    }

    setup() {
        this.y = HEIGHT - 320;
    }

    draw() {
        this.move();
        
        //animate Sally
        if (frameCount % 60 < 10) {
            image(this.img1, this.x, this.y, 120, 120);
        }
        if (frameCount % 60 < 20 && frameCount % 60 > 9) {
            image(this.img2, this.x, this.y, 120, 120);
        }
        if (frameCount % 60 < 30 && frameCount % 60 > 19) {
            image(this.img1, this.x, this.y, 120, 120);
        }
        if (frameCount % 60 < 40 && frameCount % 60 > 29) {
            image(this.img2, this.x, this.y, 120, 120);
        }
        if (frameCount % 60 < 50 && frameCount % 60 > 39) {
            image(this.img1, this.x, this.y, 120, 120);
        }
        if (frameCount % 60 < 60 && frameCount % 60 > 49) {
            image(this.img2, this.x, this.y, 120, 120);
        }
    }

    move() {
        //move up
        if (keyIsDown(38)) {
            console.log("pressi");
            this.y -= verticalSpeed;
        }

        //move down
        if (keyIsDown(40)) {
            console.log("pressi");
            this.y += verticalSpeed;
        }

        //move left
        if (keyIsDown(37)) {
            console.log("pressi");
            this.x -= horizontalSpeed;
        }

        //move right
        if (keyIsDown(39)) {
            console.log("pressi");
            this.x += horizontalSpeed;
        }

    }

}