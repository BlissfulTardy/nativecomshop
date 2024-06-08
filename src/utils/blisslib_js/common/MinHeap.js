
/**
 * @class MinHeap a min-heap priority queue for tracking smallest available numeric id values
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const topVal = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return topVal;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element >= parent) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (rightChild < (swap === null ? element : leftChild)) swap = rightChildIndex;
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
  
}

export default MinHeap;