'use strict'
let nodoEntradaTitle = document.querySelector ( '#entradatitle');

nodoEntradaTitle.addEventListener( 'keyup', function(info_evento){
    console.log('Pulso la tecla')
    console.log(info_evento)

    let valorEntradaTitle = nodoEntradaTitle.value
    
    console.log( valorEntradaTitle );

    let pattern_espacios = / {1,}/gi// hacemos una expresión regular porque lo que queremos es que un espacio o más lo sustituya siempre por un único guión, no que todos los espacios los sustituya por guiones, además si queremos que sustituya varias cosas, por ejemplo espacios y guiones hay que crear un grupo, el grupo se crea con [ ]: let pattern_espacios = /[ -]{1,}/gi
    let pattern_astericos = /[, *]/gi//si queremos poner un asterisco, tendriamos que poner / seguido de \ porque sino sale como un comentario, aunque en este caso tiene más sentido hacerlo directamente, sin expresión regular porque queremos que todos los asteriscos se remplacen por la nada que es "", pero en este caso lo hacemos porque queremos un grupo, tanto coma como asterisco

    let valorEntradaTitleReplace = valorEntradaTitle.replaceAll( pattern_espacios, '-' ).replaceAll(pattern_astericos,"");//remplazo unos caracteres por otros

    let valorTexto = valorEntradaTitleReplace.toLowerCase()//lo hago todo minusculas
        
    let nodoSlug = document.querySelector('#slug')
    nodoSlug.innerHTML = `<div> ${valorTexto} </div>`

    valorEntradaTitle = "";//vacío el input
       
});