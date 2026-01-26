// vite.config.ts
import path from "path";
import checker from "file:///home/dev/txc/project/serhii/frontend/node_modules/vite-plugin-checker/dist/esm/main.js";
import { loadEnv, defineConfig } from "file:///home/dev/txc/project/serhii/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///home/dev/txc/project/serhii/frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
var PORT = 8080;
var env = loadEnv("all", process.cwd());
var vite_config_default = defineConfig({
  // base: env.VITE_BASE_PATH,
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"'
      },
      overlay: {
        position: "tl",
        initialIsOpen: false
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), "node_modules/$1")
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), "src/$1")
      }
    ]
  },
  server: { port: PORT, host: "0.0.0.0" },
  preview: { port: PORT, host: "0.0.0.0" }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvdHhjL3Byb2plY3Qvc2VyaGlpL2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9kZXYvdHhjL3Byb2plY3Qvc2VyaGlpL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Rldi90eGMvcHJvamVjdC9zZXJoaWkvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBjaGVja2VyIGZyb20gJ3ZpdGUtcGx1Z2luLWNoZWNrZXInO1xuaW1wb3J0IHsgbG9hZEVudiwgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBQT1JUID0gODA4MDtcblxuY29uc3QgZW52ID0gbG9hZEVudignYWxsJywgcHJvY2Vzcy5jd2QoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIGJhc2U6IGVudi5WSVRFX0JBU0VfUEFUSCxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgY2hlY2tlcih7XG4gICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgZXNsaW50OiB7XG4gICAgICAgIGxpbnRDb21tYW5kOiAnZXNsaW50IFwiLi9zcmMvKiovKi57anMsanN4LHRzLHRzeH1cIicsXG4gICAgICB9LFxuICAgICAgb3ZlcmxheToge1xuICAgICAgICBwb3NpdGlvbjogJ3RsJyxcbiAgICAgICAgaW5pdGlhbElzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogL15+KC4rKS8sXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8kMScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogL15zcmMoLispLyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjLyQxJyksXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHNlcnZlcjogeyBwb3J0OiBQT1JULCBob3N0OiAnMC4wLjAuMCcgfSxcbiAgcHJldmlldzogeyBwb3J0OiBQT1JULCBob3N0OiAnMC4wLjAuMCcgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxPQUFPLFVBQVU7QUFDbFQsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsU0FBUyxvQkFBb0I7QUFDdEMsT0FBTyxXQUFXO0FBSWxCLElBQU0sT0FBTztBQUViLElBQU0sTUFBTSxRQUFRLE9BQU8sUUFBUSxJQUFJLENBQUM7QUFFeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsUUFDTixhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLGlCQUFpQjtBQUFBLE1BQ3pEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsUUFBUTtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVEsRUFBRSxNQUFNLE1BQU0sTUFBTSxVQUFVO0FBQUEsRUFDdEMsU0FBUyxFQUFFLE1BQU0sTUFBTSxNQUFNLFVBQVU7QUFDekMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
