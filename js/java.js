
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



    if (isArray(learningPaths)) {
        this.learningPaths=[];
        
        for (learningPathIndex in learningPaths){
            if (learningPaths[learningPathIndex] instanceof LearningPath) {
                this.learningPaths.push(learningPaths[learningPathIndex])
            }
        }
    }
}


const escuelaWeb = new LearningPath({ name: 'EscuelaWeb'})
const escuelaData = new LearningPath({ name: 'EscuelaData'})
const studiante1 = new Student({email: 'sdfd@ff.com', name: 'Amouranth', learningPaths:[escuelaWeb, escuelaData]})

// instanceof con instancias y prototipos 

//que dickenson hace esta cosa?

const Nate = new Student({name:"Nate", email:"jjdf", learningPaths:[escuelaWeb]})

//en array
//para agregar mas informacion siempre hay que usar push.
//no se hace
//Nate.learningPaths[escuelaData]
//y es
//Nate.learningPaths.push(escuelaData) - push son parentesis