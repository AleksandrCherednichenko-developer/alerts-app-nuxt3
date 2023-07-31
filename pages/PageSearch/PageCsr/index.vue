<template>
    <section class="section-content">
        <div class="container-content page-flex">
            <BackButton />
            <h4 class="title">
                CSR PAGE
            </h4>
            <UILoader v-if="loaderStore.loading" />
            <template v-else>
                <LoremList v-if="info.length" :items="info" />
                <PlaceholderBlock v-else />
            </template>
        </div>
    </section>
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue';
import BackButton from '~/components/ui/buttons/BackButton/index.vue';
import { LoremService } from '~/services/lorem-service';
import { useLoaderStore } from '~/stores/loader-store';
import UILoader from '~/components/ui/UILoader/index.vue';
import LoremList from '~/components/lists/LoremList/index.vue';

const info = ref([]);
const loaderStore = useLoaderStore();

const getLoremData = async params => {
    loaderStore.startLoad();
    const resp = await LoremService.getLoremText(params);
    if (!resp) return await loaderStore.goToHomePage();
    info.value = resp.flat();
    loaderStore.stopLoad();
};

onMounted(() => {
    getLoremData({ words: 10, paragraphs: 10 });
});

defineComponent({ name: 'PageCsr' });
</script>
