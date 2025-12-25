import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: '/front_7th_chapter4-2/',
  plugins: [react()],
  build: {
    minify: "esbuild",
    // CSS 코드 스플리팅 활성화
    cssCodeSplit: true,
    // 소스맵 생성 비활성화 (프로덕션 빌드 크기 감소)
    sourcemap: false,
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
          // ScheduleTable 관련 컴포넌트들을 하나의 청크로 묶기
          if (
            id.includes("ScheduleTable") ||
            id.includes("ScheduleTableItem") ||
            id.includes("ScheduleDndProvider")
          ) {
            return "schedule-table";
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
  // 최적화 설정
  optimizeDeps: {
    // 의존성 사전 번들링 최적화
    include: ["react", "react-dom", "@chakra-ui/react"],
  },
});
