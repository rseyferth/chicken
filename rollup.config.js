import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/main.js',
    context: 'window',
    plugins: [
        builtins(),
        resolve(), // so Rollup can find `ms`
        commonjs(), // so Rollup can convert `ms` to an ES module
        babel({
            exclude: ['node_modules/**']
        })
    ],
    output: {
        file: 'build/chicken.js',
        name: 'Chicken',
        sourcemap: true,
        globals: {
            jquery: '$',
            underscore: '_'
        },
        format: 'umd'
    }
  };