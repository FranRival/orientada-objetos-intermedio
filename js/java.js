
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    },

    editA(){
        this.a = 'Amouranth the whore'
    }
}


/* const stringifyCOmplexObject = JSON.stringify(obj1)
const obj2 = JSON.parse(stringifyCOmplexObject) 
 */


//RECURSIVIDAD
//funcion se llama a si misma.

//crea ejecuciones de una misma funcion


//function recursiva(){
  //  if (/* validacion */) {
        //llamado recursivo
    //}else{
        //llamados normales. sin recursividad. 
    //}
//}


const numeritos = [0,1,2,3,4,5,6,7,8,9,54656,76,4,5]
let numerito = 0
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index]
    console.log({index, numerito});
}

function recursiva(numersArray){
    if (numersArray.length !=0) {
        const firstNum = numersArray[0]
        console.log(firstNum);
        numersArray.shift()
        recursiva(numersArray)
    }
}