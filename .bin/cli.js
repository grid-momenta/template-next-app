#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command, args) => {
	try {
		execSync(`${command} ${args.join(" ")}`, { stdio: "inherit" });
	} catch (error) {
		console.error(`Failed to execute ${command}`, error);
		return false;
	}

	return true;
};

const gitRepo = process.argv[2];
const gitCloneCmd = `git clone --depth 1 https://github.com/grid-momenta/template-next-app.git ${gitRepo}`;
const npmInstallCmd = `cd ${gitRepo} && npm install`;

console.log("Cloning Nextjs template");
const gitClone = runCommand(gitCloneCmd);
if (!gitClone) process.exit(-1);

console.log("Installing packages");
const npmInstall = runCommand(npmInstallCmd);
if (!npmInstall) process.exit(-1);

console.log("Done");
console.log("Run 'npm start' to start the app");
