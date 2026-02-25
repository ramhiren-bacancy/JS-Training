// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string


function format(value: number): number
function format(value: Date): string

function format(value: number | Date): string | number {
  if (typeof value === "number") {
    return value
  }

  if (value instanceof Date) {
    return value.toString()
  }

  throw new Error("Unsupported type")
}


function demo(a: number | string) {
  if (typeof a === "number") {
    return a.toFixed(2)
  }

  return a.length
}


const res = demo("hello") // res become number | string -> without overload
const r1 = format(123) // res become number -> with overload
const b = format(new Date())  // b become string -> with overload