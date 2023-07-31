<template>
    <button
        :type="props.type"
        :disabled="props.disabled"
        :class="[
            'row-button',
            'uppercase-text',
            {'button-load-shadow':props.disabled},
        ]"
    >
        {{ props.text }}
    </button>
</template>

<script setup>
import { defineComponent } from 'vue';

const props = defineProps({
    text: { type: String, default: 'row-button' },
    disabled: { type: Boolean },
    type: { type: String, default: 'button' },
});

defineComponent({ name: 'RowButton' });
</script>

<style src="./styles.scss" lang="scss" scoped />
