# JSDSL - Queue

A queue (FIFO) implementation written in TypeScript.

### [Find @jsdsl/queue on NPM.](https://www.npmjs.com/package/@jsdsl/queue)

## Installation

Install from NPM with

```
$ npm install --save @jsdsl/queue
```

## Basic Usage

It's a queue! Enqueue and dequeue, that's kinda the whole bit.

```typescript
import { Queue } from "@jsdsl/queue";

let queue: Queue<number> = new Queue(1, 2);

queue.enqueue(3, 4);
queue.enqueue(5);

while (!queue.isEmpty()) console.log(queue.dequeue()) //=> 1, 2, 3, 4, 5
```

## License

@jsdsl/queue is made available under the GNU General Public License v3.

Copyright (C) 2021 Trevor Sears
