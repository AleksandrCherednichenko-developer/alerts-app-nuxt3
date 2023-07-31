import { defineNuxtPlugin } from '#app';
import mitt from 'mitt';

export default defineNuxtPlugin(() => {
    const emitter = mitt();

    return {
        provide: {
            emitter: {
                on: emitter.on,
                off: emitter.off,
                emit: emitter.emit,
            },
        },
    };
});
