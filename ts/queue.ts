/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:10 PM -- February 18th, 2019.
 * Project: @jsdsl/queue
 * 
 * @jsdsl/queue - A queue (FIFO) implementation written in TypeScript.
 * Copyright (C) 2021 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { DoublyLinkedList } from "@jsdsl/doubly-linked-list";

/**
 * A queue (FIFO) implementation written in TypeScript.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v1.0.0
 * @since v0.1.0
 */
export class Queue<E = any> {
	
	/**
	 * The internal doubly linked list data structure that is used to maintain this queue.
	 */
	private internalDLL: DoublyLinkedList<E>;
	
	/**
	 * Initializes a new Queue with the provided elements.
	 * 
	 * @param {E} elements An optional list of elements to enqueue into this queue.
	 */
	public constructor(...elements: E[]) {
		
		this.internalDLL = new DoublyLinkedList<E>();
		
		this.enqueue(...elements);
		
	}
	
	/**
	 * Inserts an element at the start of this queue.
	 * 
	 * @param {E} elements The element to insert into this queue.
	 */
	public enqueue(...elements: E[]): void {
		
		for (let element of elements) this.internalDLL.insertFirst(element);
		
	}
	
	/**
	 * Returns and removes the element at the end of this queue if such an element exists, otherwise returning
	 * undefined.
	 * 
	 * @returns {E | undefined} The element at the end of this queue if such an element exists, otherwise undefined.
	 */
	public dequeue(): E | undefined {
		
		return this.internalDLL.removeLast();
		
	}
	
	/**
	 * Returns the element at the end of this queue (without removing it) if such an element exists, otherwise returning
	 * undefined.
	 * 
	 * @returns {E | undefined} The element at the end of this queue if such an element exists, otherwise undefined.
	 */
	public peek(): E | undefined {
		
		return this.internalDLL.getLast();
		
	}
	
	/**
	 * Randomly reorders the elements of this queue over the number of specified iterations, defaulting to 1 iteration.
	 * 
	 * @param {number} iterations The number of iterations over which to shuffle the elements of this queue.
	 */
	public shuffle(iterations: number = 1): void {
		
		this.internalDLL.shuffle(iterations);
		
	}
	
	/**
	 * Returns an integer representative of the number of elements present in this queue.
	 * 
	 * @returns {number} An integer representative of the number of elements present in this queue.
	 */
	public size(): number {
		
		return this.internalDLL.size();
		
	}
	
	/**
	 * Returns true if this queue contains no elements.
	 * 
	 * @returns {boolean} true if this queue contains no elements.
	 */
	public isEmpty(): boolean {
		
		return this.internalDLL.isEmpty();
		
	}
	
	/**
	 * Returns true if this queue contains the specified element.
	 * 
	 * @param {E} element The element to search for in this queue.
	 * @returns {boolean} true if this queue contains the specified element.
	 */
	public contains(element: E): boolean {
		
		return this.internalDLL.contains(element);
		
	}
	
	/**
	 * Removes all elements from this queue, rendering it empty.
	 */
	public clear(): void {
		
		this.internalDLL.clear();
		
	}
	
	/**
	 * Converts this queue to an array, returning the result.
	 * 
	 * The resulting array will be ordered such that those elements at the end of the queue will also appear near the
	 * end of the resultant array.
	 * 
	 * @returns {E[]} An array representation of this queue. 
	 */
	public toArray(): E[] {
		
		return this.internalDLL.toArray();
		
	}
	
}
