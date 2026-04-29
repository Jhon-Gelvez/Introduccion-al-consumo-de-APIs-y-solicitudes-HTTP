import { 
    usuario,
    usuarios,
    posts
    } 
from "./apropiacion/index.js";

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

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

rl.close();
