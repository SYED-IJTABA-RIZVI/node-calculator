// calculator.test.js
const { add, subtract, multiply, divide, modulus } = require('./calculator');

test('add 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract 5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiply 4 * 3 = 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('divide 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide by zero throws error', () => {
  expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});

// If you added modulus:
test('modulus 10 % 3 = 1', () => {
  expect(modulus(10, 3)).toBe(1);
});
