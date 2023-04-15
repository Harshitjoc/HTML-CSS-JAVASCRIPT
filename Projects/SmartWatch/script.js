var red = document.getElementById('red');
var pink = document.getElementById('pink');
var blue = document.getElementById('blue');
var purple = document.getElementById('purple');
var black = document.getElementById('black');
var time = document.getElementById('time-text');
var heart = document.getElementById('heart')
var heartRate = document.getElementById('heart-rate');
var timeBtn = document.getElementById('time');
var heartRateBtn = document.getElementById('heartRate');

red.addEventListener('click', function () {
    watch.src = "Watches/Red.png";
    watch.alt = "red"
})

pink.addEventListener('click', function () {
    watch.src = "Watches/Pink.png";
    watch.alt = "pink"
})

blue.addEventListener('click', function () {
    watch.src = "Watches/Blue.png";
    watch.alt = "blue"
})

purple.addEventListener('click', function () {
    watch.src = "Watches/Purple.png";
    watch.alt = "purple"
})

black.addEventListener('click', function () {
    watch.src = "Watches/Black.png";
    watch.alt = "black"
})

function refreshTime() {
    var actualTime = new Date().toLocaleTimeString();
    time.innerHTML = actualTime;
    console.log(time)
}

timeBtn.addEventListener('click', function () {
    time.style.display = "block";
    heart.style.display = "none";
    heartRate.style.display = "none";
    refreshTime();
})

setInterval(refreshTime, 1000)

heartRateBtn.addEventListener('click', function () {
    time.style.display = "none";
    heart.style.display = "block";
    heartRate.style.display = "block";
})