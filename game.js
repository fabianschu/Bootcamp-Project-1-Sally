class Game {
    constructor() {
        console.log("game constructor");
        // background
        this.background = new Background();

        // player
        this.player = new Player();
        //display
        this.display = new Display();
        //rockets
        this.rockets = [];
        //ufos
        this.ufos = [];
        //slow motion collectible
        this.slowMotions = [];
        //speed booster collectible
        this.speedBoosters = [];
    }

    preload() {
        // console.log("game preload");
        this.background.preload();
        this.player.preload();
        this.display.preload();
        
    }

    setup() {
        this.player.setup();
    }

    draw() {
      
      this.background.draw();
      this.player.draw();
      this.display.scoreDraw();

      //rocket creation
      if (frameCount > 50 && frameCount % obstacles.frequency.rocketFrequency == 0) {
          //push new obstacle to array
          this.rockets.push(new Rocket());
      }

      this.rockets.forEach(
        (rocket, index) => {
          rocket.draw();
          
          if (rocket.x + rocket.width <= 0) {
            //   remove obstacle
            this.rockets.splice(index, 1);
          }
          
          if (this.isCollision(rocket, this.player)) {
            this.display.gameOverDraw();
            this.display.newGame();
            newGame();
            noLoop();
          }
        } //   .bind(this)
      );

      //ufo creation
      if (frameCount > 50 && frameCount % obstacles.frequency.ufoFrequency == 0) {
        //push new obstacle to array
        this.ufos.push(new Ufo());
      }

      this.ufos.forEach(
        (ufo, index) => {
          ufo.draw();
          
          if (ufo.x + ufo.width <= 0) {
            //   remove obstacle
            this.ufos.splice(index, 1);
          }
          
          if (this.isCollision(ufo, this.player)) {
            this.display.gameOverDraw();
            this.display.newGame();
            newGame();
            noLoop();
          }
        } //   .bind(this)
      );

      //collectible 1 creation || SLOW TIME
      if (frameCount > 50 && frameCount % collectibles.frequency.slowTimeFrequency == 0) {
        //push new obstacle to array
        this.slowMotions.push(new SlowMotion());
      }

      //make sure that collectible 1 is removed and effect kicks in, once collected
      this.slowMotions.forEach(
        (collectible, index) => {
          collectible.draw();
          if (this.isCollision(collectible, this.player)) {
            slowTime();
            this.slowMotions.splice(index, 1);
          }
        } //   .bind(this)
      );
      
      //display counter if bonus effect applies
      if (isSlowTime === true) {
        this.display.slowTimeCounter();
      }

      //collectible 2 || speed booster
      if (frameCount > 50 && frameCount % collectibles.frequency.speedBoosterFrequency == 0) {
        //push new obstacle to array
        this.speedBoosters.push(new SpeedBooster());
      }

      //make sure that collectible 2 is removed and effect kicks in, once collected
      this.speedBoosters.forEach(
        (speedBooster, index) => {
          speedBooster.draw();
          if (this.isCollision(speedBooster, this.player)) {
            increaseVelocity()
            console.log('VELOCIIIITY');
            this.speedBoosters.splice(index, 1);
          }
        } //   .bind(this)
      );
      
      //rising difficulty over time
      if (frameCount % difficultyTime === 0) {
        console.log('speed')
        fastTime(); 
      }
    }
    isCollision(rocket, player) {
      //x-axis collisions
      if (player.x + player.width < obstacles.buffer * rocket.x || rocket.x + rocket.width < obstacles.buffer * player.x) {
        return false;
      }
      //y-axis collisions
      if (obstacles.buffer * player.y > rocket.y + rocket.height || obstacles.buffer * rocket.y > player.y + player.height) {
        return false;
      }
      return true;
    }
  }
