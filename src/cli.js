import pegaArquivo from "./index.js";

const caminho = process.argv;
console.log(caminho[2])//Pega o 3 argumento da chamada no terminal

pegaArquivo(caminho[2])//Elee pega o 3 argumento passado no comando do terminal que está aqui abaixo

// node src/cli.js ./arquivos/texto.md