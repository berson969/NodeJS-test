export const createPerson = function (name, age, gender, mail) {
    const person = {
        name: name,
        age,
        gender,
        "e-mail": mail,
        sayHi: function () {
            return `Привет! Меня зовут ${this.name}. Буду ${this.gender === "жен" ? "рада" : "рад"} пообщаться по почте. Пиши мне на ${this["e-mail"]}`;
        },
    };

    return person;
};