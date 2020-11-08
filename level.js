var tileExistsCriteriaFunction;
var tileGapSize;
var tileCountHoriz;
var tileCountVert;
// define colors
var black = [0,0,0];
var b = [0,255,0];
var teal = [0,128,128];
var orange = [255,165,0];
var white = [255,255,255];
var r = [255,0,0];
var g = [0,255,0];
var brown = [165,42,42];
var yellow = [255,2550,0];
var purple = [128,0,128];
var grey = [100,100,100];
var colors = [black, white, g,grey,orange,yellow,purple,teal,r,b];
var cols, rows;
var scl = 40;
function draw_level() {

  cols = floor(width/scl)
  rows = floor(height/scl)
  
  background(255);
  var yoff=0;
  for(let y=0;y<rows;y++){
    var xoff=0;
    for(var x=0;x<cols;x++){
      // var index = (x+y *width)*4;
      var r = Math.floor(noise(xoff, yoff) *9);
    
      xoff+=.1;
      
      fill(colors[r][0],colors[r][1],colors[r][2],);
      rect(x*scl, y*scl, scl, scl);
    }
    yoff+=.1;
    
  }
  // for (var i=0; i<tileCountHoriz; i++) {
  //   for (var j=0; j<tileCountVert; j++) {

  //     x = tileScale * i + tileGapSize*(i+1) + ((windowWidth - tileCountHoriz * (tileScale + tileGapSize) - tileGapSize)/2);
  //     y = tileScale * j + tileGapSize*(j+1);

  //     fill(color(colors[(i+j)%(colors.length)]));

  //     if(tileExistsCriteriaFunction(i, j, tileCountHoriz, tileCountVert, frameCount))
  //       square(x, y, tileScale);

  //   }
  // }

}