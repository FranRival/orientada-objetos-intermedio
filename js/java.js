
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

//object.defineproperty. creados a partir del objeto estudiante1. - name, edad, email, etc.


//shallow copy - deepcopy. para copiar objetos a partir de uno ya existente


/* 
const obj3 = Object.assign({}, obj1) 
const obj4 = Object.create(obj1)  
*/

//

//de objeto a string.
/* 
JSON.stringify
JSON.parse 
*/
//de string a objeto

///mas sin que ver con el codigo anterior excepto: con la creacion del objeto. Objt1

//una funcion recursiva se llama a si misma
//y lo hace con un if y else. en el if es donde esta la recursividad. 



//creo que ya se como llamar a la funcion que ha estado chingandome. la de matematicas.  
/* const studiante1 = createStudent({name: 'Amouranth', email: 'sdfd@ff.com'}) */


//object.seal(OBJETO) - seal es para que no sea eliminado. 


//preguntarle a la consola - estos comandos.
/* 
Object.isSealed(Zara) - estan protegidos.
Object.isFrozen(Zara) 
*/


//ahora no se como hacer funcionar las funciones. obtener los datos en el inspector de google. 

//ese es el problema actual que tenemos. como hacer funcionar las funciones. con el inspector, o hacer otras variables y funciones que las manden a llamar. 

//el problema de la llamada. como ejecutar. son 2 formas, por el codigo o por la consola.





//objetos literales: 
//para evitar que sean modificados, eliminados o agreguen mas campos.
//para solo proteger o tambien leer.

//privados o publicos. - here, no se what meands. _guion bajo para las propiedades protegidas
//getters y setters - para llamarlas desde.......
//prototipos tampoco
//copiar objetos ej js - menos
//almacenamientos 
//tipos de datos.
//recursividad

//this en js: objeto global. 
//creo que las funciones que lleven this. no podemos llamarlas asi. deben de ser llamadas por otras funciones.
//this tiene un pedo de contexto. a que vrg se refiere this. 

//arrowFunction
//- capturar al objeto this. lo utiliza dentro de su bloque de instancias. 
//existen por this.
//son anonimas

//una function retorna siempre un valor. sino, undefined.


//un get y set tambien forman parte de writable, configurable, 

//ASIGN
//no hace un copiado profundo de objeto. solo copia la referencia. pero los valores profundos de punto a punto
//obj.a.b.c - continuara copiando los mismos valores del objeto padre.

////-----
///no me acuerdo que son los metodos. o si los puedo crear yo. 

//ejecutando el deepcopy. entendiendo el getter y setter dentro de object.descriptor. factoryFunction con createStudent. probando la funcion de fatory function. las variables public y private estan funcionando como getters y setters + objectDescriptors. haciendo funcionar createStudent. como instanciarlo. como hacer que salte el error de WARM. instanciando la nueva funcion LearningPath que tiene mas de 2 datos de entrada. entrando a los diferentes if de learningPath. LearningPath entrando a todos los if bajo diferentes const, lanzando las advertencias en consola.
//error: cuando un objeto busca ser el correcto, aun la consola lanza una adventencia. + un error de sintaxis en la linea 136 que requiere explicacion para replicacion. el simbolo de !, y como funciona y altera el codigo.
//!! convierte en boleano y luego hace doble negacion. volviendolos en falsos si son falsos y veraderos si son veraderos.
//reduce: tiene 3 valores, (valorAcumulado, valorInicial) => valorAcumulado + valorInicial, 0) - el 0 es el que da valor a valorAcumulado.
//if (!acc [longitud]) - verifica si no existe. y dado que no existe, por eso ejecuta el codigo.


//acc[longitud] = [] - crea o reemplaza una propiedad en el objeto acc con el nombre igual al valor de longitud, y le asigna un array vacio como valor.

//aparecio una buena y nueva interrogante en el codigo del commit: 8cbd33cfccffb8a3c5c1ab9705f402c121eff546

//el siguiente commit luego de este, se explica mas a detalle.