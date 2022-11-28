const {spawn} = require('child_process');
const Runner = require('./Runner')


class JavaRunner extends Runner {
    
    defaultFile()
    {
        return this.defaultfile;
    }
    constructor()
    {
        super()
        this.defaultfile='Hello.java'
    }

   run(file , directory , filename , extension , callback)
   {
    if(extension.toLowerCase()!='Java')
    {
      console.log(`${file} is not a java file.`);
    }
    this.compile(file , directory , filename , callback)
    
   }

   compile(file , directory , filename , callback)
   {
          const options = {cwd : directory}

          const argsCompile =[]
          argsCompile[0]=file
          const compiler = spawn('javac' , argsCompile )
      compiler.stdout.on('data' , (data)=>{
        console.log(`stdout `,data)
      })
      
      compiler.stderr.on('data',(data)=>{
              console.log(`compile-stderr: ${String(data)}`);
      callback('1', String(data)); // 1, compile error

      })
      compiler.on('close', (data) => {
      if (data === 0) {
        this.execute(filename, options, callback);
      }
    });

   }

 // execute the compiled class file
  execute(filename, options, callback) {
    const argsRun = [];
    argsRun[0] = filename;
    const executor = spawn('java', argsRun, options);
    executor.stdout.on('data', (output) => {
      console.log(String(output));
      callback('0', String(output)); // 0, no error
    });
    executor.stderr.on('data', (output) => {
      console.log(`stderr: ${String(output)}`);
      callback('2', String(output)); // 2, execution failure
    });
    executor.on('close', (output) => {
      this.log(`stdout: ${output}`);
    });
  }

 log(message) {
    console.log(message);
  }
}
 
module.exports = JavaRunner;
