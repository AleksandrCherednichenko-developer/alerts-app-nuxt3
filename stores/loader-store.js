import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/routes-name';

export const useLoaderStore = defineStore('loader', () => {
    const router = useRouter();
    const loading = ref(false);

    const startLoad = () => {
        loading.value = true;
    };

    const stopLoad = () => {
        loading.value = false;
    };

    const goToHomePage = () => {
        return router.push(ROUTE_NAMES.PAGE_MAIN.routeName);
    };

    return {
        loading,
        startLoad,
        stopLoad,
        goToHomePage,
    };
});
