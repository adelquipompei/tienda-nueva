let svgDelete =  `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M4 7l16 0"></path>
<path d="M10 11l0 6"></path>
<path d="M14 11l0 6"></path>
<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg>`

const hoverDelete = (tableRow, td3, carrito) => {
    td3.classList = 'btn-delete';
    
    let btnTrash = tableRow.querySelector('.btn-delete');
  
    btnTrash.addEventListener('click', () => {
      // Encuentra el índice de la fila dentro de la tabla
      const indiceFila = Array.from(tableRow.parentNode.children).indexOf(tableRow);
  
      if (indiceFila !== -1) {
        // Elimina el elemento correspondiente del carrito
        
        carrito.splice(indiceFila, 1);
        console.log(carrito)
        // Elimina la fila de la tabla
        tableRow.remove();
      }
    });
  
    tableRow.addEventListener('mouseenter', () => {
      td3.innerHTML = svgDelete;
  
      tableRow.addEventListener('mouseleave', () => {
        td3.innerHTML = '  ';
      });
    });
  };
  

export {svgDelete,hoverDelete}