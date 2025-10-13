
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
                //if (!Array.isArray(!newLP.courses)){
                //esta convirtiendo esto en un boleano
                //true o false
                //! - este simbolo convierte una expresion en boleano y luego la niega
                //devuelve un true si: 
                //es undefined, null, false, 0, vacio, NaN.
                //!newLP.courses da un boleano.

                //"si courses no esta definido o tiene un valor vacio o no util, muestra la adventencia"

                //!newLP.courses da un boleano. FALSE.
                //Array.isArray(false) - devuelve false.

                //Array.isArray - devuelve true

                //! - operacion logico de negacion NOT
                //convierte el valor en boleano y luego lo invierte

                //Array.isArray - true - pero -
                //!Array.isArray - es false. porque lo invirtio.

                //Array.isArray(courses) - true
                //Array.isArray(!courses) - false. 

                //pasas algo falso al Array.isArray
                //este pregintara si es verdadero o falso. es falso en este caso.

                //if (!Array.isArray(newLP.courses))
                //if (falso. tu cursosVacios3 es falso.)


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



//!! - boleano explicito.
// lo niega, y luego lo vuelve a negar. obtiene su valor boleano real.

//1. true. 2. true. 3.false 4. true. 5. false. 6. true. 7. false. 8. false - 2 errores. 

//funciones =>

    //every - verifica si cumplen una condicion - lanza true o false
    //sort - ordena elementos, numeros.
    //reduce - reduce a un valor unico.
    //filter - crea un nuevo array con elementos que superan la condicion.
    //map - itera en cada elemento dentro del array y ejecuta acciones especificas sin danar el array original




    ///reduce : (acumulador, elementoActual)

//    array.reduce((acumulador, elementoActual) => {
//   return nuevoAcumulador;
// }, valorInicial);

//acumulador - valor que se va acumulando

//10 12 12 15 15 19 19 24 - correcto. lo understand. 

//funcion de reduce mas compleja.


// const numeros = [1, 2, 3, 4, 5, 6];
// const agrupados = numeros.reduce((acc, num) => {
//   const tipo = num % 2 === 0 ? 'pares' : 'impares';
//   acc[tipo].push(num);
//   return acc;
// }, { pares: [], impares: [] });

// console.log(agrupados);
// // { pares: [2, 4, 6], impares: [1, 3, 5] }

//!acc[longitud]: significa “no existe” o “es falsy” esa propiedad (es decir, es undefined, null, false, etc.) - CHATgpt

//!acc[longitud] - significa: no existe o es falsy. HOW?

// ! - ese simbolo ahi en esa ubicacion, what meands?

// ! convierte un valor en booleano y luego niega ese valor.

//ZHO: acc[5] - existe esa propiedad en el objeto acc?
// . si no existe sera undefined. 
//!aac[5] - !undefined - true.
//esta linea verifica si esa propiedad no existe, o es vacia, o falsy. por eso se ejecuta ese if y lo que hay dentro. 


/*EN THIS CODE
const palabras = ['gato', 'perro', 'pez', 'ratón', 'pan'];

const agrupadas = palabras.reduce((acc, palabra) => {
  const longitud = palabra.length;

  if (!acc[longitud]) {
    acc[longitud] = [];
  }

  acc[longitud].push(palabra);
  return acc;
}, {});

console.log(agrupadas);
*/

//if(!acc[longitud]) - quedo explicada.
//acc[longitud] = [] - crea o reemplaza una propiedad en el objeto acc con el nombre igual al valor de longitud, y le asigna un array vacio como valor.

//sucede esto:
/*
let longitud = 5
let acc = {}

//zho:

acc[longitud] = []

//ocurre this:
//js convierte el numero a string.

acc["5"] = []

{"5": []}
*/
