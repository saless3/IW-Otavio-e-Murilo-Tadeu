// criando o array de frutas
const fruits = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

// selecionando o elemento onde array exibido
const fruitArrayDiv = document.getElementById('fruitArray');

// exibindo o array de frutas
fruitArrayDiv.textContent = `Array de frutas: [${fruits.join(', ')}]`;

// exebir o segundo elemento do array no console
console.log(`O segundo elemento do array é: ${fruits[1]}`);

// Exibindo o último elemento do array no console sem usar o índice diretamente
const lastElement = fruits[fruits.length - 1];
console.log(`O último elemento do array é: ${lastElement}`);

const lastelement = fruitsCopy.pop();
console.log(`O último elemento do array é: ${lastElement}`);




