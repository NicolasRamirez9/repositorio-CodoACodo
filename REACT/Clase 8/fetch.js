const getNamefetch = (id) => {                                  //traigo el     

    try {
        fetch (`https://rickandmortyapi.com/api/character/${id}`)         //episodio 
.then(res=>{                                                                    //Lo guardo en un 
    return res.json();                                                           //json
})
.then(personaje => {
   // Muestro la info del json console.log(episodio);
   // Muestro una info puntual del json, en este caso el episodio console.log(episodio.name);

    fetch(`https://rickandmortyapi.com/api/episode/${personaje.id}`)           //accedo a la info de un personaje
    .then(res=>{
        return res.json();                                                       //lo guardo en un json   
    })
    .then(episodio =>{
        console.log(`En el episodio ${personaje.episode} de la temporada ${episodio.episode}, aparece ${personaje.name}`);  //uso la info para hacer lo que quiero utilizando backticks
        });
    });
        
    } catch (error) {
        console.log(error);
    }
}
getNamefetch(34)