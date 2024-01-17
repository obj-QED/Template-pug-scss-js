function checkDevice() {
    function isLandscape() {
        return window.innerWidth > window.innerHeight;
    }
    let isMobile = window.innerWidth <= 992;
    window.device = {
        mobile: isMobile,
        landscape: isLandscape(),
        isMobile: isMobile,
        isMobileLandscape: isMobile && isLandscape(),
        isDesktop: !isMobile,
    };

    localStorage.setItem("device", JSON.stringify(window.device));
}

function innerHeightVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("load", function () {
    checkDevice();
    innerHeightVh();
});
window.addEventListener("resize", function () {
    checkDevice();
    innerHeightVh();
});
