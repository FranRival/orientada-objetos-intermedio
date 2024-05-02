

//metodos estaticos de prototipo:

const estudiante1 = {
    name: 'studiante1',
    age: 18,
    approveCourses: ['Curso 1'],
    addCourse(newCourse){
        console.log('This', this);
        console.log('This.approveCourses', this.approveCourses);
        this.approveCourses.push(newCourse)
    }
}

/* 
console.log(Object.keys(estudiante1))
console.log(Object.getOwnPropertyNames(estudiante1))
console.log(Object.entries(estudiante1)); 






Object.defineProperty(estudiante1, 'PruebaNASA', {
    value: 'estraterrestres',
    writable: true,
    configurable: true,
    enumerable: true,
})

*/

//objetc.defineProperty

Object.defineProperty(estudiante1, 'navegator', {
    value: 'chrome',
    writable: true,
    enumerable: false,
    configurable: true
})


Object.defineProperty(estudiante1, 'PruebaNASA', {
    value: 'extraterrestres',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(estudiante1, 'editor', {
    value: 'visualstudio',
    writable: false,
    enumerable: true,
    configurable: true
})

Object.defineProperty(estudiante1, 'terminal', {
    value: 'wls',
    writable: true,
    enumerable: true,
    configurable: false
})

Object.defineProperty(estudiante1, 'extraterrestres', {
    value: 'Ovnis alv',
    writable: false,
    enumerable: false,
    configurable: false
})


//Object.seal(estudiante1) //coloca todas las configurable como false.
Object.freeze(estudiante1) //configurable y writtable.


console.log(Object.getOwnPropertyDescriptors(estudiante1));

//cuando estan en writtable: false. no pueden cambiar la infromacion. pero 
//si pueden eliminarlo. 
//para eso es co figurable.