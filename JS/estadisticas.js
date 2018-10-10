
guardarCiclos(document.getElementById('verCuotas').value);

function guardarCiclos(datos) {

    localStorage.ciclos = datos;

}

let alry = [];

alry.push(['Minutos', 'Milimetros']);

crearArray();

function crearArray() {

    alry.push(["Ciclos", parseInt(localStorage.ciclos)]);

    datos();
}

function datos() {

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

}

function drawChart() {
    var data = google.visualization.arrayToDataTable(alry);

    var options = {
        title: 'Estadisticas',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}