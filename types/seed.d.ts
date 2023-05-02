export declare global {
  type Seed = {
    [key in keyof Keywords]?: Keywords[key]
  } & {
    [key: string]: any
  }

  type Keychain = (string | number)[]
}
