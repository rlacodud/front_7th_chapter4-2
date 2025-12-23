import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          // react-vendor 청크
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }
          // chakra-ui 청크
          if (
            id.includes("@chakra-ui") ||
            id.includes("@emotion") ||
            id.includes("framer-motion")
          ) {
            return "chakra-ui";
          }
          // dnd-kit 청크
          if (id.includes("@dnd-kit")) {
            return "dnd-kit";
          }
          // axios 청크
          if (id.includes("axios")) {
            return "axios";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  esbuild: {
    // esbuild는 기본적으로 console.log를 제거하지 않으므로, 별도 설정 필요
    drop: ["console", "debugger"],
  },
});
