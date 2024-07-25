const lerAnimais = require ("./animais.json");

const addAnimal = {id: 4, nome: "Cachorro", tipo: "Mamifero", habitat: "Doméstico"};

lerAnimais.animais.push(addAnimal);

const modificaHabitat = lerAnimais.animais.find((animal) => animal.id === 2);

if (modificaHabitat) {
    modificaHabitat.habitat = "Oceano Antártico";
}

const indiceAnimalRemover = lerAnimais.animais.findIndex((animal) => animal.id === 1);

if (indiceAnimalRemover !== -1) {
    lerAnimais.animais.splice(indiceAnimalRemover, 1)
}

const stringLerAnimais = JSON.stringify(lerAnimais);

console.log(stringLerAnimais);