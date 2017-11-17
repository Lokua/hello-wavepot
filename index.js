
/**
 * @name hello-wavepot
 * @author Lokua
 */

const TAU = Math.PI * 2
const sin = (frequency, time) => Math.sin(time * TAU * frequency)

export function dsp(t) {
  const sample = sin(60, t)
  const gain = 0.25
  
  return sample * gain
}