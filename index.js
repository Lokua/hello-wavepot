
/**
 * @name hello-wavepot
 * @author Lokua
 */
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const tau = Math.PI * 2
const sin = (f, t) => Math.sin(t * tau * f)
const rect = compose(x => x < 0 ? -1 : 1, sin)

export function dsp(t) {
  const sample = rect(60, sin(0.1, t))
  const gain = 0.25
  
  return sample * gain
}