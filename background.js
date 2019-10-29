class Background {
    constructor() {
        this.xSky = 0;
        this.xCloud0 = 0;//Math.random() * WIDTH;
        this.yCloud0 = HEIGHT;//Math.random() * HEIGHT;
        //this.xCloud1 = 0;
        //this.xCloud2 = 0;
    }

    preload() {
        this.bgSky = loadImage("assets/bg-sky.png");
        this.bgCloud0 = loadImage("assets/brightred.png");
        //this.bgCloud1 = loadImage("assets/cloud0.png");
        //this.bgCloud2 = loadImage("assets/greenish.png");
    }

    draw() {
        clear();

        //background sky
        this.xSky -= background.skySpeed;
        image(this.bgSky, this.xSky, 0, WIDTH, HEIGHT);
        image(this.bgSky, this.xSky + width, 0, WIDTH, HEIGHT);

        if(this.xSky <= -width) {
            this.xSky = 0;
        }
        
        //background cloud0
        this.xCloud0 -= background.cloud0Speed;

        image(this.bgCloud0, this.xCloud0, this.yCloud0 - 0.3 * height, WIDTH, 0.7*HEIGHT); // width comes from p5
        image(this.bgCloud0, this.xCloud0 + width, this.yCloud0 - 0.3 * height, WIDTH, 0.7*HEIGHT);

        if (this.xCloud0 <= - width) {
            this.xCloud0 = 0;
        }
        /*
        //background cloud1
        this.xCloud1 -= background.cloud1Speed;

        image(this.bgCloud1, this.xCloud1, 0, WIDTH, HEIGHT); // width comes from p5
        image(this.bgCloud1, this.xCloud1 + width, 0, WIDTH, HEIGHT);

        if (this.xCloud0 <= -width) {
            this.xCloud0 = 0;
        }
        */
    }   
    }

