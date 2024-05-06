
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

/* 
const stringifyCOmplexObject = JSON.stringify(obj1)
const obj2 = JSON.parse(stringifyCOmplexObject) 


 */




function isObject(subject){
    return typeof subject == 'object'
}


function isArray(subject){
    return Array.isArray(subject)
}



function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject)
    const subjectIsObject = isObject(subject)

    if (subjectIsArray) {
        copySubject = []
    }else if (subjectIsObject) {
        copySubject = {}
    }else{
        return subject
    }


    for (key in subject){
        const keyIsObject = isObject(subject[key])

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
            
        }else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            }else{
                copySubject[key] = subject[key]
            }
        }
    }
    return copySubject
}



//deepcopy con recursividad.
//objetos creando funciones recursivas que aplican el deepcopy
//para ir elemento por elemento, para no copiar el valor de referencia, sino
//valor de los objetos y array. 