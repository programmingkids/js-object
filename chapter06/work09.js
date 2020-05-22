// xxxx年xx月xx日と表示 現在の年月日で表示します
let date = new Date();

let text = "";
text += date.getFullYear() + "年";
text += date.getMonth() + 1 + "月";
text += date.getDate() + "日";
console.log(text);
