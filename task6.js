export function rubricExcellent(score) {
    //verificar primero las notas altas
    if (score > 8) {
        return "Excellent";
    }
    //si no es excelente, entonces: pasaste
    else if (score >= 5) {
        return "Pass";
    }
    //y si no, entonces reprobado
    else {
        return "Fail";
    }

}
