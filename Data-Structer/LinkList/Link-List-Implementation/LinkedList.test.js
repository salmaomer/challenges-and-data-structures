const LinkedList = require('./linklist'); 
const Node = require('./Nodes'); 

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('should add elements to the list', () => {
    list.add(10);
    list.add(20);
    expect(list.head.data).toBe(10);
    expect(list.head.next.data).toBe(20);
  });

  test('should remove elements from the list', () => {
    list.add(10);
    list.add(20);
    list.add(30);
    list.remove(20);
    expect(list.includes(20)).toBe(false);
  });

  test('should check if element exists', () => {
    list.add(15);
    list.add(25);
    expect(list.includes(15)).toBe(true);
    expect(list.includes(100)).toBe(false);
  });

  test('should insert at specific index', () => {
    list.add(1);
    list.add(3);
    list.insertAt(2, 1);
    expect(list.head.next.data).toBe(2);
  });

  test('should insert at head if index is 0', () => {
    list.add(2);
    list.insertAt(1, 0);
    expect(list.head.data).toBe(1);
  });

  test('should not insert if index is out of bounds', () => {
    list.add(1);
    console.log = jest.fn(); 
    list.insertAt(2, 5);
    expect(console.log).toHaveBeenCalledWith("Index out of bounds");
  });
});
