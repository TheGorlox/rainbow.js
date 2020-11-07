function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var width = 10;
  var height = 10;
  var colors = 3;
  
  size = 100;
  
  // quad(0,0,size,0,size,size,0,size,0,size);
  scale = 10;
  
  for (var i=0; i<width; i++) {
     for (var j=0; j<height; j++) {
       x = scale * i;
       y = scale * j;
      // quad(x,y, x+scale,j,x+scale,j+scale,i,j+scale);
       square(x, y, scale);
    }
  }
}