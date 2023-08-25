//import { indumentaria } from "./templates/indumentaria.js"
import { efectoParallax } from "./templates/parallax.js"
import { carrito, table, tbody, crearCaja } from "./templates/crearCaja.js"
import { sendCarrito } from "./templates/sendCarrito.js"






efectoParallax()
fetch('http://localhost:3000/obtener-productos')
.then(data => data.json())
.then(indumentaria => crearCaja(indumentaria))
.catch((error) => console.log(error))
sendCarrito(carrito)



















