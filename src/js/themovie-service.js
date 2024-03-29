import axios from "axios";
const API_KEY = 'dad2725b968ab7e952dfbc80999b3d08';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class TheMovieApiService{

     constructor() { 
        this.searchQuery = "";
    }

 async fetchTrendingMovies(page){
    try {
        const response = await axios(`/trending/movie/day?api_key=${API_KEY}&page=${page}`);
        const { results, total_pages } = response.data;
       
        return { results, total_pages };
        
    }
    catch (error) {
        console.log(error.message);
    }
 }

async fetchMoviesByKeyWord(page){
    try {
        const response = await axios(`/search/movie?&api_key=${API_KEY}&query=${this.searchQuery}&page=${page}`);
        const { results, total_pages } = response.data;
        return { results, total_pages };
    }
    catch (error) {
        console.log(error.message);
    }

}    
    
async fetchMovieInfo(movie_id) {
     try {
        const response = await axios(`movie/${movie_id}?api_key=${API_KEY}`);
        return response.data;
        
    }
    catch (error) {
        console.log(error.message);
    }
    }   

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
} 


