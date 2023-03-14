function calcularCampo() {
    var k = 8.99 * Math.pow(10, 9); // constante eletrostática em N.m²/C²
    var q = document.getElementById("q").value;
    var r = document.getElementById("r").value;
    var campo = k * q / (r * r);
    document.getElementById("resultado").innerHTML = "Campo Elétrico = " + campo.toFixed(2) + " N/C";
}