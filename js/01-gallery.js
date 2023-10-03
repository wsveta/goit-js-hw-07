import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
for (const { original, preview, description } of galleryItems) {
  gallery.innerHTML += `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}

gallery.addEventListener("click", selectImage);

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onClose: () => {document.removeEventListener("keydown", closeImage)},
    }
  );
  instance.show();

  document.addEventListener("keydown", closeImage);
  
  function closeImage (event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
