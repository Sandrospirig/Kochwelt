// Jens Gulasch
document.getElementById('calculateButtonJens').addEventListener('click', function (event) {

    event.preventDefault();

    let portionenJens = parseInt(document.getElementById('portionenJens').value);

    if (isNaN(portionenJens) || portionenJens < 1 || portionenJens > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let zutatenJens = berechneZutatenJens(portionenJens);

    updateZutatenAnzeigenJens(zutatenJens);
});

function berechneZutatenJens(portionenJens) {
    return {
        Schweinegulasch: 125 * portionenJens,
        Butterschmalz: 0.5 * portionenJens,
        Senf: 0.15 * portionenJens,
        Tomatenmark: 0.25 * portionenJens,
        großeZwiebeln: 0.25 * portionenJens,
        Knoblauchzehen: 0.25 * portionenJens,
        Karotte: 0.25 * portionenJens,
        Bier: 50 * portionenJens,
        Gemüsebrühe: 150 * portionenJens,
        Paprikapulver: 0.25 * portionenJens,
        Cremefraiche: 0.25 * portionenJens,
    };
}

function updateZutatenAnzeigenJens(zutatenJens) {

    let SchweinegulaschText;
    if (zutatenJens.Schweinegulasch >= 1000) {
        SchweinegulaschText = (zutatenJens.Schweinegulasch / 1000) + ' Kg Schweinegulasch';
    } else {
        SchweinegulaschText = zutatenJens.Schweinegulasch + ' g Schweinegulasch';
    }
    let BierText;
    if (zutatenJens.Bier >= 1000) {
        BierText = (zutatenJens.Bier / 1000) + ' L Bier';
    } else {
        BierText = zutatenJens.Bier + ' ml Bier';
    }
    let GemüsebrüheText;
    if (zutatenJens.Gemüsebrühe >= 1000) {
        GemüsebrüheText = (zutatenJens.Gemüsebrühe / 1000) + ' L Gemüsebrühe';
    } else {
        GemüsebrüheText = zutatenJens.Gemüsebrühe + ' ml Gemüsebrühe';
    }

    document.getElementById('ingredient1Jens').textContent = SchweinegulaschText;
    document.getElementById('ingredient2Jens').textContent = zutatenJens.Butterschmalz + ' EL Butterschmalz';
    document.getElementById('ingredient3Jens').textContent = zutatenJens.Senf + '  TL Senf';
    document.getElementById('ingredient4Jens').textContent = zutatenJens.Tomatenmark + ' EL Tomatenmark';
    document.getElementById('ingredient5Jens').textContent = zutatenJens.großeZwiebeln + ' große Zwiebel(n)';
    document.getElementById('ingredient6Jens').textContent = zutatenJens.Knoblauchzehen + ' Knoblauchzehen';
    document.getElementById('ingredient7Jens').textContent = zutatenJens.Karotte + ' Karotte(n)';
    document.getElementById('ingredient8Jens').textContent = BierText;
    document.getElementById('ingredient9Jens').textContent = GemüsebrüheText;
    document.getElementById('ingredient10Jens').textContent = zutatenJens.Paprikapulver + ' TL Paprikapulver';
    document.getElementById('ingredient11Jens').textContent = zutatenJens.Cremefraiche + ' ml Crème fraîche';
}