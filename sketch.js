fps = 2**5;
colors = ['#FF4235', '#FF933A', '#E2BF31', '#0FE526', '#056BFF', '#B028FF'];

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  
  generate_minimap();
  
  setupInput();

  setGamestateMainMenu();

  positionButtons();

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  positionButtons();

}

function draw() {

  clear();

  background(128*Math.sin(frameCount/fps) + 128, 128*Math.sin(frameCount/fps + 64) + 128, 128*Math.sin(frameCount/fps + 128) + 128);

  draw_level();
  draw_menu();
  draw_minimap();
  draw_progress_bar();

}
