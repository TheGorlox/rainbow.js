fps = 2**5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    // This is just a sin wave to demo, purpose of this is to allow the map to be modified dynamically in the future
    return Math.abs(j - (jMax-2)/2 * (-Math.sin(i*2*Math.PI/(iMax-1) + 2*Math.PI*(phase%100)/100) + 1)) < 3;
  }

  background(255*Math.sin(frameCount/fps), 255*Math.sin(frameCount/fps + 64), 255*Math.sin(frameCount/fps + 128));

  colors = [0xFF0000, 0x00FF00, 0x0000FF];

  tileGapSize = 8;
  tileCountHoriz = 122;
  tileCountVert = 60;
  var tileScale = ((windowHeight - 2*tileGapSize) / tileCountVert) - tileGapSize;
  
  for (var i=0; i<tileCountHoriz; i++) {
     for (var j=0; j<tileCountVert; j++) {

       x = tileScale * i + tileGapSize*(i+1) + ((windowWidth - tileCountHoriz * (tileScale + tileGapSize) - tileGapSize)/2);
       y = tileScale * j + tileGapSize*(j+1);

       if(tileExistsCriteriaFunction(i, j, tileCountHoriz, tileCountVert, frameCount))
        square(x, y, tileScale);

    }
  }

}