//canvas
const WIDTH = 900;
const HEIGHT = 540;

let player = {
    height: 100,
    width: 130
}

//obstacles
let obstacles = {
    speed: {
        xAxis: {
            rocketX: 3,
            ufoX: 4
        },
        yAxis: {
            rocketY: 3
        }
    },
    frequency: {
        rocketFrequency: 600,
        ufoFrequency: 200
    },
    buffer: 1.1
};

//background
let background = {
    skySpeed: 1,
    cloud1Speed: 2
}


/*rocket stats
let rocketY = 3;
let rocketX = 3;
let rocketFrequency = 120; //smaller --> more rockets

//Ufo stats
let ufoX = 4;
let ufoFrequency = 400;
*/

//player
let verticalSpeed = 6;
let horizontalSpeed = 4;

//buffer for obstacles
let obstacleBuffer = 1.1;

//rise difficulty
let difficultyTime = 200;
let difficultyFactor = 1.1;

let collectibles = {
    speed: {
        xAxis: {
            slowTimeX: 2,
            makeSmallX: 2,
        },
        yAxis: {
            slowTimeY: 0,
            makeSmallY: 0
        }
    },
    frequency: {
        slowTimeFrequency: 400,
        makeSmallFrequency: 400
    },
    duration: {
        slowTimeDuration: 5000,
        makeSmallDuration: 5000
    },
    factor: {
        slowTimeFactor: 0.5,
        makeSmallFactor: 0.5
    }
}