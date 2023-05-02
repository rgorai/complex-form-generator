export declare global {
  type Primitives = string | number | boolean

  type SeedValue = Primitives | Seed | Seed[]

  type Seed = {
    [key in keyof Keywords]?: Keywords[key]
  } & {
    [key: string]: any
  }

  type Keychain = (string | number)[]
}
