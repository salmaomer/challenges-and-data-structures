
const Stack = require('../Stack&Queue/Stack&Queue-Implementation/Stack');
const Queue = require('../Stack&Queue/Stack&Queue-Implementation/Queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueues a node into the queue', () => {
    queue.enqueue('a');
    expect(queue.peek()).toBe('a');
  });

  test('dequeues a node from the queue', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toBe('a');
    expect(queue.peek()).toBe('b');
  });

  test('checks if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);
  });
});


describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('pushes a node onto the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('pops a node from the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  test('checks if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });
});
