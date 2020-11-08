var player_pos;

function go_up() {
  if(player_pos.y - 1 < 0)
    return;
  if(map[player_pos.x][player_pos.y - 1] == 0)
    return;
  player_pos.y -= 1;
}

function go_down() {
  if(player_pos.y + 1 >= map_size)
    return;
  if(map[player_pos.x][player_pos.y + 1] == 0)
    return;
  player_pos.y += 1;
}

function go_left() {
  if(player_pos.x - 1 < 0)
    return;
  if(map[player_pos.x - 1][player_pos.y] == 0)
    return;
  player_pos.x -= 1;
}

function go_right() {
  if(player_pos.x + 1 >= map_size)
    return;
  if(map[player_pos.x + 1][player_pos.y] == 0)
    return;
  player_pos.x += 1;
}