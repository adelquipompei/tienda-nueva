const sendCarrito = (carrito) => {
    let btnSend = document.querySelector('#sendCarro') 
    btnSend.addEventListener('click',() => {
        console.log(carrito)
        localStorage.removeItem('carrito');
    })
}

export { sendCarrito }