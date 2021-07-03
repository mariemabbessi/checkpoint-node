
var fs = require("fs")
 
fs.readFile(process.argv[2],"utf-8",(err,data) => {
    let newlines = 0
    if(err) console.error(err)
    for (let codepoint of data){
 
        if(codepoint==="\n")
            newlines++;
    }
    console.log(newlines)
});