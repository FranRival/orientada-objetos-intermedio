





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

//en los corchetes van los descriptores: datos o funciones getters y setters.
//datos: value, writtable, configurable, enumerable. 
//get: devuelve un valor.
//set: un nuevo valor. 
///el getter y setter se encuentran en object.defineProperty.



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

