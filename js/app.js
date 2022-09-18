function convertir() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML = "<b>" + valor + "</b>";

    var de = document.getElementById("De").value;
    var a = document.getElementById("A").value;
    var dolar = 6.91;
    var euro = 6.93;
    resultado = 0;

    // Bolivianos a Dolares

    if (de == 1 && a == 2) {
        resultado = valor / dolar;
    }

    // Bolivianos a euro
    else if (de == 1 && a == 3) {
        resultado = valor / euro;
    }

    // Dolar a Bolivano
    else if (de == 2 && a == 1) {
        resultado = valor * dolar;
    }
    // Dolar a euro
    else if (de == 2 && a == 3) {
        resultado = valor * (dolar / euro);
    }

    // Euro a bolivianos
    else if (de == 3 && a == 1) {
        resultado = valor * euro;
    }
    // Euro a Dolar
    else if (de == 3 && a == 2) {
        resultado = valor * (euro / dolar);
    }
    // Boliviano a Boliviano, dolar a dolar, euro a euro
    else {
        resultado = valor;
    }

    document.getElementById("resultado").innerHTML = "Resultado $ " + resultado.toFixed(2);
}