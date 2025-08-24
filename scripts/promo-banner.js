document.getElementById("promoBanner").addEventListener("click", function () {
    const target = document.getElementById("download");
    const yOffset = -100; // Adjust this offset for centering
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    // Add animation class
    target.classList.add("animate-focus");

    // Remove it after animation ends
    setTimeout(() => {
    target.classList.remove("animate-focus");
    }, 1600);
});