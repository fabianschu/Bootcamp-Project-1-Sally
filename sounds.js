class Sounds {

    
    preload() {
        this.propeller = loadSound("assets/propeller.mp3");
        this.bgmusic = loadSound("assets/bgmusic.mp3");
        //this.explosion = loadSound("assets/")
        this.bing = loadSound("assets/bing.mp3");
        this.whining = loadSound("assets/whining.mp3");
    }
    
    setup() {
        this.propeller.setVolume(0.2);
        this.propeller.loop();

        this.bgmusic.setVolume(0.3);
        this.bgmusic.loop();

    }

    makeBing() {
        this.bing.play();
    }

    makeWhining() {
        this.whining.play();
    }

    killSounds() {
        this.propeller.pause();
        this.bgmusic.pause();
    }
}