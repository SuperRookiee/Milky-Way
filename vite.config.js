import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      {find: "@", replacement: path.resolve(__dirname, "src")},
      {find: "@/assets", replacement: path.resolve(__dirname, "src/assets"),},
      {find: "@/components", replacement: path.resolve(__dirname, "src/components"),},
      {find: "@/firebase", replacement: path.resolve(__dirname, "src/firebase"),},
      {find: "@/hooks", replacement: path.resolve(__dirname, "src/hooks"),},
      {find: "@/Layouts", replacement: path.resolve(__dirname, "src/Layouts"),},
      {find: "@/pages", replacement: path.resolve(__dirname, "src/pages"),},
      {find: "@/store", replacement: path.resolve(__dirname, "src/store"),},
      {find: "@/utils", replacement: path.resolve(__dirname, "src/utils"),},
    ],
  },
})