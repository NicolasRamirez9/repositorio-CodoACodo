let clasificaciones = ["Marcos","Franco","Agostina","Leon","Juan Cruz","Eduardo"]

clasificaciones.shift()
clasificaciones.shift()
clasificaciones.shift()
clasificaciones.shift()
clasificaciones.unshift("Alicia","Marcos","Julieta","Martina","Franco","Leon","Agostina")
clasificaciones.pop()


function mostrarClasificacion()
{
    clasificaciones.forEach((element,i)=>{
        console.log(`${element} está en la posicion ${i+1}`);
    })
}
console.log(mostrarClasificacion());