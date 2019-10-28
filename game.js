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
      this.display.draw();

      if (frameCount > 50 && frameCount % 120 == 0) {
          console.log("create new obstacle");
          //push new obstacle to array
          this.rockets.push(new Rocket());
      }

      this.rockets.forEach(
        (rocket) => {
          rocket.draw();
          /*
          if (rocket.x + rocket.width <= 0) {
            //   remove obstacle
            this.rocket.splice(index, 1);
          }
          */
          if (this.isCollision(rocket, this.player)) {
            console.log("GAME OVER");
            noLoop();
          }
        } //   .bind(this)
      );
    }

    isCollision(rocket, player) {
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