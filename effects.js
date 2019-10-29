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

//TODO
function increaseVelocity() {
    isSpeedBoost = true;
    timerDisplay(collectibles.duration.speedBoosterDuration);

    let xAxisSpeedBooster = obstacles.speed.xAxis
    for (let xSpeed in xAxisSpeedBooster){
        xAxisSpeedBooster[xSpeed] *=  collectibles.factor.speedBoosterFactor;
    }

    const intervalId = setInterval(function() {
        for (let xSpeed in xAxisSpeedBooster){
            xAxisSpeedBooster[xSpeed] /=  collectibles.factor.speedBoosterFactor;
        };
        isSpeedBoost = false;
        clearInterval(intervalId);
    }, collectibles.duration.speedBoosterDuration);

}
