let alumno;
const alumnosCurso = ["Pedro", "Maria", "Miguel", "Ana", "Oli", "Matias", "Milagros", "Pilar", null, true, {name: "Roman"}];
console.log(alumnosCurso[2])

for(alumno of alumnosCurso){

    console.log(alumno)

}

/*

for(let i = 0; i < alumnosCurso.length; i++){

    console.log(alumnosCurso[i])

}

do{

    alumno = prompt("Ingrese ombre del alumno")

    alumnosCurso.push(alumno)

}while(alumno !== "exit")


let contador = 1

while(contador <= 100){


    contador = contador + 2
}

*/