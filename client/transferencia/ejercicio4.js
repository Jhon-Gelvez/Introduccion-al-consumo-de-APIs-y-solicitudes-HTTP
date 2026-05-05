export const eliminarConValidacion = async (id) => {

    const resComentarios = await fetch(`http://localhost:3000/posts/${id}/comments`);
    if (!resComentarios.ok) throw new Error("Error al obtener comentarios");
    const comentarios = await resComentarios.json();

    if (comentarios.length > 0) {
        return {
            mensaje: "No se puede eliminar la publicación porque tiene comentarios"
        };
    }

    const resDelete = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE"
    });

    if (!resDelete.ok) throw new Error("Error al eliminar");

    const resValidacion = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await resValidacion.json();

    return {
        mensaje: "Publicación eliminada correctamente",
        validacion: data
    };
};