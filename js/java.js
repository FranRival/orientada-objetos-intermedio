


//shallowcopy

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    }
}

const obj2 = {}

for (prop in obj1){
    obj2[prop] = obj1[prop]
}


//no afecta la copia del otro.
//afecta this shet when tenemos que detallar: 
//obj1.c.e =
//esa asignacion ahora si afecta a los demas objetos alv