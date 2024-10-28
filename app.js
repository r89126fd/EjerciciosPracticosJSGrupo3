//Serie de Fibonacci
function fibonacci(n) {
          if (n === 0) {
              return 0;
          } else if (n === 1) {
              return 1;
          } else {
              return fibonacci(n - 1) + fibonacci(n - 2);
          }
      }

      
//Factorial de un número
function factorial(n) {
          if (n === 0 || n === 1) {
              return 1; 
          } else {
              return n * factorial(n - 1); 
          }
      }

function numeroPrimo(numero){
    let indicadorPrimo = true;
    let respuesta = "";

    if(numero < 1){
        respuesta = "1 no es un numero primo."
    }else if (numero > 1){
        for(let i = 2; i < numero; i++){
            if(numero % i == 0){
                indicadorPrimo = false;
                break;
            }
        }

        if(indicadorPrimo){
            respuesta = `${numero} es primo`;
        }else{
            respuesta = `${numero} no es primo`;
        }
    }
    
    return respuesta;
}

console.log(numeroPrimo(-10));