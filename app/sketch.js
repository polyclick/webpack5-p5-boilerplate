export default function sketch(p) {

  const width = 500
  const height = 800

  p.setup = () => {
    p.createCanvas(width, height)
  }

  p.draw = () => {
    p.background(244, 239, 233)
    p.noFill()
    p.stroke(5, 13, 21)
    p.strokeWeight(3)
    p.ellipse(width/2, height/2, width * 0.75, width * 0.75)
  }
}
