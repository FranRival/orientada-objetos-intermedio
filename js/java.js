
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

    //no vi lo evidente. 
    //es una funcion. 
    //para instanciarla hay que meterle 2 tipos de datos.
    //para acceder a ella: studiante1.learningPaths. no da nada
    //esta vacia. 
    //instanciada..........
    //como hago para que tambien salga el nombre del estudiante.
    //estructura para referenciar la funcion

    //studiante.name
    //studiante.learningPath = {name: 'zzz', courses: ['333','888']}


    //string + array.


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

        set learningPaths(newLP){//setter acumulativo:

            if (!newLP.name) {//si name existe, sigue.
                console.warn('Tu LP no tiene name');
                return
            }


            if (!newLP.courses){//valida que tenga propiedad
                console.warn('Tu LP no tiene courses');
                return
            }

            if (isArray(!newLP.courses)){//valida que sea un array
                console.warn('Tu LP no es una (*lista de cursos)');
                return
            }


            private["_learningPaths"] = newLP //si pasa todas las validaciones, se guarda privadamente en:

        },
    };
    return public
}

const cursosVacios = {
    name: 'XXX',
    courses: null
}

const cursosVacios1 = {
    name: 'XXX',
}

//como construyo esta variable: meter studiante + cursosVacios = para que lance las advertencias

//studiante1.learningPaths = cursosVacios
//studiante1.learningPaths = cursosVacios1