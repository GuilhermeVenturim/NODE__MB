const { dirname, extname, basename } = require("path");
const path = require("path");

const customPath = "/relatorio/guilherme/doc.pdf"

console.log(path.dirname(customPath))
console.log(path.extname(customPath))
console.log(path.basename(customPath))
