import { solicitudesGet } from "./apropiacion/index.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

try {
    const data = await solicitudesGet();
    console.log(data);
} catch (error) {
    console.error(error);
}

rl.close();
