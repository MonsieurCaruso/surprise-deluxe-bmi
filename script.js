document.addEventListener("DOMContentLoaded", () => {
    
    // Elemente aus dem HTML holen
    const form = document.getElementById("bmi-form");
    const formContainer = document.getElementById("form-container");
    const cardContainer = document.getElementById("card-container"); 
    
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    
    const nameInput = document.getElementById("name");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");

    const card1Text = document.getElementById("card1-text");
    
    // !! ÄNDERUNG: Wir holen den neuen Container und den Text-Absatz
    const bmiFooter = document.getElementById("footer-bmi");
    const bmiResultText = document.getElementById("bmi-result-text");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        // 1. Daten auslesen
        const name = nameInput.value;
        const height = parseFloat(heightInput.value); 
        const weight = parseFloat(weightInput.value); 

        if (!name || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert("Bitte fülle alle Felder korrekt aus.");
            return;
        }

        // BMI berechnen
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiRounded = bmi.toFixed(1); 

        // 2. Formular ausblenden
        formContainer.classList.add("hidden");
        setTimeout(() => {
            cardContainer.style.visibility = "visible";
        }, 300); 


        // 3. Karten-Sequenz starten
        
        // Karte 1 (Startet leicht verzögert)
        setTimeout(() => {
            card1Text.innerHTML = `Hallo <strong>${name}</strong>! Mal ehrlich... <br>wen interessiert schon der BMI?`;
            card1.classList.add("show");
        }, 500); 

        // Karte 2
        setTimeout(() => {
            card1.classList.remove("show"); 
            card2.classList.add("show");    
        }, 5500); // 5.5 Sekunden

        // Karte 3
        setTimeout(() => {
            card2.classList.remove("show"); 
            card3.classList.add("show");    
        }, 10500); // 10.5 Sekunden

        // !! ÄNDERUNG: BMI-Ergebnis im Footer einblenden
        setTimeout(() => {
            // Neuer, kürzerer Text
            bmiResultText.innerHTML = `(Ach ja... Dein BMI ist: <strong>${bmiRounded}</strong>)`;
            // Zeigt den Footer-Container an
            bmiFooter.classList.add("show"); 
        }, 15500); // 15.5 Sekunden
    });
});