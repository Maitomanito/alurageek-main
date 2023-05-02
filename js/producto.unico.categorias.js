import { listandoProductos } from"https://cfonta1986.github.io/alurageek/js/app.js"

const crearNuevoProducto = (foto,nombre,precio, categoria,id)=>{
    const contenedor = document.createElement("div");
    const contenido = `
            <div class="items__producto">
                <img class="items__producto--img" alt="${nombre}" src="${foto}" />
                <div class="items__contenido">
                    <h4 class="items__producto--titulo ${categoria}">${nombre}</h4>
                    <p class="items__producto--descripcion">${precio}</p>
                    <a href="https://cfonta1986.github.io/alurageek/producto.unico.html?id=${id}"><button class="items__producto--boton">Ver producto</button></a>
                </div>
            </div>
            `;
    contenedor.setAttribute("class", "items__contenedor");
    contenedor.innerHTML = contenido;    
    document.body.appendChild(contenedor);
    return contenedor;
}

const table = document.querySelector("[data-productosSimilares]");

listandoProductos.listaProductos()
    .then((data) => {
        data.forEach(( { foto, nombre, precio, categoria, id }) => {
        const nuevoProducto = crearNuevoProducto (foto, nombre, precio, categoria, id );        
        
        if (categoria == "Star Wars" ) { table.appendChild(nuevoProducto);}

});
}).catch((error) => alert("Ocurrio un error"));
