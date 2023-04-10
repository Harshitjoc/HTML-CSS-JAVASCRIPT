var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');

var initialCountdownVal = countdownElement.innerHTML;

setInterval(function () {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
    countdownElement.innerHTML = initialCountdownVal;
    var backImgPath = initialCountdownVal % 2 === 0 ? 'Img/greg-rakozy-oMpAz-DN-9I-unsplash.jpg' :
        'Img/nasa-Q1p7bh3SHj8-unsplash.jpg'

    bgImageElement.src = backImgPath;
}, 1000);