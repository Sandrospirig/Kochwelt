// Jens Gulasch
document.getElementById('calculateButtonJens').addEventListener('click', function (event) {

    event.preventDefault();

    let portionsJens = parseInt(document.getElementById('portionsJens').value);

    if (isNaN(portionsJens) || portionsJens < 1 || portionsJens > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let IngredientsJens = calcIngredientsJens(portionsJens);

    updateIngredientsJens(IngredientsJens);
});

function calcIngredientsJens(portionsJens) {
    return {
        Schweinegulasch: 125 * portionsJens,
        Butterschmalz: 0.5 * portionsJens,
        Senf: 0.25 * portionsJens,
        Tomatenmark: 0.25 * portionsJens,
        großeZwiebeln: 0.25 * portionsJens,
        Knoblauchzehen: 0.25 * portionsJens,
        Karotte: 0.25 * portionsJens,
        Bier: 50 * portionsJens,
        Gemüsebrühe: 150 * portionsJens,
        Paprikapulver: 0.25 * portionsJens,
        Cremefraiche: 50 * portionsJens,
    };
}

function updateIngredientsJens(IngredientsJens) {

    let SchweinegulaschWord;
    if (IngredientsJens.Schweinegulasch >= 1000) {
        SchweinegulaschWord = (IngredientsJens.Schweinegulasch / 1000) + ' kg Schweinegulasch';
    } else {
        SchweinegulaschWord = IngredientsJens.Schweinegulasch + ' g Schweinegulasch';
    }
    let BierWord;
    if (IngredientsJens.Bier >= 1000) {
        BierWord = (IngredientsJens.Bier / 1000) + ' L Bier';
    } else {
        BierWord = IngredientsJens.Bier + ' ml Bier';
    }
    let GemüsebrüheWord;
    if (IngredientsJens.Gemüsebrühe >= 1000) {
        GemüsebrüheWord = (IngredientsJens.Gemüsebrühe / 1000) + ' L Gemüsebrühe';
    } else {
        GemüsebrüheWord = IngredientsJens.Gemüsebrühe + ' ml Gemüsebrühe';
    }

let CremefraicheWord;
    if (IngredientsJens.Cremefraiche >= 1000) {
        CremefraicheWord = (IngredientsJens.Cremefraiche / 1000) + ' L Crème fraîche';
    } else {
        CremefraicheWord = IngredientsJens.Cremefraiche + ' ml Crème fraîche';
    }

    document.getElementById('ingredient1Jens').textContent = SchweinegulaschWord;
    document.getElementById('ingredient2Jens').textContent = IngredientsJens.Butterschmalz + ' EL Butterschmalz';
    document.getElementById('ingredient3Jens').textContent = IngredientsJens.Senf + '  TL Senf';
    document.getElementById('ingredient4Jens').textContent = IngredientsJens.Tomatenmark + ' EL Tomatenmark';
    document.getElementById('ingredient5Jens').textContent = IngredientsJens.großeZwiebeln + ' große Zwiebel(n)';
    document.getElementById('ingredient6Jens').textContent = IngredientsJens.Knoblauchzehen + ' Knoblauchzehe(n)';
    document.getElementById('ingredient7Jens').textContent = IngredientsJens.Karotte + ' Karotte(n)';
    document.getElementById('ingredient8Jens').textContent = BierWord;
    document.getElementById('ingredient9Jens').textContent = GemüsebrüheWord;
    document.getElementById('ingredient10Jens').textContent = IngredientsJens.Paprikapulver + ' TL Paprikapulver';
    document.getElementById('ingredient11Jens').textContent = CremefraicheWord;
}