


function mostrarDatos() {
  
    var contador = 0;
    const total = 4;
    document.getElementById("boton").onclick = function () {
        var respuesta = document.getElementById("intento1").value;
        contador++;
        var resta = (total - contador);
        
        document.getElementById("restar").innerHTML = resta;

        if (respuesta == "montaña") {
            alert("La respuesta es acertada");
            window.location.reload();
        } else {
            if (contador == 2) {
                alert("Hay más altas o más bajas");
                return false;
            } else if (contador == 3) {
                alert("Manos y pies quedan el piso");
                return false;
            } else if (contador == 4) {
                alert("El resultado es MONTAÑA");
              
                return;
            }



        }
       
        event.preventDefault();
    }
}

