document.querySelectorAll('.order-btn, .btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://wa.me/243818633683?text=Je souhaite commander ce service', '_blank');
  });
});