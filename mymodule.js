let foo = require("./module.js");

foo(process.argv[2], process.argv[3], (err, data) => {
  if (err) return console.error(err);
  data.forEach((item) => {
    console.log(item);
  });
});
