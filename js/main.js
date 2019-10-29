document.addEventListener('DOMContentLoaded', () => {
  loadImages()
  initMorse()
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
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
      cycle()
      return true
    }

    if (ev.key === 'Backspace') {
      let banked = document.getElementById('banked')
      banked.textContent = banked.textContent.substr(0, banked.textContent.length - 2)
      return true
    }
  })
}

function initMorse() {
  let morse = new MorseCode()
  let banked = document.getElementById('banked')
  let current = document.getElementById('current')

  let timerId = null
  let synth = new Tone.Synth().toMaster()

  let isPressing = false

  document.addEventListener('keydown', () => {
    if (isPressing) return
    isPressing = true


    synth.triggerAttack('C4')
    morse.press()

    clearInterval(timerId)
  })

  document.addEventListener('keyup', () => {
    isPressing = false
    synth.triggerRelease()

    let letter = morse.release()
    current.textContent = letter

    timerId = this.setTimeout(() => {
      morse.reset()

      banked.textContent += current.textContent
      current.textContent = ''
    }, RELEASE_DELAY)
  })
}
