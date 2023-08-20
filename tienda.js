

let indumentaria = [
    {
        id: 1,
        nombre: 'Pantalon',
        img: 'img/pantalon.jpg',
        precio: 15000

    },
    {
        id: 2,
        nombre: 'Remera',
        img: 'img/remera.jpg',
        precio: 6545

    },
    {
        id: 3,
        nombre: 'Zunga',
        img: 'img/zunga.jpg',
        precio: 5656

    },
    {
        id: 4,
        nombre: 'Buzo',
        img: 'img/buzos.jpg',
        precio: 18320

    },
    {
        id: 5,
        nombre: 'Campera',
        img: 'img/campera.jpg',
        precio: 66546

    }

]
let carrito = []
let table = document.querySelector('table')
let tbody = document.createElement('tbody')
table.appendChild(tbody)
let crearCaja = (indumentaria) => {
    indumentaria.forEach(productos => {
        let container = document.getElementById('container');
        let cajaProducto = document.createElement('div');
        let imagenProducto = document.createElement('img');
        let addCarrito = document.createElement('button');
        addCarrito.classList = 'btn btn-primary mb-3'
        let precio = document.createElement('p');
        precio.classList = 'my-2'
        let changuito = document.getElementById('changuito')

        imagenProducto.setAttribute('src', productos.img)
        addCarrito.textContent = 'Agregar al carrito'
        cajaProducto.classList = 'productos shadow'
        let titulo = document.createElement('h3');
        titulo.classList = 'my-2'
        titulo.textContent = productos.nombre
        precio.textContent = '$' + productos.precio


        container.appendChild(cajaProducto)
        cajaProducto.append(titulo, imagenProducto, precio, addCarrito)


        let botonCarro = document.getElementById('boton-carro')
        botonCarro.addEventListener('click',() => {
            tablaCarrito.classList.toggle('d-none')
        })
        let tablaCarrito = document.querySelector('.tabla-container')
        addCarrito.addEventListener('click', () => {
            tablaCarrito.classList.remove('d-none')
            carrito.push(productos)
            changuito.textContent = carrito.length
            let tableRow = document.createElement('tr')
            let td = document.createElement('td')
            let td2 = document.createElement('td')
            tbody.appendChild(tableRow)
            tableRow.append(td,td2)
            
            console.log(carrito)
            let total = document.getElementById('total')
            let acum = 0
            carrito.forEach(producto => {
                td.textContent = producto.nombre
                td2.textContent = '$' + producto.precio
                acum += producto.precio
                total.textContent = 'Total: $' + acum
              
                




            });
        })
    });
}



let img = document.querySelector('.img-fluid')
let nav = document.querySelector('.navbar')
window.addEventListener('scroll',() => {
    let scrall = window.scrollY
    img.style.transform = `translateY(${scrall/2}px)`
    if(scrall > 100){
        nav.classList.remove('bg-transparent')
        nav.classList.add('bg-primary')
    }else{
        nav.classList.add('bg-transparent')
        nav.classList.remove('bg-primary')
    }
    
})











crearCaja(indumentaria)

