'use strict';

function vypoctiCenu() {
  let krmivoCena = parseFloat(document.getElementById('krmivo').value);
  let mnozstvi = parseFloat(document.getElementById('mnozstvi').value);
  let zakladniCena = krmivoCena * mnozstvi;

  let bio = document.getElementById('bio').checked
    ? zakladniCena * parseFloat(document.getElementById('bio').value)
    : 0;
  let premium = document.getElementById('premium').checked
    ? zakladniCena * parseFloat(document.getElementById('premium').value)
    : 0;
  let nekvalita = document.getElementById('nekvalita').checked
    ? zakladniCena * parseFloat(document.getElementById('nekvalita').value)
    : 0;
  let darek = document.getElementById('darek').checked
    ? parseFloat(document.getElementById('darek').value)
    : 0;

  let vlastnostiCena = zakladniCena + bio + premium + nekvalita + darek;
  let doprava = document.querySelector('input[name="doprava"]:checked').value;
  let dopravaCena =
    doprava == 0.1 ? vlastnostiCena * parseFloat(doprava) : parseFloat(doprava);

  let celkovaCena = vlastnostiCena + dopravaCena;

  document.getElementById('cena').value = celkovaCena.toFixed(2) + ' Kč';
  document.getElementById('aktualniCena').value =
    zakladniCena.toFixed(2) + ' Kč';
  return celkovaCena;
}

function zkontrolujCenu() {
  let celkovaCena = vypoctiCenu();
  let castka = parseFloat(document.getElementById('castka').value);
  if (castka >= celkovaCena) {
    document.getElementById('vysledek').innerText =
      'Do celkové ceny se vejdete.';
  } else {
    document.getElementById('vysledek').innerText =
      'Do celkové ceny se nevejdete.';
  }
}

document.querySelectorAll('input, select').forEach(element => {
  element.addEventListener('change', vypoctiCenu);
});

function validateText(input) {
  input.value = input.value.replace(/[^a-zA-Zá-žÁ-Ž]/g, '');
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  emailInput.value = emailInput.value.replace(/[^a-zA-Z0-9@._-]/g, '');
}

window.onload = vypoctiCenu;
