// Dmitrii Gericht

document.getElementById('calculateButtonDmitrii').addEventListener('click', function (event) {

    event.preventDefault();

    let portionsDmitrii = parseInt(document.getElementById('portionsDmitrii').value);

    if (isNaN(portionsDmitrii) || portionsDmitrii < 1 || portionsDmitrii > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let IngredientsDmitrii = calcIngredientsDmitrii(portionsDmitrii);

    updateIngredientsDmitrii(IngredientsDmitrii);
});

function calcIngredientsDmitrii(portionsDmitrii) {
    return {
        Mehl: 100 * portionsDmitrii,
        Eier: 0.5 * portionsDmitrii,
        Wasser: 37.5 * portionsDmitrii,
        Salz: 0.125 * portionsDmitrii,
        Hackfleisch: 100 * portionsDmitrii,
        Butter: 12.5 * portionsDmitrii,
        Sahne: 0.75 * portionsDmitrii,
        Zwiebel: 0.5 * portionsDmitrii,
        Butter: 0.5 * portionsDmitrii,
        Essig: 0.75 * portionsDmitrii,
    };
}

function updateIngredientsDmitrii(IngredientsDmitrii) {

    let MehlWord;
    if (IngredientsDmitrii.Mehl >= 1000) {
        MehlWord = (IngredientsDmitrii.Mehl / 1000) + ' kg Mehl';
    } else {
        MehlWord = IngredientsDmitrii.Mehl + ' g Mehl';
    }

    let HackfleischWord;
    if (IngredientsDmitrii.Hackfleisch >= 1000) {
        HackfleischWord = (IngredientsDmitrii.Hackfleisch / 1000) + ' kg Hackfleisch';
    } else {
        HackfleischWord = IngredientsDmitrii.Hackfleisch + ' g Hackfleisch';
    }

    document.getElementById('ingredient1Dmitrii').textContent = MehlWord;
    document.getElementById('ingredient2Dmitrii').textContent = IngredientsDmitrii.Eier + ' Eier';
    document.getElementById('ingredient3Dmitrii').textContent = IngredientsDmitrii.Wasser + ' ml Wasser';
    document.getElementById('ingredient4Dmitrii').textContent = IngredientsDmitrii.Salz + ' TL Salz';
    document.getElementById('ingredient5Dmitrii').textContent = HackfleischWord;
    document.getElementById('ingredient6Dmitrii').textContent = IngredientsDmitrii.Butter + ' g Butter';
    document.getElementById('ingredient7Dmitrii').textContent = IngredientsDmitrii.Sahne + ' EL Sahne';
    document.getElementById('ingredient8Dmitrii').textContent = IngredientsDmitrii.Zwiebel + ' Zwiebel(n)';
    document.getElementById('ingredient9Dmitrii').textContent = IngredientsDmitrii.Butter + ' EL Butter';
    document.getElementById('ingredient10Dmitrii').textContent = IngredientsDmitrii.Essig + ' EL Essig';
}