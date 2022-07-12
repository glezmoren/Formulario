'use strict'

//Escribiendo en el input de texto
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
        
    let nodoSlug = document.querySelector('#slug')//Selecciono slug
    nodoSlug.innerHTML = `<div> ${valorTexto} </div>`//pinto en slug

    
    let contadorCaracteresUno = valorEntradaTitle.length; //cuento los caracteres
    
    
    let nodoCaracteresUno = document.querySelector('#caracteresuno')//selecciono
    nodoCaracteresUno.innerHTML = `<div> ${contadorCaracteresUno} caracteres </div>` //pinto los caracteres


    let contadorPalabrasUno = valorEntradaTitle.trim().split( pattern_espacios );//cuento las palabras con split por los espacios. Pongo trim para que no me cuente los espacios del principio y del final como palabras y pongo la expresion regular de pattern_espacios para que solo me cuente un espacio independientemente de cuántos tecleee

    let nodoPalabrasUno = document.querySelector('#palabrasuno')//selecciono
    nodoPalabrasUno.innerHTML = `<div> ${contadorPalabrasUno.length} palabras </div>` //pinto las palabras

       
});

//Escribiendo en el input de publicación 

let nodoEntradaPubli = document.querySelector ( '#entradapubli');

nodoEntradaPubli.addEventListener( 'keyup', function(info_evento){
    console.log('Pulso la tecla')
    console.log(info_evento)

    let valorEntradaPubli = nodoEntradaPubli.value
    
    console.log( valorEntradaPubli );

    let pattern_espacios = / {1,}/gi
    
    let contadorCaracteresDos = valorEntradaPubli.length; //cuento los caracteres
    
    
    let nodoCaracteresDos = document.querySelector('#caracteresdos')//selecciono
    nodoCaracteresDos.innerHTML = `<div> ${contadorCaracteresDos} caracteres </div>` //pinto los caracteres


    let contadorPalabrasDos = valorEntradaPubli.trim().split( pattern_espacios );//cuento las palabras con split por los espacios. Pongo trim para que no me cuente los espacios del principio y del final como palabras y pongo la expresion regular de pattern_espacios para que solo me cuente un espacio independientemente de cuántos tecleee

    let nodoPalabrasDos = document.querySelector('#palabrasdos')//selecciono
    nodoPalabrasDos.innerHTML = `<div> ${contadorPalabrasDos.length} palabras </div>` //pinto las palabras

      
});
//quiero que el botón me cambie el valor del textarea cambie a mayúsculas 
let nodoBtnMayus = document.querySelector( '#btnmayus' );

nodoBtnMayus.addEventListener('click', function(){
        let valorMayus = nodoEntradaPubli.value.toUpperCase();
        nodoEntradaPubli.value = valorMayus ; //los inputs y los textarea no tienen innerHTML tienen value
});


//quiero que el botón me cambie el valor del textarea cambie a minúsculas 
let nodoBtnMinus = document.querySelector( '#btnminus' );

nodoBtnMinus.addEventListener('click', function(){
        let valorMinus = nodoEntradaPubli.value.toLowerCase();
        nodoEntradaPubli.value = valorMinus ; //los inputs y los textarea no tienen innerHTML tienen value
});
