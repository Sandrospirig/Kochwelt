//Sandro Carbonara

document.getElementById('calculateButtonSandro').addEventListener('click', function (event) {

    event.preventDefault();

    let portionsSandro = parseInt(document.getElementById('portionsSandro').value);

    if (isNaN(portionsSandro) || portionsSandro < 1 || portionsSandro > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let IngredientsSandro = calcIngredientsSandro(portionsSandro);

    updateIngredientsSandro(IngredientsSandro);
});

function calcIngredientsSandro(portionsSandro) {
    return {
        Pasta: 125 * portionsSandro,
        Pancetta: 25 * portionsSandro,
        Ei: 0.5 * portionsSandro,
        Parmesan: 20 * portionsSandro,
        Pecorino: 20 * portionsSandro,
    };
}

function updateIngredientsSandro(IngredientsSandro) {

    let PastaWord;
    if (IngredientsSandro.Pasta >= 1000) {
        PastaWord = (IngredientsSandro.Pasta / 1000) + ' kg Pasta';
    } else {
        PastaWord = IngredientsSandro.Pasta + ' g Pasta';
    }

    document.getElementById('ingredient1Sandro').textContent = PastaWord;
    document.getElementById('ingredient2Sandro').textContent = IngredientsSandro.Pancetta + ' g Pancetta';
    document.getElementById('ingredient3Sandro').textContent = IngredientsSandro.Ei + ' Ei(er)';
    document.getElementById('ingredient4Sandro').textContent = IngredientsSandro.Parmesan + ' g Parmesan';
    document.getElementById('ingredient5Sandro').textContent = IngredientsSandro.Pecorino + ' g Pecorino';
}