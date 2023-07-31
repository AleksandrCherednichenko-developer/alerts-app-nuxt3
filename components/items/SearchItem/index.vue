<template>
    <nuxt-link :to="props.to" class="search__item">
        <img class="search__item-image" :src="dynamicImages(image)" :alt="props.title">

        <p class="search__item-text">
            {{ props.title }}
        </p>
    </nuxt-link>
</template>

<script setup>
import { defineComponent, computed } from 'vue';
import dynamicImages from '@/composables/dynamic-images';

const props = defineProps({
    id: { type: [String, Number], default: '' },
    to: { type: String, default: '' },
    path: { type: String, default: '' },
    title: { type: String, default: '' },
    image: { type: String, default: '' },
});

const image = computed(() => {
    if (!props.image) return null;
    return `/public/${props.path}/${props.image}.png`;
});

defineComponent({ name: 'SearchItem' });
</script>

<style src="./styles.scss" lang="scss" scoped />
