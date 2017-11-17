
/**
 * @name hello-wavepot
 * @author Lokua
 */
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const tau = Math.PI * 2
const sin = (f, t) => Math.sin(t * tau * f)
const rect = compose(x => x < 0 ? -1 : 1, sin)
const square = x => x < 0 ? -1 : 1
const sum = (...x) => x.reduce((t, v) => v + t, 0)
const avg = (...x) => sum(...x) / x.length
const clip = x => x < -1 ? -1 : x > 1 ? 1 : x

export function dsp(t) {
  const gain = 0.5
  let sample
  
  sample = sin(60, sin(0.2, t))
  sample = avg(sample, square(sample)) * gain
  
  return (sin(40, t) + sin(43, t) + sin(100, t)) / 3
}