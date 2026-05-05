export const actualizarPostPUT = async (id, userId, title, body) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id,
            userId,
            title,
            body,
        }),
    });

    const data = await response.json();
    return data;
};

export const actualizarPostPATCH = async (id, campo) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(campo), 
    });

    const data = await response.json();
    return data;
};