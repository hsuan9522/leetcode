const peakIndexInMountainArray = (arr) => {
    const peek = foundPeek(arr)

    function foundPeek(array) {
        let index = Math.floor(array.length/2)
        if (array[index] - array[index + 1] > 0 && array[index - 1] - array[index] < 0) return array[index]
        
        if(array[index] - array[index+1] > 0) {
            return foundPeek(array.slice(0, index +1))
        }else {
            return foundPeek(array.slice(index, array.length))
        }
    }
    return arr.findIndex(el => el === peek)
    // 也可以用while下去一個一個檢查，但速度沒有上面使用陣列減半+遞迴快
    /** 
        let index = 0;
        let peek
        while(index < arr.length) {
            if(arr[index] > arr[index + 1]) {
                peek = index
                break;
            }
            index++
        }
        return peek
    **/
};

export default peakIndexInMountainArray;
