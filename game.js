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
        //slowtime
        this.slowMotions = [];
        //makesmall
        this.makeSmalls = [];
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
      
      //rising difficulty over time
      if (frameCount % difficultyTime === 0) {
        console.log('speed')
        fastTime(); 
      }

      //slowTime creation
      if (frameCount > 50 && frameCount % collectibles.frequency.slowTimeFrequency == 0) {
        //push new collectible to array
        this.slowMotions.push(new slowMotion());
      }

      //make sure that collectible is removed, and effect kicks in once collected
      this.slowMotions.forEach(
        (slowMotion, index) => {
          slowMotion.draw();
          if (this.isCollision(slowMotion, this.player)) {
            slowTime();
            this.slowMotions.splice(index, 1);
          }
        } //   .bind(this)
      );
      
      //display counter if bonus effect applies
      if (isSlowTime === true) {
        this.display.slowTimeCounter();
      }

      //makeSmall creation
      if (frameCount > 50 && frameCount % collectibles.frequency.slowTimeFrequency == 0) {
        //push new collectible to array
        this.makeSmalls.push(new makeSmall());
      }

      //make sure that collectible is removed, and effect kicks in once collected
      this.makeSmalls.forEach(
        (makeSmall, index) => {
          makeSmall.draw();
          if (this.isCollision(makeSmall, this.player)) {
            makePlayerSmall();
            this.makeSmalls.splice(index, 1);
          }
        } //   .bind(this)
      );
      
      //isplay counter if bonus effect applies
      if (isPlayerSmall === true) {
        this.display.slowTimeCounter();
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
