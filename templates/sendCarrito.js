const sendCarrito = (carrito) => {
    let btnSend = document.querySelector('#sendCarro') 
    btnSend.addEventListener('click',() => {
       
        console.log(carrito)
        if (carrito.length > 0){
           localStorage.removeItem('carrito');//borra lo que hay en el carrito
           location.reload()//recarga la la pagina al presionar boton
        }

    })
}

export { sendCarrito }