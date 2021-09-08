export default class PhotosApiService {
    constructor() {
        this.searchPhoto = '';
    }

    fetchElementByName() {
        const API_KEY = '23294287-f28ad0716a186f6195177ba0b';
        
        fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchPhoto}&page=1&per_page=12&key=${API_KEY}`)
        .then(r => r.json())
        .then(console.log);
    }

    get query() {
        return this.searchPhoto;
    }

    set query(newQuery) {
        this.searchPhoto = newQuery;
    }
}