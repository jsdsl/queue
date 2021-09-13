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

/**
 * A queue/FIFO data structure.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class Queue<E = any> {
	
	private internalArray: E[] = [];
	
	public constructor(...elements: E[]) {
		
		this.enqueue(...elements);
		
	}
	
	public enqueue(...elements: E[]): void {
		
		this.internalArray.push(...elements);
		
	}
	
	public dequeue(): E | undefined {
		
		return this.internalArray.shift();
		
	}
	
	public peek(): E | undefined {
		
		return this.internalArray[0];
		
	}
	
	public shuffle(iterations: number = 1): void {
		
		for (let count: number = 0; count < iterations; count++) {
			
			let elements: E[] = this.toArray();
			this.clear();
			
			while (elements.length !== 0) {
				
				let random: number = Math.floor(Math.random() * elements.length);
				let element: E = elements.splice(random, 1)[0];
				this.enqueue(element);
				
			}
			
		}
		
	}
	
	public size(): number {
		
		return this.internalArray.length;
		
	}
	
	public isEmpty(): boolean {
		
		return (this.size() === 0);
		
	}
	
	public contains(element: E): boolean {
		
		return this.internalArray.includes(element);
		
	}
	
	public clear(): void {
		
		this.internalArray = [];
		
	}
	
	public toArray(): E[] {
		
		return this.internalArray;
		
	}
	
}