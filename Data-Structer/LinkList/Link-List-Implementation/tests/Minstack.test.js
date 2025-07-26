const MinStack = require('../Stack&Queue/Minstack/Minstack'); 


describe('MinStack', () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test('should retrieve the minimum element in the stack', () => {
    stack.push(5);
    stack.push(3);
    stack.push(7);
    stack.push(2);

    expect(stack.getMin0()).toBe(2);
  });

  test('should update minimum after popping elements', () => {
    stack.push(4);
    stack.push(2);
    stack.push(6);

    expect(stack.getMin0()).toBe(2);

    stack.pop0(); // pops 6
    expect(stack.getMin0()).toBe(2);

    stack.pop0(); // pops 2
    expect(stack.getMin0()).toBe(4);
  });

  test('should update minimum after pushing new lower elements', () => {
    stack.push(10);
    stack.push(8);
    expect(stack.getMin0()).toBe(8);

    stack.push(3);
    expect(stack.getMin0()).toBe(3);

    stack.push(5);
    expect(stack.getMin0()).toBe(3);
  });
});
