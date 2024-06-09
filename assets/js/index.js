precio = 400000
cant= 1

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidad = document.querySelector(".cantidad");
cantidad.innerHTML=cant ;

suma= document.querySelector("#suma");
resta= document.querySelector("#resta");
vtotal= document.querySelector(".vtotal");


suma.addEventListener("click", () => {

    cant = cant + 1;
    total = precio * cant;
    cantidad.innerHTML = cant;
    vtotal.innerHTML = total;


})

resta.addEventListener("click", () => {

    cant = cant - 1;
    total = precio * cant;
    cantidad.innerHTML = cant;
    vtotal.innerHTML = total;


})