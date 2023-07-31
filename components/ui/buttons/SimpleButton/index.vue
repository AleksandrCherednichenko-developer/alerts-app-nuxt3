<template>
    <button
        class="button"
        :class="`button--${props.cssModifier}`"
        :disabled="props.disabled"
    >
        <SvgIcon
            v-if="props.iconName"
            :name="props.iconName"
            class="button__icon"
        />
        <span v-if="props.text">
            {{ props.text }}
        </span>
    </button>
</template>

<script setup>
import SvgIcon from '@/components/ui/SvgIcon/index.vue';
import { defineComponent } from 'vue';

const props = defineProps({
    iconName: { type: String, default: '' },
    text: { type: String, default: '' },
    disabled: { type: Boolean },
    cssModifier: { type: String, default: '' },
});

defineComponent({ name: 'SimpleButton' });
</script>

<style src="./styles.scss" lang="scss" scoped />
