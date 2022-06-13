import TheMovieApiService from './js/themovie-service';
import { initializeApp } from 'firebase/app';
import {
      getAuth,
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firebaseConfig = {
  apiKey: "AIzaSyBAGTQ42yHhlq8cz77MV0dJG1B6OSt6PVk",
  authDomain: "filmoteca-db.firebaseapp.com",
  projectId: "filmoteca-db",
  storageBucket: "filmoteca-db.appspot.com",
  messagingSenderId: "11660297526",
  appId: "1:11660297526:web:617fc6ad62f4d10da81f97"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

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
const authModal = document.querySelector('[data-auth]');
const authWrap = document.querySelector('.auth__wrap');
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');
const successMsg = document.querySelector('.auth__success-msg');
const authLogout = document.querySelector('.auth__logout');

searchForm.addEventListener("submit", onSearch);
homeBtn.addEventListener("click", onHomePageClick);
libraryBtn.addEventListener("click", onLibraryPageClick);
btnLogin.addEventListener("click", loginEmailPassword);
btnSignup.addEventListener("click", createAccount);
btnLogout.addEventListener("click", logout);

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

function closeAuthModal() {
      authModal.classList.toggle('is-hidden');
}

async function logout() {
      await signOut(auth);
}

async function monitorAuthState() {
      onAuthStateChanged(auth, (user) => {
  if (user) {
        console.log(user);
        
        successMsg.textContent = `You've entered with email ${user.email}`;
        authWrap.classList.add('hidden');
        authLogout.classList.remove('hidden');
        closeAuthBtn.classList.remove('hidden');
      //   const uid = user.uid;

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

function onLibraryPageClick() {
      pagesList.innerHTML = "";
      homeGrid.innerHTML = "";
      headerEl.classList.replace("header", "library-header");
      libraryBtn.parentNode.classList.add('nav__item--active');
      homeBtn.parentNode.classList.remove('nav__item--active');
      formWrap.classList.add("hidden");
      optionButtons.classList.remove("hidden");
      filmGrid.classList.remove("home-grid");
      filmGrid.classList.add("library-grid");
}

 function showAuthModal() {
       authModal.classList.remove('is-hidden');
       closeAuthBtn.classList.add('hidden');
  }

function onNext() {  

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
      renderGallery(results, homeGrid); 
}

async function renderNewQueryPage(pageNum) {
      homeGrid.innerHTML = "";
      const { results, total_pages } = await theMovieApiService.fetchMoviesByKeyWord(pageNum);
      renderGallery(results, homeGrid); 
}

function onPaginationBtnClick(evt) {
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

async function onHomePageLoad() {
      showAuthModal();
      monitorAuthState();
      try {
            const { results, total_pages } = await theMovieApiService.fetchTrendingMovies(1);
            renderGallery(results, homeGrid);
            totalPages = total_pages; 

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
      evt.preventDefault();
      theMovieApiService.query = evt.currentTarget.elements.searchQuery.value;
      console.log(theMovieApiService.query);
      
     
      alertGalleryMsg.textContent = "";
      alertHeaderMsg.textContent = "";

      if (theMovieApiService.query === "") {
            alertGalleryMsg.textContent = "Oops, something went wrong!";
      }
      try {
            const { results, total_pages } = await theMovieApiService.fetchMoviesByKeyWord(1);
            if (results.length === 0) {
                  alertHeaderMsg.textContent = "Search result not successful. Enter the correct movie name and";
         }
            console.log(results);
            totalPages = total_pages;
            pagesList.innerHTML = "";
            homeGrid.innerHTML = "";
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
      console.log(movieId);
      const theMovie = await theMovieApiService.fetchMovieInfo(movieId);
      movieModal.classList.remove("is-hidden");
      renderMovieCard(theMovie);
}
function renderGallery(films, grid) {
     const markup = createGalleryTemplate(films);
     grid.insertAdjacentHTML("beforeend", markup);  
}

function createGalleryTemplate(films) {
       return films.map(film => {
            const year = film.release_date.slice(0, 4);
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

