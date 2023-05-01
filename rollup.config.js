import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.tsx',
  context: 'window',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      rootDir: 'src',
      tsconfig: './tsconfig.json',
    }),
    postcss({
      minimize: true,
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
}
