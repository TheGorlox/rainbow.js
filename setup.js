function make_map() {
  
  for(let i = 0; i < minimap_size; ++i) {
    minimap[i] = [];
    for(let j = 0; j < minimap_size; ++j) {
      minimap[i][j] = 0;
    }
  }
  
  starting_room.x = Math.floor(Math.random() * 10); 
  starting_room.y = Math.floor(Math.random() * 10); 
  
  player_pos = Object.assign({}, starting_room);
  
  minimap[starting_room.x][starting_room.y] = 1;
  
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