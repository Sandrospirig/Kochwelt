//Sandro Carbonara

document.getElementById('calculateButtonSandro').addEventListener('click', function (event) {

    event.preventDefault();

    let portionenSandro = parseInt(document.getElementById('portionenSandro').value);

    if (isNaN(portionenSandro) || portionenSandro < 1 || portionenSandro > 20) {
        alert("Bitte eine Zahl von 1 bis 20 eingeben")
        return //{alert();} 
    }

    let zutatenSandro = berechneZutatenSandro(portionenSandro);

    updateZutatenAnzeigenSandro(zutatenSandro);
});

function berechneZutatenSandro(portionenSandro) {
    return {
        Pasta: 125 * portionenSandro,
        Pancetta: 25 * portionenSandro,
        Ei: 0.5 * portionenSandro,
        Parmesan: 20 * portionenSandro,
        Pecorino: 20 * portionenSandro,
    };
}

function updateZutatenAnzeigenSandro(zutatenSandro) {

    let PastaText;
    if (zutatenSandro.Pasta >= 1000) {
        PastaText = (zutatenSandro.Pasta / 1000) + ' kg Pasta';
    } else {
        PastaText = zutatenSandro.Pasta + ' g Pasta';
    }

    document.getElementById('ingredient1Sandro').textContent = PastaText;
    document.getElementById('ingredient2Sandro').textContent = zutatenSandro.Pancetta + ' g Pancetta';
    document.getElementById('ingredient3Sandro').textContent = zutatenSandro.Ei + ' Ei(er)';
    document.getElementById('ingredient4Sandro').textContent = zutatenSandro.Parmesan + ' g Parmesan';
    document.getElementById('ingredient5Sandro').textContent = zutatenSandro.Pecorino + ' g Pecorino';
}