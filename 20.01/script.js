function updateTime() {
    // Здесь должен быть элемент hours 
    // Здесь должен быть элемент minutes 
    // Здесь должен быть элемент seconds
    
    const clock = new Date();
    var h = clock.getHours();
    var m = clock.getMinutes();
    var s = clock.getSeconds();
    // getHours()
    // getMinutes()
    // getSeconds()
    document.getElementsByClassName('seconds')[0].innerHTML = s;
    document.getElementsByClassName('minutes')[0].innerHTML = m;
    document.getElementsByClassName('hours')[0].innerHTML = h;
}
setInterval(updateTime, 1000)
// Здесь должен быть задан интервал
