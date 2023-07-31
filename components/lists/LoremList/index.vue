<template>
    <ul class="lorem__list">
        <li v-for="(item,index) in props.items" :key="index">
            <LoremItem :order="index+1" :text="item" />
        </li>
    </ul>
</template>

<script setup>
import { defineComponent } from 'vue';
import LoremItem from '~/components/items/LoremItem/index.vue';

const props = defineProps({
    items: { type: [Array, Object], default: () => ([]) },
});

defineComponent({ name: 'LoremList' });
</script>

<style src="./styles.scss" lang="scss" scoped />
