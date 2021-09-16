import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/xeokit-sdk.min.es.js',
            format: 'es',
            name: 'bundle'
        }
    ],
    plugins: [
        nodeResolve(),
        // commonjs(),
        buble({
            transforms: {
                // make async/await work by default (no transforms)
                asyncAwait: false,
            },
        }),
        terser(),
    ]
}
