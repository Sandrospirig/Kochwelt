// Matthias Lebakas Pfanne

document.getElementById('calculateButtonMatthias').addEventListener('click', function (event) {

    event.preventDefault();

    let portionenMatthias = parseInt(document.getElementById('portionenMatthias').value);

    if (isNaN(portionenMatthias) || portionenMatthias < 1 || portionenMatthias > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let zutatenMatthias = berechneZutatenMatthias(portionenMatthias);

    updateZutatenAnzeigenMatthias(zutatenMatthias);
});

function berechneZutatenMatthias(portionenMatthias) {
    return {
        Leberkäse: 100 * portionenMatthias,
        Speck: 10 * portionenMatthias,
        Zwiebel: 0.5 * portionenMatthias,
        Öl: 0.75 * portionenMatthias,
        Kartoffel: 100 * portionenMatthias,
        Lauch: 62.5 * portionenMatthias,
        Paprikaschote: 0.5 * portionenMatthias,
        Cremefraiche: 0.25 * portionenMatthias,
    };
}

function updateZutatenAnzeigenMatthias(zutatenMatthias) {

    let LeberkäseText;
    if (zutatenMatthias.Leberkäse >= 1000) {
        LeberkäseText = (zutatenMatthias.Leberkäse / 1000) + ' Kg Leberkäse';
    } else {
        LeberkäseText = zutatenMatthias.Leberkäse + ' g Leberkäse';
    }

    let KartoffelText;
    if (zutatenMatthias.Kartoffel >= 1000) {
        KartoffelText = (zutatenMatthias.Kartoffel / 1000) + ' Kg Kartoffel';
    } else {
        KartoffelText = zutatenMatthias.Kartoffel + ' g Kartoffel';
    }

    let LauchText;
    if (zutatenMatthias.Lauch >= 1000) {
        LauchText = (zutatenMatthias.Lauch / 1000) + ' Kg Lauch';
    } else {
        LauchText = zutatenMatthias.Lauch + ' g Lauch';
    }

    document.getElementById('ingredient1Matthias').textContent = LeberkäseText;
    document.getElementById('ingredient2Matthias').textContent = zutatenMatthias.Speck + ' g Speck, geräuchert';
    document.getElementById('ingredient2Matthias').textContent = zutatenMatthias.Zwiebel + ' Zwiebel(n)';
    document.getElementById('ingredient3Matthias').textContent = zutatenMatthias.Öl + ' EL Öl';
    document.getElementById('ingredient4Matthias').textContent = KartoffelText;
    document.getElementById('ingredient5Matthias').textContent = LauchText;
    document.getElementById('ingredient6Matthias').textContent = zutatenMatthias.Paprikaschote + ' Paprikaschote(n)';
    document.getElementById('ingredient6Matthias').textContent = zutatenMatthias.Cremefraiche + ' g Creme fraiche';
}
