import PhotosApiService from './apiService';
const refs = {
    searchForm: document.querySelector('.search-form'),
}

const PhotosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    PhotosApiService.query = e.currentTarget.elements.query.value;
    PhotosApiService.fetchElementByName();
}