import { defineConfig } from 'rolldown';

/**
 *
 * @param {string} name
 * @returns
 */
function getConfig(name) {
    /** @type {import('rolldown').RollupOptions} */
    return {
        input: `packages/${name}/src/main.ts`,
        output: {
            format: 'esm',
            dir: `./packages/${name}/dist`,
        },
    };
}

export default defineConfig([
    getConfig('foo'),
    getConfig('foo2'),
    getConfig('foo3'),
    getConfig('foo4'),
    getConfig('foo5'),
    // getConfig('foo6'),
]);
