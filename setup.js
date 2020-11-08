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
  
  for(let i = 0; i < map_size; ++i) {
    for(let j = 0; j < map_size; ++j) {
      if(map[i][j] != 0) {
        map[i][j] = Math.floor(Math.random() * 3) + 1;
      }
    }
  }
  
  console.log(map);

}