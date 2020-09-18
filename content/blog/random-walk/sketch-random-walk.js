export default function sketch(p) {
  let canvas,
    x = 0,
    y = 0,
    r = 20,
    step = 20

  const toggleLoop = () => {
    if (p.isLooping()) {
      p.noLoop()
    } else {
      p.loop()
    }
  }

  p.setup = () => {
    canvas = p.createCanvas(700, 500)
    canvas.mouseOver(() => p.cursor('pointer'))
    canvas.mouseClicked(toggleLoop)
    p.background(200)
  }

  p.draw = () => {
    p.frameRate(10)
    p.translate(p.width / 2, p.height / 2)
    p.scale(1, -1)

    p.fill('yellow')
    p.circle(x, y, r)

    const angle = p.random(2 * p.PI)
    x += step * p.cos(angle)
    y += step * p.sin(angle)

    if (x < -p.width / 2) {
      x += p.width
    } else if (x > p.width / 2) {
      x -= p.width
    } else if (y < -p.height / 2) {
      y += p.height
    } else if (y > p.height / 2) {
      y -= p.height
    }
  }
}
