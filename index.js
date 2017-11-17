
/**
 * @name hello-wavepot
 * @author Lokua
 */

const TAU = Math.PI * 2
const sin = (time, frequency) => Math.sin(time * TAU * frequency)
const randomBoolean = () => !!Math.round(Math.random())

const ex1 = time => 
  sin(time / 2, randomBoolean() ? 300 : 100)
  
const ex2 = time => 
  sin(time, 60)

export function dsp(time) {
  return ex2(time)
}
