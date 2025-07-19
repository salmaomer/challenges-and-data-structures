const StackWithDeleteMiddle = require('../Stack&Queue/DeleteMiddieElement/DeleteMiddie');

describe('StackWithDeleteMiddle', () => {
  test('deletes middle element from odd-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3, 4, 5].forEach(num => stack.push(num));

    stack.deleteMiddle();
    expect(stack.getItems()).toEqual([1, 2, 4, 5]); // removed 3
  });

  test('deletes lower middle from even-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    [10, 20, 30, 40].forEach(num => stack.push(num));

    stack.deleteMiddle();
    expect(stack.getItems()).toEqual([10, 20, 40]); // removed 30
  });

  test('does nothing when deleting from empty stack', () => {
    const stack = new StackWithDeleteMiddle();

    stack.deleteMiddle();
    expect(stack.getItems()).toEqual([]);
  });

  test('deletes only element when stack has one item', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(99);

    stack.deleteMiddle();
    expect(stack.getItems()).toEqual([]);
  });
});
