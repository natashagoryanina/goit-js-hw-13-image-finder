import PhotosApiService from './apiService';
const refs = {
    searchForm: document.querySelector('.search-form'),
}

const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    photosApiService.query = e.currentTarget.elements.query.value;
    photosApiService.fetchElementByName();
}