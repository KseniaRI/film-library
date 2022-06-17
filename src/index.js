import TheMovieApiService from './js/themovie-service';
import { initializeApp } from 'firebase/app';
import {
      getAuth,
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      signInWithPhoneNumber
} from 'firebase/auth';
import { getDatabase, onValue, ref, push, get, child } from 'firebase/database';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firebaseConfig = {
  apiKey: "AIzaSyBAGTQ42yHhlq8cz77MV0dJG1B6OSt6PVk",
  authDomain: "filmoteca-db.firebaseapp.com",
  databaseURL: "https://filmoteca-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteca-db",
  storageBucket: "filmoteca-db.appspot.com",
  messagingSenderId: "11660297526",
  appId: "1:11660297526:web:617fc6ad62f4d10da81f97"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);


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
const movieModal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const closeAuthBtn = document.querySelector('[data-auth-close]');
const paginationNextBtn = document.getElementById('next-page');
const paginationPrevBtn = document.getElementById('prev-page');
const pagesList = document.querySelector('.pagination__page-buttons');
const pagination = document.querySelector('.pagination');
const authModal = document.querySelector('[data-auth]');
const authWrap = document.querySelector('.auth__wrap');
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');
const successMsg = document.querySelector('.auth__success-msg');
const authLogout = document.querySelector('.auth__logout');



const libraryWatchedBtn = document.querySelector('.btn-watched');
const libraryQueueBtn = document.querySelector('.btn-queue');

const genresInfo = [
  { id: 12, name: 'Adventure' },
  { id: 14, name: 'Fantasy' },
  { id: 16, name: 'Animation' },
  { id: 18, name: 'Drama' },
  { id: 27, name: 'Horror' },
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 36, name: 'History' },
  { id: 37, name: 'Western' },
  { id: 53, name: 'Thriller' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 878, name: 'Science Fiction' },
  { id: 9648, name: 'Mystery' },
  { id: 10402, name: 'Music' },
  { id: 10749, name: 'Romance' },
  { id: 10751, name: 'Family' },
  { id: 10752, name: 'War' },
  { id: 10770, name: 'TV Movie' },
];
function takeGenreById(genresId) {
      return genresInfo.filter(genreInfo => genresId.includes(genreInfo.id))
            .map(genreInfo => genreInfo.name)
            .join(", "); 
      };

searchForm.addEventListener("submit", onSearch);
homeBtn.addEventListener("click", onHomePageClick);
libraryBtn.addEventListener("click", onLibraryPageClick);
btnLogin.addEventListener("click", loginEmailPassword);
btnSignup.addEventListener("click", createAccount);
btnLogout.addEventListener("click", logout);
libraryWatchedBtn.addEventListener("click", onlibraryBtnClick);
libraryQueueBtn.addEventListener("click", onlibraryBtnClick);

paginationNextBtn.addEventListener("click", onNext);
paginationPrevBtn.addEventListener("click", onPrev);
pagesList.addEventListener("click", onPaginationBtnClick);

homeBtn.parentElement.classList.add('nav__item--active');
optionButtons.classList.add("hidden");
filmGrid.classList.add("home-grid");

onHomePageLoad();

filmGrid.addEventListener("click", onGridItemClick);
closeModalBtn.addEventListener('click', toggleMovieModal); 
closeAuthBtn.addEventListener('click', closeAuthModal);


let currentPage = null;
let pages = [];
let totalPages = 0;
const paginationSelection = 5;
let searchByKeyWord = false;
let userId = null;


function closeAuthModal() {
      authModal.classList.toggle('is-hidden');
}

async function logout() {
      await signOut(auth);
}

async function monitorAuthState() {
      onAuthStateChanged(auth, (user) => {
  if (user) {        
        successMsg.textContent = `You've entered with email ${user.email}`;
        authWrap.classList.add('hidden');
        authLogout.classList.remove('hidden');
        closeAuthBtn.classList.remove('hidden');
        userId = user.uid;
        console.log(userId);
  } else {
        authWrap.classList.remove('hidden');
        authLogout.classList.add('hidden');
        closeAuthBtn.classList.add('hidden');
  }
});
}

async function loginEmailPassword() {
      const loginEmail = txtEmail.value;
      const loginPassword = txtPassword.value;
      try {
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            successMsg.textContent = `You've signed in with email ${userCredential.user.email}`;
      } catch(error) {
            Notify.failure(`${error.message}`);
}
}

async function createAccount() {
      const loginEmail = txtEmail.value;
      const loginPassword = txtPassword.value;
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
     successMsg.textContent = `You've created account with email ${userCredential.user.email}`;
      } catch(error) {
            Notify.failure(`${error.message}`);
}
}

async function onLibraryPageClick() {
      pagesList.innerHTML = "";
      homeGrid.innerHTML = "";
      headerEl.classList.replace("header", "library-header");
      libraryBtn.parentNode.classList.add('nav__item--active');
      homeBtn.parentNode.classList.remove('nav__item--active');
      formWrap.classList.add("hidden");
      optionButtons.classList.remove("hidden");
      filmGrid.classList.remove("home-grid");
      filmGrid.classList.add("library-grid");
 

       try {
            const { results, total_pages } = await theMovieApiService.fetchTrendingMovies(1);
           
            renderGallery(results, homeGrid);
             
            totalPages = total_pages; 

             renderPagination(1, paginationSelection);
             pagination.classList.remove('hidden');
            // searchByKeyWord = false;
      } catch(error) {
            console.log(error);  
              }  
}

function showAuthModal() {
       authModal.classList.remove('is-hidden');
       closeAuthBtn.classList.add('hidden');
  }

function onNext() {  
      addSpinner();

       if (Number(currentPage.textContent) % paginationSelection === 0) {
            
            const numOfFirstBtn = Number(currentPage.textContent) + 1;
            pagesList.innerHTML = "";
            renderPagination(numOfFirstBtn, paginationSelection);
            searchByKeyWord === false ? renderNewTrendsPage(numOfFirstBtn) : renderNewQueryPage(numOfFirstBtn);

            return;
      }
            currentPage = currentPage.nextElementSibling;
            currentPage.classList.add('pagination__activ');
            currentPage.previousElementSibling.classList.remove('pagination__activ');
       
            const pageNumber = currentPage.textContent;
      
            searchByKeyWord === false ? renderNewTrendsPage(pageNumber) : renderNewQueryPage(pageNumber);
      
      
       if (Number(currentPage.textContent) === totalPages) {
            paginationNextBtn.disabled = true;
      } else if (Number(currentPage.textContent) === 1) {
              paginationPrevBtn.disabled = true;
           
      } else {
           paginationPrevBtn.disabled = false;
      }
      
}

function onPrev() {
      addSpinner();
     
       if ((Number(currentPage.textContent) - 1) % paginationSelection === 0) {
            
            const numOfLastBtn = Number(currentPage.textContent) - 1;
             pagesList.innerHTML = "";
             const numOfFirstBtn = numOfLastBtn - paginationSelection + 1;
             renderPagination(numOfFirstBtn, paginationSelection);
             
             searchByKeyWord === false ? renderNewTrendsPage(numOfLastBtn) : renderNewQueryPage(numOfLastBtn);
          
             currentPage = pagesList.lastElementChild;
             pagesList.firstElementChild.classList.remove('pagination__activ');
             currentPage.classList.add('pagination__activ');
            return;
      }

      currentPage.classList.remove('pagination__activ');
      currentPage = currentPage.previousElementSibling;
      currentPage.classList.add('pagination__activ');
      const pageNumber = currentPage.textContent;
      
       searchByKeyWord === false ? renderNewTrendsPage(pageNumber) : renderNewQueryPage(pageNumber);
      
       if (Number(currentPage.textContent) === 1) {
              paginationPrevBtn.disabled = true;
           
      } else {
           paginationPrevBtn.disabled = false;
      } 
      
}

function renderPagination(numOfStartBtn, selection) {
            
      const markup = createPaginationTemplate(numOfStartBtn, numOfStartBtn + selection - 1);
            pagesList.insertAdjacentHTML("beforeend", markup);   
            pages = document.querySelectorAll('.page');
            currentPage = pages[0];
            currentPage.classList.add("pagination__activ");
}   

async function renderNewTrendsPage(pageNum) {
      homeGrid.innerHTML = "";
      const { results, total_pages } = await theMovieApiService.fetchTrendingMovies(pageNum);
      removeSpinner();
      renderGallery(results, homeGrid); 
}

async function renderNewQueryPage(pageNum) {
      homeGrid.innerHTML = "";
      const { results, total_pages } = await theMovieApiService.fetchMoviesByKeyWord(pageNum);
      removeSpinner();
      renderGallery(results, homeGrid); 
}

function onPaginationBtnClick(evt) {
      addSpinner();
      currentPage.classList.remove('pagination__activ');
      if (evt.target.nodeName !== "BUTTON") {
            return;
      }
      currentPage = evt.target;
      currentPage.classList.add('pagination__activ');

      const pageNumber = currentPage.textContent;
      
      searchByKeyWord === false ? renderNewTrendsPage(pageNumber) : renderNewQueryPage(pageNumber);
      
       if (Number(currentPage.textContent) === 1) {
              paginationPrevBtn.disabled = true;
           
      } else {
           paginationPrevBtn.disabled = false;
      } 
}

function toggleMovieModal() {   
      movieModal.classList.toggle('is-hidden');  
}
 
function onHomePageClick() {
      homeGrid.innerHTML = "";
      pagesList.innerHTML = "";
      onHomePageLoad();
      headerEl.classList.replace("library-header", "header");
      homeBtn.parentElement.classList.add('nav__item--active');
      libraryBtn.parentNode.classList.remove('nav__item--active');
      optionButtons.classList.add("hidden");
      formWrap.classList.remove("hidden");
      filmGrid.classList.add("home-grid");
      filmGrid.classList.remove("library-grid");
}
function addSpinner() {
      const spinner = document.querySelector('.spinner');
      spinner.classList.remove('hidden');
}
function removeSpinner() {
      const spinner = document.querySelector('.spinner');
      spinner.classList.add('hidden');
}
async function onHomePageLoad() {
      showAuthModal();
      monitorAuthState();
      removeSpinner();
     
      try {
            const { results, total_pages } = await theMovieApiService.fetchTrendingMovies(1);
           
            renderGallery(results, homeGrid);
             
            totalPages = total_pages; 
            pagination.classList.remove('hidden');
            renderPagination(1, paginationSelection);
            searchByKeyWord = false;
      } catch(error) {
            console.log(error);  
              }  
}    

function createPaginationTemplate(btnNumStart, btnNumEnd) {
      let array = [];
      for (let i = btnNumStart; i <= btnNumEnd; i += 1){
            array.push(`<button type="button" class="pagination__btn page">${i}</button>`);
      }
      return array.join("");
     
}
async function onSearch(evt) {
      addSpinner();

      evt.preventDefault();
       
      theMovieApiService.query = evt.currentTarget.elements.searchQuery.value;
     
      alertGalleryMsg.textContent = "";
      alertHeaderMsg.textContent = "";
      
      if (theMovieApiService.query === "") {
            alertGalleryMsg.textContent = "Oops, something went wrong!";
            removeSpinner();
            homeGrid.innerHTML = "";
            pagination.classList.add("hidden");
      }



      try {
            const { results, total_pages } = await theMovieApiService.fetchMoviesByKeyWord(1);
            pagination.classList.remove("hidden");
            if (results.length === 0) {
                  alertHeaderMsg.textContent = "Search result not successful. Enter the correct movie name and";
                  pagination.classList.add('hidden');
         }
            // console.log(results);
           
            totalPages = total_pages;
            pagesList.innerHTML = "";
            homeGrid.innerHTML = "";
            removeSpinner();
            renderGallery(results, homeGrid);
            renderPagination(1, paginationSelection);
            searchByKeyWord = true;

      } catch (error) {
            console.log(error);  
      }
}

async function onGridItemClick(evt) {
      
      if (evt.target.nodeName !== "IMG") {
            return;
      }
      const movieId = evt.target.id;
      const theMovie = await theMovieApiService.fetchMovieInfo(movieId);
      movieModal.classList.remove("is-hidden");
      renderMovieCard(theMovie);
}
function renderGallery(films, grid) {
      const markup = createGalleryTemplate(films);
     grid.insertAdjacentHTML("beforeend", markup);  
}

function checkReleaseDate(releaseDate) {
      let releaseYear;
      releaseDate ? releaseYear = releaseDate.slice(0, 4) : releaseYear = "unknown year";
      return releaseYear;
}
function createGalleryTemplate(films) {
      
      return films.map(film => {
            let genres = "";
            if (film.genre_ids) {
                  genres = takeGenreById(film.genre_ids);
            } else {
                  genres = film.genres.map(genre => {
            return genre.name;
      }).join(", ");
            }
           
            const year = checkReleaseDate(film.release_date);
           
            return `
               <a class="film">
                  <img class="film__poster" src="https://image.tmdb.org/t/p/w500${film.poster_path}" id = "${film.id}" alt="${film.title}" loading="lazy" />
                  <div class="film__info">
                        <p class="film__title">${film.title}</p>
                        <p class="film__genre">${genres}<span> | ${year}</span></p>
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
                  <button type="button" class="btn-modal" id="watched">add to Watched</button>
                  <button type="button" class="btn-modal" id="queue">add to queue</button>
            </ul>
      </div>`
}

let movieId = null;
let myMovie = null;

function renderMovieCard(movie) {
      movieCard.innerHTML = "";
      const markup = createMovieTemplate(movie);
      movieCard.insertAdjacentHTML("beforeend", markup); 
      const addWatchedBtn = document.getElementById('watched');
      const addQueuedBtn = document.getElementById('queue');

      movieId = movie.id;
      myMovie = movie;
      addWatchedBtn.addEventListener("click", onModalBtnClick);
      addQueuedBtn.addEventListener("click", onModalBtnClick);
}
            
// ---- firebase

function onModalBtnClick(evt) {
      const path = evt.currentTarget.id;
      const dbRef = ref(getDatabase());

      get(child(dbRef, `users/${userId}/${path}`)).then((snapshot) => {
       if (snapshot.exists()) {
            const data = snapshot.val();
            const array = Object.values(data);
            const arrayOfFilms = array.map(elem => elem.film);
            const ids = arrayOfFilms.map(movie => movie.id);
            if (!ids.includes(myMovie.id)) {
                  writeMovieData(userId, myMovie, `/${path}`);
            }
      } else {
             writeMovieData(userId, myMovie, `/${path}`);
}
}).catch((error) => {
  console.error(error);
});

}
       
function writeMovieData(userId, movie, path) {
  push(ref(db, 'users/' + userId + `${path}`), {
    film: movie,
  });
}

function onlibraryBtnClick(evt) {
      
      let moviesRef = null;
      if (evt.currentTarget.classList.contains('btn-watched')) {
             moviesRef = ref(db, 'users/' + userId + '/watched');
      }
      if (evt.currentTarget.classList.contains('btn-queue')) {
             moviesRef = ref(db, 'users/' + userId + '/queue');
      }
     
      onValue(moviesRef, (snapshot) => {
            const data = snapshot.val();
            const array = Object.values(data);
            const arrayOfFilms = array.map(elem => elem.film);

            const libraryGrid = document.querySelector('.library-grid');
            libraryGrid.innerHTML = "";
            renderGallery(arrayOfFilms, libraryGrid);
            
            pagination.classList.add('hidden');
      })
}


//------ localStorage 
// let myMovies = [];
//
// let myLibrary = {
//       uId: userId,
//       movies: myMovies,
// };

// function onToWatchedBtnClick() {
      // const moviesIds = myMovies.map(movie => movie.id);
      // if (!moviesIds.includes(myMovie.id)) {
      //       myMovies.push(myMovie);
      // }
     
      //  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
     
// }

// function onlibraryWatchedClick() {
//       const savedWatchedMovies = localStorage.getItem("myLibrary");
//       const parsedMovieData = JSON.parse(savedWatchedMovies);
//       const watchedMovies = parsedMovieData.movies;
//       const libraryGrid = document.querySelector('.library-grid');
      
//       renderGallery(watchedMovies, libraryGrid);
            
//      }







