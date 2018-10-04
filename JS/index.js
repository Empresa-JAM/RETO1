//Esta función nos permite ver los milimetros en el que esta el automata
setInterval(verMovimiento,600);
function verPosicion() {
    $.ajax({
        type: 'GET',
        url: "variables/getPosicionMM.html",
        async: false,
        success: function (datos) {
            $('#verMilimetros').val(parseInt(datos));
        }
    });
}
function verMovimiento() {
    let mm=document.getElementById("verMilimetros").value;
    let anchura=bloque.offsetWidth*10;
    bloque.style.marginLeft=(anchura*mm)/500+"px";
    verPosicion();
}
//Nos permite devolver a la posicon 0 al automata al recargar la pagina
$(document).ready(function(){
    document.getElementById('milimetros').value = 0; //poner milimetros a 0
    enviarMM("enviarMM"); //reinicaiar posicion del automata
    request2serverPulsador('"web".servo on', 0); //desactivar el automata
    document.getElementById('servooff').disabled=true; //boton off disabled
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
    document.getElementById('servoon').value = 1;
    request2serverPulsador(nameButton, 1);
    document.getElementById('servoon').disabled=true;
    document.getElementById('servooff').disabled=false;
}
//Funcion para apagar el automata
function servoOff(nameButton) {
    document.getElementById('servooff').value = 0;
    request2serverPulsador(nameButton, 0);
    document.getElementById('servooff').disabled=true;
    document.getElementById('servoon').disabled=false;
}
//Funcion para controlar el jogPlus y jogMinus
function pulse(idPulsador, namePulsador){
    if(document.getElementById(idPulsador).value != 1){
        document.getElementById(idPulsador).value = 1;
        request2serverPulsador(namePulsador, 1);
    }else{
        document.getElementById(idPulsador).value = 0;
        request2serverPulsador(namePulsador, 0);
    }
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

function marcha(nameButton) {
    request2serverPulsador(nameButton, 1);
    request2serverPulsador('"web".Reset', 0);
    request2serverPulsador('"web".Stop', 0);
}

function pausa(nameButton) {
    request2serverPulsador(nameButton, 1);
}

function stop(nameButton) {
    request2serverPulsador(nameButton, 1);
}






















