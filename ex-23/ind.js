document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos de entrada
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Função para ordenar os números
    function sortNumbers(arr) {
        return arr.sort((a, b) => a - b);
    }

    // Colocando os números em um array e ordenando
    const sortedNumbers = sortNumbers([number1, number2]);

    // Exibindo o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Números em ordem crescente: ${sortedNumbers[0]}, ${sortedNumbers[1]}`;
});


document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos de entrada
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);

    // Colocando os números em um array
    const numbersArray = [number1, number2, number3];

    // Exibindo o array original
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Array original: [${numbersArray.join(', ')}]<br>`;

    // Função para ordenar os números
    function sortNumbers(arr) {
        return arr.sort((a, b) => a - b);
    }

    // Ordenando o array
    const sortedNumbers = sortNumbers(numbersArray);

    // Exibindo o array ordenado
    resultDiv.innerHTML += `Array ordenado: [${sortedNumbers.join(', ')}]`;
});