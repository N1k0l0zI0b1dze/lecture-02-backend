const fs = require("fs"); // commonJS Import of fs.

// console.log("Hello FS Module");

// fs.writeFileSync("sync-test.txt", "გამარჯობა!");


console.log("ფაილის კითხვა დაიწყო");

const data = fs.readFileSync("sync-text.txt", "utf8");
console.log(data);
console.log("ფაილის წაკითხვა დასრულდა");
