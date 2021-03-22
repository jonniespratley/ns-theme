import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ns-theme',
  buildEs5: 'prod',
  srcDir: 'src',
  enableCache: true,
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  hashFileNames: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      footer: '*Build with Love by JS!*'
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'www',
       // comment the following line to disable service workers in production
       serviceWorker: null,
       prerenderConfig: './prerender.config.ts',
       baseUrl: '/',
       //baseUrl: 'http://myapp.local/',
    },
  ],
  plugins: [
    sass()
  ],
  devServer: {
    logRequests: true,
    //reloadStrategy: 'pageReload'
  },
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  }
};
