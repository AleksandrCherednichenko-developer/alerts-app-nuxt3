<template>
    <li class="lorem__item">
        <p class="lorem__item-count">
            {{ props.order }}
        </p>
        <p class="lorem__item-text">
            {{ props.text }}
        </p>
    </li>
</template>

<script setup>
import { defineComponent } from 'vue';

const props = defineProps({
    order: { type: Number, default: 0 },
    text: { type: String, default: '' },
});

defineComponent({ name: 'LoremItem' });
</script>

<style src="./styles.scss" lang="scss" scoped />
