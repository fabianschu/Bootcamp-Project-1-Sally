class Cloud1 {

    constructor() {
        this.y = random(-200, height);
        this.x = width;
        this.img = loadImage("assets/cloud1s.png");
    }

    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud1Size, height * clouds.sizeFactor.cloud1Size);
        this.x -= clouds.speed.cloud1Speed;
    }
}

class Cloud2 {

    constructor() {
        this.y = random(-200, height);
        this.x = width;
        this.img = loadImage("assets/cloud2s.png");
    }

    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud2Size, height * clouds.sizeFactor.cloud2Size);
        this.x -= clouds.speed.cloud2Speed;
    }
}

class Cloud3 {
    constructor() {
        this.y = random(-200, height);
        this.x = width;
        this.img = loadImage("assets/cloud3s.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud3Size, height * clouds.sizeFactor.cloud3Size);
        this.x -= clouds.speed.cloud2Speed;
    }
}

class Cloud4 {
    constructor() {
        this.y = random(clouds.yBorder, height);
        this.x = width;
        this.img = loadImage("assets/cloud4s.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud4Size, height * clouds.sizeFactor.cloud4Size);
        this.x -= clouds.speed.cloud4Speed;
    }
}

class Cloud5 {
    constructor() {
        this.y = random(clouds.yBorder, height);
        this.x = width;
        this.img = loadImage("assets/cloud5m.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud5Size, height * clouds.sizeFactor.cloud5Size);
        this.x -= clouds.speed.cloud5Speed;
    }
}

class Cloud6 {
    constructor() {
        this.y = random(clouds.yBorder, height);
        this.x = width;
        this.img = loadImage("assets/cloud6m.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud6Size, height * clouds.sizeFactor.cloud6Size);
        this.x -= clouds.speed.cloud6Speed;
    }
}

class Cloud7 {
    constructor() {
        this.y = random(clouds.yBorder, height);
        this.x = width;
        this.img = loadImage("assets/cloud7m.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud7Size, height * clouds.sizeFactor.cloud7Size);
        this.x -= clouds.speed.cloud7Speed;
    }
}

class Cloud8 {
    constructor() {
        this.y = random(clouds.yBorder, height);
        this.x = width;
        this.img = loadImage("assets/cloud8m.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud8Size, height * clouds.sizeFactor.cloud8Size);
        this.x -= clouds.speed.cloud8Speed;
    }
}

class Cloud9 {
    constructor() {
        this.y = random(clouds.yBorder, height);
        this.x = width;
        this.img = loadImage("assets/cloud9l.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud9Size, height * clouds.sizeFactor.cloud9Size);
        this.x -= clouds.speed.cloud9Speed;
    }
}

class Cloud10 {
    constructor() {
        this.y = random(clouds.yBorder, height);
        this.x = width;
        this.img = loadImage("assets/cloud10l.png");
    }
    draw() {
        image(this.img, this.x, this.y + clouds.yBorder, width * clouds.sizeFactor.cloud10Size, height * clouds.sizeFactor.cloud10Size);
        this.x -= clouds.speed.cloud10Speed;
    }
}
