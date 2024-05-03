

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


Object.freeze(estudiante1) 


console.log(Object.getOwnPropertyDescriptors(estudiante1));

//Los objetos son referencias a un esapcio en memoria. 
//cuando copiamos un objeto, estamos copiando su referencia en la memoria

//memoria en js
//inicializacion; crear una nueva variable. asignacion; esa variable tiene un valor.

//2 valores; nombre de la variable, valor de cada una variable. no se guardan juntas. 

//se guardan en stack. 

//pero cuando son objetos: es un apuntador. HEAP.

//objetos: referencias a un espacio en memoria.
//js tiene stack y heap.
//stack rapida pero sin espacio; nombres y valores de las variables,

//objetos; apuntador a la memoria heap. 
//solo es con objetos. 