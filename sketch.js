function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax) => {
    // This is just a sin wave to demo, purpose of this is to allow the map to be modified dynamically in the future
    return Math.abs(j - (jMax-2)/2 * (-Math.sin(i*2*Math.PI/(iMax-1)) + 1)) < 1;
  }

  background(255, 204, 0);

  colors = [0xFF0000, 0x00FF00, 0x0000FF];

  tileGapSize = 8;
  tileCountHoriz = 100;
  tileCountVert = 60;
  var tileScale = ((windowHeight - 2*tileGapSize) / tileCountVert) - tileGapSize;
  
  for (var i=0; i<tileCountHoriz; i++) {
     for (var j=0; j<tileCountVert; j++) {

       x = tileScale * i + tileGapSize*(i+1) + ((windowWidth - tileCountHoriz * (tileScale + tileGapSize) - tileGapSize)/2);
       y = tileScale * j + tileGapSize*(j+1);

       if(tileExistsCriteriaFunction(i, j, tileCountHoriz, tileCountVert))
        square(x, y, tileScale);

    }
  }

}