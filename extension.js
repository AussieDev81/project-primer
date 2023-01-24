const vscode = require('vscode');
const skeletonGenerator = require("./src/skeletonGenerator");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	context.subscriptions.push(

		//Create web project skeleton
		vscode.commands.registerCommand("project-primer.createWebSkeleton", () => skeletonGenerator.createWebProject(context)),

		//Create HTML pages
		vscode.commands.registerCommand("project-primer.createHtmlPages", () => skeletonGenerator.createHtmlPages(context))

	);
	
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
