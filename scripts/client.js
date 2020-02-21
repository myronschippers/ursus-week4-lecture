console.log('Hello Ursus');

function sayHey() {
  // WHERE WE MAKE MAGIC HAPPEN
  console.log('HELLO!!!');

  return true;
}

console.log(sayHey());

const basketOfFruit = [];
const maxFruit = 8;

function putFruitInBasket(fruitName) {
  if (maxFruit > howMuchFruit()) {
    basketOfFruit.push(fruitName);
  }
}

function howMuchFruit() {
  console.log('WOOT');
  return basketOfFruit.length;
}

putFruitInBasket('Apple');
putFruitInBasket('Pear');
putFruitInBasket('Kiwi');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
putFruitInBasket('Orange');
console.log('basketOfFruit:', basketOfFruit);
const fruitCount = howMuchFruit();
console.log(fruitCount);
