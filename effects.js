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
  timerDisplay(collectibles.duration.slowTimeDuration);
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

function timerDisplay(interval) {
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

  timerDisplay(collectibles.duration.makeSmallDuration);
  
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
