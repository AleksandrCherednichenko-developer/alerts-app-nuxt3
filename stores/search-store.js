import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ROUTE_NAMES } from '~/constants/routes-name';

export const useSearchStore = defineStore('search', () => {
    const searchList = ref([
        {
            id: 1,
            title: 'Google Store',
            image: 'image1',
            path: 'search-items',
            to: ROUTE_NAMES.PAGE_SEARCH_CSR.routeName,
        },
        {
            id: 2,
            title: 'Gira',
            image: 'image2',
            path: 'search-items',
            to: ROUTE_NAMES.PAGE_SEARCH_SSR.routeName,
        },
    ]);
    const searchInfo = ref({});

    return {
        searchList,
        searchInfo,
    };
});
