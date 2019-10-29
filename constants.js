//canvas
const WIDTH = 900;
const HEIGHT = 540;

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
        rocketFrequency: 400,
        ufoFrequency: 400
    },
    buffer: 1.1
};

//background
let background = {
    skySpeed: 1,
    cloud0Speed: 2,
    cloud1Speed: 3
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
/*
//collectible stats
let collectibleFrequency = 400;
let collectibleSpeed = background.cloud1Speed;
const slowTimeInterval = 5000;
let bonusFactor = 0.5;
*/
//collectibles
let collectibles = {
    speed: {
        xAxis: {
            slowTimeX: 2,
            speedBoosterX: 2
        }
    },
    frequency: {
        slowTimeFrequency: 500,
        speedBoosterFrequency: 500
    },
    duration: {
        slowTimeDuration: 5000,  //ms
        speedBoosterDuration: 8000
    },
    factor: {
        slowTimeFactor: 0.5,
        speedBoosterFactor: 10
    }
};