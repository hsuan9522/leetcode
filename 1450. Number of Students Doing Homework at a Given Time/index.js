const busyStudent = (startTime, endTime, queryTime) => {
  let ans = 0;
  for(let i = 0; i <startTime.length; i++) {
    if(startTime[i]<=queryTime && endTime[i]>=queryTime) ans++;
  }
  return ans;
};

export default busyStudent;