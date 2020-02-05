const {add, subtract, multiply, divide} = require('../lib/operations');

test("The add function should return 4 with 2 and 2", ()=>{
  expect(add(2,2)).toBe(4);
});

test("The subtract function should return 1 with 2 and 1", ()=>{
  expect(subtract(2,1)).toBe(1);
});

test("The multiply function should return 2 with 2 and 1", ()=>{
  expect(multiply(2,1)).toBe(2);
});

test("big numbers should return scientific notation", ()=>{
  const result = multiply(20000000000000000,100000000000000);
  expect("" + result).toEqual(
    expect.stringContaining("e")
  );
})
