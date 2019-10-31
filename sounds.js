class Sounds {

    preload() {
        this.propeller = loadSound("assets/propeller.mp3");
        this.bgmusic = loadSound("assets/bgmusic.mp3")
    }
    
    setup() {
        this.propeller.setVolume(0.2);
        this.propeller.loop();

        this.bgmusic.setVolume(0.8);
        this.bgmusic.loop();
    }

    killSounds() {
        this.propeller.pause();
        this.bgmusic.pause();
    }
}