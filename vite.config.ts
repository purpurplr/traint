import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [svgr({ exportAsDefault: true }), react(), tsconfigPaths(), visualizer()],
    base: 'traint', // gh-pages base path
  };
});
