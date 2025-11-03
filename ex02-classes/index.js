const Person = require("./Person")
const Alumn = require("./Alumn")

let joao = new Person("João", 20);
let andrey = new Person("Andrey", 21);

joao.grettings();
andrey.grettings();

let Andrey2 = new Alumn("Andrey 2", 21, "1001");
console.log(Andrey2);