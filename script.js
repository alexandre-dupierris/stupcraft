// Menu hamburger (mobile)
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })
}

// Copier l’adresse IP
function copyIP() {
  navigator.clipboard.writeText('stupeflipcraft.mine.fun')
  alert('Adresse IP copiée !')
}

// Scrollspy : met en surbrillance le lien actif
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.wiki-section')
  const navLinks = document.querySelectorAll('.wiki-nav a')

  function activateLink() {
    let current = ''
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140 // marge pour le header
      const sectionHeight = section.offsetHeight
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id')
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove('active')
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active')
      }
    })
  }

  window.addEventListener('scroll', activateLink)
  activateLink() // active dès le chargement
})
