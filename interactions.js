//new game
function newGame() {
    document.getElementsByTagName('button')[0].onclick = function() {
        console.log("reload");
        location.reload();
    };
};

function saveScore() {
    let score = parseInt(frameCount * 100, 10)
    //if no score available yet, push first score into scoreArray
    if (!localStorage.getItem("score")) {
        let scoreArray = [];
        scoreArray.push(score);
        localStorage.setItem("score", JSON.stringify(scoreArray));
    }
    else {
        //if score already available, get array from local storage, modify it and save it again in local storageg
        let previousScores = JSON.parse(localStorage.getItem("score"));
        console.log(previousScores);
        previousScores.push(score);
        console.log(previousScores);
        localStorage.setItem("score", JSON.stringify(previousScores));
    }
}

let lastScore;
localStorage.setItem("score", lastScore);

function displayPreviousScore() {
    //get array from storage
    let scoreArray = JSON.parse(localStorage.getItem("score"));

    //save latest score to highlight it
    let latestScore = scoreArray[scoreArray.length - 1];
    //let latestIndex;

    //sort array in descending order and only keep the ten highest values
    scoreArray.sort(function(a,b) {
        return b - a;
    });
    scoreArray = scoreArray.slice(0, 10);

    /*
    //check if topscores contain latest score and save index
    if (scoreArray.includes(latestScore)) {
        latestIndex = scoreArray.indexOf(scoreArray);
    }
    */

    //iterate over array and for each value create a list element
    
    scoreArray.forEach(element => {
        let scoresList = document.getElementById("scores-list");
        let listElement = document.createElement('li');
        listElement.innerHTML = element;
        scoresList.appendChild(listElement);
        if (element == latestScore) {
            console.log(element);
            console.log(latestScore);
            listElement.setAttribute('class', 'latest-score');
        }
    });

    console.log(scoreArray);
}