/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;

  let seguir;

  let acumPeso=0;
  
  let flagLiq=0;
  let precioLiqCaro;
  let marcaLiqCaro;

  let flagSol=0;
  let pesoSolLiv;
  let marcaSolLiv;

  do{
    //pido datos y valido
    marca = prompt("Ingrese la marca del producto");
    precio = parseFloat(prompt("Ingrese el precio del producto"));
    peso = parseInt(prompt("Ingrese el peso en kilogramos"));
    while(peso < 1){
      peso = parseInt(prompt("Error. Ingrese el peso en kilogramos, tiene que ser 1 o mas"));
    }
    tipo = prompt('Ingrese el tipo del producto ("solido" o "liquido)');
    while(tipo != "solido" && tipo != "liquido"){
      tipo = prompt('Error. Reingrese el tipo del producto, tiene que ser "solido" o "liquido');
    }

    //PUNTO A
    acumPeso +=peso;

    //PUNTO B
    if(flagLiq==0 && tipo == "liquido"){
      marcaLiqCaro = marca;
      precioLiqCaro = precio;
      flagLiq=1;
    }

    if(tipo == "liquido" && precio > precioLiqCaro){
      marcaLiqCaro = marca;
      precioLiqCaro = precio;
    }

    //PUNTO C
    if(flagSol==0 && tipo == "solido"){
      pesoSolLiv = peso;
      marcaSolLiv = marca;
      flagSol=1;
    }
    if(tipo== "solido" && peso < pesoSolLiv){
      pesoSolLiv = peso;
      marcaSolLiv = marca;
    }

    seguir= prompt('Desea ingresar otro producto? ("si" o "no")')
  }while(seguir=="si");

  console.log("a) El peso total de la compra es " + acumPeso);
  console.log("b) La marca del liquido mas caro es " + marcaLiqCaro);
  console.log("c) La marca del solido mas liviano es " + marcaSolLiv)

}
