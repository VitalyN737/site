const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
