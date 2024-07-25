const livro = {
    titulo:'',
    autor:'',
    anoPublicacao:'', 
    genero:'',
}

livro.titulo = 'Fogo e Sangue';
livro.autor = 'George Martin',
livro.anoPublicacao = 2018;
livro.genero = 'Fantasia';

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

exibeInfoEstudante = console.log(livro);

exibeInfoEstudante;

// console.log(livro['titulo']);
// console.log(livro['autor']);
// console.log(livro['anoPublicacao']);
// console.log(livro['genero']);
// console.log(livro['idadePublicacao']);

livro.avaliacao = null;

// if (livro.avaliacao === null) {
//     console.log('Insira uma avaliação.')
// } else {
//     console.log(`O livro ${livro.titulo} já possui uma avaliação.`);
// }

delete livro.avaliacao;

console.log|(livro);

