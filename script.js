document.getElementById('calculateButton').addEventListener('click', function(event) {

    event.preventDefault();

    let portionen = parseInt(document.getElementById('portionen').value);

    if (isNaN(portionen) || portionen < 1 || portionen > 7) {
        return;
    }

    let zutaten = berechneZutaten(portionen);

    updateZutatenAnzeigen(zutaten);
});

function berechneZutaten(portionen) {
    return {
        Spaghetti: 125 * portionen,
        SpeckoderSchinkenwürfeli: 12 * portionen,
        Knoblauchzehen: 0.5 * portionen,
        Eier: 3/4 * portionen,
        Rahm: 2 * portionen,
        SbrinzAOPoderParminogeriebeng: 2 * portionen
    };
}

function updateZutatenAnzeigen(zutaten) {

    let SpaghettiText;
    if (zutaten.Spaghetti >= 1000) {
        SpaghettiText = (zutaten.Spaghetti / 1000) + ' Kg Spaghetti';
    } else {
        SpaghettiText = zutaten.Spaghetti + ' g Spaghetti';
    }

    document.getElementById('ingredient1').textContent = SpaghettiText;
    document.getElementById('ingredient2').textContent = zutaten.SpeckoderSchinkenwürfeli + ' g Speck oder Schinkenwürfeli';
    document.getElementById('ingredient3').textContent = zutaten.Knoblauchzehen + ' Knochblauchzehen';
    document.getElementById('ingredient4').textContent = zutaten.Eier + ' Eier';
    document.getElementById('ingredient5').textContent = zutaten.Rahm + ' dl Rahm';
    document.getElementById('ingredient6').textContent = zutaten.SbrinzAOPoderParminogeriebeng + ' g SbrinzAOP oder Parminogeriebeng';
}

let portionsInput = document.getElementById('portions');
let portionsError= document.getElementById('portions-error');

portionsInput.addEventListener('invalid', function(event){
    event.preventDefault();
    portionsError.style.display = "block"
});

portionsInput.addEventListener('input', function() {
    if (this.validity.valid) {
        portionsError.style.display = "none";
    } else {
        portionsError.style.display ="block"
    }
});