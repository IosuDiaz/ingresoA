/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let destino;
	let temporada;
	let cantidad;

	let seguir;

	let contBrc=0;
	let contCat=0;
	let contSal=0;
	let destinoMasElegido;

	let flag=0;
	let cantMaxPasajeros;
	let nomMaxPasajeros;

	let contInv=0;
	let sumaPersInv=0;
	let promedioInv;

	do{
		//pido datos y valido
		nombre = prompt("Ingrese el nombre");
		destino = prompt('Ingrese el destino. "bariloche" "cataratas" o "salta"');
		while(destino != "bariloche" && destino != "cataratas" && destino != "salta"){
			destino = prompt('Error. Reingrese el destino, tiene que ser "bariloche" "cataratas" o "salta"');
		}
		temporada = prompt('Ingrese la temporada de la estadia. "otoño ""invierno" "verano" o "primavera"');
		while(temporada!= "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
			temporada = prompt('Error. Reingrese la temporada de la estadia, tiene que ser "otoño ""invierno" "verano" o "primavera"');
		}
		cantidad = parseInt(prompt("Ingrese la cantidad de personas que viajan"));
		while(cantidad < 1){
			cantidad = parseInt(prompt("Error. Ingrese la cantidad de personas que viajan, tiene que ser 1 o mas"));
		}
		//PUNTO A
		switch(destino){
			case "bariloche":
				contBrc++;
				break;

			case "cataratas":
				contCat++;
				break;

			case "salta":
				contSal++;
				break;
		}

		if(contBrc > contCat && contBrc > contSal){
			destinoMasElegido = "Bariloche";
		}
		else if(contCat>=contBrc && contCat > contSal){
			destinoMasElegido = "Cataratas";
		}
		else{
			destinoMasElegido = "Salta";
		}

		//PUNTO B
		if(flag==0 || cantidad > cantMaxPasajeros){
			cantMaxPasajeros = cantidad;
			nomMaxPasajeros = nombre;
			flag=1;
		}

		//PUNTO C
		if(temporada == "invierno"){
			contInv++;
			sumaPersInv += cantidad;
		}


		seguir = prompt('Desea seguir ingresando estadias de vacaciones? "si" o "no"')
	}while(seguir == "si");

	promedioInv = sumaPersInv / contInv;

	console.log("a) El destino mas elegido es" + destinoMasElegido);
	console.log("b) La persona que lleva mas pasajeros es " + nomMaxPasajeros + " y lleva " + cantMaxPasajeros + " pasajeros");
	console.log("c) El promedio de las personas que viajan en invierno es: " + promedioInv);

}
