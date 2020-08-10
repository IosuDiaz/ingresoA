/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;

	let contadorSexoF=0;
	let contadorSexoM=0;
	let flagSexo=0;

	let acumEdad=0;
	let promedio;

	let maxTemp;
	let nomMaxTemp;
	let flagTemp=0;

	for(let i = 0;i<=4;i++){

		nombre = prompt("Ingrese el nombre");
		temperatura= parseInt(prompt("Ingrese la temperatura"));
		while(temperatura < 1){
			temperatura= parseInt(prompt("Error. Ingrese la temperatura, tiene que ser 1 o mayor"));
		}
		sexo = prompt('Ingrese sexo. "f" o "m"');
		while(sexo != "f" && sexo != "m"){
			sexo = prompt('Error. Para ingresar sexo coloque "f" o "m"');
		}
		edad = parseInt(prompt("Ingrese la edad (entre 1 y 120)"))
		while (edad<=0 || edad > 120){
			edad = parseInt(prompt("Error. Reingrese la edad, tiene que estar entre 1 y 120"))
		}
		//PUNTO A
		if(sexo=="f"){
			contadorSexoF++;
			flagSexo=1;
		}
		else{
			contadorSexoM++;
		}

		//PUNTO B
		acumEdad += edad;

		//PUNTO C
		if(flagTemp==0 || temperatura > maxTemp){
			nomMaxTemp=nombre;
			maxTemp = temperatura;
			flag=1;
		}



	}

	promedio = acumEdad / 5;

	console.log("a) Hay " + contadorSexoF + " mujeres y " + contadorSexoM + " hombres.");
	console.log("b) La edad promedio es de " + promedio);
	if(flag){
	console.log("c) La mujer con mayor temperatura es " + nomMaxTemp + " y tiene " + maxTemp + " grados")
	}
	else {
		console.log("c) No se ingresaron mujeres")
	}
}
