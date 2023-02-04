function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros"); //usei new depois do throw porque tive que instanciar o objeto Error

        if(typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo object");
   
        if(typeof num !== 'number') throw new TypeError("O Num precisa ser do tipo number");
   
        if(arr.length !== num) throw new RangeError ("Tamanho invalido");
    }
    catch(e){ // a letra "e" no parametro quer dizer error que ja vem no javascript
        if(e instanceof ReferenceError) { // estou validando com o instancenof o tipoo do erro instanciado
            console.log("Este erro e do tipo ReferenceError");
            console.log(e.message);
        }else if(e instanceof TypeError) { // estou validando com o instancenof o tipoo do erro instanciado
            console.log("Este erro e do tipo TypeError");
            console.log(e.message);
        }else if(e instanceof RangeError) { // estou validando com o instancenof o tipoo do erro instanciado
            console.log("Este erro e do tipo RangeError");
            console.log(e.message);
        }else {
            console.log("tipo de erro nao esperado:" + e);
        }
    }
}

console.log(validaArray()); 

