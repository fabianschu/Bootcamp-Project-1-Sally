function fastTime() {
  let xAxisObstacles = obstacles.speed.xAxis
  for (let xSpeed in xAxisObstacles){
    xAxisObstacles[xSpeed] *=  difficultyFactor;
  } 
  let xAxisBackground = background
  for (let xSpeed in xAxisBackground){
    xAxisBackground[xSpeed] *=  difficultyFactor;
  }
}

function slowTime() {
  isSlowTime = true;
  timerDisplay(collectibles.duration.slowTimeDuration, 'Slow Motion');
  let xAxisObstacles = obstacles.speed.xAxis
  for (let xSpeed in xAxisObstacles){
    xAxisObstacles[xSpeed] *=  collectibles.factor.slowTimeFactor;
  }

  let yAxisObstacles = obstacles.speed.yAxis
  for (let ySpeed in yAxisObstacles){
    yAxisObstacles[ySpeed] *=  collectibles.factor.slowTimeFactor;
  }

  const intervalId = setInterval(function() {
      for (let xSpeed in xAxisObstacles){
          xAxisObstacles[xSpeed] /=  collectibles.factor.slowTimeFactor;
      };
      for (let ySpeed in yAxisObstacles){
          yAxisObstacles[ySpeed] /=  collectibles.factor.slowTimeFactor;
      };
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

  timerDisplay(collectibles.duration.makeSmallDuration, 'Tinify');
  
  let playerSize = player;
  for (let size in playerSize){
    console.log("downsizing");
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

function removeAllObstacles() {
  game.ufos = [];
  game.rockets = [];
}

function increaseObstacleSize() {
  isObstaclesSupersized = true;

  //display stuff
  
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

  const intervalId = setInterval(function() {
    for (let width in obstacleWidth){
        obstacleWidth[width] /=  collectibles.factor.supersizeObstaclesFactor;
    };
    for (let height in obstacleHeight){
        obstacleHeight[height] /=  collectibles.factor.supersizeObstaclesFactor;
    };
    isSlowTime = false;
    clearInterval(intervalId);
}, collectibles.duration.slowTimeDuration);

  
}