class Person {
  // Definimos el campo privado #cellphone
  #cellphone;

  constructor(firstName, lastName, age, height, weight, hobbies, cellphone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies; // Corregido: asignar hobbies correctamente
    this.#cellphone = cellphone; // Corregido: asignar el parámetro cellphone
  }

  // Método para presentar a la persona
  presentar() {
    console.log(
      `Hola, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años`
    );
  }

  // Método para obtener el número de celular (opcional)
  getCellphone() {
    return this.#cellphone;
  }
}

// Crear una instancia de Person
let person1 = new Person(
  "Sasha",
  "Manihuari",
  15,
  1.62,
  72,
  "cantar",
  "999888777"
);

// Mostrar la información
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);
console.log(person1.weight);
console.log(person1.hobbies);
console.log(person1.getCellphone()); // Usar el método para acceder al campo privado

// Función para decir hola
function decirHola(mensaje) {
  console.log(mensaje);
}

decirHola("hola");

// Llamar al método presentar
person1.presentar();
