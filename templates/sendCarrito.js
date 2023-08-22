const sendCarrito = (carrito) => {
    let btnSend = document.querySelector('#sendCarro') 
    btnSend.addEventListener('click',() => {
    console.log(carrito)   
    //localStorage.removeItem('carrito');//borra lo que hay en el carrito
    //location.reload()


    })
}

export { sendCarrito }