// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
	plugins: [react()],
	base: "/REPO_NAME/", // must match your GitHub repo name exactly
});
