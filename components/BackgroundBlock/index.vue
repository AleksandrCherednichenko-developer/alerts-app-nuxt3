<template>
    <component :is="component" v-for="(component, name) in modalWrappers" :key="name" />
</template>

<script setup>
import { defineAsyncComponent, defineComponent } from 'vue';
import { EMITTER_EVENTS } from '~/constants/emitter-events';
import { modalWindowHoc } from '~/composables/modal-window-hoc';

const NavbarMenu = defineAsyncComponent(() => import('~/components/NavbarMenu/index.vue'));

const modalWrappers = {
    NavbarMenu: modalWindowHoc(NavbarMenu, EMITTER_EVENTS.navbarMenu),
};

defineComponent({ name: 'BackgroundBlock' });
</script>
