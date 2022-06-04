import axios from "axios";
const API_KEY = 'dad2725b968ab7e952dfbc80999b3d08';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class TheMovieApiService{

     constructor() { 
        this.searchQuery = "";
        this.page = 1;
    }

async fetchTrendingMovies(){
    try {
        const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
        console.log(response.data.results);
        const { results } = response.data;
        return results;

        this.incrementPage();
    }
    catch (error) {
        console.log(error.message);
    }
}

getPage() {
        return this.page;
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
} 


