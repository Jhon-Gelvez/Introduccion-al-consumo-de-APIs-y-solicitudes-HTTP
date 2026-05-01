export const publicaciones = async () => {
    let publicaciones = await fetch(`http://localhost:3000/posts`);
    publicaciones = await publicaciones.json();

    let comentarios = await fetch(`http://localhost:3000/comments`);
    comentarios = await comentarios.json();

    let resumenInteraccion = publicaciones.map((publicacion, i) => {
        let totalComments = 0;
        comentarios.forEach((comentario) => {
            if (publicacion.id == comentario.postId) {
                totalComments++;
            }
        });

        return {
            ...publicacion,
            totalComments,
            state: totalComments > 0 ? "Con comentarios" : "Sin comentarios",
        };
    });

    console.log(`\n--------------------------`);
    console.log(`Publicaciones con y sin comentarios`);
    console.log(`--------------------------\n`);

    resumenInteraccion.forEach((post) => {
        console.log(`Titulo: ${post.title}\n Numero de comentarios: ${post.totalComments}\n Estado: ${post.state}\n`);
    });
};
