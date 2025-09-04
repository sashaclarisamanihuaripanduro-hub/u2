console.log("hola mundo");
let person = {
    name:"clarisa",
favoriteColor : "blue",
age: 15,
hobby : "bailar"
 };
 console.log(person);
 console.log(person.name);
 console.log(person.favoriteColor);
 console.log(person["age"]);
 console.log(person.hobby);

 console.log("actualiza el objeto");
 person.age = 16;
 person.hobby = "cantar";
 
 console.log(person.age);
 console.log(person.hobby);
    console.log(person);

    let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  console.log(heroes.members[1].powers[1]);
  console.log(heroes.members[2].age);
  console.log(heroes.homeTown);
