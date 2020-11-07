function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255, 204, 0);

  colors = [0xFF0000, 0x00FF00, 0x0000FF];

  tileGapSize = 8;
  tileCountHoriz = 10;
  tileCountVert = 10;
  var tileScale = ((windowHeight - 2*tileGapSize) / tileCountVert) - tileGapSize;
  
  for (var i=0; i<tileCountHoriz; i++) {
     for (var j=0; j<tileCountVert; j++) {

       x = tileScale * i + tileGapSize*(i+1) + ((windowWidth - tileCountHoriz * (tileScale + tileGapSize) - tileGapSize)/2);
       y = tileScale * j + tileGapSize*(j+1);

       square(x, y, tileScale);

    }
  }

}