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
            rocketWidth: 80,  
            ufoWidth: 112, //factor 1.6
            anvilWidth: 80
        },
        height: {
            rocketHeight: 187, //factor 2.3
            ufoHeight: 70,
            anvilHeight: 100 //factor 1.5
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
        rocketFrequency: 400,
        ufoFrequency: 300,
        anvilFrequency: 200
    },
    buffer: 1.1
};

//background
let background = {
    skySpeed: 0.5,
    bottomSpeed: 2
}

//player
let verticalSpeed = 6;
let horizontalSpeed = 4;

//buffer for obstacles
let obstacleBuffer = 1.7;

//rise difficulty
let difficultyTime = 200;
let difficultyFactor = 1.1;

let collectibles = {
    speed: {
        xAxis: {
            slowTimeX: 3,
            makeSmallX: 4,
            removeObstaclesX: 2,
            supersizeObstaclesX: 0,
            speedBonusX: 0
        },
        yAxis: {
            slowTimeY: 0,
            makeSmallY: 0,
            removeObstaclesY: 4,
            supersizeObstaclesY: 3,
            speedBonusY: 3
        }
    },
    frequency: {
        slowTimeFrequency: 0,//1300,
        makeSmallFrequency: secondsToFrames(10),
        removeObstaclesFrequency: secondsToFrames(7),
        supersizeObstaclesFrequency: secondsToFrames(7),
        speedBonusFrequency: secondsToFrames(11)
    },
    duration: {
        slowTimeDuration: 5000,
        makeSmallDuration: 7000,
        supersizeObstaclesDuration: 4000,
        speedBonusDuration: 8000
    },
    factor: {
        slowTimeFactor: 0.5,
        makeSmallFactor: 0.5,
        supersizeObstaclesFactor: 2,
        speedBonusFactor: 1.4
    }
}

//clouds
let clouds = {
    yBorder: -300,
    sizeFactor: {       //small clouds first
        cloud1Size: 0.1,
        cloud2Size: 0.2,
        cloud3Size: 0.3,
        cloud4Size: 0.4,
        cloud5Size: 0.5,
        cloud6Size: 0.6,
        cloud7Size: 0.7,
        cloud8Size: 0.8,
        cloud9Size: 0.9,
        cloud10Size: 1
    },
    speed: {            //fast clouds first
        cloud1Speed: 0.6,
        cloud2Speed: 0.7,
        cloud3Speed: 0.8,
        cloud4Speed: 0.9,
        cloud5Speed: 1,
        cloud6Speed: 1.1,
        cloud7Speed: 1.2,
        cloud8Speed: 1.3,
        cloud9Speed: 1.4,
        cloud10Speed: 1.5
    },
    frequency: {
        cloud1Frequency: randomIntBetween(700, 1000),
        cloud2Frequency: randomIntBetween(500, 1200),
        cloud3Frequency: randomIntBetween(300, 1900),
        cloud4Frequency: randomIntBetween(700, 2000),
        cloud5Frequency: randomIntBetween(400, 1800),
        cloud6Frequency: randomIntBetween(500, 1600),
        cloud7Frequency: randomIntBetween(900, 2100),
        cloud8Frequency: randomIntBetween(600, 3000),
        cloud9Frequency: randomIntBetween(700, 2400),
        cloud10Frequency: randomIntBetween(900, 2300)
    }
}