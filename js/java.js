
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


const studiante1 = createStudent({email: 'sdfd@ff.com', name: 'Amouranth'})

function createLearningPath({
    name = requiereParam(),
    courses =[],
}) {
    const private = {
        "_name": name,
        "courses": courses
    }

    const public = {  
        get name(){
            return private["_name"];
        },
        set name(newName){
            if (newName.length!=0) {
                private["_name"] = newName
            }else {
                console.warn('Tu willie debe tener al menos un caracter');
            }
        },
        get courses(){
            return private["_courses"];
        },
    }
    return public
}


function createStudent ({
    name = requiereParam('name'), 
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
        "_learningPaths": learningPaths
    }

    const public = {
        email,
        age,
        aprovedCourses,
        socialMedia: {
            twitter,
            facebook,
            instagram,
        },

        get name(){
            return private["_name"];
        },

        set name(newName){
            if (newName.length!=0) {
                private["_name"] = newName
            }else {
                console.warn('Tu nombre debe tener al menos un caracter');
            }
        },

        get learningPaths(){
            return private["_learningPaths"];
        },

        set learningPaths(newLP){

            if (!newLP.name) {
                console.warn('Tu LP no tiene name');
                return
            }

            if (!newLP.courses){
                console.warn('Tu LP no tiene courses');
                return
            }

            if (!Array.isArray(newLP.courses)){//hay un error. siempre entrara en el bucle porque la lista es un false.
                //?
                console.warn('Tu LP no es una (*lista de cursos)');
                return
            }


            private["_learningPaths"] = newLP

        },
    };
    return public
}

const cursosVacios = {
    name: 'X3X',
    courses: null
}

const cursosVacios1 = {
    name: 'VVV',
}

const cursosVacios2 = {
    name: 'ZZZ',
    courses: 'BBB, OOO, PPP'
}

const cursosVacios3 = {
    name: 'OOO',
    courses: ['qqq','eee', 'ppp']
}

//como construyo esta variable: meter studiante + cursosVacios = para que lance las advertencias

//studiante1.learningPaths = cursosVacios
//studiante1.learningPaths = cursosVacios1
//studiante1.learningPaths = cursosVacios2
//studiante1.learningPaths = cursosVacios3