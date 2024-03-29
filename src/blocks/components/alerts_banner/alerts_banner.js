document.addEventListener("DOMContentLoaded", () => {
    function closeBanner(banner, observer) {
        banner.classList.add("hidden");
        localStorage.setItem(`${banner.id}Closed`, "true");

        if (observer) {
            observer.disconnect();
        }
    }

    let topBanner = document.getElementById("topBanner");
    let bottomBanner = document.getElementById("bottomBanner");

    function isBannerClosed(banner) {
        return localStorage.getItem(`${banner.id}Closed`) === "true";
    }

    if (isBannerClosed(bottomBanner)) {
        bottomBanner.classList.add("hidden");
    }

    let observer;

    if (!isBannerClosed(bottomBanner)) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        bottomBanner.style.opacity = "0";
                    } else {
                        bottomBanner.classList.remove("hidden");
                        setTimeout(() => (bottomBanner.style.opacity = "1"), 50);
                    }
                });
            },
            { threshold: [0, 1] },
        );

        observer.observe(topBanner);
    }

    let closeButton = document.getElementById("bottomBanner");
    closeButton.addEventListener("click", () => {
        closeBanner(bottomBanner, observer);
    });
});
