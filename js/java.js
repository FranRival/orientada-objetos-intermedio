

function isObject(subject){
    return typeof subject == 'object'
}


function isArray(subject){
    return Array.isArray(subject)
}


function deepCopy(subject){let copySubject;const subjectIsObject=isObject(subject);const subjectIsArray=isArray(subject);if(subjectIsArray){copySubject=[];}else if(subjectIsObject){copySubject={};}else{return subject;}
for(key in subject){const keyIsObject=isObject(subject[key]);if(keyIsObject){copySubject[key]=deepCopy(subject[key]);}else{if(subjectIsArray){copySubject.push(subject[key]);}else{copySubject[key]=subject[key];}}}
return copySubject;}



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
            if (newName.lenght != 0) {
                private["_name"] = newName
            }else {
                console.warn('Tu nombre debe tener al menos un caracter');
            }
        },
    }

    return public

}



const studiante1 = createStudent({email: 'sdfd@ff.com', name: 'Amouranth'})


//duck typing: elementos dependiendo de los metodos que tengan por dentro.

