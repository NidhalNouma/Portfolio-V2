import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Personal-Portfolio-V2/",
  server: {
    port: 3000,
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100, // adjust the interval as needed
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
