let age = Number(prompt("Quel âge avez-vous ?"));
let nation = prompt("De quel nationalité êtes-vous ?");

if (age >= 18 && nation == "francaise") {
    console.log("Vous êtes éligible")
  } else {
    console.log("Vous n'êtes pas éligible")
  }
