//learning the file system operation in node.js using callback apis like readFile, writeFile, copyFile, appendFile, unlink, rename, mkdir, rmdir
const fs = require('fs');

//Writing to a file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully.');
    }
});

//Copying a file
fs.copyFile('example.txt', 'copy_example.txt', (err) => {
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log('File copied successfully.');
    }
});

//Appending to a file
fs.appendFile('example.txt', '\nAppended text.', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('File appended successfully.');
    }
});

//Reading from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});

//Renaming a file
fs.rename('example.txt', 'renamed_example.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully.');
    }
});

//Deleting a file
fs.unlink('renamed_example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});

//Creating a directory
fs.mkdir('exampleDir', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully.');
    }
});

//Removing a directory
fs.rmdir('exampleDir', { recursive: true }, (err) => {
    if (err) {
        console.error('Error removing directory:', err);
    } else {
        console.log('Directory removed successfully.');
    }
});