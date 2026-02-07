function calcularProbabilidade() {
    const somaDesejada = parseInt(document.getElementById("soma").value);

    let casosFavoraveis = 0;
    let casosPossiveis = 36;

    // Simula todas as combinações possíveis dos dois dados
    for (let dado1 = 1; dado1 <= 6; dado1++) {
        for (let dado2 = 1; dado2 <= 6; dado2++) {
            if (dado1 + dado2 === somaDesejada) {
                casosFavoraveis++;
            }
        }
    }

    const probabilidade = (casosFavoraveis / casosPossiveis) * 100;

    document.getElementById("resultado").innerHTML =
        `Casos favoráveis: ${casosFavoraveis}<br>
         Casos possíveis: 36<br>
         Probabilidade: <strong>${probabilidade.toFixed(2)}%</strong>`;
}
