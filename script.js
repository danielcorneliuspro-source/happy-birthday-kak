const wishButton = document.getElementById('wishButton');
const wishResult = document.getElementById('wishResult');

wishButton.addEventListener('click', () => {
  wishResult.textContent = 'Semoga harapan baikmu menemukan jalannya. Selamat ulang tahun, Greace! ✨';
  wishButton.textContent = 'Wish Sent ✓';
  wishButton.disabled = true;
});

document.getElementById('year').textContent = new Date().getFullYear();
