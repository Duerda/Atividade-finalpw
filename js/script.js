function calcular() {
    const v1 = parseFloat(document.getElementById('valor1').value);
    const v2 = parseFloat(document.getElementById('valor2').value);
    const v3 = parseFloat(document.getElementById('valor3').value);

    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        alert("Por favor, preencha todos os valores corretamente.");
        return;
    }

    const valoresOrdenados = [v1, v2, v3].sort((a, b) => a - b);
    const media = (v1 + v2 + v3) / 3;
    let somaLoop = 0;

    for (let i = 1; i <= v2; i++) {
        somaLoop += i;
    }

    document.getElementById('alerta1').innerHTML =
        `<span class='highlight'>Valores ordenados: ${valoresOrdenados.join(', ')}</span>`;
    document.getElementById('alerta2').innerHTML =
        `<span class='highlight'>Média: ${media.toFixed(2)}</span>`;
    document.getElementById('alerta3').innerHTML =
        `<span class='highlight'>Soma do loop até ${v2}: ${somaLoop}</span>`;

    document.getElementById('alerta1').classList.remove('d-none');
    document.getElementById('alerta2').classList.remove('d-none');
    document.getElementById('alerta3').classList.remove('d-none');
}
