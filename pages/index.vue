<template>
    <main>
        <MainTitleSection
            :text="textForPage['text-1']"
            has-shadow
            shadow-top="-70%"
            shadow-left="-10%"
            css-modifier="has-ticker"
        />
        <MainSliderSection />
        <MainTitleSection
            :text="textForPage['text-2']"
            has-shadow
            shadow-left="-10%"
        />
        <ProductSection />
        <RegistrationSection />
    </main>
</template>

<script setup>
import MainTitleSection from '~/components/sections/MainTitleSection/index.vue';
import ProductSection from '~/components/sections/ProductSection/index.vue';
import MainSliderSection from '~/components/sections/MainSilderSection/index.vue';
import RegistrationSection from '~/components/sections/RegistrationSection/index.vue';

const textForPage = {
    'text-1': 'Be the first who Find Out Phone NUmber Change_',
    'text-2': 'Powerful monitor of your dealer infestruction',
};
</script>
