/**
 * Created by Mikel on 02/10/2018.
 */
//Esta funcion es principalmente para reajustar el bloque de posición cuando se reajusta la pantalla
window.onresize = resize;
function resize()
{
    if(document.getElementById("listaPosiciones").value!=-1)
        moverPos();
}
window.onload = function () {
    init();
}

function init() {
    const bloque=document.getElementById("bloque");

}


function moverPos() {
    //obtenemos el valor de la lista 'listaposiciones' que se corresponde con la posición a la que se quiere ir
    let pos=document.getElementById("listaPosiciones").value;

    switch (parseInt(pos)){
        case 1:
            document.getElementById("milimetros").value = 50;
            enviarMM("enviarMM");
            break;
        case 2:
            document.getElementById("milimetros").value = 100;
            enviarMM("enviarMM");
            break;
        case 3:
            document.getElementById("milimetros").value = 150;
            enviarMM("enviarMM");
            break;
        case 4:
            document.getElementById("milimetros").value = 200;
            enviarMM("enviarMM");
            break;
        case 5:
            document.getElementById("milimetros").value = 250;
            enviarMM("enviarMM");
            break;
        case 6:
            document.getElementById("milimetros").value = 300;
            enviarMM("enviarMM");
            break;
        case 7:
            document.getElementById("milimetros").value = 350;
            enviarMM("enviarMM");
            break;
        case 8:
            document.getElementById("milimetros").value = 400;
            enviarMM("enviarMM");
            break;
        case 9:
            document.getElementById("milimetros").value = 450;
            enviarMM("enviarMM");
            break;
        case 10:
            document.getElementById("milimetros").value = 500;
            enviarMM("enviarMM");
            break;
    }

    //el -1 se da cuando se selecciona el 'elige una posición
    //Se ha decidido no hacer nada en este caso
    if(pos!=-1){
        bloque.style.marginLeft=bloque.offsetWidth*pos+"px";
    }
}

function moverMm (){
    //obtenemos los milimetros a desplazarse
    let mm=document.getElementById("milimetros").value;
    //calculamos la anchura total del rail o regla
    let anchura=bloque.offsetWidth*10;
    //mediante una regla de tres convertimos los mm a pixels
    bloque.style.marginLeft=(anchura*mm)/500+"px";
}