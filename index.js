import fs from 'fs'
import chalk from 'chalk';

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks (texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const capturas = regex.exec(texto)
    console.log(capturas)
}

extraiLinks(textoTeste)

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

// pegaArquivo('./arquivos/texto.md')
// pegaArquivo('./arquivos/')

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)