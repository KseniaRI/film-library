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
        const response = await axios(`/trending/movie/day?api_key=${API_KEY}&page=1`);
        console.log(response.data);
        const { results } = response.data;
        return results;
        this.incrementPage();
    }
    catch (error) {
        console.log(error.message);
    }
}

async fetchMoviesByKeyWord(){
    try {
        const response = await axios(`/search/movie?&api_key=${API_KEY}&query=${this.searchQuery}&page=1`);
        console.log(response.data);
        const { results } = response.data;
       
        return results;

        this.incrementPage();
    }
    catch (error) {
       
        console.log(error.message);
    }

    }    
    
    async fetchMovieInfo(movie_id) {
     try {
        const response = await axios(`movie/${movie_id}?api_key=${API_KEY}`);
        console.log(response.data);
        return response.data;
        
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


