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

    
    /*let score = frameCount/6 * 10
    console.log(scoreArray);
    console.log(scoreArray.length);

    if (scoreArray.length != 0) {
        let container = JSON.parse(localStorage.getItem("score"));
        console.log(container);
        container.push(score);
        localStorage.setItem("score", JSON.stringify(container));
        return "storage success"
    }

    scoreArray.push(score);
    console.log(scoreArray);
    localStorage.setItem("score", JSON.stringify(scoreArray));
    */
}