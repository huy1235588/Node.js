import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();
myEmitter.on('event', (a, b) => {
    console.log(a, b, this, this === myEmitter);
});
myEmitter.emit('event', 'a', 'b');