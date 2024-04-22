const fruits = ['apple', 'banana', 'grape', 'melon']

fruits.push('orange')

console.log(fruits)

fruits.forEach((fruit) => console.log(fruit))

const result = fruits.filter((fruit) => fruit.startsWith('a'))

console.log(result)