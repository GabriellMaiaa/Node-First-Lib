import fs from 'fs'
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo nesse diretório'))
}

//PROMISES com ASYNC e AWAIT

async function pegaArquivo(caminhoArquivo) {//Ele vai tentar, e se estiver correto mostra isso
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoArquivo, enconding)
        console.log(chalk.green(texto))
    }
    catch(erro) {
        trataErro(erro)
    }
}

//PROMISES com THEN e CATCH abaixoo:

// function pegaArquivo(caminhoArquivo) {//vAMOS FAZER UMA FUNÇÃO ASSÍNCRONA
//     const enconding = 'utf-8';
//     fs.promises.readFile(caminhoArquivo, enconding)
//         .then((texto) => console.log(chalk.blue(texto)))
//         .catch((erro) => trataErro(erro))
// }

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
// pegaArquivo('./arquivos/')