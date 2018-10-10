
function guardarEstadisticas(datos) {

    parseInt(localStorage.milimetros);

    localStorage.milimetros = datos;

}

let alry = [];

alry.push(['Minutos', 'Milimetros']);

crearArray();

function crearArray() {

    alry.push(["Milimetros", parseInt(localStorage.milimetros)]);

    alry.push(["Agua", 65]);

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