import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";


import pkg from "./package.json" assert { type: "json" };

function removeScssImports(){
  return {
    name:'',
    transform(code,id){
      if(id.endsWith('.d.ts')){
        return{
          code: code.replace(/import\s+['"]\.\/.*\.scss['"'];/g,''),
          map:null
        }
      };
      return null;
    }
  };
}

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
      postcss({ extract: "styles.scss", minimize:true}),
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets:[
          { src: 'src/assets', dest: 'dist' }
        ]
      })
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/types/index.d.ts",
    output: { file: "dist/index.d.ts", format: "es" },
    plugins: [removeScssImports(),dts()],
  },
];
