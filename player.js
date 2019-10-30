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
        this.width = this.img1.width / 8;
        this.height = this.img1.height / 8;
    }

    draw() {
        this.move();

        //animate Sally
        if (frameCount % 60 < 10) {
            //rect(this.x, this.y, this.width, this.height);
            image(this.img1, this.x, this.y, this.width, this.height);
        }
        if (frameCount % 60 < 20 && frameCount % 60 > 9) {
            //rect(this.x, this.y, this.width, this.height);
            image(this.img2, this.x, this.y, this.width, this.height);
        }
        if (frameCount % 60 < 30 && frameCount % 60 > 19) {
            //rect(this.x, this.y, this.width, this.height);
            image(this.img1, this.x, this.y, this.width, this.height);
        }
        if (frameCount % 60 < 40 && frameCount % 60 > 29) {
            //rect(this.x, this.y, this.width, this.height);
            image(this.img2, this.x, this.y, this.width, this.height);
        }
        if (frameCount % 60 < 50 && frameCount % 60 > 39) {
            //rect(this.x, this.y, this.width, this.height);
            image(this.img1, this.x, this.y, this.width, this.height);
        }
        if (frameCount % 60 < 60 && frameCount % 60 > 49) {
            //rect(this.x, this.y, this.width, this.height);
            image(this.img2, this.x, this.y, this.width, this.height);
        }
    }

    move() {
        //move up
        if (keyIsDown(38)) {
            this.y -= verticalSpeed;
        }

        //move down
        if (keyIsDown(40)) {
            this.y += verticalSpeed;
        }

        //move left
        if (keyIsDown(37)) {
            this.x -= horizontalSpeed;
        }

        //move right
        if (keyIsDown(39)) {
            this.x += horizontalSpeed;
        }

    }

}