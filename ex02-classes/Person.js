/*
    Método padrão chamado constructor, utilizado
    quando um novo objeto for criado.
*/
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    grettings(){
        console.log("Olá, tudo bom? Meu nome é", this.name);
    }
}

module.exports = Person;