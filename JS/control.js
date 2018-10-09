
/**
 * Created by Mikel on 02/10/2018.
 */


//Esta funcion es principalmente para reajustar el bloque de posición cuando se reajusta la pantalla
window.onresize = resize;
function resize() {
    if(document.getElementById("listaPosiciones").value!=-1)
        moverPos();
}

window.onload = function () {
    init();
}

function init() {
    //abrir la modal
    document.getElementById('modalOn').style.display="block";
    const bloque=document.getElementById("bloque");
    automatico();
}

function cerrarModal() {
    servoOn(document.getElementById('servoOn').name);
    document.getElementById('modalOn').style.display = "none";
}

function moverPos() {
    //obtenemos el valor de la lista 'listaposiciones' que se corresponde con la posición a la que se quiere ir
    let pos=document.getElementById("listaPosiciones").value;

    request2serverPulsador('"web".Posiciones por tablas',parseInt(pos));

    //el -1 se da cuando se selecciona el 'elige una posición
    //Se ha decidido no hacer nada en este caso
      if(pos!=-1){
          //bloque.style.marginLeft=bloque.offsetWidth*pos+"px";
          var mm=(bloque.offsetWidth*pos*50)/bloque.offsetWidth;
          request2serverPulsador('"web".Posiciones por milimetros',parseInt(mm));
      }
}


function moverMm (){
    //obtenemos los milimetros a desplazarse
    let mm=document.getElementById("milimetros").value;
}


function automatico() {
    let auto = document.getElementById("automatico");
    let manual = document.getElementById("manual");

    auto.style.transform = "translateY(0.14em) translateZ(0em)";
    auto.style.boxShadow = "none";
    manual.style.transform = "translateY(0em) translateZ(0em)";
    manual.style.boxShadow = "0 0.14em 0 #00171F";

    manual.removeAttribute("disabled");
    document.getElementById('reposiciones').style.display="inline-block";

    auto.setAttribute("disabled","disabled");
    document.getElementById('jogPlus').setAttribute("disabled","disabled");
    document.getElementById('jogMinus').setAttribute("disabled","disabled");
    document.getElementById('listaPosiciones').setAttribute("disabled","disabled");
    document.getElementById('milimetros').setAttribute("disabled","disabled");
    document.getElementById('go').setAttribute("disabled","disabled");
}

function manual() {
    let auto = document.getElementById("automatico");
    let manual = document.getElementById("manual");

    manual.style.transform = "translateY(0.14em) translateZ(0em)";
    manual.style.boxShadow = "none";
    auto.style.transform = "translateY(0em) translateZ(0em)";
    auto.style.boxShadow = "0 0.14em 0 #00171F";

    document.getElementById('reposiciones').style.display="none";
    auto.removeAttribute("disabled");
    document.getElementById('jogPlus').removeAttribute("disabled");
    document.getElementById('jogMinus').removeAttribute("disabled");
    document.getElementById('listaPosiciones').removeAttribute("disabled");
    document.getElementById('milimetros').removeAttribute("disabled");
    document.getElementById('go').removeAttribute("disabled");

    manual.setAttribute("disabled","disabled");

}

