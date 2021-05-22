function closeWelcome(element) {
    document.getElementById("player").play();
    
    fadeOut(element, 1000);
    setTimeout(function() { document.getElementById("sun").style.display = "none" }, 1000);
    
    setTimeout(function() { fadeIn(document.getElementById("audio-controls"), 500); }, 18000);
    setTimeout(function() { fadeIn(document.getElementById("listen1"), 1000); }, 2000);
    setTimeout(function() { fadeIn(document.getElementById("listen2"), 1000); }, 4000);
    setTimeout(function() { fadeIn(document.getElementById("listen3"), 1000); }, 6000);
    setTimeout(function() { unblur(document.getElementById("bg"), 5); }, 14000);
    
    let banner = document.getElementById("banner");
    setTimeout(function() { fadeOut(banner, 1000); }, 11000);
    setTimeout(function() { banner.innerHTML = "The Steppe Awaits"; }, 12500);
    setTimeout(function() { fadeIn(banner, 500); }, 13500);
}

function setBg(path) {
    let bg = document.getElementById("bg");
    bg.setAttribute("src", path);
}

function unblur(element, start) {
    let b = start
    let timer = setInterval(function () {
        if (b <= 0) {
            clearInterval(timer);
            element.style.filter = "0px"
            return;
        }
        element.style.filter = "blur(" + b + "px)";
        b -= 0.5;
    }, 50);
}

function fadeOut(element, ms) {
    let op = 1;
    let timer = setInterval(function () {
        if (op <= 0) {
            clearInterval(timer);
            element.style.opacity = 0;
            element.style.filter = "alpha(opacity=0)";
            return;
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op -= 50/ms;
    }, 50);
}

function fadeIn(element, ms) {
    let op = 0;
    element.style.opacity = op;
    element.style.visibility = "visible";
    let timer = setInterval(function () {
        if (op >= 1.0) {
            clearInterval(timer);
            element.style.opacity = 1.0;
            element.style.filter = "alpha(opacity=100)";
            return;
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += 50 / ms;
    }, 50);
}