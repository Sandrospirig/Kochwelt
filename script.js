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
        Pancetta: 12 * portionenSandro,
        Parmesan: 0.5 * portionenSandro,
        Pecorino: 1 * portionenSandro,
    };
}

function updateZutatenAnzeigenSandro(zutatenSandro) {

    let PastaText;
    if (zutatenSandro.Pasta >= 1000) {
        PastaText = (zutatenSandro.Pasta / 1000) + ' Kg Pasta';
    } else {
        PastaText = zutatenSandro.Pasta + ' g Pasta';
    }

    document.getElementById('ingredient1Sandro').textContent = PastaText;
    document.getElementById('ingredient2Sandro').textContent = zutatenSandro.Pancetta + ' g Pancetta';
    document.getElementById('ingredient3Sandro').textContent = zutatenSandro.Parmesan + ' g Parmesan';
    document.getElementById('ingredient4Sandro').textContent = zutatenSandro.Pecorino + ' g Pecorino';
}

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
        Senf: 0.13 * portionenJens,
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
        SchweinegulaschText = (zutatenJens.SSchweinegulasch / 1000) + ' Kg Schweinegulasch';
    } else {
        SchweinegulaschText = zutatenJens.Schweinegulasch + ' g Schweinegulasch';
    }

    document.getElementById('ingredient1Jens').textContent = SchweinegulaschText;
    document.getElementById('ingredient2Jens').textContent = zutatenJens.Butterschmalz + ' EL Butterschmalz';
    document.getElementById('ingredient3Jens').textContent = zutatenJens.Senf + '  TL Senf';
    document.getElementById('ingredient4Jens').textContent = zutatenJens.Tomatenmark + ' EL Tomatenmark';
    document.getElementById('ingredient5Jens').textContent = zutatenJens.großeZwiebeln + ' große Zwiebel(n)';
    document.getElementById('ingredient6Jens').textContent = zutatenJens.Knoblauchzehen + ' Knoblauchzehen';
    document.getElementById('ingredient7Jens').textContent = zutatenJens.Karotte + ' Karotte(n)';
    document.getElementById('ingredient8Jens').textContent = zutatenJens.Bier + ' ml Bier';
    document.getElementById('ingredient9Jens').textContent = zutatenJens.Gemüsebrühe + ' ml Gemüsebrühe';
    document.getElementById('ingredient10Jens').textContent = zutatenJens.Paprikapulver + ' TL Paprikapulver';
    document.getElementById('ingredient11Jens').textContent = zutatenJens.Cremefraiche + ' ml Crème fraîche';
}

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

// Kontaktformular

function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mblkqgbk", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}
// Ende