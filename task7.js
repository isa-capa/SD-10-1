export function rubricPerfect(score) {
    //si es exactamente 11
    if (score == 11) {
        return "Perfect";
    }
    //si es mayor que 8
    else if (score > 8) {
        return "Excellent";
    }
    //si paso
    else if (score >= 5) {
        return "Pass";
    }
    //si reprueba
    else {
        return "Fail";
    }

}
