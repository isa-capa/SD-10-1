export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const today = new Date();

        const birthday = new Date(this.year, this.month, this.day);

        let age = today.getFullYear() - birthday.getFullYear();
        let questionBirthDay = today.getMonth() - birthday.getMonth();

        // Ajuste de edad
        if (questionBirthDay < 0 || (questionBirthDay === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        //para poder ver la frase en la terminal
        const frase = `${this.name} is ${age} today!`;
        console.log(frase);
        return frase;
    }
}