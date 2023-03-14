function calcularCampoEletrico() {
    // Obtem os valores dos campos
    const epsilon = parseFloat(document.getElementById("constante_dielétrica").value);
    const q = parseFloat(document.getElementById("modulo_carga").value);
    const r = parseFloat(document.getElementById("distancia_carga").value);
    
    // Calcula o campo elétrico
    const k = 9e9; // Constante de Coulomb
    const e = k * q / (epsilon * r * r);
    
    // Exibe o resultado
    document.getElementById("resultado").innerHTML = "O campo elétrico é " + e.toExponential(2) + " N/C";
}