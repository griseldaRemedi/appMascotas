async function poblar(){
    const pedido = new Request(' https://griseldaremedi.github.io/appMascotas/datos.json');
    const respuestaSolicitada = await fetch(pedido);
    const respuestaDevuelta = await respuestaSolicitada.json();
    
    recibirDatos(respuestaDevuelta);
}

const sliderHTML = document.getElementById("slider");
function recibirDatos(Obj){

    Obj.forEach((element) => {
	    console.log(element);
        sliderHTML.innerHTML += `<div class="cards">${element.especie}<h2>
        ${element.nombre}</h2>
        <div class="descripcion">${element.tamanio}
        ${element.cualidades}</div>
        <button type="button" class="btn btn-outline-success btn-sm">Adoptame</button>
        </div>`;
    });
    
}

poblar();
