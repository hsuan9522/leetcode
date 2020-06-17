const dayOfTheWeek = (day,month,year) =>{
  const C = Math.floor(year/100);
  let Y = year - C*100;
  if(month==1 || month==2){
    Y--;
    month+=12;
  }
  let W = Y + Math.floor(C/4) + Math.floor(Y/4) -2*C+ Math.floor(26*(month+1)/10) +day -1;
  if(W<0) W = (W%7 +7)%7;
  switch(W%7){
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5: 
      return 'Friday';
    case 6: 
      return 'Saturday';
  }
}

export default dayOfTheWeek;