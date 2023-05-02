const listaProductos = () => {
    return fetch ("https://cfonta1986.github.io/alurageek/db.json").then((respuesta) => {
        return respuesta.json();
    });
};

const crearProductos = (foto,categoria,nombre,precio,descripcion) => {
    return fetch ("https://cfonta1986.github.io/alurageek/db.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({foto, categoria, nombre, precio, descripcion, id: uuid.v4() }),        
    })
}

const eliminarProducto = (id) => {
    return fetch (`https://cfonta1986.github.io/alurageek/db.json/productos/${id}`, {
        method: "DELETE",
})
}

const detalleProducto = (id) => {
    return fetch (`https://cfonta1986.github.io/alurageek/db.json/productos/${id}`).then( respuesta => respuesta.json() )
}

const actualizarProducto = (foto, categoria, nombre, precio, descripcion, id) => {
    return fetch (`https://cfonta1986.github.io/alurageek/db.json/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ foto, categoria, nombre, precio, descripcion })
    })
    .then(respuesta => respuesta);
    
}

export const listandoProductos = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
}

// clase 3 borrando cliente hacer
