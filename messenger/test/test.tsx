import { EventEmitter } from "node:events";
import { express } from "express"
import { jsxCompile } from "express-jsx"
import path from "node:path";

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log("an event occurred")
})
myEmitter.emit('event')

var app = express();
app.use(jsxCompile(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
 