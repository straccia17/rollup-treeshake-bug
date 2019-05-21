export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.js',
            format: 'esm'
        }
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle-fixed.js',
            format: 'esm'
        },
        treeshake: false
    }
]