export function choice(array: Array<string[]>) {
  let result = ''
  array.forEach(arr => {
    const len = arr.length
    const i = Math.floor(Math.random() * len)
    result += arr[i]
  })
  return result
}

export function chance(floatValue = 0.5) {
  return Math.random() >= floatValue
}

export function randomNumber(max = 6) {
  return Math.floor(Math.random() * max) + 1
}

export function gameCube(val = 1) {
  let result = ''
  for (let i = 0; i < val; i++) {
    result += randomNumber() + ' '
  }
  return result
}
