<template>
    <NuxtLink :to="ROUTE_NAMES.PAGE_POST_DETAIL.routeName + props.id" class="post__item">
        <div class="post__item-info">
            <p>Post: {{ props.id }}</p>
            <p>Author: {{ props.userId }}</p>
        </div>
        <h6 class="title post__item-title text-ellipsis">
            Title: {{ props.title }}
        </h6>
        <div class="post__item-text">
            <p class="uppercase-first-symbol">
                {{ props.body }}
            </p>
        </div>
    </NuxtLink>
</template>

<script setup>
import { defineComponent } from 'vue';
import { ROUTE_NAMES } from '~/constants/routes-name';

const props = defineProps({
    id: { type: [Number, String], default: 0 },
    userId: { type: [Number, String], default: 0 },
    title: { type: String, default: '' },
    body: { type: String, default: '' },
});

defineComponent({ name: 'PostItem' });
</script>

<style src="./styles.scss" lang="scss" scoped />
