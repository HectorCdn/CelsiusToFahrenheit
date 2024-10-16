let age = parseFloat(prompt("Quel âge avez-vous ?"));

if (age <= 5)
  console.log("Gratuit")
else
  if(age <= 17)
    console.log("tarif réduit")
  else
    if (age >= 18)
      console.log("Plein tarif")