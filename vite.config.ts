import { defineConfig } from "vitest/config";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({ base: "/", plugins: [svgr(), dts(), react()] });
