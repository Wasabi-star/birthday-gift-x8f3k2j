document.getElementById('openBtn').addEventListener('click', () => {
  const box = document.getElementById('giftBox');
  const content = document.getElementById('content');

  box.classList.add('open');
  setTimeout(() => {
    box.style.display = 'none';
    content.classList.remove('hidden');
  }, 500); // Dauer der Box-Animation
});
