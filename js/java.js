

//metodos estaticos de prototipo:

const estudiante1 = {
    name: 'studiante1',
    age: 18,
    approveCourses: ['Curso 1'],
    addCourse(newCourse){
        this.approveCourses.push(newCourse)
    }
}


console.log(Object.keys(estudiante1));
console.log(Object.getOwnPropertyNames(estudiante1));
console.log(Object.entries(estudiante1));