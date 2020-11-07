var map_size = 10;
var map = [];
var starting_room = new Object();
var player_pos;

fps = 2**5;

function make_map() {
	for(let i = 0; i < map_size; ++i) {
		map[i] = [];
	  for(let j = 0; j < map_size; ++j) {
		  map[i][j] = 0;
	  }
  }
  
  starting_room.x = Math.floor(Math.random() * 10); 
  starting_room.y = Math.floor(Math.random() * 10); 
  
  player_pos = Object.assign({}, starting_room);
  
  map[starting_room.x][starting_room.y] = 1;
  
  let run = true;
  
  while(run) {
	  run = false;
	  for(let i = 0; i < map_size; ++i) {
		  for(let j = 0; j < map_size; ++j) {
			  if(map[i][j] === 1) {
				  run = true;
				  map[i][j] = 2;
				  if(j-1 > 0 && map[i][j-1] === 0 && Math.random() < 0.4) {
					  map[i][j-1] = 1;
				  }
				  if(j+1 < map_size && map[i][j+1] === 0 && Math.random() < 0.4) {
					  map[i][j+1] = 1;
				  }
				  if(i-1 > 0 && map[i-1][j] === 0 && Math.random() < 0.4) {
					  map[i-1][j] = 1;
				  }
				  if(i+1 < map_size && map[i+1][j] === 0 && Math.random() < 0.4) {
					  map[i+1][j] = 1;
				  }
			  }
		  }
	  }
  }
  
  console.log(map);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  
  make_map();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  clear();

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    // This is just a sin wave to demo, purpose of this is to allow the map to be modified dynamically in the future
    return Math.abs(j - (jMax-2)/2 * (-Math.sin(i*2*Math.PI/(iMax-1) + 2*Math.PI*(phase%100)/100) + 1)) < 3;
  }

  background(128*Math.sin(frameCount/fps) + 128, 128*Math.sin(frameCount/fps + 64) + 128, 128*Math.sin(frameCount/fps + 128) + 128);

  colors = ['#FF4235', '#FF933A', '#E2BF31', '#0FE526', '#056BFF', '#B028FF'];

  tileGapSize = 8;
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
	draw_ui();
}

function draw_ui() {
	draw_map();
}

function draw_map() {
	for(let i = 0; i < map_size; ++i) {
	  for(let j = 0; j < map_size; ++j) {
		  switch(map[i][j]) {
			  case 0:
			  fill(color('black'));
			  square(100+i*20,100+j*20, 20);
			  break;
			  case 1:
			  fill(color('red'));
			  square(100+i*20,100+j*20, 20);
			  break;
			  case 2:
			  fill(color('blue'));
			  square(100+i*20,100+j*20, 20);
			  break;
		  }
	  }
	}
	fill(color('white'));
	circle(110+player_pos.x*20,110+player_pos.y*20,15);
}