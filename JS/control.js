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
    var mm=0;
    if(pos!=-1){
        bloque.style.marginLeft=bloque.offsetWidth*pos+"px";
        mm=(bloque.offsetWidth*pos*500)/bloque.offsetWidth;
        request2serverPulsador('"web".Posiciones por milimetros', mm);
    }

    //el -1 se da cuando se selecciona el 'elige una posición
    //Se ha decidido no hacer nada en este caso
}
