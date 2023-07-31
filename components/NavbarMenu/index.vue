<template>
    <div class="navbar__wrapper">
        <nav class="navbar">
            <ul class="navbar__list">
                <li v-for="item in navbarItems" :key="item.label" class="navbar__list-item">
                    <nuxt-link
                        :to="item.to"
                        class="uppercase-first-symbol"
                        active-class="navbar__list-item--active"
                        @click="$emitter.emit(EMITTER_EVENTS.navbarMenu, {force:false})"
                    >
                        {{ item.label }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import { ROUTE_NAMES } from '~/constants/routes-name';
import { EMITTER_EVENTS } from '~/constants/emitter-events';
import { useNuxtApp } from '#app';

const { $emitter } = useNuxtApp();

const navbarItems = [
    { to: ROUTE_NAMES.PAGE_MAIN.routeName, label: 'home page' },
    { to: ROUTE_NAMES.PAGE_POSTS.routeName, label: 'posts page' },
    { to: ROUTE_NAMES.PAGE_SEARCH.routeName, label: 'search page' },
];

defineComponent({ name: 'NavbarMenu' });
</script>

<style src="./styles.scss" lang="scss" scoped />
