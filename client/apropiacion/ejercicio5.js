export const obtenerPublicacion = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/users/${id}`);
    if (!respuesta.ok) throw new Error("Error");
    return await respuesta.json();
};

export const obtenerPublicaciones = async () => {
    const respuesta = await fetch(`http://localhost:3000/users`);
    if (!respuesta.ok) throw new Error("Error");
    return await respuesta.json();
};