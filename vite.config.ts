import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ command, mode }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
  ];

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    const isVercel = Boolean(process.env.VERCEL);
    plugins.push(
      nitro(
        isVercel
          ? { preset: "vercel" }
          : {
              preset: "aws_amplify",
              awsAmplify: { runtime: "nodejs20.x" },
            },
      ),
    );
  }

  plugins.push(viteReact());

  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), "VITE_"))) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define: envDefine,
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": path.join(rootDir, "src") },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
  };
});
