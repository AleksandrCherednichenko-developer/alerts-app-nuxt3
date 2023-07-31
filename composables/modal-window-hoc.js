import { h, reactive, ref, Transition } from 'vue';
import { useNuxtApp } from '#app';

export function modalWindowHoc (Component, emitterEventName, emits) {
    return {
        setup () {
            const { $emitter } = useNuxtApp();
            const isOpen = ref(false);
            const eventProps = reactive({});

            const toggle = force => {
                isOpen.value = force ?? !isOpen.value;
            };

            $emitter.on(emitterEventName, ({ force, ...payload }) => {
                toggle(force);
                Object.entries(payload).forEach(([key, value]) => {
                    eventProps[key] = value;
                });
            });

            return () => h(Transition,
                { name: 'modal-window' },
                () => [
                    isOpen.value
                        ? h(Component, {
                            ...eventProps,
                            onClose: () => toggle(false),
                            ...emits,
                        })
                        : '',
                ],
            );
        },
    };
}
