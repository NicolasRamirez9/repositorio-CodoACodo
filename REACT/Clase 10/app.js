// funcion para cargar las peliculas

window.addEventListener("load",() =>{
    cargarPeliculas();
})

let pagina = 1 // variable para controlar la paginacion

// capturar los botones

let btnAnterior  = document.querySelector("#btnAnterior")
let btnSiguiente = document.querySelector("#btnSiguiente")

//funcion anterior

btnAnterior.addEventListener("click",()=>{
    if(pagina > 1){
        // pagina = pagina - 1
        pagina-=1; 
        //llamar a la funcion que cargue las paginas
        cargarPeliculas();
    }
})

//funcion siguiente

btnSiguiente.addEventListener("click",()=>{
    if(pagina > 500){
        // pagina = pagina - 1
        pagina = 1; 
    }else
    {
        pagina +=1;
        //llamar a la funcion que cargue las paginas
        cargarPeliculas();
    }   
})

//funcion que cargue las pelis

const cargarPeliculas = async (idPelicula) => {

    try {
        const respuesta = await axios (`https://api.themoviedb.org/3/movie/popular?api_key=316e43cc50e47d0a95df9663432d9de7&language=es-MX&page=${pagina}`);
        console.log(respuesta.data);
        if(respuesta.status === 200){
            let peliculas = "";

            respuesta.data.results.forEach((pelicula)=> {
                peliculas+= `<div class = "pelicula">
                <img class = "poster" src ="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" />
                <h3 class="titulo">${pelicula.title}</h3>
                </div>`
            });

            document.querySelector(".contenedor").innerHTML = peliculas;

    }else if(respuesta.status === 404){
        console.log("error 404 nos vemos en otro lado");
    }
    } catch (error) {
        console.log(error);
    }
};