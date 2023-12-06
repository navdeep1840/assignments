/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;
    categories[category] = (categories[category] || 0) + price;
  }

  const arr = [];

  for (const category in categories) {
    arr.push({ category, totalSpent: categories[category] });
  }

  return arr;
}

module.exports = calculateTotalSpentByCategory;
