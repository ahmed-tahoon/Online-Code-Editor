const path = require('path');
const FileApi = require('../routes/api/FileApi');
const JavaScriptRunner = require('./JavaScriptRunner');
const PythonRunner =require('./PythonRunner')
const CppRunner = require('./CppRunner')
const JavaRunner = require('./JavaRunner')
const CRunner = require('./CRunner')
function Factory() {
    
  this.createRunner = function createRunner(lang) {
    let runner;
 
    if (lang === 'c') {
      runner = new CRunner();
    } else if (lang === 'c++') {
      runner = new CppRunner();
    } else if (lang === 'java') {
      runner = new JavaRunner();
    } else if (lang === 'javascript') {
      runner = new JavaScriptRunner();
    } else if (lang === 'python') {
      runner = new PythonRunner();
    }
 
    return runner;
  };
}

function run(lang , code , res)
{
    const factory = new Factory();
    const runner = factory.createRunner(lang.toLowerCase());
    const directory = path.join(__dirname,'..','templates');
    const file = path.join(directory, runner.defaultFile());
    console.log(`file: ${file}`);
    const filename = path.parse(file).name; // main
    const extension = path.parse(file).ext; // .java
    console.log(`filename: ${filename}`);
    console.log(`extension: ${extension}`);

FileApi.saveFile(file, code, () => {

runner.run(file, directory, filename, extension, (status, message) => {
        const result = {
          status,
          message,
        };
        res.end(JSON.stringify(result));
      });
    });


}

module.exports = {run}