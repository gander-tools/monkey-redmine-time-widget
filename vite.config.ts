import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, {cdn, util} from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        monkey({
            entry: 'src/main.ts',
            userscript: {
                namespace: 'gander.dev/monkey',
                homepageURL: 'https://github.com/gander/monkey-redmine-time-widget',
                include: [
                    /\/issues\/\d+/,
                ],
                exclude: [
                    /\/issues\/\d+[.\/]/,
                ],
            },
            build: {
                fileName: 'monkey-redmine-time-widget.user.js',
                externalGlobals: {
                    'vue': cdn
                        .jsdelivr('Vue', 'dist/vue.global.prod.js')
                        .concat(
                            await util.dataUrl(() => {
                                // @ts-ignore
                                window.Vue = Vue;
                            }),
                        ),
                    'pinia': [
                        'Pinia',
                        (version: string) => `https://cdn.jsdelivr.net/npm/pinia@${version}/dist/pinia.iife.js`,
                    ],
                }
            },
        }),
    ],
});
