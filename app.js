


    //Most Popular Movees:


const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


    //The Moves You Search For :

const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const searchInput=document.querySelector('.searchInput')
    const btn=document.querySelector('.btn')



    //init Call:
     
    const getMovies= async(api)=>{
const response= await fetch(api)
const data= await response.json();


showMovies(data.results)



    }


    const showMovies=(data)=>{

        const movies=document.querySelector('.movies').innerHTML='';




        data.forEach((movie)=>{

            


            const box=document.createElement('div')
            box.classList.add('box')
            box.innerHTML=` <div class="box1 box">
          <img
            src="${IMGPATH+movie.poster_path}"
            alt=""
            class="img"
          />

          <div class="overlay">
            <div class="title-rating">
              <h2 class="title">${movie.title}</h2>
              <h2 class="rating">${movie.vote_average}</h2>
            </div>

            <div class="overview">
              <h3>overview</h3>
              <p>
                ${movie.overview}
              </p>
            </div>
          </div>
        </div>`;
            
        const movies=document.querySelector('.movies').appendChild(box)


        })



    }










  

    searchInput.addEventListener('keyup',(event)=>{

       if(event.target.value!=''){

        getMovies(SEARCHAPI+event.target.value)

       } else{

        getMovies(APIURL)
       }

    })
    getMovies(APIURL);