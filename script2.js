// 📅 PLANO DE PRÁTICA – 7 DIAS
// 🔹 Dia 1 – Revisão de Arrays e Loops
// Foco: iterar corretamente arrays com for, forEach, map.

// ✅ Exercícios:
// Crie um array com 5 nomes e imprima todos eles com for.
// Use forEach para imprimir os nomes com índice.
// Use map para retornar um novo array com todos os nomes em letras minúsculas.

let nomes = ["Matheus Aurelio", "Maria Luiza", "Ana Luiza", "Thomas Oliveira", "Zion Oliveira"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("               ");

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}
nomes.forEach(imprimir);

console.log("               ");

function maiusculas(array) {
  let nomeMaiusculas = array.map(function (nome) {
    return nome.toUpperCase();
  });
  return nomeMaiusculas;
}

console.log(maiusculas(nomes));

console.log("               ");

// const maiusculas = (array) => array.map((nome) => nome.toUpperCase());

// function imprimirNomesComIndices(nomes) {
//   nomes.forEach(function (nome, indice) {
//     console.log(`${indice + 1}. ${nome}`);
//   });
// }

// nomes.forEach((nome, indice) => {
//   console.log(`${indice + 1}. ${nome}`);
// });
