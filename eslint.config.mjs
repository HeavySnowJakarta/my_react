// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node } },
//   tseslint.configs.recommended,
// ]);

// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
// 如果你需要 Jest 的规则，可以安装并导入:
// import jestPlugin from "eslint-plugin-jest";

export default tseslint.config(
  // 0. 全局忽略文件 (可选，但推荐)
  {
    ignores: ["node_modules/", "dist/", "build/"],
  },

  // 1. ESLint 核心推荐规则
  js.configs.recommended,

  // 2. TypeScript 相关配置 (使用 typescript-eslint 提供的预设)
  // 这会自动配置 parser, plugin, 和推荐规则
  ...tseslint.configs.recommended,

  // 3. Prettier 插件配置 (用于运行 Prettier)
  // 注意：这里只添加插件和规则，冲突规则由 prettierConfig 处理
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // 启用 prettier 规则，相当于 plugin:prettier/recommended 的核心部分
    },
  },

  // 4. 自定义配置 (全局变量、特定规则覆盖)
  {
    // 可以通过 files 指定应用范围，例如只对 ts/js 文件生效
    // files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // 浏览器环境全局变量
        ...globals.node,    // Node.js 环境全局变量
        ...globals.es2021,  // ES2021 全局变量
        ...globals.jest,    // Jest 测试环境全局变量
      },
      // parser 和 parserOptions 通常由 tseslint.configs.recommended 自动设置，无需重复
      // parser: tseslint.parser,
      // parserOptions: { project: true }, // 如果使用需要类型信息的规则，可能需要配置 project
    },
    rules: {
      // 在这里覆盖来自 recommended 或添加你自己的规则
      "no-case-declarations": "off",
      "no-constant-condition": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      // 建议将 'off' 改为 'warn'，除非你确定不需要这些检查
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-var-requires": "off", // 如果你确实需要 require 语法
      "no-unused-vars": "off", // typescript-eslint 的规则会处理 TS 文件，这个可以关掉
    },
  },

  // 5. Jest 相关配置 (如果需要更详细的 Jest 规则)
  // {
  //   files: ["**/*.test.{js,ts}", "**/*.spec.{js,ts}"], // 只应用到测试文件
  //   ...jestPlugin.configs['flat/recommended'], // 使用 Jest 插件的推荐配置 (需要先安装和导入)
  //   rules: {
  //     // 可以在这里覆盖 Jest 相关的规则
  //   }
  // },

  // 6. Prettier 配置 (禁用冲突规则 - 必须放在最后！)
  prettierConfig
);