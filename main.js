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
    console.log("setup");
    createCanvas(WIDTH, HEIGHT);
    game.setup();
} 

function draw() {
    game.draw();
}

let game = new Game();