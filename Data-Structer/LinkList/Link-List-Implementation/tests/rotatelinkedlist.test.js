const LinkedList = require('../linklist'); 
const RotateLinkedList = require('../RotateLinkedList/rotatelinkedlist');

describe('RotateLinkedList - Edge Cases and Behavior', () => {
  let list;
  let rotator;

  beforeEach(() => {
    list = new LinkedList();
    rotator = new RotateLinkedList(list);
  });

  test('should handle empty list', () => {
    rotator.rotate(3);
    expect(list.head).toBe(null);
  });

  test('should handle single-node list', () => {
    list.add(42);
    rotator.rotate(5);
    expect(list.head.data).toBe(42);
    expect(list.head.next).toBe(null);
  });

  test('should rotate by k = 0 (no change)', () => {
    [1, 2, 3].forEach(val => list.add(val));
    rotator.rotate(0);
    expect(toArray(list.head)).toEqual([1, 2, 3]);
  });

  test('should rotate by k > length (k = 7)', () => {
    [1, 2, 3, 4, 5, 6].forEach(val => list.add(val));
    rotator.rotate(7); // 7 % 6 = 1
    expect(toArray(list.head)).toEqual([2, 3, 4, 5, 6, 1]);
  });

  test('should rotate by negative k = -2 (right by 2)', () => {
    [1, 2, 3, 4, 5].forEach(val => list.add(val));
    rotator.rotate(-2); // same as left by 3
    expect(toArray(list.head)).toEqual([4, 5, 1, 2, 3]);
  });

  test('should rotate by k = list length (no change)', () => {
    [10, 20, 30].forEach(val => list.add(val));
    rotator.rotate(3); // 3 % 3 = 0
    expect(toArray(list.head)).toEqual([10, 20, 30]);
  });

  test('should rotate normally (k = 2)', () => {
    [1, 2, 3, 4, 5].forEach(val => list.add(val));
    rotator.rotate(2);
    expect(toArray(list.head)).toEqual([3, 4, 5, 1, 2]);
  });
});


function toArray(head) {
  const arr = [];
  while (head) {
    arr.push(head.data || head.val); 
    head = head.next;
  }
  return arr;
}

















