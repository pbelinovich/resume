export const ASD = ''

// -- 1

/* export function strjoin() {
  return Array.prototype.slice.call(arguments, 1).join(arguments[0])
}

console.log('!!', strjoin('.', 'a', 'b', 'c'))
console.log('!!', strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')) */

// -- 2

/* Promise.resolve(1)
  .then(x => x + 1) // 2
  .then(x => {
    throw x
  }) // err
  .then(x => console.log(x)) //
  .catch(err => console.log(err)) // 2
  .then(x => Promise.resolve(x)) // undefined
  .catch(err => console.log(err)) //
  .then(x => console.log(x)) // undefined */

// 2 undefined

// -- 3

/* const sum = (a, b, c) => {
  return a + b + c
}

const curry = fn => {
  const arr: number[] = []

  const ownFn = (...args: number[]) => {
    arr.push(...args)

    if (arr.length >= fn.length) {
      return fn.apply(this, arr)
    }

    return ownFn
  }

  return ownFn
}

console.log('!!', curry(sum)(1, 2, 3))
console.log('!!', curry(sum)(1, 2)(3))
console.log('!!', curry(sum)(1)(2)(3)) */

const timeLimited = (fn, t) => {
  return (...args: any[]) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject('Time limit exceeded')
      }, t)

      return Promise.resolve(fn(...args))
        .then(resolve)
        .catch(reject)
        .then(() => clearTimeout(timer))
    })
  }
}
