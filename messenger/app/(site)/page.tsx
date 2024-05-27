import AuthForm from "./components/AuthForm";

import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();
myEmitter.on('event', (a, b) => {
    console.log(a, b, this, this === myEmitter);
});
myEmitter.emit('event', 'a', 'b');

export default function Home() {
    return (
        <div className="min-h-full bg-gray-100">
            {/* AuthForm */}
            <AuthForm />
        </div>
    );
}
