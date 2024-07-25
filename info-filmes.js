const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

const filmesEncontrados = [];

function filtrarFilmesPorAno(anoBusca) {
    catalogoFilmes.forEach(filme=> {
        if ( filme.anoLancamento === anoBusca ? filmesEncontrados.push(filme) : '');
    })
        console.log(filmesEncontrados);
}

filtrarFilmesPorAno(2010)