
function isObject(subject){
    return typeof subject == 'object'
}


function isArray(subject){
    return Array.isArray(subject)
}


function deepCopy(subject){
    let copySubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)


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





function SuperObject() {}

SuperObject.isObject = function (subject){
    return typeof subject == 'object'
}

SuperObject.deepCopy = function (subject){
    let copySubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)


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



function requiereParam (param){
    throw new Error(param + ' parametro obligatorio');
}


function LearningPath({

    name = requiereParam(),
    courses =[],
}) {

    this.name = name
    this.courses = courses

}


function Student ({
    name = requiereParam('name'), 
    email = requiereParam('email'),
    age,
    twitter,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}){



    this.name = name
    this.email = email
    this.age = age
    this.aprovedCourses=aprovedCourses
    this.socialMedia = {
        twitter,
        instagram,
        facebook
    }


    const private = {
        "_learningPaths": []
    }
    
Object.defineProperty(this, 'learningPaths', {
    get (){
        return private["_learningPaths"]
    },

    set (newLP){
            if (newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP)
        }else{
            console.warn('LP no instancia de prototipo LearningPath');
        }
    },
    configurable: false // eliminar. 
    //hasta ahora: creamos nomenclaturas para decir cuales atributos ymetodos son privados
    //tambien podemos encapsularlos y protegerlos dentro de los prototiopos. 
    
})

    for (learningPathIndex in learningPaths){
      this.learningPaths = learningPaths[learningPathIndex]
    }

    
}



const escuelaWeb = new LearningPath({ name: 'EscuelaWeb'})
const escuelaData = new LearningPath({ name: 'EscuelaData'})
const studiante1 = new Student({email: 'sdfd@ff.com', name: 'Amouranth', learningPaths:[escuelaWeb, escuelaData]})

//metodos estaticos
//crear con objetos literales y fabricas de bojetso.
//como funcionan por dentro.
//tienen llaves, y valores. mas atributos. valuable u configurable.
//proteger. o leer. 

//privadas o publicas. 
//prototipos. 
//copiar bojetos en js. 
//almacenamiento y tipos de datos.
//recursividad.


//////////21 de enero de 2025.
///ya me acorde que son las propiedades modificables en true o false
//el metodo es defineProperty.

//otros metodos: keys - getownpropertiesnames

//los objetos pueden ser cambiados sus valores. pero con seal - freeze son universales. cambiar a falso todos. o cambiar a configurable y writable. 

//shallowcopy: copiar la misma direccion en el espacio de memoria.

//deepcopy: separar la copia.

////hay que ver paso a paso. desde los primeros identificadores de codigo.