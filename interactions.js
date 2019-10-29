//new game
function newGame() {
    document.getElementsByTagName('button')[0].onclick = function() {
        console.log("reload");
        location.reload();
    };
};