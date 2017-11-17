
/**
 * @name hello-wavepot
 * @author Lokua
 */
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const tau = Math.PI * 2
const sin = (f, t) => Math.sin(t * tau * f)
const square = x => x < 0 ? -1 : 1
const rect = compose(square, sin)
const sum = (...x) => x.reduce((t, v) => v + t, 0)
const avg = (...x) => sum(...x) / x.length
const clip = x => x < -1 ? -1 : x > 1 ? 1 : x
const mtof = m => Math.pow(2, (m - 69) / 12) * 440
const ftom = f => Math.round((12 * (Math.log(f / 440) / Math.log(2))) + 69)

export function dsp(t) {
  const gain = 0.5
  let sample
  
  sample = sin(mtof(12), sin(0.01, t))
  sample = avg(sample, square(sample)) * gain
  
  return (
    sin(mtof(7), sample) + 
    (sin(mtof(40), t) * Math.abs(sin(0.5, t))) + 
    (sin(mtof(47), t) * Math.abs(sin(0.3, t / 5))) +
    (sin(mtof(51), t) * Math.abs(sin(0.1, t / 3)))
  ) / 4
}