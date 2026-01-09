export function ageCalculator(year, month, day) {
    const today = new Date();

    const birthDate = new Date(year, month, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const questionBirthDay = today.getMonth() - birthDate.getMonth();

    //salto por si aun no se cumple años
    if ( questionBirthDay < 0 || (questionBirthDay === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age;

}