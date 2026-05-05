import { usuario, usuarios, posts, post, comment, actualizarPostPATCH, actualizarPostPUT } from "./apropiacion/index.js";
import { enunciado1, publicaciones } from "./transferencia/index.js";
import { eliminarPublicacion } from "./apropiacion/index.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

// APROPIACION

try {
    const id = await rl.question("Ingrese el ID de la publicación a eliminar: ");
    const data = await eliminarPublicacion(id);
    console.log(data);
} catch (error) {
    console.error(error);
}

try {
    const data = await usuarios();
    console.log(data);
} catch (error) {
    console.error(error);
}

try {
    const id = await rl.question("Ingrese el ID del usuario: ");
    const data = await usuario(id);
    console.log(data);
} catch (error) {
    console.error(error);
}

try {
    const data = await posts();
    console.log(data);
} catch (error) {
    console.error(error);
}

try {
    const userId = await rl.question("Ingrese el ID del usuario: ");
    const nombre = await rl.question("Ingrese el nombre del usuario: ");
    const email = await rl.question("Ingrese el email del usuario: ");
    const data = await post(userId, nombre, email);
    console.log(data);
} catch (error) {
    console.error(error);
}

try {
    const id = await rl.question("Ingrese el ID del post: ");
    const nombre = await rl.question("Ingrese el nombre del comentario: ");
    const comentario = await rl.question("Ingrese el comentario: ");
    const data = await comment(id, nombre, comentario);
    console.log(data);
} catch (error) {
    console.error(error);
}

// TRANSFERENCIA

try {
    await enunciado1();
} catch (error) {
    console.error(error);
}

try {
    await publicaciones();
} catch (error) {
    console.error(error);
}

try {
    const id = await rl.question("Ingrese el ID del post a actualizar: ");
    const userId = await rl.question("Ingrese el ID del usuario: ");
    const title = await rl.question("Ingrese el nuevo título: ");
    const body = await rl.question("Ingrese el nuevo contenido: ");

    const data = await actualizarPostPUT(id, userId, title, body);
    console.log(data);
} catch (error) {
    console.error("Error al actualizar el post con PUT:", error);
}

try {
    const id = await rl.question("Ingrese el ID del post a modificar (PATCH): ");
    const nuevoTitulo = await rl.question("Ingrese el nuevo título para el post: ");
    const campo = { title: nuevoTitulo };

    const data = await actualizarPostPATCH(id, campo);
    console.log(data);
} catch (error) {
    console.error(error);
}

rl.close();
