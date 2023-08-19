import { createPerson } from "./createPerson.js";
import { clone } from "./clone.js";

const person = createPerson("Радион", 33, "муж", "mymail@example.com");
const another = clone(person);

another["e-mail"] = "employee@company.org";

if (another !== person && another["e-mail"] !== person["e-mail"]) {
    console.log("Да. Действительно. Мы успешно произвели клонирование.");
} else {
    console.log("Всё таки клонирование не получилось.");
}