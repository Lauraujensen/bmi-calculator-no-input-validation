"use script";

let height = prompt('Indtast din højde i centimeter')
height = parseFloat(height); //parseFloat(height) konverterer tekst til et decimaltal.

let weight = prompt('Indtast din vægt i kilogram')
weight = parseFloat(weight);

if (isNaN (height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Ugyldigt input! Indtast venligst en positiv højde og vægt.");
}
    
else {

    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    
    let category = "";

        if (bmi < 16) {
            category = "Svært undervægtig";
        } 
        
        else if (bmi < 18.5) {
            category = "Undervægtig";
        } 
        
        else if (bmi < 25) {
            category = "Normalvægt";
        } 
        
        else if (bmi < 30) {
            category = "Overvægtig";
        } 
        
        else if (bmi < 35) {
            category = "Moderat overvægtig";
        } 
        
        else if (bmi < 40) {
            category = "Svært overvægtig";
        } 
        
        else {
            category = "Ekstremt overvægtig";
        }

        alert(`Din BMI er ${bmi.toFixed(2)}, hvilket betyder at du er ${category}`)
}
    // De lodrette streger (||) er "OR"-operatoren i JavaScript.