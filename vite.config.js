import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@/assets": path.resolve(__dirname, "src/assets"),
            "@/components": path.resolve(__dirname, "src/components"),
            "@/firebase": path.resolve(__dirname, "src/firebase"),
            "@/hooks": path.resolve(__dirname, "src/hooks"),
            "@/Layouts": path.resolve(__dirname, "src/Layouts"),
            "@/pages": path.resolve(__dirname, "src/pages"),
            "@/store": path.resolve(__dirname, "src/store"),
            "@/utils": path.resolve(__dirname, "src/utils"),
        },
    },
});
