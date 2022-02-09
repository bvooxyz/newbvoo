import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
      scss: {
        prependData: '@use "src/styles/variables.scss" as *;',
      },
    }),
  ],

  kit: {
    adapter: adapter({ out: 'dist' }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      fs: {
        allow: ['routes'],
      },
      css: {
        preprocessorOptions: {
          postcss: true,
          scss: {
            additionalData: '@use "src/styles/variables.scss" as *;',
          },
        },
      },
    },
  },
};

export default config;
