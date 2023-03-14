function calcularCampo() {

    var carga = parseFloat(document.getElementById("carga").value.replace(',', '.'));
    var distancia = parseFloat(document.getElementById("distancia").value.replace(',', '.'));
    var constante = 8.987551787e9;
    var campo = constante * carga / Math.pow(distancia, 2);

    document.getElementById("resultado").innerHTML = "Campo elétrico gerado: " + campo.toExponential(2) + " N/C";
}