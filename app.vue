<template>
    <NuxtLayout>
        <UIHeader />
        <NuxtPage />
        <BackgroundBlock />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import UIHeader from '~/components/ui/UIHeader/index.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const isXl = computed(() => breakpoints.between('xl', '2xl'));
const isLg = computed(() => breakpoints.between('lg', 'xl'));
const isMd = computed(() => breakpoints.between('md', 'lg'));
const isSm = computed(() => breakpoints.between('sm', 'md'));
const isXs = computed(() => breakpoints.smallerOrEqual('sm'));

provide('isXl', isXl);
provide('isLg', isLg);
provide('isMd', isMd);
provide('isSm', isSm);
provide('isXs', isXs);
</script>
