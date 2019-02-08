(function () {
    document.addEventListener("mousemove", function (e) {
        document.getElementById("logo-img").style.opacity = 0.1 + 0.8 * (1 + Math.sin((e.clientX + e.clientY)/100))/2;
    });
})();
