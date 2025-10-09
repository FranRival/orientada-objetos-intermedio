

function isObject(subject){
    return typeof subject == 'object'
}


function isArray(subject){
    return Array.isArray(subject)
}




function requiereParam (param){
    throw new Error(param + ' parametro obligatorio');
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
        },

        get name(){
            return private["_name"]
        },

        set name(newName){
            if (newName.length != 0) {//error de escritura
                private["_name"] = newName
            }else {
                console.warn('Tu nombre debe tener al menos un caracter');
            }
        },

/*         readName(){ 
            return private["_name"]
        },

        changeName(newName){ 
            private["_name"] = newName
        }, */
    }


/*     Object.defineProperty(public, "readName", {
        configurable: false,
        writable: false
    })

    Object.defineProperty(public, "changeName", {
        configurable: false,
        writable: false
    })
 */

    return public

}



const studiante1 = createStudent({name: 'Amouranth', email: 'sdfd@ff.com'})


//getters y setters



//getters y setters crean una propiedad falsa para poder llamar a las propiedades privadas

//los getters y setters quitan el value: y el writable: