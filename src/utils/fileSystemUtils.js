const fs = require("fs");
const path = require("path");


/**
 * 	Create a new file
 * @param {String} destinationPath The target location where the file will be created
 * @param {String} filename The name of the file including file extension
 * @param {String} content The content to be written to the file
 */
function createNewFile(destinationPath, filename, content) {

	fs.writeFile(path.join(destinationPath, filename), content, (err) => {
		if (err) {
			console.error("Error writing the file", err.message);
		}
		console.log(`${filename} added successfully`);
	});
	
}


/**
 * Creates a new file based on a defined file template
 * @param {String} destinationPath The path where the file will be created
 * @param {String} filename The name of the file including its file extension
 * @param {String} templatePath The path to the file template being referenced
 */
function createNewFileFromTemplate(destinationPath, filename, templatePath) {
	//Read the template file
	fs.readFile(templatePath, "utf-8", (err, data) => {
		if (err) {
			console.error(`Error: ${err.message}`);
		}
        //Create the file only if the directory exists
		if (fs.existsSync(destinationPath)) {
			createNewFile(destinationPath, filename, data);
		} 
		else {
            console.error("The given file directory was not found\nPlease check the file path and try again");
        }
	});
}


/**
 * Creates a new directory matching a given path name
 * @param {fs.PathLike} pathName The desired directory path name
 */
function createNewDirectory(pathName) {

    if(pathName != "" && pathName != undefined){
        fs.mkdir(pathName, { recursive: true }, (err) => {
            if (err) {
                console.error(`Error creating ${pathName}`, err.message);
            }
            console.log(`${pathName} created successfully`);
        });
    }
}


/**
 * Creates new directories according to the given array of directory paths
 * @param {String[]} directories An array of directory paths
 */
function createNewDirectories(directories){
	directories.forEach((dir) => createNewDirectory(dir));
}


module.exports = {
	createNewFileFromTemplate,
	createNewDirectory,
	createNewDirectories
};