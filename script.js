// Script
var pendientes = [
    { desccripcion: "tarea de agenda de js", completado: false },
    { desccripcion: "comer", completado: false },
    { desccripcion: "cortarse el pelo", completado: false },
    { desccripcion: "dormir", completado: true }
];
function imprimirPendientes(pendiente, index) {
    var lista = document.getElementById("lista");
    lista.insertAdjacentHTML(
        'beforeend', `<li ` + estaCopletado(pendiente.completado) + ` onClick="marcarCompletado(` + index + `)">
        <div class="checkbox"><i class="fa fa-check"></i></div>
        <div class="descripcion">`+ pendiente.desccripcion + `+</div>
        </li>`
    );
}
function estaCopletado(completado) {
    if (completado) {
        return 'class="done pendiente"';
    } else {
        return 'class="pendiente"';
    }

}
function marcarCompletado(index) {
    //var pendientesInterfaz = document.getElementById("pendiente");
    //pendientesInterfaz[index].classList.toggle("done");
    pendientes[index].completado = !pendientes[index].completado;
    imprimirTodo();
}
function imprimirTodo() {
    document.getElementById("lista").innerHTML = "";
    pendientes.forEach(imprimirPendientes);
}

function agregarPendiente() {
    var nombre = document.getElementById("item").value;
    pendientes[pendientes.length] = { desccripcion: nombre, completado: false };  
    imprimirTodo();
}

pendientes.forEach(imprimirPendientes);