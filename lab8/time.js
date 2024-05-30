function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

function showArrow() {
    let today = new Date();
    let seconds = today.getSeconds();
    let degrees = seconds * 6;

    document.getElementById('arrow').style.transform = `rotate(${degrees}deg)`;
}

setInterval(showArrow, 1000);
