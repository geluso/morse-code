const MAX_DOT = 100
const RELEASE_DELAY = 250
const TREE = '__ETIANMSURWDKGOHVF_L_PJBXCYZQ__%$_#___@__+____!^=/_____7___8_90'

class MorseCode {
  constructor() {
    this.reset()
  }

  reset() {
    this.current = ''
    this.currentIndex = 1

    this.pressedDown = null
    this.isDown = false

    this.timerId = null
    this.releaseTimerFired = false
  }

  press() {
    if (!this.isDown) {
      this.isDown = true
      this.pressedDown = (new Date()).getTime()
    }
  }

  release() {
    this.isDown = false
    let now = (new Date()).getTime()
    let delta = now - this.pressedDown
    console.log(now, this.pressedDown, delta)

    if (delta < MAX_DOT) {
      this.currentIndex *= 2
    } else {
      this.currentIndex *= 2
      this.currentIndex++
    }

    this.current = TREE[this.currentIndex]
    return this.current
  }
}
