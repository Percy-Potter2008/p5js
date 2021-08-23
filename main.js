function preload() {
    img = loadImage('https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

}
function setup() {
  createCanvas(600, 600);
}

function draw() { 
  fill(150, 250, 200);
  rect(60, 75, 340, 345)
  fill(250, 80, 60);
  stroke(250, 70, 20);
  circle(60, 420, 30);
  circle(60, 75, 30);
  circle(400, 75, 30);
  circle(400, 420, 30);
  image(img,85, 100, 300, 300);

}
