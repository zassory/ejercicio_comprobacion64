const axios = require('axios');
const fs = require('fs/promises');

//const { arrayPokemon } = require('./datos');

const numeroAleatorio = (numeroMaximo) => Math.floor(Math.random() * numeroMaximo - 1);

const obtenerPokemonesPorDatos = async() => {
    try{
                                
        const texto = await fs.readFile('datost.txt','utf8');
        const textoTransformado = await JSON.parse(texto);        
        const numeroArray =  Math.abs(numeroAleatorio(textoTransformado.length));        
        const valorABuscar = textoTransformado[numeroArray];
        console.log(valorABuscar);
        return valorABuscar;

    }catch(error){
        console.log(error);
    }
}

obtenerPokemonesPorDatos();
