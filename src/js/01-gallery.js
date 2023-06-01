import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const containerRef = document.querySelector('.gallery');
containerRef.innerHTML = createGalleryItem(galleryItems);

function createGalleryItem(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"
      alt="${description}"
      title="${description}">
      </a>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', { captionDelay: 250 });
