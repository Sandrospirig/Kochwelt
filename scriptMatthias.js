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
        Leberkäse: 125 * portionenMatthias,
        Speck: 10 * portionenMatthias,
        Öl: 0.75 * portionenMatthias,
        Kartoffel: 100 * portionenMatthias,
        Lauch: 62.5 * portionenMatthias,
        Paprikaschote: 0.5 * portionenMatthias,
        Cremefraiche: 25 * portionenMatthias,
    };
}

function updateZutatenAnzeigenMatthias(zutatenMatthias) {

    let LeberkäseText;
    if (zutatenMatthias.Leberkäse >= 1000) {
        LeberkäseText = (zutatenMatthias.Leberkäse / 1000) + ' Kg Leberkäse';
    } else {
        LeberkäseText = zutatenMatthias.Leberkäse + ' g Leberkäse';
    }

    document.getElementById('ingredient1Matthias').textContent = LeberkäseText;
    document.getElementById('ingredient2Matthias').textContent = zutatenMatthias.Speck + ' g Speck, geräuchert';
    document.getElementById('ingredient3Matthias').textContent = zutatenMatthias.Öl + ' EL Öl';
    document.getElementById('ingredient4Matthias').textContent = zutatenMatthias.Kartoffel + ' Kartoffel(n)';
    document.getElementById('ingredient5Matthias').textContent = zutatenMatthias.Lauch + ' dl Rahm';
    document.getElementById('ingredient6Matthias').textContent = zutatenMatthias.Paprikaschote + ' Paprikaschote(n)';
    document.getElementById('ingredient6Matthias').textContent = zutatenMatthias.Cremefraiche + ' g Creme fraiche';
}
