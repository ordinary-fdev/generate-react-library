"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var __dirname = path_1.default.dirname(new URL(import.meta.url).pathname);
var templatePath = path_1.default.resolve(__dirname, '..', 'template/src/index.tsx');
console.log("__dirname: ".concat(__dirname));
console.log("Resolved templatePath: ".concat(templatePath));
