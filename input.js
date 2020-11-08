var up_button;
var down_button;
var left_button;
var right_button;

function input_setup() {
  up_button = createButton('up');
  down_button = createButton('down');
  left_button = createButton('left');
  right_button = createButton('right');

  up_button.mousePressed(go_up);
  down_button.mousePressed(go_down);
  left_button.mousePressed(go_left);
  right_button.mousePressed(go_right);
}

function on_key_pressed() {
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

  if (key=='r') {
    generate_minimap();
  }
}