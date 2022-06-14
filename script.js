var contenedor = document.querySelector('#contenedor');
init();
function init() {
    var botones = document.querySelectorAll("#botones button");
    [].forEach.call(botones, function (btn) {
        btn.addEventListener('click', crearElemento);
    });
    document.querySelector("#btnEliminar")
            .addEventListener('click', eliminarElemento);
    document.querySelector('#elemento')
            .addEventListener('change', cargarPropiedades);
    document.querySelector('#propiedades')
            .addEventListener('change', cargarValores);
    document.querySelector("#btnAplicar")
            .addEventListener('click', aplicarCSS);
}
function crearElemento(e) {
    var nuevoElemento = document.createElement(e.target.id);
    switch (e.target.id) {
        case 'button':
            nuevoElemento.innerHTML = 'Este es un boton';
            break;
        case 'input':
            nuevoElemento.type = 'text';
            nuevoElemento.value = 'Este es un cuadro de texto';
            break;
        case 'table':
            for (var i = 0; i < 5; i++) {
                var fila = nuevoElemento.insertRow(i); //Inserta fila
                for (var j = 0; j < 5; j++) {
                    var columna = fila.insertCell(j);
                    columna.innerHTML = 'Celda ' + i + j; //Inserta columna
                }
            }
            break;
        case 'a':
            nuevoElemento.href = 'https://portal.fctunca.edu.py/accounts/login/?next=/';
            nuevoElemento.innerHTML = 'Este es un link al portal FCyT';
            nuevoElemento.target='blank'
            break;
        case 'select':
            for (var i = 0; i < 5; i++)
                nuevoElemento.add(new Option('Opcion ' + (i + 1), i));
            break;
        case 'h1':
            nuevoElemento.innerHTML="TITULO"
            break;
        default:
            break;
    }
    contenedor.appendChild(nuevoElemento);
    cargarElementos();
}
function cargarElementos() {
    var selElemento = document.querySelector('#elemento');
    selElemento.innerHTML = '';
    selElemento.add(new Option('Seleccionar elemento', '-1'));
    for (var i = 0; i < contenedor.children.length; i++)
        selElemento.add(new Option(contenedor.children[i].localName, i));
}
function eliminarElemento() {
    var selElemento = document.querySelector('#elemento');
    if (selElemento.value === '-1') {
        return alert('Seleccione elemento a eliminar');
    }
    contenedor.removeChild(contenedor.children[selElemento.value]);
    cargarElementos();
}
function cargarPropiedades() {
    var selElemento = document.querySelector('#elemento');
    var selPropiedades = document.querySelector('#propiedades');
    selPropiedades.innerHTML = '';
    selPropiedades.add(new Option('Seleccionar propiedad', '-1'));
    selPropiedades.add(new Option('Borde', 'border'));
    selPropiedades.add(new Option('Color', 'color'));
    selPropiedades.add(new Option('Animacion', 'animation'));
    selPropiedades.add(new Option('Fondo', 'backgroundColor'));
    selPropiedades.add(new Option('Tamaño fuente', 'fontSize'));
}
function cargarValores() {
    var selPropiedades = document.querySelector('#propiedades');
    var selValores = document.querySelector('#valor');
    if (selPropiedades.value === '-1') {
        alert('Seleccione propiedad');
    }
    selValores.innerHTML = '';
    selValores.add(new Option('Seleccionar valor', '-1'));
    switch (selPropiedades.value) {
        case 'border':
            selValores.add(new Option('1px solid black'));
            selValores.add(new Option('2px dotted red'));
            selValores.add(new Option('5px dashed green'));
            selValores.add(new Option('7px solid #ddd'));
            selValores.add(new Option('none'));
            break;
        case 'color':
            selValores.add(new Option('Black'));
            selValores.add(new Option('Blueviolet'));
            selValores.add(new Option('Coral'));
            selValores.add(new Option('Gris'));
            selValores.add(new Option('Azul'));
            break;
         case 'fontSize':
            selValores.add(new Option ('10px'));
            selValores.add(new Option ('15px'));
            selValores.add(new Option ('20px'));
            selValores.add(new Option ('30px'));
            selValores.add(new Option ('35px'));
            break;
        case 'backgroundColor':
            selValores.add(new Option ('Blue'));
            selValores.add(new Option ('Pink'));
            selValores.add(new Option ('Purple'));
            selValores.add(new Option ('Yellow'));
            selValores.add(new Option ('Red'));
            break;
        case 'animation':
            selValores.add(new Option ('Sliden','a'));
            selValores.add(new Option ('ColoresChange','b'));
            /*selValores.add(new Option ('Purple','c'));
            selValores.add(new Option ('Yellow',));
            selValores.add(new Option ('Red'));*/
            break;


        default:
            break;

    }
}
function aplicarCSS() {
    var selElemento = document.querySelector('#elemento');
    var selPropiedades = document.querySelector('#propiedades');
    var selValores = document.querySelector('#valor');
    if (selElemento.value === '-1')
        alert('Seleccione elemento');
    else if (selPropiedades.value === '-1')
        alert('Seleccione propiedad');
    else if (selValores.value === '-1')
        alert('Seleccione valor');
    

        
            if (selValores.value=="a") {
                contenedor.children[selElemento.value].classList.add('animacionSliden')
    
            } else if(selValores.value=="b"){
                contenedor.children[selElemento.value].classList.add('coloresChange')
             }else if(selValores.value=="c"){
                contenedor.children[selElemento.value].classList.add('coloresChange')
    
             }else if(selValores.value=="d"){
                contenedor.children[selElemento.value].classList.add('coloresChange')
    
            }else{
                contenedor.children[selElemento.value].style[selPropiedades.value]=selValores.value;

            }

           
   
  
}