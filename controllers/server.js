const { request, response } =require('express');

const directorio = 'C:/Users/Usuario/Documents/Proyects/03-Expanding_Cards/'

const pageGet = ( req = request, res = response) =>{
    
    res.status(200).sendFile(directorio + 'public/index.html');
}

module.exports = {pageGet};