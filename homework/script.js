const images = ['imgs\\m.png', 'imgs\\f.png', 'imgs\\r.png'];
let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
}

setInterval(changeImage, 2000);
