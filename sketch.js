var img;
var img2;
var img3;
var mirror;

var m = 0;

function setup() {
  createCanvas(1000, 500);
  // specify multiple formats for different browsers
  mirror = createCapture(VIDEO);
  mirror.size(0, 0);
  //fingers.hide();
  img2 = createImage(300, 200);
  img3 = createImage(1000, 50);
  img = createImage(640, 480);
  img2.loadPixels();
  img3.loadPixels();
     img.loadPixels();

}

function draw() {
  background(255);
textSize(32);
text('if', 10, 30);
fill(0, 102, 153);
text('you', 20, 60);
fill(0, 102, 153, 51);
text('are', 30, 90);
text('reading', 40, 120);
fill(0, 102, 153);
text('this', 50, 150);
fill(0, 102, 153, 51);
text('it', 80, 180);
    text('is', 100, 210);
fill(0, 102, 153);
text('way', 20, 240);
fill(0, 102, 153, 51);
text('too', 60, 270);
    text('late', 10, 300);
fill(0, 102, 153);

  mirror.loadPixels();
  // var stepSize = round(constrain(mouseX / 8, 6, 32));
 for (var i = 0; i < mirror.pixels.length; i += 4) {
// for (var i = 0; i < 4 * (mirror.width * mirror.height); i += 4) {
    // for (var x=0; x<mirror.width; x++) {
    // var i = (y * mirror.width + x);
    var r = mirror.pixels[i];
    var g = mirror.pixels[i + 6];
    var b = mirror.pixels[i + 2];
    var a = mirror.pixels[i + 8];

    img.pixels[i] = r;
    img.pixels[i + 1] = g;
    img.pixels[i + 2] = b;
    img.pixels[i + 3] = a;
     
    img2.pixels[i] = r;
    img2.pixels[i + 2] = g;
    img2.pixels[i + 3] = b;
    img2.pixels[i + 3] = a;
     
    img3.pixels[i] = r;
    img3.pixels[i + 1] = g;
    img3.pixels[i + 2] = b;
    img3.pixels[i + 3] = a;
  }
  img.updatePixels();
  img2.updatePixels();
  img3.updatePixels();
    
  push();
  translate(img.width, 0);
  scale(-.7, 2);
  image(img, 0, 0);
  image(img2, 0, 10);
  image(img3, 0, 5);
  pop();

}


function keyTyped() {
  if (key == 'a') {
    m -= 5;
     console.log("decrease")
  }

  if (key == 'f') {
    m += 5;
    console.log("increase");
  }


}