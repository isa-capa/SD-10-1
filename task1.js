export function costCalculator(amount) {
    //tarifa fija $3
    const fee = 3;
    //Interes 1%
    const interest = amount * 0.01;

    return Number(amount) + fee + interest;
}

//NOTA: en la instruccion da como resultado 305, pero la respuesta correcta es 306, porque: la instruccion dicen: " Por cada transacción hay una tarifa de $3 y un interés del 1% (0.01)." Por lo que si elijo el monto $300, el interes (1%) osea 3 y le sumo el fee que son $3, la suma es: 300 + 3 + 3 = 306.

