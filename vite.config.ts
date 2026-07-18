import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const rewriteV1Folder = () => ({
  name: 'rewrite-v1-folder',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url === '/v1') {
        res.statusCode = 301;
        res.setHeader('Location', '/v1/');
        res.end();
        return;
      }
      if (req.url === '/v1/') {
        req.url = '/v1/index.html';
      }
      next();
    });
  }
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [react(), tailwindcss(), rewriteV1Folder()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    // manualChunks removed: splitting 'react-core' and 'motion' into separate
    // chunks caused a load-order race where motion/react ran before React had
    // finished initializing, crashing on React.createContext. Letting Rollup
    // handle chunking automatically avoids this.
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
