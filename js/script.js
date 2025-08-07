document.addEventListener('DOMContentLoaded', () => {
  // --- Fonctionnalité 1 : Mode sombre ---
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

  // --- Fonctionnalité 2 : Défilement fluide ---
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, 
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Fonctionnalité 3 : Bouton "Retour en haut" ---
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // --- Fonctionnalité 4 : Logique de contact avec messages prédéfinis ---
  const showWhatsappBtn = document.getElementById('show-whatsapp-options');
  const showTelegramBtn = document.getElementById('show-telegram-options');
  const whatsappOptions = document.getElementById('whatsapp-options');
  const telegramOptions = document.getElementById('telegram-options');

  const whatsappPhone = '22663631291';
  const telegramUsername = 'wbczizou';

  showWhatsappBtn.addEventListener('click', () => {
    whatsappOptions.classList.toggle('hidden');
    telegramOptions.classList.add('hidden');
  });

  showTelegramBtn.addEventListener('click', () => {
    telegramOptions.classList.toggle('hidden');
    whatsappOptions.classList.add('hidden');
  });

  document.querySelectorAll('.predefined').forEach(button => {
    button.addEventListener('click', (e) => {
      const message = e.target.dataset.message;
      let url = '';
      if (e.target.classList.contains('whatsapp')) {
        url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
      } else if (e.target.classList.contains('telegram')) {
        url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
      }
      if (url) {
        window.open(url, '_blank');
      }
    });
  });

  const whatsappSendCustomBtn = document.getElementById('whatsapp-send-custom');
  const whatsappCustomMessageInput = document.getElementById('whatsapp-custom-message');

  whatsappSendCustomBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const customMessage = whatsappCustomMessageInput.value;
    if (customMessage) {
      const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(customMessage)}`;
      window.open(url, '_blank');
    }
  });

  const telegramSendCustomBtn = document.getElementById('telegram-send-custom');
  const telegramCustomMessageInput = document.getElementById('telegram-custom-message');

  telegramSendCustomBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const customMessage = telegramCustomMessageInput.value;
    if (customMessage) {
      const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(customMessage)}`;
      window.open(url, '_blank');
    }
  });
});