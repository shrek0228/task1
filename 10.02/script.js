let a = function () {
    if (window.scrollY > document.documentElement.scrollHeight/2){
        document.querySelector(".arrowTop").style.visibility = "visible";
        document.querySelector(".arrowDown").style.visibility = "hidden";
    }
    else {
        document.querySelector(".arrowTop").style.visibility = "hidden";
        document.querySelector(".arrowDown").style.visibility = "visible";
    }

};
b = document.querySelector('.arrowTop');
b.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

c = document.querySelector('.arrowDown');
c.addEventListener('click', () => {
    window.scrollTo(0, 4548);
});

setInterval(a, 100)





