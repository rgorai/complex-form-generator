// import typescript from 'rollup-plugin-typescript2'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    // typescript({
    //   tsconfig: './tsconfig.json',
    // }),
    typescript({
      declaration: true,
      declarationDir: 'types',
      rootDir: 'src',
      tsconfig: './tsconfig.json',
    }),
    scss({
      insert: true,
      output: 'dist/styles.css',
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
}
