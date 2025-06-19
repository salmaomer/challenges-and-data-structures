const LinkedList = require('../linklist');
const Reverses = require('../reverse/Reverses');

describe('Reverses', () => {
  let list;
  let reverser;

  beforeEach(() => {
    list = new LinkedList();
    reverser = new Reverses(list);
  });

  test('should handle empty list', () => {
    console.log = jest.fn(); // Mock console.log
    reverser.reverse();
    expect(console.log).toHaveBeenCalledWith("List is empty. Nothing to reverse.");
    expect(list.head).toBe(null);
  });

  test('should handle single-node list', () => {
    list.add(42);
    console.log = jest.fn();
    reverser.reverse();
    expect(console.log).toHaveBeenCalledWith("Only one node in the list. No need to reverse.");
    expect(list.head.data).toBe(42);
    expect(list.head.next).toBe(null);
  });

  test('should reverse a list with duplicate values', () => {
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);

    reverser.reverse();

    // After reversal: 3 -> 2 -> 2 -> 1
    expect(list.head.data).toBe(3);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(2);
    expect(list.head.next.next.next.data).toBe(1);
    expect(list.head.next.next.next.next).toBe(null);
  });
});
