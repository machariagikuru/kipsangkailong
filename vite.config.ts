import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // Allows the development server to be accessible from other devices on the network
    // '::' binds to all available network interfaces (IPv4 and IPv6)
    host: "::",
    port: 8080, // Sets the development server port
  },
  plugins: [
    // Vite plugin for React, optimized for SWC for faster compilation
    react(),
    // If you intended to add a plugin conditionally for development mode,
    // you would add it here, for example:
    // mode === 'development' && someDevPlugin(),
    // The .filter(Boolean) method removes any 'false' or 'undefined' values from the array,
    // which is useful when conditionally adding plugins.
  ].filter(Boolean),
  resolve: {
    alias: {
      // Configures an alias so you can use '@/components' instead of '../src/components'
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));