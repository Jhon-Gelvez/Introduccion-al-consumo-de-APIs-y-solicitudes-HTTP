export const usuarios = async () => {
    const response = await fetch(`http://localhost:3000/users`);
    const data = await response.json();
    return data;
};

export const usuario = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    return data;
};

export const posts = async () => {
    const response = await fetch(`http://localhost:3000/posts`);
    const data = await response.json();
    return data;
}