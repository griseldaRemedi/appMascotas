async function poblar(){
    const pedido = new Request('datos.json');
    const respuestaSolicitada = await fetch(pedido);
    const respuestaDevuelta = await respuestaSolicitada.json();
    
    recibirDatos(respuestaDevuelta);
}

const sliderHTML = document.getElementById("slider");
//sliderHTML.innerHTML = "Hola mundo</div>";
function recibirDatos(Obj){

    Obj.forEach((element) => {
	    console.log(element);
        sliderHTML.innerHTML += `<div class="cards">${element.especie}
        ${element.nombre}
        ${element.tamanio}
        ${element.cualidades}
        </div>`;
    });
    
}

poblar();
//console.log("Hola mundo!");
