document.addEventListener('DOMContentLoaded', () => {
  // --- Fonctionnalité 1 : Mode sombre (déjà existant) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
  } else {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
  }

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
      localStorage.setItem('theme', 'dark-mode');
    } else {
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
      localStorage.setItem('theme', 'light-mode');
    }
  });

  // --- Fonctionnalité 2 : Défilement fluide (ajouté) ---
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // -70 pour laisser de l'espace pour la barre de navigation
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Fonctionnalité 3 : Bouton "Retour en haut" (ajouté) ---
  const backToTopBtn = document.getElementById('back-to-top');

  // Affiche ou cache le bouton en fonction du défilement
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Apparaît après 300px de défilement
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Gère le clic sur le bouton pour remonter en haut de la page
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});