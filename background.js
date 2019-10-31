class Background {
    constructor() {
        this.xBottom = 0;
        this.yBottom = HEIGHT;
        this.xSky = 0;
        this.xPlanet = 0.4*WIDTH;
        this.yPlanet = -0.2 * HEIGHT;
    }

    preload() {
        this.bgSky = loadImage("assets/bg-sky.png");
        this.bgBottom = loadImage("assets/bottom.png");
        this.bgPlanet = loadImage("assets/planet3.png");
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

        //background planet
        image(this.bgPlanet, this.xPlanet, this.yPlanet, 500, 500);

        //background clouds
        this.xBottom -= background.bottomSpeed;

        image(this.bgBottom, this.xBottom, this.yBottom - 0.5*height, WIDTH, HEIGHT); // width comes from p5
        image(this.bgBottom, this.xBottom + width, this.yBottom - 0.5*height, WIDTH, HEIGHT);

        if (this.xBottom <= -width) {
            this.xBottom = 0;
        }
    }
}
