var tileExistsCriteriaFunction;
var tileGapSize;
var tileCountHoriz;
var tileCountVert;

function draw_level() {

  tileScale = ((windowHeight - 2*tileGapSize) / tileCountVert) - tileGapSize;
  
  for (var i=0; i<tileCountHoriz; i++) {
    for (var j=0; j<tileCountVert; j++) {

      x = tileScale * i + tileGapSize*(i+1) + ((windowWidth - tileCountHoriz * (tileScale + tileGapSize) - tileGapSize)/2);
      y = tileScale * j + tileGapSize*(j+1);

      fill(color(colors[(i+j)%(colors.length)]));

      if(tileExistsCriteriaFunction(i, j, tileCountHoriz, tileCountVert, frameCount))
        square(x, y, tileScale);

    }
  }

}