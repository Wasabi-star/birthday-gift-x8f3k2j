document.getElementById('openBtn').addEventListener('click', () => {
  const box = document.getElementById('giftBox');
  const content = document.getElementById('content');

  box.classList.add('open');
  setTimeout(() => {
    box.style.display = 'none';
    content.classList.remove('hidden');
  }, 500); // Dauer der Box-Animation
});
// 1) Passwort abfragen
const pwd = prompt("Passwort eingeben, um das Geschenk auszupacken:");

// 2) prüfen
if (pwd !== "19962002") {
  document.body.innerHTML = "<h1>Zugriff verweigert 🔒</h1>";
  throw "Kein Zugang";
}

// 3) vorhandene Logik: Geschenk-Box auspacken
document.getElementById("openBtn").addEventListener("click", () => {
  const box     = document.getElementById("giftBox");
  const content = document.getElementById("content");
  box.classList.add("open");
  setTimeout(() => {
    box.style.display = 'none';
    content.classList.remove('hidden');
  }, 500);
});
