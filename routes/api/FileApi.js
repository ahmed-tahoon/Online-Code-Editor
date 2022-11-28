const mkdirp = require('mkdirp');
const fs = require('fs');
const getDirName = require('path').dirname;
const path = require('path');

const getFile = (lang,callback)=>{
    
    let file = '';

    const language = lang.toLowerCase()

    if (language === 'java') {
      file = path.join(__dirname, '../../templates', 'Hello.java');
    } else if (language === 'c') {
      file = path.join(__dirname, '../../templates', 'Hello.c');
    } else if (language === 'c++') {
      file = path.join(__dirname, '../../templates', 'Hello.cpp');
    } else if (language === 'javascript') {
      file = path.join(__dirname, '../../templates', 'Hello.js');
    } else if (language === 'python') {
      file = path.join(__dirname, '../../templates', 'Hello.py');
    } else {
      callback('');
      return;
    }

    console.log(`getTemplate:${file}`);

    fs.readFile(file,'utf8',(error,data)=>{
        if(error)
        {
             console.log(error);
        }
        console.log(data)
        callback(data)
    })

}


function saveFile(file, code, callback){
    // create parent directories if they doesn't exist.

mkdirp(path.basename(path.dirname(file))).then((made) =>{
              
    return fs.writeFile(file, code, (err2) => {
        if (err2) {
          throw err2;
        }
        callback();
    }
    )
})
  
 
    

}

module.exports = {getFile ,saveFile}