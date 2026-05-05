export const obtenerInfoPublicacion = async (id) => {

    const resPosts = await fetch("http://localhost:3000/posts");
    if (!resPosts.ok) throw new Error("Error al obtener publicaciones");
    const publicaciones = await resPosts.json();

    const resPost = await fetch(`http://localhost:3000/posts/${id}`);
    if (!resPost.ok) throw new Error("Error al obtener la publicación");
    const post = await resPost.json();

    const resComentarios = await fetch(`http://localhost:3000/posts/${id}/comments`);
    if (!resComentarios.ok) throw new Error("Error al obtener comentarios");
    const comentarios = await resComentarios.json();

    return {
        titulo: post.title,
        contenido: post.body,
        numeroComentarios: comentarios.length
    };
};