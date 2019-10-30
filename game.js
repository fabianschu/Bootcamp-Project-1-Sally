class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        //display elements
        this.display = new Display();
        
        //obstacles
        this.rockets = [];
        this.ufos = [];
        this.anvils = [];
        
        //collectibles w positive effects
        this.slowMotions = [];
        this.makeSmalls = [];
        this.removeObstacles = [];

        //collectibles w negative effects
        this.supersizeObstacles = [];

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

      /* ---------------------------------- Obstacles ---------------------------------- */

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
            saveScore();
            startNewGame();
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
            saveScore();
            startNewGame();
            noLoop();
          }
        } //   .bind(this)
      );

      //anvil creation
      if (frameCount > 50 && frameCount % obstacles.frequency.anvilFrequency == 0) {
        //push new obstacle to array
        this.anvils.push(new Anvil());
      }

      this.anvils.forEach((anvil, index) => {
        anvil.draw(); 
        if (anvil.x + anvil.width <= 0) {
          //   remove obstacle
          this.anvils.splice(index, 1);
        }
        
        if (this.isCollision(anvil, this.player)) {
          this.display.gameOverDraw();
          this.display.newGame();
          saveScore();
          startNewGame();
          noLoop();
        }
        });

      /* ---------------------------------- Collectibles ---------------------------------- */

      //slowTime creation
      
      if (frameCount > 50 && frameCount % collectibles.frequency.slowTimeFrequency == 0) {
        this.slowMotions.push(new SlowMotion());
      }

      this.slowMotions.forEach(
        (slowMotion, index) => {
          
          slowMotion.draw();
          
          if (this.isCollision(slowMotion, this.player)) {
            slowTime(); //do something fancy (effects)
            this.slowMotions.splice(index, 1);
          }
        } 
      );
      
      if (isSlowTime === true) {
        this.display.effectCounter();
      }

      //makeSmall creation
      if (frameCount > 50 && frameCount % collectibles.frequency.slowTimeFrequency == 0) {
        this.makeSmalls.push(new MakeSmall());
      }

      this.makeSmalls.forEach(
        (makeSmall, index) => {
          makeSmall.draw();
          if (this.isCollision(makeSmall, this.player)) {
            makePlayerSmall();
            this.makeSmalls.splice(index, 1);
          }
        } 
      );
      
      if (isPlayerSmall === true) {
        this.display.effectCounter();
      }

      //removeObstacles creation
      if (frameCount > 50 && frameCount % collectibles.frequency.removeObstaclesFrequency == 0) {
        this.removeObstacles.push(new RemoveObstacles());
      }

      this.removeObstacles.forEach(
        (removeObstacle, index) => {
          removeObstacle.draw();
          if (this.isCollision(removeObstacle, this.player)) {
            //emoveAllObstacles();
            this.removeObstacles.splice(index, 1);
          }
        }
      );

      //supersizeObstacles creation
      if (frameCount > 50 && frameCount % collectibles.frequency.supersizeObstaclesFrequency == 0) {
        this.supersizeObstacles.push(new SupersizeObstacles());
      }

      this.supersizeObstacles.forEach(
        (supersizeObstacle, index) => {
          supersizeObstacle.draw();
          if (this.isCollision(supersizeObstacle, this.player)) {
            increaseObstacleSize();
            this.supersizeObstacles.splice(index, 1);
          }
        }
      );
      
      /* ---------------------------------- Increase Difficulty ---------------------------------- */
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
