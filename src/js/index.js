import PhotosApiService from './apiService';
import imagesTmpl from '../templates/image-card.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
    searchForm: document.querySelector('.search-form'),
    loadMoreBtn: document.querySelector('.btn'),
    gallery: document.querySelector('.gallery'),
    galleryItem: document.querySelector('.gallery-item'),
}

const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onBtnClick);

function onFormSubmit(e) {
    e.preventDefault();

    clearImgContainer();
    photosApiService.query = e.currentTarget.elements.query.value;

    if (photosApiService.query === '') {
        return error({ text: 'Please, make a request.'});
    };

    refs.loadMoreBtn.removeAttribute('disabled');
    photosApiService.resetPage();
    photosApiService.fetchElementByName()
        .then(imagesMarkup)
        .catch(error => error({ text: '0 results' }))
}

function onBtnClick(e) {
    photosApiService.fetchElementByName().then(imagesMarkup);
}

function imagesMarkup(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', imagesTmpl(hits));
}

function clearImgContainer() {
    refs.gallery.innerHTML = '';
}

refs.gallery.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});