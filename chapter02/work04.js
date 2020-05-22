let data = new Array(5,3,7,6,2);

// 配列の先頭に新しい要素の追加
data.unshift(8);
console.log(data); // [8,5,3,7,6,2]

// 配列の先頭から要素の削除
data.shift();
console.log(data); // [5,3,7,6,2]
