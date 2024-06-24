document.getElementById('calcularBtn').addEventListener('click', function () {
    const valorHoraAula = parseFloat(document.getElementById('valorHoraAula').value);
    const totalHA = parseInt(document.getElementById('totalHA').value);

    if (!isNaN(valorHoraAula) && !isNaN(totalHA)) {
        const totalGeral = valorHoraAula * totalHA;
        document.getElementById('totalGeral').textContent = ` ${totalGeral.toFixed(0)}`;
    } else {
        alert('Por favor, preencha os campos corretamente.');
    }
});

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('wheel', function (event) {
        event.preventDefault();
        const step = parseFloat(this.step) || 1;
        if (event.deltaY < 0) {
            this.value = (parseFloat(this.value) || 0) + step;
        } else {
            this.value = (parseFloat(this.value) || 0) - step;
        }
        this.dispatchEvent(new Event('change'));
    });
});