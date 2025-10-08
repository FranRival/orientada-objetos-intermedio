





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

    //se pregunta si es un objeto, o si es un array.
    //objeto - nombre, correo, edad, etc.
    //array - lista vacia. 


    ///AQUI VIENE LA PARTE DIFICIL.
    for (key in subject){
        const keyIsObject = isObject(subject[key])
            //key apunta a los datos que existen dentro de ese objeto/array. especificamente los valores.
            //en caso de ser objeto OBJETO.nombre, edad, email
            //si es un array, [0],[1],[2],[3]


        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
            //si es un array u objeto
            //el objeto ya esta inicializado?
            //pero si es un boleano o string. no pasa nada.

            //si es un objeto o un array, se reinicia el ciclo, porque?

            //LA OTRA PARTE DIFICIL
            //si es un valor primitivo, solo se copia.
            //pero
            //si es un array, se envia con push.
            //si es un objeto, se copia.
            
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
//3 niveles de profundidad explicado con chatgpt
//como funciona esa fabrica de copiar objetos/arrays. en que parte del codigo sucede this magic. 
//o tal vez asi no funcione. solo se referecian nuevos objetos sin ser una fabrica infinita. 
//como queda la formula?

//esta es la nomenclatura para fabricar decenas de estudiantes
//const estudianteUniversal = deepCopy(createStudent)
//estudianteUniversal.socialMedia.twitter = 'ddd'


const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    aprovedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined
    }
}


const Zara = deepCopy(studentBase)


const Mina = deepCopy(studentBase)
Mina.socialMedia.twitter = "sexooooo!"




Object.defineProperty(Zara, 'age', {
    value:'Zarilla',
    configurable: false,
})





function requiereParam (param){
    throw new Error(param + ' parametro obligatorio');
}

function createStudent ({
    name = requiereParam('name'), //obligatorio
    email = requiereParam('email'),
    age,
    twitter,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}){
    return {
        name, 
        age,
        email,
        learningPaths,
        aprovedCourses,
        socialMedia: {
            twitter,
            facebook,
            instagram
        }
    }
}



const studiante1 = createStudent({name: 'Amouranth', email: 'sdfd@ff.com'})



//abstraccion con objetos literales y deep cpy.



