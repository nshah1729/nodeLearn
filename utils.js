const os = require('os')
const path = require('path')
const fs = require('fs')
// console.log(os.userInfo()); 
// console.log(os.uptime()); 


fs.readFile('./content/1.txt','utf8',(err,res)=>{
    if(!err)console.log(res);
    return;
});

