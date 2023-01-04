const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const{mergePdfs} = require ("./merge")
app.use('/static',express.static('public'))
const port = 3000
const localhost='localhost'

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templetes/index.html"))
})


app.post('/merge',upload.array('pdfs',2),async(req, res,next) => {
  // res.sendFile(path.join(__dirname,"templetes/index.html"))
  // console.log(req.file)
  await mergePdfs(path.join(__dirname,req.files[0].path),(path.join(__dirname,req.files[1].path)))
  // res.send({data:req.files})
  res.redirect("http://localhost:3000/static/merged.pdf")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${localhost}:${port}`)
})