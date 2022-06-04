// import filmCardTml from './templates/film-card.hbs';
// import galleryItemsTml from './templates/gallery-items.hbs';
import TheMovieApiService from './js/themovie-service';

const theMovieApiService = new TheMovieApiService();
const filmGrid = document.querySelector('.grid');

// const galleryItemsTml = Handlebars.compile('./templates/gallery-items.hbs');
// const filmCardTml = Handlebars.compile('./templates/film-card.hbs');

theMovieApiService.fetchTrendingMovies(); 

onPageLoad();

async function onPageLoad() {
      try {
            const trendingFilms = await theMovieApiService.fetchTrendingMovies();
            console.log(trendingFilms);
            createTrendingMoviesGallery(trendingFilms);
      } catch(error) {
            console.log(error);  
      }
}

function createTrendingMoviesGallery(films) {
    
      const markup = films.map(film => {
            const year = film.release_date.slice(0, 4);
            return `
            <div class="film">
                  <img class="film__poster" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${film.title}" loading="lazy" />
                  <div class="film__info">
                        <p class="film__title">${film.title}</p>
                        <p class="film__genre">${film.genre_ids}<span>| ${year}</span></p>
                  </div>
            </div>`}).join("");
      
      filmGrid.insertAdjacentHTML("beforeend", markup);  
}





// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     // closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   // refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();