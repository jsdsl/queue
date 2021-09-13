import { Queue } from "../queue";

test("Does the queue... queue?", (): void => {
	
	let queue: Queue<number> = new Queue(-1, 0);
	
	queue.enqueue(1, 2);
	queue.enqueue(3);
	
	expect(queue.dequeue()).toBe(-1);
	expect(queue.dequeue()).toBe(0);
	expect(queue.dequeue()).toBe(1);
	expect(queue.dequeue()).toBe(2);
	expect(queue.dequeue()).toBe(3);
	
});
