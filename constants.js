//canvas
const WIDTH = 1400;//900;
const HEIGHT = 700;//540;

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
        rocketFrequency: 120,
        ufoFrequency: 400
    },
    buffer: 1.1
};

let background = {
    skySpeed: 1,
    cloud1Speed: 2
}

//moving background
let skySpeed = 1;
let cloud1Speed = 2;

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

//collectible stats
let collectibleFrequency = 400;
let collectibleSpeed = cloud1Speed;

