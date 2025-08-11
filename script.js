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
        Spaghetti: 125 * portionenSandro,
        SpeckoderSchinkenwürfeli: 12 * portionenSandro,
        Knoblauchzehen: 0.5 * portionenSandro,
        Eier: 1 * portionenSandro,
        Rahm: 0.25 * portionenSandro,
        SbrinzAOPoderParminogeriebeng: 18 * portionenSandro
    };
}

function updateZutatenAnzeigenSandro(zutatenSandro) {

    let SpaghettiText;
    if (zutatenSandro.Spaghetti >= 1000) {
        SpaghettiText = (zutatenSandro.Spaghetti / 1000) + ' Kg Spaghetti';
    } else {
        SpaghettiText = zutatenSandro.Spaghetti + ' g Spaghetti';
    }

    document.getElementById('ingredient1Sandro').textContent = SpaghettiText;
    document.getElementById('ingredient2Sandro').textContent = zutatenSandro.SpeckoderSchinkenwürfeli + ' g Speck oder Schinkenwürfeli';
    document.getElementById('ingredient3Sandro').textContent = zutatenSandro.Knoblauchzehen + ' Knochblauchzehen';
    document.getElementById('ingredient4Sandro').textContent = zutatenSandro.Eier + ' Eier';
    document.getElementById('ingredient5Sandro').textContent = zutatenSandro.Rahm + ' dl Rahm';
    document.getElementById('ingredient6Sandro').textContent = zutatenSandro.SbrinzAOPoderParminogeriebeng + ' g SbrinzAOP oder Parmino gerieben';
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
        Spaghetti: 125 * portionenJens,
        SpeckoderSchinkenwürfeli: 12 * portionenJens,
        Knoblauchzehen: 0.5 * portionenJens,
        Eier: 1 * portionenJens,
        Rahm: 0.25 * portionenJens,
        SbrinzAOPoderParminogeriebeng: 18 * portionenJens
    };
}

function updateZutatenAnzeigenJens(zutatenJens) {

    let SpaghettiText;
    if (zutatenJens.Spaghetti >= 1000) {
        SpaghettiText = (zutatenJens.Spaghetti / 1000) + ' Kg Spaghetti';
    } else {
        SpaghettiText = zutatenJens.Spaghetti + ' g Spaghetti';
    }

    document.getElementById('ingredient1Jens').textContent = SpaghettiText;
    document.getElementById('ingredient2Jens').textContent = zutatenJens.SpeckoderSchinkenwürfeli + ' g Speck oder Schinkenwürfeli';
    document.getElementById('ingredient3Jens').textContent = zutatenJens.Knoblauchzehen + ' Knochblauchzehen';
    document.getElementById('ingredient4Jens').textContent = zutatenJens.Eier + ' Eier';
    document.getElementById('ingredient5Jens').textContent = zutatenJens.Rahm + ' dl Rahm';
    document.getElementById('ingredient6Jens').textContent = zutatenJens.SbrinzAOPoderParminogeriebeng + ' g SbrinzAOP oder Parminogeriebeng';
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
        Spaghetti: 125 * portionenMatthias,
        SpeckoderSchinkenwürfeli: 12 * portionenMatthias,
        Knoblauchzehen: 0.5 * portionenMatthias,
        Eier: 1 * portionenMatthias,
        Rahm: 0.25 * portionenMatthias,
        SbrinzAOPoderParminogeriebeng: 18 * portionenMatthias
    };
}

function updateZutatenAnzeigenMatthias(zutatenMatthias) {

    let SpaghettiText;
    if (zutatenMatthias.Spaghetti >= 1000) {
        SpaghettiText = (zutatenMatthias.Spaghetti / 1000) + ' Kg Spaghetti';
    } else {
        SpaghettiText = zutatenMatthias.Spaghetti + ' g Spaghetti';
    }

    document.getElementById('ingredient1Matthias').textContent = SpaghettiText;
    document.getElementById('ingredient2Matthias').textContent = zutatenMatthias.SpeckoderSchinkenwürfeli + ' g Speck oder Schinkenwürfeli';
    document.getElementById('ingredient3Matthias').textContent = zutatenMatthias.Knoblauchzehen + ' Knochblauchzehen';
    document.getElementById('ingredient4Matthias').textContent = zutatenMatthias.Eier + ' Eier';
    document.getElementById('ingredient5Matthias').textContent = zutatenMatthias.Rahm + ' dl Rahm';
    document.getElementById('ingredient6Matthias').textContent = zutatenMatthias.SbrinzAOPoderParminogeriebeng + ' g SbrinzAOP oder Parminogeriebeng';
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
        Spaghetti: 125 * portionenDmitrii,
        SpeckoderSchinkenwürfeli: 12 * portionenDmitrii,
        Knoblauchzehen: 0.5 * portionenDmitrii,
        Eier: 1 * portionenDmitrii,
        Rahm: 0.25 * portionenDmitrii,
        SbrinzAOPoderParminogeriebeng: 18 * portionenDmitrii
    };
}

function updateZutatenAnzeigenDmitrii(zutatenDmitrii) {

    let SpaghettiText;
    if (zutatenSandro.Spaghetti >= 1000) {
        SpaghettiText = (zutatenDmitrii.Spaghetti / 1000) + ' Kg Spaghetti';
    } else {
        SpaghettiText = zutatenDmitrii.Spaghetti + ' g Spaghetti';
    }

    document.getElementById('ingredient1Dmitrii').textContent = SpaghettiText;
    document.getElementById('ingredient2Dmitrii').textContent = zutatenDmitrii.SpeckoderSchinkenwürfeli + ' g Speck oder Schinkenwürfeli';
    document.getElementById('ingredient3Dmitrii').textContent = zutatenDmitrii.Knoblauchzehen + ' Knochblauchzehen';
    document.getElementById('ingredient4Dmitrii').textContent = zutatenDmitrii.Eier + ' Eier';
    document.getElementById('ingredient5Dmitrii').textContent = zutatenDmitrii.Rahm + ' dl Rahm';
    document.getElementById('ingredient6Dmitrii').textContent = zutatenDmitrii.SbrinzAOPoderParminogeriebeng + ' g SbrinzAOP oder Parminogeriebeng';
}

// Kontaktformular

function sendMail(event){
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