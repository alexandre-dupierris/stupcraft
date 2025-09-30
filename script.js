// Menu hamburger
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

// Wiki : afficher seulement la section cliquée
const wikiLinks = document.querySelectorAll('.wiki-link')
const wikiSections = document.querySelectorAll('.wiki-section')

// Fonction pour afficher une section selon un id
function showSection(id) {
  // Cacher toutes les sections
  wikiSections.forEach((section) => section.classList.remove('active'))

  // Afficher la section demandée
  const target = document.getElementById(id)
  if (target) {
    target.classList.add('active')
  }
}

// Quand on clique sur un lien du wiki
wikiLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault() // empêche le scroll
    const targetId = link.getAttribute('href').substring(1)

    // Met à jour l'URL avec le #
    window.location.hash = targetId

    // Affiche la bonne section
    showSection(targetId)
  })
})

// Quand on arrive sur la page
window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1)
  if (hash) {
    showSection(hash) // si un # existe → affiche la section correspondante
  }
  // sinon → ne montre rien (aucune section active)
})

// Quand l'utilisateur change le # (par ex. en cliquant un lien externe)
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1)
  if (hash) {
    showSection(hash)
  } else {
    // si on enlève le # → cacher toutes les sections
    wikiSections.forEach((section) => section.classList.remove('active'))
  }
})
