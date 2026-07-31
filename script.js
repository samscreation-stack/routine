function openPDF(viewerId) {
    const viewer = document.getElementById(viewerId);

    if (!viewer) return;

    const pdfFrame = viewer.querySelector(".pdf-viewer iframe");

    if (!pdfFrame) return;

    const pdfURL = pdfFrame.getAttribute("src");

    /*
     * MOBILE
     * Open the actual PDF directly in the browser.
     * This avoids the limited mobile iframe PDF viewer.
     */
    if (window.matchMedia("(max-width: 700px)").matches) {
        window.location.href = pdfURL;
        return;
    }

    /*
     * DESKTOP / LAPTOP
     * Keep the premium embedded viewer.
     */
    viewer.classList.add("active");

    setTimeout(function () {
        viewer.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 50);
}


function closePDF(viewerId) {
    const viewer = document.getElementById(viewerId);

    if (!viewer) return;

    viewer.classList.remove("active");
}