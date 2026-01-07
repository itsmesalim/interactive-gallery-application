let images = document.querySelectorAll(".image-container img");
let viewImage = document.querySelector(".view-image");
let fullImage = document.querySelector(".view-image img");

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    viewImage.style.display = "flex";
    fullImage.src = e.target.src;
    currentIndex = index;
  });
});

const nextFunction = () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  fullImage.src = images[currentIndex].src;
};

const previousFunction = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  fullImage.src = images[currentIndex].src;
};

const closedFunction = () => {
  viewImage.style.display = "none";
};
