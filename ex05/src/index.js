let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
  ]);
let arrKey = [];
for (let key of shoppingList.keys()) {
  arrKey.push(key);
}
console.log("groceries: " + arrKey.join("\ngroceries: "));

let arrValue = [];
for (let value of shoppingList.values()) {
  arrValue.push(value);
}
console.log("amount: " + arrValue.join("\namount: "));

for (let [key, value] of shoppingList.entries()) {
    console.log(`[ '${key}', ${value} ]`);
  }

module.exports = { shoppingList, arrKey, arrValue };