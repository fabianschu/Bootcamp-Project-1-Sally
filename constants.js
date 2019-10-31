//canvas
const WIDTH = 900;
const HEIGHT = 640;

let player = {
    height: 100,
    width: 130
}

//obstacles
let obstacles = {
    size: {
        width: {
            rocketWidth: 75,
            ufoWidth: 160,
            anvilWidth: 75
        },
        height: {
            rocketHeight: 150,
            ufoHeight: 100,
            anvilHeight: 150
        }
    },
    speed: {
        xAxis: {
            rocketX: 3,
            ufoX: 4,
            anvilX: 3
        },
        yAxis: {
            rocketY: 3,
            anvilY: 3
        }
    },
    frequency: {
        rocketFrequency: 100,
        ufoFrequency: 100,
        anvilFrequency: 100
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
let obstacleBuffer = 1.5;

//rise difficulty
let difficultyTime = 200;
let difficultyFactor = 1.1;

let collectibles = {
    speed: {
        xAxis: {
            slowTimeX: 2,
            makeSmallX: 2,
            removeObstaclesX: 2,
            supersizeObstaclesX: 0
        },
        yAxis: {
            slowTimeY: 0,
            makeSmallY: 0,
            removeObstaclesY: 3,
            supersizeObstaclesY: 3
        }
    },
    frequency: {
        slowTimeFrequency: 300,
        makeSmallFrequency: 400,
        removeObstaclesFrequency: 300,
        supersizeObstaclesFrequency: 300
    },
    duration: {
        slowTimeDuration: 5000,
        makeSmallDuration: 5000,
        supersizeObstaclesDuration: 9000
    },
    factor: {
        slowTimeFactor: 0.5,
        makeSmallFactor: 0.5,
        supersizeObstaclesFactor: 1.5
    }
}