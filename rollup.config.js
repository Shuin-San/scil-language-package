import typescript from 'rollup-plugin-ts'
import { lezer } from '@lezer/generator/rollup'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  external: (id) => id != 'tslib' && !/^(\.?\/|\w:)/.test(id),
  output: [
    { name: 'scil-language-package', file: pkg.browser, format: 'umd' },
    { file: pkg.module, format: 'es' },
    { file: 'dist/index.cjs', format: 'cjs' },
    { dir: './dist', format: 'es' },
  ],
  plugins: [lezer(), typescript()],
}
