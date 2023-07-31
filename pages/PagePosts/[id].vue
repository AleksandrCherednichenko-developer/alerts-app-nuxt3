<template>
    <section class="section-content container-content">
        <UILoader v-if="loaderSore.loading" />
        <div v-else class="page__post">
            <BackButton />
            <div class="page__post-info">
                <p>Post: {{ postsStore.postInfo.id }}</p>
                <p>Author: {{ postsStore.postInfo.userId }}</p>
            </div>
            <BaseInput v-model="postsStore.postInfo.title" class="page__post-input" label-text="Post title:" />
            <BaseInput v-model="postsStore.postInfo.body" class="page__post-input" label-text="Post text:" />
            <div class="page__post-buttons">
                <SimpleButton
                    text="Delete"
                    icon-name="delete"
                    css-modifier="delete"
                    class="page__post-btn"
                    @click="deletePost"
                />
                <SimpleButton
                    text="Save"
                    icon-name="save"
                    css-modifier="save"
                    class="page__post-btn"
                    @click="saveChanged"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, defineComponent } from 'vue';
import UILoader from '@/components/ui/UILoader/index.vue';
import { useLoaderStore } from '@/stores/loader-store';
import { usePostsStore } from '@/stores/posts-store';
import BaseInput from '@/components/ui/inputs/BaseInput/index.vue';
import SimpleButton from '@/components/ui/buttons/SimpleButton/index.vue';
import { ROUTE_NAMES } from '~/constants/routes-name';
import BackButton from '~/components/ui/buttons/BackButton/index.vue';

const route = useRoute();
const router = useRouter();
const loaderSore = useLoaderStore();
const postsStore = usePostsStore();

const deletePost = async () => {
    loaderSore.startLoad();
    const resp = await postsStore.deletePost(route.params.id);
    if (resp) return router.push(ROUTE_NAMES.PAGE_POSTS.routeName);
    loaderSore.stopLoad();
};

const saveChanged = () => {
    postsStore.changePostInfo(route.params.id, { title: postsStore.postInfo.title, body: postsStore.postInfo.body });
};

onMounted(() => {
    postsStore.getPostById(route.params.id);
});

defineComponent({ name: 'PagePostDetail' });
</script>

<style src="./styles.scss" lang="scss" scoped />
