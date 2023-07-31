<template>
    <button class="back__button" @click="router.go(-1)">
        <SvgIcon class="back__button-icon" name="back" />
        <span class="back__button-text uppercase-first-symbol">back</span>
    </button>
</template>

<script setup>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import SvgIcon from '~/components/ui/SvgIcon/index.vue';

const router = useRouter();

defineComponent({ name: 'BackButton' });
</script>

<style src="./styles.scss" lang="scss" scoped />
