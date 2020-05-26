const judgeCircle = (moves) => {
  let x = 0, y = 0;
  for (let i in moves) {
    switch (moves[i]) {
      case 'U':
        y++;
        break;
      case 'R':
        x++;
        break;
      case 'L':
        x--;
        break;
      case 'D':
        y--;
        break;
    }
  }

  return x == 0 && y == 0;
};

export default judgeCircle;