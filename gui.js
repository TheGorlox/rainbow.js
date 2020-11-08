var minimap_size = 10;
var minimap = [];
var minimap_starting_room_obj = new Object();

function set_button_positions() {
  up_button.position(windowWidth/2 - 55, windowHeight/2 - windowHeight*3/4/2 - 20);
  down_button.position(windowWidth/2 - 55, windowHeight/2 + windowHeight*3/4/2 - 20);
  left_button.position(windowWidth/2 - windowHeight*3/4/2 - 55, windowHeight/2 - 27);
  right_button.position(windowWidth/2 + windowHeight*3/4/2 - 55, windowHeight/2 - 27);
}

function generate_minimap() {
  
  for(let i = 0; i < minimap_size; ++i) {
    minimap[i] = [];
    for(let j = 0; j < minimap_size; ++j) {
      minimap[i][j] = 0;
    }
  }
  
  minimap_starting_room_obj.x = Math.floor(Math.random() * 10); 
  minimap_starting_room_obj.y = Math.floor(Math.random() * 10); 
  
  player_pos = Object.assign({}, minimap_starting_room_obj);
  
  minimap[minimap_starting_room_obj.x][minimap_starting_room_obj.y] = 1;
  
  let run = true;
  
  while(run) {
    run = false;
    for(let i = 0; i < minimap_size; ++i) {
      for(let j = 0; j < minimap_size; ++j) {
        if(minimap[i][j] === 1) {
          run = true;
          minimap[i][j] = 2;
          if(j-1 > 0 && minimap[i][j-1] === 0 && Math.random() < 0.4) {
            minimap[i][j-1] = 1;
          }
          if(j+1 < minimap_size && minimap[i][j+1] === 0 && Math.random() < 0.4) {
            minimap[i][j+1] = 1;
          }
          if(i-1 > 0 && minimap[i-1][j] === 0 && Math.random() < 0.4) {
            minimap[i-1][j] = 1;
          }
          if(i+1 < minimap_size && minimap[i+1][j] === 0 && Math.random() < 0.4) {
            minimap[i+1][j] = 1;
          }
        }
      }
    }
  }
  
  for(let i = 0; i < minimap_size; ++i) {
    for(let j = 0; j < minimap_size; ++j) {
      if(minimap[i][j] != 0) {
        minimap[i][j] = Math.floor(Math.random() * 3) + 1;
      }
    }
  }
  
  console.log(minimap);

}

function draw_menu() {

  fill(color('white'));
  square(windowWidth/2 - windowHeight*3/4/2, windowHeight/2 - windowHeight*3/4/2, windowHeight*3/4, 20);

  fill(color('black'));
  textAlign(CENTER);

  textSize(24);
  text('ROOM TYPE: ' + minimap[player_pos.x][player_pos.y], windowWidth/2, windowHeight/2);
  
}

function draw_minimap() {

  for(let i = 0; i < minimap_size; ++i) {
    for(let j = 0; j < minimap_size; ++j) {

      switch(minimap[i][j]) {

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
  
function draw_progress_bar() {
  var count = 6;
  var increment = windowHeight * 0.8 / count;
  var size = increment * 0.9;
  var padding = windowHeight * 0.1;
  var colorlist = [color("red"),color("orange"),color("yellow"),color("green"),color("blue"),color("purple")]
  var colorsquares = [true, true, true, true, true, true];
  for (let i=0; i<count; i++) {
      fill(color("black"));
      square(windowWidth - increment - 5, increment * i + padding, increment);
      if (colorsquares[i]) {
          fill(colorlist[i]);
          square(windowWidth - increment - 5 + (increment-size)/2, increment * i + padding + (increment-size)/2, size);
      }
  }
}