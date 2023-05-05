import fs from 'fs'
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo nesse diretório'))
}

function pegaArquivo(caminhoArquivo) {//vAMOS FAZER UMA FUNÇÃO ASSÍNCRONA
    const enconding = 'utf-8';
    fs.promises.readFile(caminhoArquivo, enconding)
        .then((texto) => console.log(chalk.blue(texto)))
        .catch((erro) => trataErro(erro))
}

// function pegaArquivo(caminhoArquivo) {
//     const enconding = 'utf-8'
//     fs.readFile(caminhoArquivo, enconding, (erro, texto) => {
//         if(erro) {
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }

pegaArquivo('./arquivos/texto.md')