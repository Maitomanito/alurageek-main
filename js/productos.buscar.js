import { listandoProductos } from "https://cfonta1986.github.io/alurageek/js/app.js"

const busqueda = document.querySelector("[data-buscar]");
const lupa = document.querySelector("[data-lupa]");

    const buscar = lupa.addEventListener("click", () => {

        const value = busqueda.value;
        const buscando = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();     
        
        
        listandoProductos.listaProductos()
        .then( data => {
            const producto = data.find(productos => productos.nombre == buscando);
            if (producto) {
                window.location.href=`https://cfonta1986.github.io/alurageek/producto.unico.html?id=${producto.id}`;
            } else {
                alert ("No se encontró el producto")
            }
        })
    })
