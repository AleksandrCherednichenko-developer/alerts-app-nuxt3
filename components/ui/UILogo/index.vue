<template>
    <router-link
        :to="ROUTE_NAMES.PAGE_MAIN.routeName"
        class="logo__link uppercase-first-symbol"
        @click="$emitter.emit(EMITTER_EVENTS.navbarMenu, {force:false})"
    >
        uptify
    </router-link>
</template>

<script setup>
import { ROUTE_NAMES } from '~/constants/routes-name';
import { defineComponent } from 'vue';
import { useNuxtApp } from '#app';
import { EMITTER_EVENTS } from '~/constants/emitter-events';

const { $emitter } = useNuxtApp();

defineComponent({ name: 'UILogo' });
</script>

<style src="./styles.scss" lang="scss" scoped />
