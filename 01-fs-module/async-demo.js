const fs = require("fs"); // commonJS Import of fs.

//start
console.log("Hello FS Module");

fs.writeFile("async-test.txt", "ეს არის ასინქრონული", (err) => {
  if (err) {
    console.log("დაფიქსირდა შეცდომა", err);
  } else {
    console.log("ფაილი წარმატებით შეიქმნა");
    fs.readFile("async-test.txt", "utf8", (err, data) => {
      console.log(data);
    });
}
});

console.log("წარმატებით შეიქმნა!");