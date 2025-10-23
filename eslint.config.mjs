import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "prisma/generated",
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "dockerfile",
      ".dockerignore"
    ]
  },
  {
    files: ["**/*.ts"],
    ...(process.env.CI && {
      languageOptions: {
        parserOptions: {
          project: "./tsconfig.json",
          tsconfigRootDir: __dirname
        }
      }
    }),
    rules: {
      "@typescript-eslint/no-misused-promises": process.env.CI
        ? "error"
        : "off"
    }
  }
];

export default eslintConfig;