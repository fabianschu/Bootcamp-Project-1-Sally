//var mode;
let font;
let button;
let isSlowTime;
let isPlayerSmall;
let displayText;
let effect;
let isObstaclesSupersized;
let isPlayerSpeedIncreased;
let isObstaclesRemoved;
let isTeckelchen;


function preload() {
    console.log("preload");
    game.preload();//
}

function setup() {
    //mode = 0;           //here
    console.log("setup");
    var canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas-div');
    game.setup();
} 

function draw() {
    game.draw();
}

let game = new Game();
displayPreviousScore()