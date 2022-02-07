function reset() {
    initialize();
    draw();
}

window.addEventListener("resize", function() {
    reset();
}, false);