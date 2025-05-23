// EXERCÍCIO 1 - Converter Nomes para Caixa Alta
// ==============================================
// Dado um array de nomes como ["joão", "ana", "maria"],
// crie uma função que retorne um novo array com todos
// os nomes em letras maiúsculas.
// Use o método .map() para resolver esse desafio.

// // //OQ EU FIZ
// let nomes = ["Matheus", "Maria Luiza", "Ana Luiza", "Thomas", "Zion"];
// function maiúsculas(nome) {
//   let nomeMaiusculas = nomes;
//   nomes.map().toUpperCase();
//   return nomeMaiusculas;
// }

// // //CORREÇÃO
// let nomes = ["Matheus", "Maria Luiza", "Ana Luiza", "Thomas", "Zion"];

// function maiusculas(array) {
//   let nomeMaiusculas = array.map(function (nome) {
//     return nome.toUpperCase();
//   });
//   return nomeMaiusculas;
// }

// console.log(maiusculas(nomes));

// // RESOLUÇÃO: O metodo .map() precisa sempre de um callback para dizer oque ele deve fazer!
// // .toUpperCase() é um metodo que funciona somente em array, então o parametro da função deve ser "array"

//--------------------------------------------------------------------------------------

// // ==============================================
// // EXERCÍCIO 2 - Somar Números Pares de um Array
// // ==============================================
// // Dado um array de números, crie uma função que
// // retorne a soma apenas dos números pares.
// // Exemplo: [2, 5, 8, 11, 14] deve retornar 24.

// let numeros = [2, 5, 8, 11, 14];

// function somaPar() {
//   if (numeros % 2 === 0) {
//     let somar = numeros + numeros;
//   }
//   return numeros;
// }

// // ==============================================
// // EXERCÍCIO 3 - Validador de Senha Simples
// // ==============================================
// // Crie uma função que valide uma senha com os seguintes critérios:
// // - Mínimo de 8 caracteres
// // - Deve conter pelo menos 1 número
// // Retorne true se for válida, false caso contrário.

// let senha1 = "MinhaSenha";
// function validarSenhar(senha) {
//   if (senha.length >= 8) {
//     return true;
//   } else {
//     return false;
//   }
// }

// ==============================================
// EXERCÍCIO 4 - Criar Botão e Mostrar Mensagem
// ==============================================
// Crie uma página HTML com JavaScript que:
// - Crie um botão com o texto "Clique aqui"
// - Quando clicado, mostre a mensagem “Você clicou no botão!”
// - Dica
