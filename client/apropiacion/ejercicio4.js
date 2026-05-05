export const eliminarPublicacion = async (id) => {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        });

        if (!respuesta.ok) {
            throw new Error("Error al eliminar la publicación");
        }

        console.log(`Publicación con ID ${id} eliminada correctamente`);
    } catch (error) {
        console.error("Error:", error.message);
    }
};