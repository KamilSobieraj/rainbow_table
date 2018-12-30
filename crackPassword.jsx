const crackThePass = () => {
  let fs = require("fs");
  let readRainbowTable = fs
    .readFileSync("./rainbow_word_list.txt")
    .toString("utf-8");
  let arrayOfWords = readRainbowTable.split("\n");
  let wordsAndHashesPairs = arrayOfWords.map(e => e.split(" "));
  const showMeThePassword = hash => {
    return wordsAndHashesPairs.filter(e => e[1] === hash)[0][0];
  };
  let crackedPassword = showMeThePassword(process.argv[2]);
  fs.writeFile("result.txt", crackedPassword, err => {
    if (err) throw error;
    console.log(
      'You can find the cracked awesome password in the "result.txt" file'
    );
  });
};
module.exports = crackThePass;
