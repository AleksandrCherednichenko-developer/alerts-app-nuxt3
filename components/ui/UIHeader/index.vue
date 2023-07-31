<template>
    <header class="header">
        <div class="header__inner container-content">
            <UILogo />
            <BurgerButton :class="{'active':hasNavbar}" @click="onClickBurgerBtn" />
        </div>
    </header>
</template>

<script setup>
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useNuxtApp } from '#app';
import UILogo from '~/components/ui/UILogo/index.vue';
import BurgerButton from '~/components/ui/buttons/BurgerButton/index.vue';
import { EMITTER_EVENTS } from '~/constants/emitter-events';
import { useToggle } from '@vueuse/core';

const { $emitter } = useNuxtApp();
const [hasNavbar, toggleNavbar] = useToggle();

const onClickBurgerBtn = () => {
    toggleNavbar();
    $emitter.emit(EMITTER_EVENTS.navbarMenu, hasNavbar);
};

onMounted(() => {
    $emitter.on(EMITTER_EVENTS.navbarMenu, ({ force }) => {
        if (force === false) hasNavbar.value = force;
    });
});

onBeforeUnmount(() => {
    $emitter.off(EMITTER_EVENTS.navbarMenu);
});

defineComponent({ name: 'UIHeader' });
</script>

<style src="./styles.scss" lang="scss" scoped />
