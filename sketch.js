var minimap_size = 10;
var minimap = [];
var starting_room = new Object();

fps = 2**5;

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  
  make_map();
  
  setupInput();

  positionButtons();

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  positionButtons();

}

function draw() {

  clear();

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    // This is just a sin wave to demo, purpose of this is to allow the map to be modified dynamically in the future
    return Math.abs(j - (jMax-2)/2 * (-Math.sin(i*2*Math.PI/(iMax-1) + 2*Math.PI*(phase%100)/100) + 1)) < 3;
  }

  background(128*Math.sin(frameCount/fps) + 128, 128*Math.sin(frameCount/fps + 64) + 128, 128*Math.sin(frameCount/fps + 128) + 128);

  colors = ['#FF4235', '#FF933A', '#E2BF31', '#0FE526', '#056BFF', '#B028FF'];

  tileGapSize = 3;
  tileCountHoriz = 122;
  tileCountVert = 60;
  var tileScale = ((windowHeight - 2*tileGapSize) / tileCountVert) - tileGapSize;
  
  for (var i=0; i<tileCountHoriz; i++) {
    for (var j=0; j<tileCountVert; j++) {

      x = tileScale * i + tileGapSize*(i+1) + ((windowWidth - tileCountHoriz * (tileScale + tileGapSize) - tileGapSize)/2);
      y = tileScale * j + tileGapSize*(j+1);

      fill(color(colors[(i+j)%(colors.length)]));

      if(tileExistsCriteriaFunction(i, j, tileCountHoriz, tileCountVert, frameCount))
        square(x, y, tileScale);

    }
  }

  draw_menu();
  draw_minimap();
  draw_progress_bar();
}

function keyPressed() {
  let keyIndex = -1;
  if (key == 'w' || keyCode == UP_ARROW) {
    go_up();
  } else if (key == 'a' || keyCode == LEFT_ARROW) {
    go_left();
  } else if (key == 's' || keyCode == DOWN_ARROW) {
    go_down();
  } else if (key == 'd' || keyCode == RIGHT_ARROW) {
    go_right();
  } 
}
