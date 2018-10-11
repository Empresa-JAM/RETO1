
//Esta función nos permite ver los milimetros en el que esta el automata
setInterval(verMovimiento,600);
function verPosicion() {
    $.ajax({
        type: 'GET',
        url: "Pages/variables/getPosicionMM.html",
        async: false,
        success: function (datos) {
            $('#verMilimetros').val(parseInt(datos));
        }
    });
}

//Funcion para poder enviar datos sin actulizar la pagina
function request2serverPulsador(nameVariable, value) {
    $.ajax({
        type:"POST",
        data:nameVariable+"="+value,
        success: function(data){},
        error: function () {}
    });
    return false;
}

function verMovimiento() {
    verPosicion();
    let mm=document.getElementById("verMilimetros").value;
    let anchura=bloque.offsetWidth*10;
    bloque.style.marginLeft=(anchura*mm)/500+"px";
    luces(mm);
}

//Nos permite devolver a la posicon 0 al automata al recargar la pagina
$(document).ready(function(){
    document.getElementById('milimetros').value = 0; //poner milimetros a 0
    enviarMM("enviarMM"); //reinicaiar posicion del automata
    request2serverPulsador('"web".servo on', 0); //desactivar el automata
    request2serverPulsador('"web".Marcha', 0);
    request2serverPulsador('"web".Reset', 0);
    request2serverPulsador('"web".Stop', 0);
});
//Nos permite enviar datos a la base de datos del automata
function enviarMM(nombrefun) {
    var datos = $("#"+nombrefun).serialize();
    $.ajax({
        type: "POST",
        data: datos,
        success: function (data) {},
        error: function () {}
    });
    return false;
}

//Funcion para encender el automata
function servoOn(nameButton) {
    document.getElementById('servoOn').value = 1;
    request2serverPulsador(nameButton, 1);
}

//Funcion para apagar el automata
function servoOff(nameButton) {
    document.getElementById('servooff').value = 0;
    request2serverPulsador(nameButton, 0);
    init();
}

//Funcion para controlar el true y false de los botones
function pulse(idPulsador, namePulsador){
    if(document.getElementById(idPulsador).value != 1){
        document.getElementById(idPulsador).value = 1;
        request2serverPulsador(namePulsador, 1);
    }else{
        document.getElementById(idPulsador).value = 0;
        request2serverPulsador(namePulsador, 0);
    }
}


function apilar() {
    return document.getElementById('listaApilar').value;
}

function empaquetar() {
    return document.getElementById('listaEmpaquetar').value;
}

function etiquetar() {
    return document.getElementById('listaEtiquetar').value;
}

function enviarPosiciones() {

    var pre1 = '"web".Predeterminadas[1]';
    var pre2 = '"web".Predeterminadas[2]';
    var pre3 = '"web".Predeterminadas[3]';

    enviarMM("enviarMM");
    request2serverPulsador(pre1,apilar());
    request2serverPulsador(pre2,empaquetar());
    request2serverPulsador(pre3,etiquetar());

    return false;
}

function enviarCotas() {

    request2serverPulsador(document.getElementById('apilarCotas').name,document.getElementById('apilarCotas').value);
    request2serverPulsador(document.getElementById('empaqutarCotas').name,document.getElementById('empaqutarCotas').value);
    request2serverPulsador(document.getElementById('etiquetarCotas').name,document.getElementById('etiquetarCotas').value);

    return false;
}





