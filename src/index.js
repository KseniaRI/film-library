// import filmCardTml from './templates/film-card.hbs';
// import galleryItemsTml from './templates/gallery-items.hbs';
import TheMovieApiService from './js/themovie-service';

const theMovieApiService = new TheMovieApiService();
const filmGrid = document.querySelector('.grid');
const homeGrid = document.querySelector('.home-grid');
const searchForm = document.querySelector('.search-form');
const formWrap = document.querySelector('.form-wrap');
const alertHeaderMsg = document.querySelector('.header__failure-message');
const alertGalleryMsg = document.querySelector('.gallery__failure-message');
const homeBtn = document.querySelector('.nav__btn--home');
const libraryBtn = document.querySelector('.nav__btn--library');
const headerEl = document.querySelector('.header');
const optionButtons = document.querySelector('.buttons');
const movieCard = document.querySelector('.movie-card');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const paginationNextBtn = document.getElementById('next-page');
const paginationPrevBtn = document.getElementById('prev-page');
const pagesList = document.querySelector('.pagination__page-buttons');





// const galleryItemsTml = Handlebars.compile('./templates/gallery-items.hbs');
// const filmCardTml = Handlebars.compile('./templates/film-card.hbs');

searchForm.addEventListener("submit", onSearch);
homeBtn.addEventListener("click", onHomePageClick);
libraryBtn.addEventListener("click", onLibraryPageClick);

paginationNextBtn.addEventListener("click", onNext);
paginationPrevBtn.addEventListener("click", onPrev);
pagesList.addEventListener("click", onPaginationBtnClick);


homeBtn.parentElement.classList.add('nav__item--active');
optionButtons.classList.add("hidden");
filmGrid.classList.add("home-grid");

onHomePageLoad();

filmGrid.addEventListener("click", onGridItemClick);
closeModalBtn.addEventListener('click', toggleModal); 



let activPageIdx = 0;
let pages = [];



function onNext() {  
      if (activPageIdx < pages.length - 1) {
            activPageIdx += 1;
            
            pages[activPageIdx].classList.add('pagination__activ');
            pages[activPageIdx - 1].classList.remove('pagination__activ');
         
            const pageNumber = pages[activPageIdx].textContent;
            renderNewPage(pageNumber);
     }
     
      
}

function onPrev() {
      
      if (activPageIdx > 0) {
            activPageIdx -= 1;
           
           pages[activPageIdx + 1].classList.remove('pagination__activ');
           pages[activPageIdx].classList.add('pagination__activ');  
       }   
      
}

function onPaginationBtnClick(evt) {
      if (evt.target.nodeName !== "BUTTON") {
            return;
      }
      evt.target.classList.add('pagination__activ');
      pages[activPageIdx].classList.remove('pagination__activ'); 
      activPageIdx = Number(evt.target.textContent) - 1;
     
      const pageNumber = evt.target.textContent;
      
      renderNewPage(pageNumber);
}

async function renderNewPage(pageNum) {
      homeGrid.innerHTML = "";
      const { results, total_pages } = await theMovieApiService.fetchTrendingMovies(pageNum);
      console.log(total_pages);
      console.log(results);
      renderGallery(results, homeGrid);
}
function toggleModal() {
    modal.classList.toggle('is-hidden');
  }

function onHomePageClick() {
      onHomePageLoad()
      headerEl.classList.replace("library-header", "header");
      homeBtn.parentElement.classList.add('nav__item--active');
      libraryBtn.parentNode.classList.remove('nav__item--active');
      optionButtons.classList.add("hidden");
      formWrap.classList.remove("hidden");
      filmGrid.classList.add("home-grid");
      filmGrid.classList.remove("library-grid");
}
function onLibraryPageClick() {
      homeGrid.innerHTML = "";
      headerEl.classList.replace("header", "library-header");
      libraryBtn.parentNode.classList.add('nav__item--active');
      homeBtn.parentNode.classList.remove('nav__item--active');
      formWrap.classList.add("hidden");
      optionButtons.classList.remove("hidden");
      filmGrid.classList.remove("home-grid");
      filmGrid.classList.add("library-grid");
}

async function onHomePageLoad() {
      try {
            const { results, total_pages } = await theMovieApiService.fetchTrendingMovies(1);
            renderGallery(results, homeGrid);
            
            
            // renderPagination(8, pagesList);
            renderPagination(total_pages);
            pages = document.querySelectorAll('.page');
            pages[0].classList.add("pagination__activ");
          
      } catch(error) {
            console.log(error);  
              }  
}       
      
function renderPagination(totalPages) {
      const markup = createPaginationTemplate(totalPages);
      pagesList.insertAdjacentHTML("beforeend", markup);
      // container.insertAdjacentHTML("beforeend", markup);
      // container.insertAdjacentHTML("afterend", `<button type="button" class="pagination__btn">...</button>`);

     
}
   
function createPaginationTemplate(totalPages) {
      let array = [];
      for (let i = 1; i <= totalPages; i += 1){
            array.push(`<button type="button" class="pagination__btn page">${i}</button>`);
      }
      return array.join("");
     
}
async function onSearch(evt) {
      evt.preventDefault();
      theMovieApiService.query = evt.currentTarget.elements.searchQuery.value;
      console.log(theMovieApiService.query);
      homeGrid.innerHTML = "";
      alertGalleryMsg.textContent = "";
      alertHeaderMsg.textContent = "";

      if (theMovieApiService.query === "") {
            alertGalleryMsg.textContent = "Oops, something went wrong!";
      }
      try {
            const filmsWithKeyWord = await theMovieApiService.fetchMoviesByKeyWord();
            if (filmsWithKeyWord.length === 0) {
                  alertHeaderMsg.textContent = "Search result not successful. Enter the correct movie name and";
         }
            console.log(filmsWithKeyWord);
            renderGallery(filmsWithKeyWord, homeGrid);
      } catch (error) {
            console.log(error);  
      }
}

async function onGridItemClick(evt) {
      
      if (evt.target.nodeName !== "IMG") {
            return;
      }
      const movieId = evt.target.id;
      console.log(movieId);
      const theMovie = await theMovieApiService.fetchMovieInfo(movieId);
      modal.classList.remove("is-hidden");
      renderMovieCard(theMovie);
}
function renderGallery(films, grid) {
     const markup = createGalleryTemplate(films);
     grid.insertAdjacentHTML("beforeend", markup);  
}

function createGalleryTemplate(films) {
       return films.map(film => {
            // const year = film.release_date.slice(0, 4);
            const year = "2025";
            return `
               <a class="film">
                  <img class="film__poster" src="https://image.tmdb.org/t/p/w500${film.poster_path}" id = "${film.id}" alt="${film.title}" loading="lazy" />
                  <div class="film__info">
                        <p class="film__title">${film.title}</p>
                        <p class="film__genre">${film.genre_ids}<span>| ${year}</span></p>
                  </div>
               </a>`}).join("");
}

function createMovieTemplate(movie) {
     
      const movieGenres = movie.genres.map(genre => {
            return genre.name;
      }).join(", ");
      const moviePopularity = Number(movie.popularity).toFixed(1).toString();
      return `
      <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" id = "${movie.id}" alt="${movie.title}"/>
      <div class="film-card__info">
            <h2 class="film-card__title">${movie.title}</h2>
            <div class="film-card__details">
                  <p>
                        <span class="film-card__detail">Vote / Votes</span>
                        <b class = "film-card__value"><span class="film-card__value--accent">${movie.vote_average}</span>/${movie.vote_count}</b>
                   </p>
                  <p>
                        <span class="film-card__detail">Popularity</span>
                        <b class = "film-card__value">${moviePopularity}</b>
                  </p>
                  <p>
                      <span class="film-card__detail">Original Title</span>
                      <b class = "film-card__value film-card__value--upper">${movie.original_title}</b>
                  </p>
                  <p>
                      <span class="film-card__detail">Genre</span>
                      <b class = "film-card__value">${movieGenres}</b>
                  </p>
            </div>
            <h3 class="film-card__about">About</h3>
            <p class="film-card__description">${movie.overview}</p>
            <ul class="modal__option-buttons">
                  <button type="button" class="btn-modal">add to Watched</button>
                  <button type="button" class="btn-modal ">add to queue</button>
            </ul>
      </div>`
}

function renderMovieCard(movie) {
      movieCard.innerHTML = "";
      const markup = createMovieTemplate(movie);
      console.log(markup);
      movieCard.insertAdjacentHTML("beforeend", markup);  
}

