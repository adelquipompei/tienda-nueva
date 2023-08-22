import { svgDelete, hoverDelete } from "./hoverDelete.js";
import { indumentaria } from "./indumentaria.js";
// Recuperar el carrito del localStorage
let tbody = document.createElement('tbody');
let table = document.querySelector('table')
let total = document.querySelector('#total');
let carroVacio = document.querySelector('.icon-tabler-shopping-cart-off')
let carroLleno = document.querySelector('.icon-tabler-shopping-cart')



let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
carroLleno.classList.toggle('d-none', carrito.length === 0);
carroVacio.classList.toggle('d-none', carrito.length > 0);

if (carrito.length > 0) {
    








    
    let changuito = document.getElementById('changuito');
    let total = document.getElementById('total');
    let acum = 0;
    carrito.forEach(producto => {
        let tableRow = document.createElement('tr');
        tbody.appendChild(tableRow);
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        tableRow.append(td, td2, td3);
        td.textContent = producto.nombre;
        td2.textContent = producto.precio.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
        

        
        td3.classList = 'btn-delete'

        td3.innerHTML = ' '
        tableRow.addEventListener('mouseenter', () => {

            td3.innerHTML = svgDelete
            tableRow.addEventListener('mouseleave', () => {
                td3.innerHTML = '  '
            })
        })



        acum += producto.precio;
    });
    changuito.textContent = carrito.length;
    total.textContent = 'Total:  ' + acum.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS'
    });
} else {

    let sendCarro = document.querySelector('#sendCarro');
    total.textContent = 'Tu carrito está vacío ☹️'
    sendCarro.classList.add('d-none')
}

let tablaCarrito = document.querySelector('.tabla-container')
let botonCarro = document.getElementById('boton-carro')
botonCarro.addEventListener('click', () => {
    tablaCarrito.classList.toggle('d-none')
})

let crearCaja = (indumentaria) => {
    table.appendChild(tbody)
    indumentaria.forEach(productos => {
        let container = document.getElementById('container');
        let cajaProducto = document.createElement('div');
        let imagenProducto = document.createElement('img');
        let addCarrito = document.createElement('button');
        addCarrito.classList = 'btn btn-primary mb-3 btn-carrito'
        let precio = document.createElement('p');
        precio.classList = 'mb-2'
        let changuito = document.getElementById('changuito')
        imagenProducto.setAttribute('src', productos.img)
        addCarrito.textContent = 'Agregar al carrito'
        cajaProducto.classList = 'productos shadow'
        let titulo = document.createElement('h3');
        titulo.classList = 'my-0'
        titulo.textContent = productos.nombre
        precio.textContent = productos.precio.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
        container.appendChild(cajaProducto)
        cajaProducto.append(imagenProducto, titulo, precio, addCarrito)





        // Agregar al carrito--------------------------------------------------------------- 
        addCarrito.addEventListener('click', () => {
            tablaCarrito.classList.remove('d-none')
            sendCarro.classList.remove('d-none')
            carroLleno.classList.remove('d-none')
            carroVacio.classList.add('d-none')
            carrito.push(productos)
            changuito.textContent = carrito.length
            let tableRow = document.createElement('tr')
            let td = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            tbody.appendChild(tableRow)
            tableRow.append(td, td2, td3)
            localStorage.setItem('carrito', JSON.stringify(carrito));
            let acum = 0
          
            td3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  '
            hoverDelete(tableRow,td3,carrito)
            carrito.forEach(producto => {
                td.textContent = producto.nombre
                td2.textContent = producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
                acum += producto.precio
                total.textContent = 'Total: ' + acum.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
            });

        })
    });

            

}




export { carrito, table, tbody, crearCaja }


























