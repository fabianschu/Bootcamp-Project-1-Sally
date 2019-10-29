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
    timerDisplay(slowTimeInterval);
    let xAxisObstacles = obstacles.speed.xAxis
    for (let xSpeed in xAxisObstacles){
      xAxisObstacles[xSpeed] *=  bonusFactor;
    }

    let yAxisObstacles = obstacles.speed.yAxis
    for (let ySpeed in yAxisObstacles){
      yAxisObstacles[ySpeed] *=  bonusFactor;
    }

    const intervalId = setInterval(function() {
        for (let xSpeed in xAxisObstacles){
            xAxisObstacles[xSpeed] /=  bonusFactor;
        };
        for (let ySpeed in yAxisObstacles){
            yAxisObstacles[ySpeed] /=  bonusFactor;
        };
        isSlowTime = false;
        clearInterval(intervalId);
    }, slowTimeInterval);
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

