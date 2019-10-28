class Game {
    constructor() {
        console.log("game constructor");
        // background
        this.background = new Background();
        // player
        this.player = new Player();
        //display
        this.display = new Display();
    }

    preload() {
        // console.log("game preload");
        this.background.preload();
        this.player.preload();
    }

    setup() {
        this.player.setup();
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.display.draw();
    }
}