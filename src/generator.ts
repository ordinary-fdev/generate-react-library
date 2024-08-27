// // import fs from 'fs-extra';
// // import path from 'path';

// // const TEMPLATE_FILES = [
// //   { src: 'template/tsconfig.json', dest: 'tsconfig.json' },
// //   { src: 'template/package.json', dest: 'package.json' },
// //   { src: 'template/vite.config.ts', dest: 'vite.config.ts' },
// //   { src: 'template/rollup.config.js', dest: 'rollup.config.js' },
// //   { src: 'template/src/index.tsx', dest: 'src/index.tsx' },
// //   { src: 'template/src/MyComponent.tsx', dest: 'src/MyComponent.tsx' },
// //   { src: 'template/src/MyComponent.scss', dest: 'src/MyComponent.scss' },
// // ];

// // export function generateLibrary(name: string, options: { description: string; author: string; license: string }) {
// //   const projectDir = path.join(process.cwd(), name);
// //   console.log(`Generating library in directory: ${projectDir}`);

// //   if (fs.existsSync(projectDir)) {
// //     console.error(`Directory ${name} already exists.`);
// //     throw new Error(`Directory ${name} already exists.`);
// //   }

// //   fs.mkdirSync(projectDir, { recursive: true });
// //   console.log(`Created directory: ${projectDir}`);

// //   TEMPLATE_FILES.forEach(({ src, dest }) => {
// //     const templatePath = path.resolve(__dirname, '..', src);
// //     const targetPath = path.join(projectDir, dest);
// //     console.log(`Copying from ${templatePath} to ${targetPath}`);
// //     fs.copyFileSync(templatePath, targetPath);
// //   });

// //   const packageJsonPath = path.join(projectDir, 'package.json');
// //   console.log(`Updating package.json at ${packageJsonPath}`);
// //   const packageJson = fs.readJsonSync(packageJsonPath);
// //   packageJson.name = name;
// //   packageJson.description = options.description;
// //   packageJson.author = options.author;
// //   packageJson.license = options.license;
// //   fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
// //   console.log(`Updated package.json with name: ${name}, description: ${options.description}, author: ${options.author}, license: ${options.license}`);
// // }


// import fs from 'fs-extra';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const TEMPLATE_FILES = [
//   { src: 'template/tsconfig.json', dest: 'tsconfig.json' },
//   { src: 'template/package.json', dest: 'package.json' },
//   { src: 'template/vite.config.ts', dest: 'vite.config.ts' },
//   { src: 'template/rollup.config.js', dest: 'rollup.config.js' },
//   { src: 'template/src/index.tsx', dest: 'src/index.tsx' },
//   { src: 'template/src/MyComponent.tsx', dest: 'src/MyComponent.tsx' },
//   { src: 'template/src/MyComponent.scss', dest: 'src/MyComponent.scss' },
// ];
// export function generateLibrary(name: string, options: { description: string; author: string; license: string }) {
//   const projectDir = path.resolve(process.cwd(), name);

//   if (fs.existsSync(projectDir)) {
//     throw new Error(`Directory ${name} already exists.`);
//   }

//   fs.mkdirSync(projectDir, { recursive: true });

//   TEMPLATE_FILES.forEach(({ src, dest }) => {
//     // Resolve paths properly
//     const templatePath = path.resolve(__dirname, '..', src);
//     const targetPath = path.resolve(projectDir, dest);

//     console.log(`Checking existence of source path: ${templatePath}`);
//     if (!fs.existsSync(templatePath)) {
//       console.error(`Source file does not exist: ${templatePath}`);
//       return;
//     }

//     console.log(`Checking existence of target path: ${targetPath}`);
//     const targetDir = path.dirname(targetPath);
//     if (!fs.existsSync(targetDir)) {
//       console.log(`Creating target directory: ${targetDir}`);
//       fs.mkdirSync(targetDir, { recursive: true });
//     }

//     try {
//       fs.copyFileSync(templatePath, targetPath);
//       console.log(`Copied ${templatePath} to ${targetPath}`);
//     } catch (error) {
//       console.error(`Failed to copy ${templatePath} to ${targetPath}:`, error);
//     }
//   });

//   const packageJsonPath = path.join(projectDir, 'package.json');
//   const packageJson = fs.readJsonSync(packageJsonPath);
//   packageJson.name = name;
//   packageJson.description = options.description;
//   packageJson.author = options.author;
//   packageJson.license = options.license;
//   fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
// }


import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 console.warn(__dirname);
 
const TEMPLATE_FILES = [
  { src: 'template/tsconfig.json', dest: 'tsconfig.json' },
  { src: 'template/package.json', dest: 'package.json' },
  { src: 'template/rollup.config.js', dest: 'rollup.config.js' },
  { src: 'template/src/index.tsx', dest: 'src/index.tsx' },
  { src: 'template/src/components/MyComponent.tsx', dest: 'src/components/MyComponent.tsx' },
  { src: 'template/src/components/MyComponent.scss', dest: 'src/components/MyComponent.scss' },
  { src: 'template/src/components/index.tsx', dest: 'src/components/index.tsx' },
];

const TEMPLATE_DIR = path.resolve(__dirname, '../template');

export function generateLibrary(name: string, options: { description: string; author: string; license: string }) {
  const projectDir = path.join(process.cwd(), name);

  if (fs.existsSync(projectDir)) {
    throw new Error(`Directory ${name} already exists.`);
  }

  fs.mkdirSync(projectDir, { recursive: true });

  // Copy the entire template directory to the project directory
  fs.copySync(TEMPLATE_DIR, projectDir);

  // Update package.json with user options
  const packageJsonPath = path.join(projectDir, 'package.json');
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.name = name;
  packageJson.description = options.description;
  packageJson.author = options.author;
  packageJson.license = options.license;
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

  console.log(`Library ${name} created successfully!`);
}