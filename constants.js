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
            ufoWidth: 144,
            anvilWidth: 75
        },
        height: {
            rocketHeight: 150,
            ufoHeight: 90,
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
        rocketFrequency: 1000,
        ufoFrequency: 100,
        anvilFrequency: 100
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