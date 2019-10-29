let font;
let button;

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
let game = new Game();