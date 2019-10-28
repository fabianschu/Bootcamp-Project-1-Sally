class Background {
    constructor() {
        this.xClouds = 0;
        this.xSky = 0;
    }

    preload() {
        this.bgSky = loadImage("assets/bg-sky.png");
        this.bgClouds = loadImage("assets/cloud1.png");
    }

    draw() {
        clear();

        //background sky
        this.xSky -= 1;
        image(this.bgSky, this.xSky, 0, WIDTH, HEIGHT);
        image(this.bgSky, this.xSky + width, 0, WIDTH, HEIGHT);

        if(this.xSky <= -width) {
            this.xSky = 0;
        }

        //background clouds
        this.xClouds -= 2;

        image(this.bgClouds, this.xClouds, 0, WIDTH, HEIGHT); // width comes from p5
        image(this.bgClouds, this.xClouds + width, 0, WIDTH, HEIGHT);

        if (this.xClouds <= -width) {
        this.xClouds = 0;
        }
    }
}
