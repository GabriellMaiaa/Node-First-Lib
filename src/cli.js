import chalk from "chalk";
import pegaArquivo from "./index.js";
import fs from 'fs'

const caminho = process.argv;
// console.log(caminho[2])//Pega o 3 argumento da chamada no terminal

function imprimeLista(resultado) {
    console.log(chalk.yellow('lista de links'), resultado)
}

// pegaArquivo(caminho[2])//Elee pega o 3 argumento passado no comando do terminal que está aqui abaixo

// node src/cli.js ./arquivos/texto.md

async function processaTexto (argumentos) {
    const caminho = argumentos[2];

    if(fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho)//Pega o 3 elemento na busca
        imprimeLista(resultado)
  } 
    else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`)
            imprimeLista(lista) 
        })
  }

}

processaTexto(caminho)