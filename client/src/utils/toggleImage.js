
module.exports = {
    toggleImage: (event) => {
        const img = event.target
        console.log(img)
        if (img.classList.contains("image-toggled-off")) {
            img.classList.remove('image-toggled-off')
            img.classList.add('image-toggled-on')
        } else {
            img.classList.remove('image-toggled-on')
            img.classList.add('image-toggled-off')
        }
    }
}