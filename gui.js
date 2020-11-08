function positionButtons() {
  up_button.position(windowWidth/2 - 55, windowHeight/2 - windowHeight*3/4/2 - 20);
  down_button.position(windowWidth/2 - 55, windowHeight/2 + windowHeight*3/4/2 - 20);
  left_button.position(windowWidth/2 - windowHeight*3/4/2 - 55, windowHeight/2 - 27);
  right_button.position(windowWidth/2 + windowHeight*3/4/2 - 55, windowHeight/2 - 27);
}

function draw_menu() {

  fill(color('white'));
  square(windowWidth/2 - windowHeight*3/4/2, windowHeight/2 - windowHeight*3/4/2, windowHeight*3/4, 20);

  fill(color('black'));
  textAlign(CENTER);

  textSize(24);
  text('ROOM TYPE: ' + map[player_pos.x][player_pos.y], windowWidth/2, windowHeight/2);
  
}

function draw_minimap() {

  for(let i = 0; i < map_size; ++i) {
    for(let j = 0; j < map_size; ++j) {

      switch(map[i][j]) {

        case 0:
        fill(color('black'));
        break;
        
        case 1:
        fill(color('red'));
        break;
        
        case 2:
        fill(color('blue'));
        break;
        
        case 3:
        fill(color('green'));
        break;
        
      }
      
      square(100+i*20, 100+j*20, 20);
      
    }
  }
  
  fill(color('white'));
  circle(110+player_pos.x*20,110+player_pos.y*20,15);
  
}