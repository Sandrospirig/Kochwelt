// Dmitrii Gericht

document.getElementById('calculateButtonDmitrii').addEventListener('click', function (event) {

    event.preventDefault();

    let portionenDmitrii = parseInt(document.getElementById('portionenDmitrii').value);

    if (isNaN(portionenDmitrii) || portionenDmitrii < 1 || portionenDmitrii > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let zutatenDmitrii = berechneZutatenDmitrii(portionenDmitrii);

    updateZutatenAnzeigenDmitrii(zutatenDmitrii);
});

function berechneZutatenDmitrii(portionenDmitrii) {
    return {
        Mehl: 100 * portionenDmitrii,
        Eier: 0.5 * portionenDmitrii,
        Wasser: 37.5 * portionenDmitrii,
        Salz: 0.125 * portionenDmitrii,
        Hackfleisch: 100 * portionenDmitrii,
        Butter: 12.5 * portionenDmitrii,
        Sahne: 0.75 * portionenDmitrii,
        Zwiebeln: 0.5 * portionenDmitrii,
        Butter: 0.5 * portionenDmitrii,
        Essig: 0.75 * portionenDmitrii,
    };
}

function updateZutatenAnzeigenDmitrii(zutatenDmitrii) {

    let MehlText;
    if (zutatenDmitrii.Mehl >= 1000) {
        MehlText = (zutatenDmitrii.Mehl / 1000) + ' Kg Mehl';
    } else {
        MehlText = zutatenDmitrii.Mehl + ' g Mehl';
    }

    document.getElementById('ingredient1Dmitrii').textContent = MehlText;
    document.getElementById('ingredient2Dmitrii').textContent = zutatenDmitrii.Eier + ' Eier';
    document.getElementById('ingredient3Dmitrii').textContent = zutatenDmitrii.Wasser + ' ml Wasser';
    document.getElementById('ingredient4Dmitrii').textContent = zutatenDmitrii.Salz + ' TL Salz';
    document.getElementById('ingredient5Dmitrii').textContent = zutatenDmitrii.Hackfleisch + ' g Hackfleisch';
    document.getElementById('ingredient6Dmitrii').textContent = zutatenDmitrii.Butter + ' g Butter';
    document.getElementById('ingredient7Dmitrii').textContent = zutatenDmitrii.Sahne + ' EL Sahne';
    document.getElementById('ingredient8Dmitrii').textContent = zutatenDmitrii.Zwiebel + ' Zwiebel(n)';
    document.getElementById('ingredient9Dmitrii').textContent = zutatenDmitrii.Butter + ' EL Butter';
    document.getElementById('ingredient10Dmitrii').textContent = zutatenDmitrii.Essig + ' EL Essig';
}