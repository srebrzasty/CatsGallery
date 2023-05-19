const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex = 0;

const showNextImg = () => {
    if (currentImgIndex === THUMBNAILS.length) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const showPreviousImg = () => {
    if (currentImgIndex === 0) {
        currentImgIndex = THUMBNAILS.length;
    } else {
        currentImgIndex--;
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const closePopup = () => {
    POPUP.classList.add("fade-out");
    setTimeout(() => {
    POPUP.classList.add("hidden");
    POPUP.classList.add("fade-out");
    THUMBNAILS.forEach(Element => {
        Element.setAttribute("tabindex", 1);
    });
}, 300);
};

THUMBNAILS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
    });
});

POPUP_CLOSE.addEventListener("click", closePopup);
ARROW_RIGHT.addEventListener("click", showNextImg); 
ARROW_LEFT.addEventListener("click", showPreviousImg); 

document.addEventListener("keydown", (e) => {
    if (!POPUP.classList.contains("hidden")) {

    if (e.code === "ArrowRight" || e.keycode === 39) {
        showNextImg();
    }
    if (e.code === "ArrowLeft" || e.keycode === 37) {
        showPreviousImg();
    }
    if(e.code === "Escape" || e.keycode === 27) {
        closePopup();
    }
    }
});

POPUP.addEventListener("click", (e) => {
    if(e.target === POPUP) {
        closePopup();
    }
});