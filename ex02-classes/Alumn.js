const Person = require("./Person")

class Alumn extends Person {
    constructor(name, age, turma){
        super(name, age); // chama a classe pai
        this.turma = turma;
    }

    // Possivel sobreescrever metodos para classes herdadas
    // grettings(){
    //     console.log("Olá, tudo bom? Meu nome é", this.name);
    // }
}

module.exports = Alumn;