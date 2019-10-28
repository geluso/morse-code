document.addEventListener('DOMContentLoaded', () => {
  loadImages()
})

function loadImages() {
  let preload = document.getElementById('preload')
  let current = document.getElementById('current-image')
  let index = 0

  let images = [
    'assets/00-dots.jpeg',
    'assets/01-tree.png',
    'assets/02-abstract.webp'
  ]

  images = images.map(src => {
    let img = document.createElement('img')
    img.src = src
    return img
  })

  const cycle = () => {
    index = (index + 1) % images.length
    current.src = images[index].src
  }

  current.src = images[index].src
  current.addEventListener('click', cycle)

  document.addEventListener('keydown', (ev) => {
    cycle()
  })
}
