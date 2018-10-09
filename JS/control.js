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

function automatico() {
    let auto = document.getElementById("automatico");
    let manual = document.getElementById("manual");

    auto.style.transform = "translateY(0.14em) translateZ(0em)";
    auto.style.boxShadow = "none";
    manual.style.transform = "translateY(0em) translateZ(0em)";
    manual.style.boxShadow = "0 0.14em 0 #00171F";

    manual.removeAttribute("disabled");
    document.getElementById("marcha").removeAttribute("disabled");
    document.getElementById("pausa").removeAttribute("disabled");
    document.getElementById("stop").removeAttribute("disabled");

    auto.setAttribute("disabled","disabled");
    document.getElementById('jogPlus').setAttribute("disabled","disabled");
    document.getElementById('jogMinus').setAttribute("disabled","disabled");
    document.getElementById('listaPosiciones').setAttribute("disabled","disabled");
}

function manual() {
    let auto = document.getElementById("automatico");
    let manual = document.getElementById("manual");

    manual.style.transform = "translateY(0.14em) translateZ(0em)";
    manual.style.boxShadow = "none";
    auto.style.transform = "translateY(0em) translateZ(0em)";
    auto.style.boxShadow = "0 0.14em 0 #00171F";


    auto.removeAttribute("disabled");
    document.getElementById('jogPlus').removeAttribute("disabled");
    document.getElementById('jogMinus').removeAttribute("disabled");
    document.getElementById('listaPosiciones').removeAttribute("disabled");

    manual.setAttribute("disabled","disabled");
    document.getElementById("marcha").setAttribute("disabled","disabled");
    document.getElementById("pausa").setAttribute("disabled","disabled");
    document.getElementById("stop").setAttribute("disabled","disabled");
}