let mover = [];
 
function setup() {
  createCanvas(640,360);
  for (let i = 0; i < 6; i++) {
    mover[i] = new Mover(random(width), random(height), random(0.5, 3));
  }
}
 
function draw() {
  background(0);
    for (let i = 0; i < 6; i++) {
    mover[i].update();
    mover[i].checkEdges();
    mover[i].display();
    }
}
 
class Mover {
 
  constructor() {
    this.location = new createVector(random(width),random(height));
    this.velocity = new createVector(random(-2,0),random(2,4));
    this.acceleration = new createVector(-0.001,0.05);
    this.topspeed = 10;
  }
 
  update() {
    this.location.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
  }
 
  display() {
    stroke(255);
    fill(255);
    rect(this.location.x,this.location.y,1,50);
  }
 
  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }
 
    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}
