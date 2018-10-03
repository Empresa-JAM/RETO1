/**
 * Created by Alexsandro on 3/10/18.
 */

//Esta función nos permite ver los milimetros en el que esta el automata

setInterval(verPosicion,100);
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

$(document).ready(function(){
    document.getElementById('milimetros').value = 0;
    enviarMM("enviarMM");
});