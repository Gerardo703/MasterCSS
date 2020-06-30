var nombre = "Gerardo Vega";
var altura = 189;

/*
var concatenar = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura}</h3>
`;

if(altura >= 190){
    datos.innerHTML += `
    <h1>Eres una persona ALTA</h1>
    `;
}else{
    datos.innerHTML += `
    <h1>Eres una persona BAJA</h1>
    `;
}

for(var i = 2000; i<=2020; i++){
    //bloque de instrucciones
    datos.innerHTML +=  "<h2>Estamos en el año: "+i;
}
*/

function muestraMiNombre(nombre, altura){
    var misDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura}</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("Gerardo Vega Web 123", 198);
}

imprimir();

var nombres = ["Gerardo", "Juan", "Martin"];

document.write('<h1>Listado de Nombres </h1>');

/*
for(var i=0; i < nombres.length; i++){
    document.write(nombres[i] + '<br>');
}*/

nombres.forEach(function(nombres){
    document.write(nombres + '<br>');
}); 