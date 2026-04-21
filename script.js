const buttons = document.querySelectorAll(".more-btn");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

const title = document.querySelector(".popup-title");
const text = document.querySelector(".popup-text");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        title.textContent = btn.dataset.title;
        text.textContent = btn.dataset.text;

        popup.style.display = "flex";
    });
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});