class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.sounds = new Sounds();
        
        //display elements
        this.display = new Display();
        
        //obstacles
        this.rockets = [];
        this.ufos = [];
        this.anvils = [];

        //clouds
        this.clouds1 = [];
        this.clouds2 = [];
        this.clouds3 = [];
        this.clouds4 = [];
        this.clouds5 = [];
        this.clouds6 = [];
        this.clouds7 = [];
        this.clouds8 = [];
        this.clouds9 = [];
        this.clouds10 = [];
        
        //collectibles w positive effects
        this.slowMotions = [];
        this.makeSmalls = [];
        this.removeObstacles = [];
        this.playerSpeedUps = [];

        //collectibles w negative effects
        this.supersizeObstacles = [];

    }

    preload() {
        // console.log("game preload");
        this.background.preload();
        this.player.preload();
        this.sounds.preload(); //new
        this.display.preload();
    }

    setup() {
        this.player.setup();
        this.sounds.setup(); //new
    }

    draw() {
      this.background.draw();
      //this.player.draw();
      this.display.scoreDraw();

      /* ---------------------------------- Clouds ---------------------------------- */
      
      //cloud1
      if (frameCount % clouds.frequency.cloud1Frequency == 0) {
        this.clouds1.push(new Cloud1());
      }
      this.clouds1.forEach(
        (cloud1, index) => {
          cloud1.draw();
          if (cloud1.x + cloud1.width <= 0) {
            this.clouds1.splice(index, 1);
          } 
        }
      );
      //cloud2
      if (frameCount == 100 || frameCount % clouds.frequency.cloud2Frequency == 0) {
        this.clouds2.push(new Cloud2());
      }
      this.clouds2.forEach(
        (cloud2, index) => {
          cloud2.draw();
          if (cloud2.x + cloud2.width <= 0) {
            this.clouds2.splice(index, 1);
          } 
        }
      );
      //cloud3
      if (frameCount % clouds.frequency.cloud3Frequency == 0) {
        this.clouds3.push(new Cloud3());
      }
      this.clouds3.forEach(
        (cloud3, index) => {
          cloud3.draw();
          if (cloud3.x + cloud3.width <= 0) {
            this.clouds3.splice(index, 1);
          } 
        }
      );
      //cloud4
      if (frameCount == 300 || frameCount % clouds.frequency.cloud4Frequency == 0) {
        this.clouds4.push(new Cloud4());
      }
      this.clouds4.forEach(
        (cloud4, index) => {
          cloud4.draw();
          if (cloud4.x + cloud4.width <= 0) {
            this.clouds4.splice(index, 1);
          } 
        }
      );
      //cloud5
      if (frameCount % clouds.frequency.cloud5Frequency == 0) {
        this.clouds5.push(new Cloud5());
      }
      this.clouds5.forEach(
        (cloud5, index) => {
          cloud5.draw();
          if (cloud5.x + cloud5.width <= 0) {
            this.clouds5.splice(index, 1);
          } 
        }
      );
      //cloud6
      if (frameCount == 500 || frameCount % clouds.frequency.cloud6Frequency == 0) {
        this.clouds6.push(new Cloud6());
      }
      this.clouds6.forEach(
        (cloud6, index) => {
          cloud6.draw();
          if (cloud6.x + cloud6.width <= 0) {
            this.clouds6.splice(index, 1);
          } 
        }
      );
      //cloud7
      if (frameCount % clouds.frequency.cloud7Frequency == 0) {
        this.clouds7.push(new Cloud7());
      }
      this.clouds7.forEach(
        (cloud7, index) => {
          cloud7.draw();
          if (cloud7.x + cloud7.width <= 0) {
            this.clouds7.splice(index, 1);
          } 
        }
      );
      //cloud8
      if (frameCount == 50 || frameCount % clouds.frequency.cloud8Frequency == 0) {
        this.clouds8.push(new Cloud8());
      }
      this.clouds8.forEach(
        (cloud8, index) => {
          cloud8.draw();
          if (cloud8.x + cloud8.width <= 0) {
            this.clouds8.splice(index, 1);
          } 
        }
      );
      //cloud9
      if (frameCount % clouds.frequency.cloud9Frequency == 0) {
        this.clouds9.push(new Cloud9());
      }
      this.clouds9.forEach(
        (cloud9, index) => {
          cloud9.draw();
          if (cloud9.x + cloud9.width <= 0) {
            this.clouds9.splice(index, 1);
          } 
        }
      );
      //cloud10
      if (frameCount == 0 || frameCount % clouds.frequency.cloud10Frequency == 0) {
        console.log("cloud10");
        this.clouds10.push(new Cloud10());
      }
      this.clouds10.forEach(
        (cloud10, index) => {
          cloud10.draw();
          if (cloud10.x + cloud10.width <= 0) {
            this.clouds10.splice(index, 1);
          } 
        }
      );

      this.player.draw();
      /* ---------------------------------- Obstacles ---------------------------------- */

      //rocket creation
      if (frameCount > 50 && frameCount % Math.round(obstacles.frequency.rocketFrequency) == 0) {
          //push new obstacle to array
          this.rockets.push(new Rocket());
      }

      this.rockets.forEach(
        (rocket, index) => {
          rocket.draw();
          
          
          if (rocket.x + rocket.width <= 0) {
            this.rockets.splice(index, 1);
          }
          
          
          if (this.isCollision(rocket, this.player)) {
            this.sounds.makeWhining();
            this.display.gameOverDraw();
            this.display.newGame();
            this.sounds.killSounds();
            saveScore();
            startNewGame();
            noLoop();
          }
        } //   .bind(this)
      );

      //ufo creation
      if (frameCount > 50 && frameCount % Math.round(obstacles.frequency.ufoFrequency) == 0) {
        //push new obstacle to array
        this.ufos.push(new Ufo());
      }

      this.ufos.forEach(
        (ufo, index) => {
          ufo.draw();
          
          if (ufo.x + ufo.width <= 0) {
            this.ufos.splice(index, 1);
          }
          
          if (this.isCollision(ufo, this.player)) {
            this.sounds.makeWhining();
            this.display.gameOverDraw();
            this.display.newGame();
            this.sounds.killSounds();
            saveScore();
            startNewGame();
            noLoop();
          }
        } //   .bind(this)
      );

      //anvil creation
      if (frameCount > 50 && frameCount % Math.round(obstacles.frequency.anvilFrequency) == 0) {
        //push new obstacle to array
        this.anvils.push(new Anvil());
      }

      this.anvils.forEach((anvil, index) => {
        anvil.draw(); 
        if (anvil.x + anvil.width <= 0) {
          this.anvils.splice(index, 1);
        }
        
        if (this.isCollision(anvil, this.player)) {
          this.sounds.makeWhining();
          this.display.gameOverDraw();
          this.display.newGame();
          this.sounds.killSounds();
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
          
          if (this.isStrictCollision(slowMotion, this.player)) {
            this.sounds.makeBing();
            slowTime(); //do something fancy (effects)
            this.slowMotions.splice(index, 1);
          }
        } 
      );
      
      if (isSlowTime === true) {
        this.display.effectCounter();
      }

      //makeSmall creation
      if (frameCount > 50 && frameCount % collectibles.frequency.makeSmallFrequency == 0) {
        this.makeSmalls.push(new MakeSmall());
      }

      this.makeSmalls.forEach(
        (makeSmall, index) => {
          makeSmall.draw();
          if (this.isStrictCollision(makeSmall, this.player)) {
            this.sounds.makeBing();
            makePlayerSmall();
            this.makeSmalls.splice(index, 1);
          }
        } 
      );
      
      if (isPlayerSmall === true) {
        this.display.smaller();
        //this.display.effectCounter();
      }

      //playerSpeedUp creation
      if (frameCount > 50 && frameCount % collectibles.frequency.speedBonusFrequency == 0) {
        this.playerSpeedUps.push(new SpeedUp());
      }

      this.playerSpeedUps.forEach(
        (playerSpeedUp, index) => {
          playerSpeedUp.draw();
          if (this.isStrictCollision(playerSpeedUp, this.player)) {
            this.sounds.makeBing();
            increasePlayerSpeed();
            this.playerSpeedUps.splice(index, 1);
          }
        } 
      );
      
      if (isPlayerSpeedIncreased === true) {
       this.display.faster();
      }

      //removeObstacles creation
      if (frameCount > 50 && (frameCount + 350) % collectibles.frequency.removeObstaclesFrequency == 0) {
        console.log("puff");
        this.removeObstacles.push(new RemoveObstacles());
      }

      this.removeObstacles.forEach(
        (removeObstacle, index) => {
          removeObstacle.draw();
          if (this.isStrictCollision(removeObstacle, this.player)) {
            this.sounds.makeBing();
            removeAllObstacles();
            this.removeObstacles.splice(index, 1);
          }
        }
      );
      
      if (isObstaclesRemoved === true) {
        this.display.puff();
      }
      
      //supersizeObstacles creation 
      
      if (frameCount > 50 && frameCount % collectibles.frequency.supersizeObstaclesFrequency == 0) {
        this.supersizeObstacles.push(new SupersizeObstacles());
      }

      this.supersizeObstacles.forEach(
        (supersizeObstacle, index) => {
          supersizeObstacle.draw();
          if (this.isStrictCollision(supersizeObstacle, this.player)) {
            this.sounds.makeBing();
            increaseObstacleSize();
            this.supersizeObstacles.splice(index, 1);
          }
        }
      );

      if (isObstaclesSupersized === true) {
        this.display.supersized();
       }

      
      
      /* ---------------------------------- Increase Difficulty ---------------------------------- */
      if (frameCount % difficultyTime === 0) {
        console.log('speed')
        increaseDifficulty(); 
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

    isStrictCollision(rocket, player) {
      //x-axis collisions
      if (player.x + player.width < rocket.x || rocket.x + rocket.width < player.x) {
        return false;
      }
      //y-axis collisions
      if (player.y > rocket.y + rocket.height || rocket.y > player.y + player.height) {
        return false;
      }
      return true;
    }

  }
