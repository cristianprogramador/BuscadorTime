const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');


//funcion json llamarlo
//const cargarDatos = () => {
//      fetch('content.json')
//        .then(respuesta => respuesta.json())
//        .then(respuesta => respuesta)
//}
//cargarDatos();

//Array con contenido 
const productos = [
    {nombre: 'Platano', valor: 500},
    {nombre: 'Manzana', valor: 300},
    {nombre: 'naranja', valor: 200},
    {nombre: 'Pera', valor: 600},
    {nombre: 'Mandarina', valor: 100},
    {nombre: 'Frutilla', valor: 900},
    {nombre: 'Durazno', valor: 600},
    {nombre: 'Cereza', valor: 800}
]

// Funcion de filtro (input)
const filtro = () => {
    resultado.innerHTML = []
    const texto = formulario.value.toLocaleLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
                <li>${producto.nombre} - valor: ${producto.valor}</li>    
            `
        }
    }

    // si resultado no encuentra busqueda
    if (resultado.innerHTML === ''){
        resultado.innerHTML += `
            <li>Producto no encontrado</li>
        `
    }
}

//eventos click
boton.addEventListener('click', filtro);
formulario.addEventListener('keyup', filtro);
filtro()

