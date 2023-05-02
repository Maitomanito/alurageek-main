const listaUsuario = () => {
    return fetch ("https://cfonta1986.github.io/alurageek/usuarios").then((respuesta) => {
        return respuesta.json();
    });
};

const eliminarUsuario = (id) => {
    return fetch (`https://cfonta1986.github.io/alurageek/usuarios/${id}`, {
        method: "DELETE",
    })
}

const crearUsuario = (usuario, email, contraseña) => {
    return fetch ("https://cfonta1986.github.io/alurageek/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, email, contraseña, id: uuid.v4()}),
    })
}

const detalleUsuario = (id) => {
    return fetch ( `http://localhost:3000/usuarios/${id}`).then( respuesta => respuesta.json() )
}

const actualizarUsuario = (usuario, email, contraseña, id) => {
    return fetch ( `https://cfonta1986.github.io/alurageek/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, email, contraseña })
    }).then(respuesta => respuesta);
}

export const listandoUsuarios = {
    listaUsuario,
    eliminarUsuario,
    crearUsuario,
    detalleUsuario,
    actualizarUsuario,
};
