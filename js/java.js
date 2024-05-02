

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
console.log(Object.keys(estudiante1)) //longitud, imprimiendo las propiedades
console.log(Object.getOwnPropertyNames(estudiante1));//lo mismo de arriba
console.log(Object.entries(estudiante1)); //array de arrays
 */
//Object.entries(estudiante1)[x][x]('xxxx')
//Object.entries(estudiante1)[3][1]('Curso beta') -> unceaught error


console.log(Object.getOwnPropertyDescriptors(estudiante1)); //objeto con propiedades. 

Object.defineProperty(estudiante1, 'PruebaNASA', {
    value: 'estraterrestres',
    writable: true,
    configurable: true,
    enumerable: true,
})