import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = document.querySelector(".gallery");
refs.insertAdjacentHTML("beforeend", createImage(galleryItems));
refs.addEventListener("click", notOpenNewPage);

function createImage(colors) {
  return colors
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
`;
    })
    .join("");
}

function notOpenNewPage(evt) {
  evt.preventDefault();
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});
