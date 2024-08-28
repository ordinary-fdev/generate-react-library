import dts from "rollup-plugin-dts";
import typescript from "rollup/plugin-typescript";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };
import { copy } from "fs-extra";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true,
      },
      //uncomment this to get cjs build too 
      // {
      //   file: pkg.main,
      //   format: "cjs",
      //   sourcemap: true,
      //   inlineDynamicImports: true,
      // },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({ extract: "dist/styles.scss" }),
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets:[
          {src:'src/assets/images/**/**', dest: "dist/images"}
        ]
      })
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: { file: "dist/index.d.ts", format: "es" },
    plugins: [dts()],
  },
];
