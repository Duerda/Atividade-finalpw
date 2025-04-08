$(document).ready(function () {
    $("#calcular").click(function () {
        var valor1 = parseFloat($("#txtvalor1").val());
        var valor2 = parseFloat($("#txtvalor2").val());

        if (isNaN(valor1) || isNaN(valor2)) {
            $("#resultado").text("Por favor, insira valores válidos.");
            return;
        }

        var soma = valor1 + valor2;
        

        $("#resultado").text("Resultado da soma: " + soma);
        $("#msg").text("Valores somados com sucesso!");
        $("#fatorial").text("Fatorial de " + valor1 + ": " + calcularFatorial(valor1));
    });
});

function calcularFatorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * calcularFatorial(num - 1);
}
