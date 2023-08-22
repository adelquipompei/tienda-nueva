let svgDelete = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M4 7l16 0"></path>
<path d="M10 11l0 6"></path>
<path d="M14 11l0 6"></path>
<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg>`

const hoverDelete = (tableRow, td3, carrito,acum, changuito, total) => {
  td3.classList = 'btn-delete';
  
  let btnTrash = tableRow.querySelector('.btn-delete');

  btnTrash.addEventListener('click', () => {
    // Encuentra el índice de la fila dentro de la tabla
    const indiceFila = Array.from(tableRow.parentNode.children).indexOf(tableRow);
    

    if (indiceFila !== -1) {
      // Elimina el elemento correspondiente del carrito

      carrito.splice(indiceFila, 1);

      const carritoEnLocalStorage = JSON.parse(localStorage.getItem('carrito'));
      carritoEnLocalStorage.splice(indiceFila, 1);
      localStorage.setItem('carrito', JSON.stringify(carritoEnLocalStorage));

      // Elimina la fila de la tabla
      tableRow.remove();
     //acum = 0
     carrito.forEach(producto => {
      acum = acum + producto.precio
    })
    total.textContent = 'Total:  ' + acum.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
    changuito.innerHTML = carritoEnLocalStorage.length

      if (carritoEnLocalStorage.length == 0) {
        let sendCarro = document.querySelector('#sendCarro');
        let carroVacio = document.querySelector('.icon-tabler-shopping-cart-off')
        let carroLleno = document.querySelector('.icon-tabler-shopping-cart')
        carroLleno.classList.toggle('d-none', carrito.length === 0);
        carroVacio.classList.toggle('d-none', carrito.length > 0);
        total.textContent = 'Tu carrito está vacío ☹️'
        sendCarro.classList.add('d-none')
      }
    }

  });

  tableRow.addEventListener('mouseenter', () => {
    td3.innerHTML = svgDelete;

    tableRow.addEventListener('mouseleave', () => {
      td3.innerHTML = '  ';
    });
  });
};


export { svgDelete, hoverDelete }