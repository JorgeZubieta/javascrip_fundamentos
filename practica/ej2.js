// Ahora que sabemos cuantoCuesta una computadora, queremos saber si una computadora me conviene. Esto ocurre cuando:
// 	• sale menos de $6000, y
// 	• tiene al menos un monitor de 32 pulgadas, y
// 	• tiene al menos 8GB de memoria
// Definí la función meConviene, que nuevamente tome el número de pulgadas y cantidad de memoria y nos diga si nos conviene comprarla :
// > meConviene(25, 8)
// false // porque el monitor es demasiado chico
// > meConviene(42, 12)
// true // cumple las tres condiciones

// En la Biblioteca ya está definida la función cuantoCuesta lista para ser invocada.
// function cuantoCuesta(pulgadas, memoria) /* ... */
// Nos dice cuanto cuesta una computadora en base a sus pulgadas y su cantidad de memoria
//
// Por ejemplo:
//  > cuantoCuesta(25, 16)
//  5700

function meConviene(pulgadas, memoria){
    return cuantoCuesta(pulgadas, memoria) < 6000 && pulgadas >= 32 && memoria >= 8; 
}