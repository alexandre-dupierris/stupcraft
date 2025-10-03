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

async function main() {
  fetch('https://api.mcsrvstat.us/2/stupeflipcraft.mine.fun')
    .then((response) => response.json())
    .then((data) => {
      const statusDiv = document.getElementById('server-status')
      if (data.online) {
        statusDiv.innerHTML = `✅ Serveur en ligne avec ${data.players.online} joueurs connectés.`
        statusDiv.style.color = 'green'
      } else {
        statusDiv.innerHTML = '❌ Serveur hors ligne.'
        statusDiv.style.color = 'red'
      }
    })

  fetch('./news.json') // Charge le fichier JSON
    .then((response) => response.json()) // Convertit la réponse en JSON
    .then((data) => {
      const newsContainer = document.getElementById('news-container')
      // newsContainer.innerHTML = ""; // Vide le contenu par défaut

      data.forEach((news) => {
        // Crée un bloc pour chaque news
        const newsItem = document.createElement('div')
        newsItem.classList.add('news-item') // Ajoute une classe CSS

        newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <small>${news.date}</small>
                <p>${news.content}</p>
            `

        newsContainer.appendChild(newsItem) // Ajoute la news au conteneur
      })
    })
    .catch((error) => {
      console.error('Erreur lors du chargement des news :', error)
      document.getElementById('news-container').innerHTML =
        '⚠️ Impossible de charger les news.'
    })
}
main()
