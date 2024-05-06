
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



//factory pattern y roro
//crear moldes de bojetos. con funciones. 


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



const studiante1 = createStudent()

