var up_button;
var down_button;
var left_button;
var right_button;

function setupInput() {
  up_button = createButton('up');
  down_button = createButton('down');
  left_button = createButton('left');
  right_button = createButton('right');

  up_button.mousePressed(go_up);
  down_button.mousePressed(go_down);
  left_button.mousePressed(go_left);
  right_button.mousePressed(go_right);
}