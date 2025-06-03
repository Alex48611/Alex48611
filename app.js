
// Einstiegskurs speichern (Platzhalter-Logik)
function speichern() {
    const kurs = document.getElementById('einkaufspreis').value;
    if (kurs) {
        localStorage.setItem('einstiegskurs', kurs);
        document.getElementById('meldung').innerText = `Einstiegskurs ${kurs} gespeichert.`;
    } else {
        document.getElementById('meldung').innerText = 'Bitte einen Kurs eingeben.';
    }
}
