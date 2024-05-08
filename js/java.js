





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

        readName(){ 
            return private["_name"]
        },

        changeName(newName){ //tenemos que pasar por la funcion. 
            private["_name"] = newName
        },


    }
    return public
    
}



const studiante1 = createStudent({name: 'Amouranth', email: 'sdfd@ff.com'})



//module pattern y namespaces : propiedades privadas en js
