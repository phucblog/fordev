var fs = require("fs");
var text = fs.readFileSync("./src/data/js.md").toString("utf-8");

const arrayText = text.split(/\r\n|\r|\n/g);
const contentArray = [];
// console.log(arrayText);
let start = 0;
let end = 0;
arrayText.forEach((e, i) => {
  if (i !== 0 && e === "---") {
    contentArray.push(arrayText.slice(0, i + 1).join("\n"));
  }
  if (e.slice(0, 3) === "## ") {
    if (start === 0) {
      start = i;
      end = i - 1;
    } else if (start !== 0) {
      end = i - 1;
      contentArray.push(arrayText.slice(start, end).join("\n"));
      start = i;
    }
  }
  if (i === arrayText.length - 1) {
    end = i - 1;
    contentArray.push(arrayText.slice(start, end).join("\n"));
  }
});
// contentArray.forEach((e, i) => {
//   if (i !== 0) {
//       contentArray[i] =
//   }
// });
console.log(contentArray);
