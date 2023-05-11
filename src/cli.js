import chalk from "chalk";
import pegaArquivo from "./index.js";

const caminho = process.argv;
console.log(caminho[2])//Pega o 3 argumento da chamada no terminal

pegaArquivo(caminho[2])//Elee pega o 3 argumento passado no comando do terminal que está aqui abaixo

// node src/cli.js ./arquivos/texto.md

async function processaTexto (caminho) {
    const resultado = await pegaArquivo(caminho[2])//Pega o 3 elemento na busca
    console.log(chalk.blue('lista de links'), resultado)
}

processaTexto(caminho)