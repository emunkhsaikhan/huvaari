const modal = document.getElementById("warning-modal");
const showButton = document.getElementById("show-warning");
const closeButton = document.getElementById("close-warning");
const closeBtn = document.getElementById("close-button");

showButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
