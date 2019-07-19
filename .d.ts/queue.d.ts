export declare class Queue<E = any> {
    private internalArray;
    constructor(...elements: E[]);
    enqueue(...elements: E[]): void;
    dequeue(): E | undefined;
    peek(): E | undefined;
    shuffle(iterations?: number): void;
    size(): number;
    isEmpty(): boolean;
    contains(element: E): boolean;
    clear(): void;
    toArray(): E[];
}
