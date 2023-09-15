let edadCliente =  parseInt( prompt("Ingrese edad del cliente"));

do{

    edadCliente = parseInt(prompt("Ingrese edad del cliente")); 


}while(isNaN(edadCliente) || edadCliente > 120 || edadCliente <= 0)


while(isNaN(edadCliente) || edadCliente > 120 || edadCliente <= 0){
    
    edadCliente = parseInt(prompt("Ingrese edad del cliente")); 

}

console.log(edadCliente)