#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
const questions = [
    { type: 'input', name: 'description', message: 'Package description:' },
    { type: 'input', name: 'author', message: 'Author:' },
    { type: 'input', name: 'license', message: 'License:', default: 'MIT' },
];
const program = new Command();
program
    .version('1.0.0')
    .description('CLI tool to generate a React TypeScript library');
program
    .command('create <name>')
    .description('Create a new React TypeScript library')
    .action(async (name) => {
    console.log(chalk.blue(`Starting creation of library: ${name}`));
    try {
        const { generateLibrary } = await import('./generator.js');
        console.log(chalk.blue('Prompting for additional information...'));
        const answers = await inquirer.prompt(questions);
        console.log(chalk.blue('Generating library with answers:'), answers);
        generateLibrary(name, answers);
        console.log(chalk.green(`Library ${name} created successfully!`));
    }
    catch (error) {
        console.error(chalk.red('Failed to create library:'), error);
    }
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map