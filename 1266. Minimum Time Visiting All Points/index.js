const minTimeToVisitAllPoints = (points) => {
  let x = 0;
  let y = 0;
  let distance = 0;
  for(let i=0; i<points.length-1; i++){
    x = Math.abs(points[i][0] - points[i+1][0]);
    y = Math.abs(points[i][1] - points[i+1][1]);
    if(x>y){
      distance+=x;
    }else{
      distance+=y;
    }
  }

  return distance
};

export default minTimeToVisitAllPoints;