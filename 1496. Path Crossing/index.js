const isPathCrossing = (path) => {
  let array = Array.from(path);
  let x = 0;
  let y = 0;
  let map = {}
  map[`${x},${y}`] = 1;
  array.forEach(el => {
    switch (el) {
      case 'S':
        y--;
        break;
      case 'N':
        y++;
        break;
      case 'W':
        x++;
        break;
      case 'E':
        x--;
        break;
    }
    if (map[`${x},${y}`]) {
      map[`${x},${y}`]++
    } else {
      map[`${x},${y}`] = 1;
    }
  })
  for (let i in map) {
    if (map[i] > 1) return true;
  }
  return false;
};
export default isPathCrossing;