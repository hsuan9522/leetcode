const findMedianSortedArrays = (nums1, nums2) => {
  const array = [...nums1];
  nums2.forEach(el=>{
    array.push(el);
  })

  array.sort((a,b)=>a-b);
  let medianIndex;
  if(array.length%2 == 0){
    medianIndex = array.length/2;
    return (array[medianIndex-1]+array[medianIndex])/2
  }else{
    medianIndex = Math.floor(array.length/2);
    return array[medianIndex];
  }
};

export default findMedianSortedArrays;