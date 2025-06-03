
// Kursdaten & News Platzhalter
function speichern() {
    const kurs = document.getElementById('einkaufspreis').value;
    if (kurs) {
        localStorage.setItem('einstiegskurs', kurs);
        document.getElementById('meldung').innerText = `Einstiegskurs ${kurs} gespeichert.`;
    } else {
        document.getElementById('meldung').innerText = 'Bitte einen Kurs eingeben.';
    }
}

function ladeKurse() {
    const aktienDaten = document.getElementById('aktienDaten');
    aktienDaten.innerHTML += '<p>(Hier erscheinen bald die Kursdaten und Nachrichten...)</p>';
}

ladeKurse();
