const router = require('express').Router();
const FileApi = require('./api/FileApi');
const RunnerManager = require('../compiler/RunnerManager');




router.get('/api/file/:lang',(req,res)=>{
      
    const language = req.params.lang

    FileApi.getFile(language,(content)=>{
    const file = {
      lang: language,
      code: content,
    };
    res.send(JSON.stringify(file));
    })

})


router.post('/api/run', (req, res) => {
  const file = req.body;
  console.log(req.body)

  console.log(`file.lang: ${file.lang}`, `file.code:${file.code}`);
  RunnerManager.run(file.lang, file.code, res);
});


module.exports = router