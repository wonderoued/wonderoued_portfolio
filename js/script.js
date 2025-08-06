document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Vérifie le thème par défaut ou stocké dans localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
  } else {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
  }

  // Gère l'événement de clic sur le bouton de thème
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Met à jour le texte du bouton et l'icône
    if (body.classList.contains('dark-mode')) {
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
      localStorage.setItem('theme', 'dark-mode');
    } else {
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
      localStorage.setItem('theme', 'light-mode');
    }
  });
});