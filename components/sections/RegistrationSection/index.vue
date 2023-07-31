<template>
    <section class="section-content registration-section">
        <h2 class="title text-title uppercase-text">
            Start Free today
        </h2>
        <RegistrationForm />
    </section>
</template>

<script setup>
import RegistrationForm from '~/components/forms/RegistrationForm/index.vue';
import { defineComponent } from 'vue';

defineComponent({ name: 'RegistrationSection' });
</script>

<style src="./styles.scss" lang="scss" scoped />
