fps = 2**5;

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  
  generate_minimap();
<<<<<<< HEAD
  
  input_setup();

  setGamestateMainMenu();

=======
  input_setup();
  setGamestateMainMenu();
>>>>>>> aeee9c9fd91c69f239d2dec602c97513eaf2ec97
  set_button_positions();

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  set_button_positions();

}

function draw() {

  clear();

  background(128*Math.sin(frameCount/fps) + 128, 128*Math.sin(frameCount/fps + 64) + 128, 128*Math.sin(frameCount/fps + 128) + 128);

  draw_level();
  draw_menu();
  draw_minimap();
  draw_progress_bar();

}

function keyPressed() {
<<<<<<< HEAD
	on_key_pressed();
}
=======
  on_key_pressed();
}
>>>>>>> aeee9c9fd91c69f239d2dec602c97513eaf2ec97
