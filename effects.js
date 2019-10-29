function slowTime() {
    const intervalId = setInterval(function() {
        if (placeholder.innerText == 0) {
            placeholder.setAttribute('style', 'display: none');
            document.querySelector(".b").appendChild(image);
            
            document.querySelector(".b").appendChild(soundWrap);
            soundWrap.appendChild(sound);
            
            clearInterval(intervalId);
        } 
        console.log("running");
    }, 1000);
}