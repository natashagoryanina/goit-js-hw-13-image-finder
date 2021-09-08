export default class PhotosApiService {
    constructor() {
        this.searchPhoto = '';
        this.page = 1;
    }

    fetchElementByName() {
        const API_KEY = '23294287-f28ad0716a186f6195177ba0b';
        
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchPhoto}&page=${this.page}&per_page=12&key=${API_KEY}`)
        .then(response => response.json())
        .then(({hits}) => {
            this.incrementPage();
            return hits;
        });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchPhoto;
    }

    set query(newQuery) {
        this.searchPhoto = newQuery;
    }
}