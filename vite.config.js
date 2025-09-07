import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const repo = "REPO_NAME";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: `/${repo}/`, // important for GitHub Pages
});
