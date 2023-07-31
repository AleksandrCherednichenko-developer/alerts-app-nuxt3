<template>
    <section class="section-content">
        <UILoader v-if="loaderStore.loading" />
        <div v-else class="posts__list container-content">
            <PostItem v-for="item in postsStore.postsList" :key="item.id" v-bind="item" />
        </div>
    </section>
</template>

<script setup>
import { defineComponent, onMounted } from 'vue';
import { usePostsStore } from '@/stores/posts-store';
import { useLoaderStore } from '@/stores/loader-store';
import UILoader from '@/components/ui/UILoader/index.vue';
import PostItem from '@/components/items/PostItem/index.vue';

const loaderStore = useLoaderStore();
const postsStore = usePostsStore();

onMounted(() => {
    postsStore.getPostsList();
});

defineComponent({ name: 'PagePosts' });
</script>

<style src="./styles.scss" lang="scss" scoped />
