// Matthias Lebakas Pfanne

document.getElementById('calculateButtonMatthias').addEventListener('click', function (event) {

    event.preventDefault();

    let portionsMatthias = parseInt(document.getElementById('portionsMatthias').value);

    if (isNaN(portionsMatthias) || portionsMatthias < 1 || portionsMatthias > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let IngredientsMatthias = calcIngredientsMatthias(portionsMatthias);

    updateIngredientsMatthias(IngredientsMatthias);
});

function calcIngredientsMatthias(portionsMatthias) {
    return {
        Leberkäse: 100 * portionsMatthias,
        Speck: 10 * portionsMatthias,
        Zwiebel: 0.5 * portionsMatthias,
        Öl: 0.75 * portionsMatthias,
        Kartoffel: 100 * portionsMatthias,
        Lauch: 62.5 * portionsMatthias,
        Paprikaschote: 0.5 * portionsMatthias,
        Cremefraiche: 25 * portionsMatthias,
    };
}

function updateIngredientsMatthias(IngredientsMatthias) {

    let LeberkäseWord;
    if (IngredientsMatthias.Leberkäse >= 1000) {
        LeberkäseWord = (IngredientsMatthias.Leberkäse / 1000) + ' kg Leberkäse';
    } else {
        LeberkäseWord = IngredientsMatthias.Leberkäse + ' g Leberkäse';
    }

    let KartoffelWord;
    if (IngredientsMatthias.Kartoffel >= 1000) {
        KartoffelWord = (IngredientsMatthias.Kartoffel / 1000) + ' kg Kartoffeln';
    } else {
        KartoffelWord = IngredientsMatthias.Kartoffel + ' g Kartoffeln';
    }

    let LauchWord;
    if (IngredientsMatthias.Lauch >= 1000) {
        LauchWord = (IngredientsMatthias.Lauch / 1000) + ' kg Lauch';
    } else {
        LauchWord = IngredientsMatthias.Lauch + ' g Lauch';
    }

    document.getElementById('ingredient1Matthias').textContent = LeberkäseWord;
    document.getElementById('ingredient2Matthias').textContent = IngredientsMatthias.Speck + ' g Speck, geräuchert';
    document.getElementById('ingredient3Matthias').textContent = IngredientsMatthias.Zwiebel + ' Zwiebel(n)';
    document.getElementById('ingredient4Matthias').textContent = IngredientsMatthias.Öl + ' EL Öl';
    document.getElementById('ingredient5Matthias').textContent = KartoffelWord;
    document.getElementById('ingredient6Matthias').textContent = LauchWord;
    document.getElementById('ingredient7Matthias').textContent = IngredientsMatthias.Paprikaschote + ' Paprikaschote(n)';
    document.getElementById('ingredient8Matthias').textContent = IngredientsMatthias.Cremefraiche + ' g Crème fraîche';
}
