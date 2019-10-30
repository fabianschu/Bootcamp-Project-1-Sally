var mode;
let font;
let button;
let isSlowTime;
let isPlayerSmall;
let displayText;
let effect;
let isObstaclesSupersized;


function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    //mode = 0;
    console.log("setup");
    var canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas-div');
    game.setup();
} 

function draw() {
    //if (move == 0) {
    game.draw();
    //}
}

let game = new Game();
displayPreviousScore()