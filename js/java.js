
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


const stringifyCOmplexObject = JSON.stringify(obj1)//convierte string
const obj2 = JSON.parse(stringifyCOmplexObject) //creamos un objeto a partir de un string


//JSON.parse y JSON.stringify
//JSON.stringify: permite convertir objetos en string.

//afectando uno, el otro no se afecta. tampoco sus propiedades del objeto

//convertirmos el obj1 en un string.
//luego convertimos un string en un objeto. 
//apunta a stack y luego a un nuevo heat

//pero no funciona con metodos.
