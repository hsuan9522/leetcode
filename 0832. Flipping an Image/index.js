const flipAndInvertImage = (image) => {
    return image.map(el=>{
        return el.reverse().map(e=>{
            return Math.abs(e-1)
        })
    })
};

export default flipAndInvertImage;
