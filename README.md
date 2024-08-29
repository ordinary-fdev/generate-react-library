# Generate React Lib

[![npm version](https://badge.fury.io/js/generate-react-lib.svg)](https://badge.fury.io/js/generate-react-lib)

**Generate React Lib** is a command-line tool that helps you quickly create a React component library with a pre-configured Rollup bundler setup. This tool simplifies the process, allowing you to focus on building your components while taking care of the build configuration.

## Features

- **Quick Setup:** Generate a fully configured React library in seconds.
- **Rollup Bundler:** Pre-configured Rollup setup for optimal bundling.
- **TypeScript Support:** Includes TypeScript configuration out of the box.
- **Ready for Publishing:** Your library is ready to be published on npm with minimal setup.

## Installation

To use this package, install it globally using npm:

```bash
npm install -g generate-react-lib
```
## Features

Once installed, you can create a new React library by running the following command:

```bash
generate-react-lib name 'library-name'
Replace 'library-name' with the desired name of your library.
```

This will create a new directory named library-name with the initial setup for your React library.

## Other Steps

```
Install Dependencies:
npm install
```


## Build your library using the provided build script:

```
npm run build
This command will generate the necessary build artifacts in a format suitable for publishing to npm.
```

## Publish Your Library (Optional):

If you want to publish your library to npm, follow the npm publishing guide to publish the package.

## Directory Structure
After running the generate-react-lib command, your project directory will include:

src/: Source files for your library.
dist/: Build output directory.
package.json: NPM package configuration.
rollup.config.js: Rollup configuration file.