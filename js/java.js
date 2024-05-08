





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

Object.seal(Zara) 

Object.isSealed(Zara) //preguntarle a la consola si todos estan protegidos.
Object.isFrozen(Zara) //no poder editar. 






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

    const private = {
        "_name": name,
    }

    const public = {
        age,
        email,
        learningPaths,
        aprovedCourses,
        socialMedia: {
            twitter,
            facebook,
            instagram,
            name, 
        },

        changeName(newName){ //tenemos que pasar por la funcion. 
            private.name = newName
        },
    }
    return {
    }
}



const studiante1 = createStudent({name: 'Amouranth', email: 'sdfd@ff.com'})



//module pattern y namespaces : propiedades privadas en js
