import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/core/index.ts'),
      name: 'OmiSignal',
      fileName: 'omisignal',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/core/index.ts'),
        worker: resolve(__dirname, 'src/worker/worker-entry.ts'),
      },
      output: {
        dir: 'public',
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'worker') {
            return 'omiworker.js';
          }
          return 'omisignal.js';
        },
        format: 'es',
        inlineDynamicImports: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@core': resolve(__dirname, 'src/core'),
      '@worker': resolve(__dirname, 'src/worker'),
    }
  }
})
