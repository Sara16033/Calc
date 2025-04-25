const calc = require('./math');

test('add () 3 e 5 NON deve dare 7', () => {
  const risultato = 3 + 5;
  expect(risultato).toBe(7); // Questo fallirà perché 3 + 5 = 8
});

test('add() deve sommare due numeri', () => {
  expect(calc.add(2, 2)).toBe(4);
});

test('subtract() deve sottrarre correttamente', () => {
  expect(calc.subtract(10, 4)).toBe(6);
});

test('multiply() deve moltiplicare', () => {
  expect(calc.multiply(3, 5)).toBe(15);
});

test('divide() deve dividere', () => {
  expect(calc.divide(10, 2)).toBe(5);
});

test('divide() deve lanciare errore per divisione per zero', () => {
  expect(() => calc.divide(10, 0)).toThrow("Divisione per zero non permessa.");
});