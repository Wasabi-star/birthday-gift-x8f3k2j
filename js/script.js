document.addEventListener('DOMContentLoaded', () => {
  // 1) Passwort abfragen
  const pwd = prompt("Please put in the password to unpack your present:");

  // 2) prüfen
  if (pwd !== "19962002") {
    document.body.innerHTML = "<h1>No entry without password(reload for pop up to put in password) 🔒</h1>";
    return;  // Abbruch, der Rest lädt nicht
  }

  // 3) Wenn das Passwort stimmt, weiter mit der Auspack-Logik
  const openBtn = document.getElementById('openBtn');
  const box     = document.getElementById('giftBox');
  const content = document.getElementById('content');

  if (!openBtn || !box || !content) {
    console.error('Elemente fehlen: openBtn, giftBox oder content nicht gefunden');
    return;
  }

  openBtn.addEventListener('click', () => {
    console.log('Open-Button geklickt!');
    box.classList.add('open');
    setTimeout(() => {
      box.style.display  = 'none';
      content.classList.remove('hidden');
    }, 500);
  });
});
