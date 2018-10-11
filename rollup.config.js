import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/main.js',
    context: 'window',
    plugins: [
        babel({
            exclude: ['node_modules/**']
        }),
        builtins(),
        resolve(), // so Rollup can find `ms`
        commonjs(), // so Rollup can convert `ms` to an ES module
    ],
    external: ['jquery', 'underscore', 'xregexp', 'moment'],
    output: {
        intro: `
            moment = window.moment;
            $ = window.$;
            _ = window._;
            XRegExp = window.XRegExp;
        `,
        file: 'build/chicken.js',
        name: 'Chicken',
        sourcemap: true,
        
        format: 'umd'
    }
  };