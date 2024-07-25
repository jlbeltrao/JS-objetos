const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(precoMax) {
    const produtosFiltrados = [];
    listaProdutos.forEach(element => {
        if (element.preco < precoMax) {
            produtosFiltrados.push(element);
        }
    });

    produtosFiltrados.sort((a, b) => a.preco - b.preco);



    console.log(produtosFiltrados);
}

filtrarOrdenarProdutosPorPreco(49.98);