function increaseDifficulty() {
  let xAxisObstacles = obstacles.speed.xAxis
  for (let xSpeed in xAxisObstacles){
    xAxisObstacles[xSpeed] *=  difficultyFactor;
  } 
  let xAxisBackground = background
  for (let xSpeed in xAxisBackground){
    xAxisBackground[xSpeed] *=  difficultyFactor;
  }
  let xAxisClouds = clouds.speed
  for (let xSpeed in xAxisClouds){
    xAxisClouds[xSpeed] *=  difficultyFactor;
  }
  
  let obstacleFrequencies = obstacles.frequency
  for (let frequency in obstacleFrequencies){
    obstacleFrequencies[frequency] /=  difficultyFactor;
  }
}

function slowTime() {
  isSlowTime = true;
  let xAxisObstacles = obstacles.speed.xAxis
  for (let xSpeed in xAxisObstacles){
    xAxisObstacles[xSpeed] *=  collectibles.factor.slowTimeFactor;
  }
  let yAxisObstacles = obstacles.speed.yAxis
  for (let ySpeed in yAxisObstacles){
    yAxisObstacles[ySpeed] *=  collectibles.factor.slowTimeFactor;
  }
  let xAxisBackground = background
  for (let xSpeed in xAxisBackground){
    xAxisBackground[xSpeed] *=  collectibles.factor.slowTimeFactor;
  }
  let xAxisClouds = clouds.speed
  for (let xSpeed in xAxisClouds){
    xAxisClouds[xSpeed] *=  collectibles.factor.slowTimeFactor;
  }

  const intervalId = setInterval(function() {
      for (let xSpeed in xAxisObstacles){
          xAxisObstacles[xSpeed] /=  collectibles.factor.slowTimeFactor;
      };
      for (let ySpeed in yAxisObstacles){
          yAxisObstacles[ySpeed] /=  collectibles.factor.slowTimeFactor;
      };
      let xAxisBackground = background
      for (let xSpeed in xAxisBackground){
        xAxisBackground[xSpeed] *=  collectibles.factor.slowTimeFactor;
      }
      let xAxisClouds = clouds.speed
      for (let xSpeed in xAxisClouds){
        xAxisClouds[xSpeed] *=  collectibles.factor.slowTimeFactor;
      }

      isSlowTime = false;
      clearInterval(intervalId);
  }, collectibles.duration.slowTimeDuration);
}

function timerDisplay(interval, input) {
  effect = input;
  displayText = interval / 1000;
  const intervalId = setInterval(function() {
      displayText -=  1;
      if (displayText == 0) {
          clearInterval(intervalId);
      }
      console.log(displayText);
  }, 1000);
}

function makePlayerSmall() {
  isPlayerSmall = true;

  let playerSize = player;
  for (let size in playerSize){
    playerSize[size] *=  collectibles.factor.makeSmallFactor;
  }
  
  const intervalId = setInterval(function() {
    for (let size in playerSize){
        playerSize[size] /=  collectibles.factor.slowTimeFactor;
    };
    isPlayerSmall = false;
    clearInterval(intervalId);
    }, collectibles.duration.makeSmallDuration);
}

function increasePlayerSpeed () {
  isPlayerSpeedIncreased = true;
  //add display function here
  let verticalFactor = 1.5;
  let mitigateSlownessFactor = 1;
  if (isPlayerSmall) {
    mitigateSlownessFactor = 0.7;
  }
  verticalSpeed *= collectibles.factor.speedBonusFactor * mitigateSlownessFactor * verticalFactor;
  horizontalSpeed *= collectibles.factor.speedBonusFactor * mitigateSlownessFactor;
  const intervalId = setInterval(function() {
    verticalSpeed /= collectibles.factor.speedBonusFactor * mitigateSlownessFactor* verticalFactor;
    horizontalSpeed *= collectibles.factor.speedBonusFactor * mitigateSlownessFactor;
    isPlayerSpeedIncreased = false;
    clearInterval(intervalId);
  }, collectibles.duration.speedBonusDuration);
}

function removeAllObstacles() {
  isObstaclesRemoved = true;
  const intervalId = setInterval(function() {
    verticalSpeed /= collectibles.factor.speedBonusFactor;
    horizontalSpeed *= collectibles.factor.speedBonusFactor;
    isObstaclesRemoved = false;
    clearInterval(intervalId);
  }, 1500);
  
  game.ufos = [];
  game.rockets = [];
  game.anvils = [];
}

function isTeckel() {
  isTeckelchen = true;
  const intervalId = setInterval(function() {
    isTeckelchen = false;
    clearInterval(intervalId);
  }, 1500);
}


function increaseObstacleSize() {
  isObstaclesSupersized = true;
  
  /* this version increases the size of all obstacles
  let obstacleWidth = obstacles.size.width;
  for (let width in obstacleWidth){
    console.log("downsizing");
    obstacleWidth[width] *=  collectibles.factor.supersizeObstaclesFactor;
  }
  let obstacleHeight = obstacles.size.height;
  for (let height in obstacleHeight){
    console.log("downsizing");
    obstacleHeight[height] *=  collectibles.factor.supersizeObstaclesFactor;
  }
  */
  obstacles.size.width.rocketWidth *= collectibles.factor.supersizeObstaclesFactor;
  obstacles.size.height.rocketHeight *= collectibles.factor.supersizeObstaclesFactor;
  const intervalId = setInterval(function() {
    
    /*for (let width in obstacleWidth){
        obstacleWidth[width] /=  collectibles.factor.supersizeObstaclesFactor;
    };
    for (let height in obstacleHeight){
        obstacleHeight[height] /=  collectibles.factor.supersizeObstaclesFactor;
    };*/
    obstacles.size.width.rocketWidth /= collectibles.factor.supersizeObstaclesFactor;
    obstacles.size.height.rocketHeight /= collectibles.factor.supersizeObstaclesFactor;
    isObstaclesSupersized = false;
    clearInterval(intervalId);
}, collectibles.duration.supersizeObstaclesDuration);

  
}