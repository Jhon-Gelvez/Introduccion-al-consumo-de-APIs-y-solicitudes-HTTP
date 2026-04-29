export const enunciado1 = async () => {
    const responseUser = await fetch(`http://localhost:3000/users`);
    let listaUsuarios = await responseUser.json();

    const responsePost = await fetch(`http://localhost:3000/posts`);
    let listaPosts = await responsePost.json();

    const listaFinalUsuarios = listaUsuarios.map((usuario) => {
        let id = usuario.id;
        let totalPosts = 0;
        let hasPost = false;

        listaPosts.forEach((post) => {
            if (post.userId == id) {
                hasPost = true;
                totalPosts++;
            }
        });

        return {
            ...usuario,
            hasPost: hasPost,
            totalPosts: totalPosts,
        };
    });

    if (listaFinalUsuarios) {
        console.log(`--------------------------`);
        console.log(`usuarios con publicaciones`);
        console.log(`--------------------------`);
        listaFinalUsuarios.forEach((usuario) => {
            if (usuario.hasPost) {
                console.log(usuario.id, usuario.name);
            }
        });
        console.log(`--------------------------`);
        console.log(`publicaciones por usuario`);
        console.log(`--------------------------`);
        listaFinalUsuarios.forEach((usuario) => {
            if (usuario.hasPost) {
                console.log(`el usuario ${usuario.name} ha hecho ${usuario.totalPosts}`);
            }
        });
        console.log(`--------------------------`);
        console.log(`usuarios sin publicaciones`);
        console.log(`--------------------------`);
        listaFinalUsuarios.forEach((usuario) => {
            if (!usuario.hasPost) {
                console.log(usuario.id, usuario.name);
            }
        });
    }
};
