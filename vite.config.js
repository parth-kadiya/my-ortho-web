import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace `my-ortho-web` with your repo name
export default defineConfig({
  plugins: [react()],
  base: "/my-ortho-web/",
});
