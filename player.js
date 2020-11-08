var player_pos;
var player_inv = new Object();

function init_inv() {
  player_inv.red = false;
  player_inv.orange = false;
  player_inv.yellow = false;
  player_inv.green = false;
  player_inv.blue = false;
  player_inv.violet = false;
}

function go_up() {
  if(player_pos.y - 1 < 0)
    return;
  if(minimap[player_pos.x][player_pos.y - 1] == 0)
    return;
  player_pos.y -= 1;
}

function go_down() {
  if(player_pos.y + 1 >= minimap_size)
    return;
  if(minimap[player_pos.x][player_pos.y + 1] == 0)
    return;
  player_pos.y += 1;
}

function go_left() {
  if(player_pos.x - 1 < 0)
    return;
  if(minimap[player_pos.x - 1][player_pos.y] == 0)
    return;
  player_pos.x -= 1;
}

function go_right() {
  if(player_pos.x + 1 >= minimap_size)
    return;
  if(minimap[player_pos.x + 1][player_pos.y] == 0)
    return;
  player_pos.x += 1;
}