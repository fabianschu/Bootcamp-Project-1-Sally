let font;

function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    console.log("setup");
    createCanvas(WIDTH, HEIGHT);
    game.setup();
} 

function draw() {
    console.log("draw");
    game.draw();
}

/*function keyPressed() {
    if (keyIsDown(38)) {
        console.log("pressi");
        game.player.moveUp();
    }

    if (keyIsDown(40)) {
        //move down
    }
}
*/
const game = new Game();