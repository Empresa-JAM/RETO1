
/**
 * Created by Mikel on 02/10/2018.
 */


//Esta funcion es principalmente para reajustar el bloque de posición cuando se reajusta la pantalla
window.onresize = resize;
function resize() {
    if(document.getElementById("listaPosiciones").value!=-1)
        moverPos();
    if (screen.width>414) {
        document.getElementById('reposiciones').style.display = "inline-block";
    }else{
        document.getElementById('reposiciones').style.display = "none";
    }
}

window.onload = function () {
    init();
}

function init() {
    //abrir la modal
    document.getElementById('modalOn').style.display="block";
    const bloque=document.getElementById("bloque");
    automatico();
    posicion();
}

function cerrarModal() {
    servoOn(document.getElementById('servoOn').name);
    document.getElementById('modalOn').style.display = "none";
}

function moverPos() {
    //obtenemos el valor de la lista 'listaposiciones' que se corresponde con la posición a la que se quiere ir
    let pos = document.getElementById("listaPosiciones").value;

    request2serverPulsador('"web".Posiciones por tablas', parseInt(pos));

    //el -1 se da cuando se selecciona el 'elige una posición
    //Se ha decidido no hacer nada en este caso
      if(pos!=-1){
          //bloque.style.marginLeft=bloque.offsetWidth*pos+"px";
          var mm=(bloque.offsetWidth*pos*50)/bloque.offsetWidth;
          request2serverPulsador('"web".Posiciones por milimetros',parseInt(mm));
          luces(parseInt(pos) * 50);
      }
}

function luces(posicionMm) {
    if (posicionMm < 50 || isNaN(posicionMm)) {
        document.getElementById('led1').style.backgroundColor = "#e3e3e3";
        document.getElementById('led2').style.backgroundColor = "#e3e3e3";
        document.getElementById('led3').style.backgroundColor = "#e3e3e3";
    }else if (posicionMm < 200){
        document.getElementById('led1').style.backgroundColor = "red";
        document.getElementById('led2').style.backgroundColor = "#e3e3e3";
        document.getElementById('led3').style.backgroundColor = "#e3e3e3";
    }else if (posicionMm <350) {
        document.getElementById('led1').style.backgroundColor = "#e3e3e3";
        document.getElementById('led2').style.backgroundColor = "red";
        document.getElementById('led3').style.backgroundColor = "#e3e3e3";
    }else {
        document.getElementById('led1').style.backgroundColor = "#e3e3e3";
        document.getElementById('led2').style.backgroundColor = "#e3e3e3";
        document.getElementById('led3').style.backgroundColor = "red";
    }
}

function moverMm (){
    //obtenemos los milimetros a desplazarse
    let mm=document.getElementById("milimetros").value;
}


function automatico() {
    request2serverPulsador('"web".Auto/Manual', 1);
    let auto = document.getElementById("automatico");
    let manual = document.getElementById("manual");

    auto.style.transform = "translateY(0.14em) translateZ(0em)";
    auto.style.boxShadow = "none";
    manual.style.transform = "translateY(0em) translateZ(0em)";
    manual.style.boxShadow = "0 0.14em 0 #00171F";

    manual.removeAttribute("disabled");

    if (screen.width>414) {
        document.getElementById('reposiciones').style.display = "inline-block";
    }

    auto.setAttribute("disabled","disabled");
    document.getElementById('goC').setAttribute("disabled","disabled");
    document.getElementById('ciclos').setAttribute("disabled","disabled");
    document.getElementById('jogPlus').setAttribute("disabled","disabled");
    document.getElementById('jogMinus').setAttribute("disabled","disabled");
    document.getElementById('listaPosiciones').setAttribute("disabled","disabled");
    document.getElementById('milimetros').setAttribute("disabled","disabled");
    document.getElementById('go').setAttribute("disabled","disabled");
}

function manual() {
    request2serverPulsador('"web".Auto/Manual', 0);
    let auto = document.getElementById("automatico");
    let manual = document.getElementById("manual");

    manual.style.transform = "translateY(0.14em) translateZ(0em)";
    manual.style.boxShadow = "none";
    auto.style.transform = "translateY(0em) translateZ(0em)";
    auto.style.boxShadow = "0 0.14em 0 #00171F";

    document.getElementById('reposiciones').style.display="none";
    auto.removeAttribute("disabled");
    document.getElementById('goC').removeAttribute("disabled","disabled");
    document.getElementById('ciclos').removeAttribute("disabled","disabled");
    document.getElementById('jogPlus').removeAttribute("disabled");
    document.getElementById('jogMinus').removeAttribute("disabled");
    document.getElementById('listaPosiciones').removeAttribute("disabled");
    document.getElementById('milimetros').removeAttribute("disabled");
    document.getElementById('go').removeAttribute("disabled");

    manual.setAttribute("disabled","disabled");

}

function posicion() {

    request2serverPulsador('"web".Milimetros/Tablas', 0);

    let posicion = document.getElementById("posicion");
    let mili = document.getElementById("mili");

    posicion.style.transform = "translateY(0.14em) translateZ(0em)";
    posicion.style.boxShadow = "none";
    mili.style.transform = "translateY(0em) translateZ(0em)";
    mili.style.boxShadow = "0 0.14em 0 #00171F";

    mili.removeAttribute("disabled");

    document.getElementById('posicionesP').style.display = "inline-block";
    document.getElementById('posicionesP').style.paddingLeft = "10rem";
    document.getElementById('posicionesCotas').style.display="none";


    posicion.setAttribute("disabled","disabled");

    document.getElementById('mili').removeAttribute("disabled","disabled");
    document.getElementById('posicion').setAttribute("disabled","disabled");
}

function milimetro() {

    request2serverPulsador('"web".Milimetros/Tablas', 1);

    let posicion = document.getElementById("posicion");
    let mili = document.getElementById("mili");

    mili.style.transform = "translateY(0.14em) translateZ(0em)";
    mili.style.boxShadow = "none";
    posicion.style.transform = "translateY(0em) translateZ(0em)";
    posicion.style.boxShadow = "0 0.14em 0 #00171F";

    document.getElementById('posicionesCotas').style.display = "inline-block";
    document.getElementById('posicionesCotas').style.paddingLeft = "12rem";
    document.getElementById('posicionesP').style.display="none";
    posicion.removeAttribute("disabled");

    document.getElementById('mili').setAttribute("disabled","disabled");
    document.getElementById('posicion').removeAttribute("disabled","disabled");

    mili.setAttribute("disabled","disabled");
}

