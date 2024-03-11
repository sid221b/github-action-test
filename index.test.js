const {sum, multiply, divide} = require('./index')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 10 * 20 to equal 200', () => {
  expect(multiply(10, 20)).toBe(200);
});

test('divide 10 / 20 to equal 0.5', () => {
  expect(divide(10, 20)).toBe(0.5);
});

