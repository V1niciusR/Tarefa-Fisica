/*======= Função principal =======*/
function calcularCampo() {

    var carga = parseFloat(document.getElementById("carga").value.replace(',', '.'));
    var distancia = parseFloat(document.getElementById("distancia").value.replace(',', '.'));
    var constante = 9.000000000e9;

    /*
    var constante = 8.987551787e9;
    */

    var campo = constante * carga / Math.pow(distancia, 2);

    document.getElementById("resultado").innerHTML = "Campo elétrico gerado: " + campo.toFixed(7) + " N/C";

    /*
    document.getElementById("resultado").innerHTML = "Campo elétrico gerado: " + campo.toExponential(2) + " N/C";
    */
}
/*======= /Função principal =======*/



/*======= Código pedindo o valor da constante =======*

function calcularCampo() {

    var carga = parseFloat(document.getElementById("carga").value.replace(',', '.'));
    var distancia = parseFloat(document.getElementById("distancia").value.replace(',', '.'));
    var constante = parseFloat(document.getElementById("constante").value.replace(',', '.'));


    const k = parseFloat(document.getElementById('constante').value);
    const q = parseFloat(document.getElementById('carga').value);
    const d = parseFloat(document.getElementById('distancia').value);
    const campo = k * q / (d * d);
    document.getElementById('resultado').innerHTML = `O campo elétrico gerado pela carga é de ${campo.toFixed(2)} N/C.`;
  }

  /*======= /Código pedindo o valor da constante =======*/