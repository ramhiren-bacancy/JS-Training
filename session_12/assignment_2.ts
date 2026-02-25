// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .

type FirstArgument<T> =T extends (frist: infer A, ...args: any[]) => any ? A : never

type Fn1 = (id: string, isActive: boolean) => void
type Fn2 = (age: number) => void
type Fn3 = () => void

type F = FirstArgument<Fn1>  // string
type G = FirstArgument<Fn2>  // number
type H = FirstArgument<Fn3>  // never
type I = FirstArgument<string> // never