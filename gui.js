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
  
  console.log()
  expand(minimap, minimap_starting_room_obj.x, minimap_starting_room_obj.y, 1.5, 0.7);
  
  for(let i = 0; i < minimap_size; ++i) {
    for(let j = 0; j < minimap_size; ++j) {
      if(minimap[i][j] != 0) {
        minimap[i][j] = Math.floor(Math.random() * 3) + 1;
      }
    }
  }
  
  console.log(minimap);

}

function expand(minimap,i,j,chance, falloff) {
  if (Math.random() > chance) {
    return;
  }

  minimap[i][j] = 1;

  if(j-1 > 0 && minimap[i][j-1] === 0) {
    expand(minimap, i, j-1, chance*falloff, falloff);
  }
  if(j+1 < minimap_size && minimap[i][j+1] === 0 ) {
    expand(minimap, i, j+1, chance*falloff, falloff);
  }
  if(i-1 > 0 && minimap[i-1][j] === 0) {
    expand(minimap, i-1, j, chance*falloff, falloff);
  }
  if(i+1 < minimap_size && minimap[i+1][j] === 0) {
    expand(minimap, i+1, j, chance*falloff, falloff);
  }
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
  let count = 6;
  let increment = windowHeight * 0.8 / count;
  let size = increment * 0.9;
  let padding = windowHeight * 0.1;
  
  strokeWeight(4);
  
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
  
  for(let i = 0; i < 6; i++) {
  	stroke(color('black'));
  	fill(color("black"));
  	square(windowWidth - increment - 5, increment * i + padding, increment);
	  stroke(color(colors[i]));
	  if(player_inv[colors[i]]) {
	    fill(colors[i]);
	  } else {
	  	fill('black');
	  }
	  square(windowWidth - increment - 5 + (increment-size)/2, increment * i + padding + (increment-size)/2, size);
  }
  
  strokeWeight(1);
  stroke(color('black'));
}
