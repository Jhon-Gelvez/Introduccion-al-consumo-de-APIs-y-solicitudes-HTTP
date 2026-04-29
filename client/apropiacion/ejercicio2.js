export const post = async (userId, nombre, email) => {
    const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            title,
            body,
        }),
    });
    const data = await response.json();
    return data;
};

export const comment = async (postId, nombre, comentario) => {
    const response = await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            postId: postId,
            name: nombre,
            body: comentario,
        }),
    });
    const data = await response.json();
    return data;
};
