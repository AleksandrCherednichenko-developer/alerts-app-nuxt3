<template>
    <section class="search__page">
        <div class="search__page-inner container-content">
            <h2 class="title search__page-title uppercase-text">
                Start connecting your world
            </h2>
            <p class="search__page-subtitle">
                Save time and money by making the internet work for you! We believe you might like...
            </p>

            <SearchInput v-model="searchValue" class="search__page-input" @clear-input="searchValue=''" />

            <div class="search__page-block">
                <ul v-if="searchResult.length" class="search__page-list">
                    <li v-for="item in searchResult" :key="item.id">
                        <SearchItem v-bind="item" />
                    </li>
                </ul>

                <PlaceholderBlock v-else />
            </div>

            <RowButton class="search__page-button" text="Suggest your own" />
        </div>
    </section>
</template>

<script setup>
import { defineComponent, ref, computed } from 'vue';
import { useSearchStore } from '~/stores/search-store';
import SearchItem from '~/components/items/SearchItem/index.vue';
import SearchInput from '~/components/ui/inputs/SearchInput/index.vue';
import PlaceholderBlock from '~/components/PlaceholderBlock/index.vue';
import RowButton from '~/components/ui/buttons/RowButton/index.vue';

const searchStore = useSearchStore();
const searchValue = ref('');
const searchResult = computed(() => searchStore.searchList?.filter(el => el.title.toLowerCase().includes(searchValue.value.toLowerCase())));

defineComponent({ name: 'PageSearch' });
</script>

<style src="./styles.scss" lang="scss" scoped />
