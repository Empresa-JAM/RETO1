
$(document).ready(function(){
    $("#dales").click(function(){
        $("#estadisticas").slideToggle();
        document.getElementById("estadisticas").innerHTML = "Milimetros recorridos por el automata : "+ localStorage.milimetros;
    });
});

function guardarEstadisticas(datos) {

    datos += parseInt(localStorage.milimetros);

    localStorage.milimetros = datos;

}
