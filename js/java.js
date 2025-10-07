





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

