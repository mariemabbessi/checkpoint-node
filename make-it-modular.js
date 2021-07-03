let fs = require("fs")
 
module.exports =  function foo(dir,ext,callback) {
    fs.readdir(dir, (err, data) => {
        if(err)  return callback(err)
        let list = []
        data.forEach((item) => {
            if (item.endsWith("." + ext))
                list.push(item)
        })
        callback(null,list)
    });
}
