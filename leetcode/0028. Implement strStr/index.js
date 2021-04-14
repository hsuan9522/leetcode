const strStr = (haystack, needle) => {
    if ((haystack === '' && needle === '') || needle === '') return 0
    const stack = Array.from(haystack)
    let index = stack.indexOf(needle[0])
    if (index !== -1) {
        while (index <= haystack.length - needle.length) {
            if (stack.slice(index, index + needle.length).join('') === needle) {
                return index
            }
            index++
        }
        return -1
    } else {
        return -1
    }
};

export default strStr;
