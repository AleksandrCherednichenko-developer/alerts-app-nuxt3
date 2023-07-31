<template>
    <label class="search__input-wrapper">
        <input
            v-bind="attrs"
            ref="input"
            class="search__input"
            :value="props.modelValue"
            type="text"
            :placeholder="props.placeholder"
            role="textbox"
            aria-label="search"
            @input="onInput"
            @focus="emit('focus')"
            @blur="emit('blur')"
        >

        <SvgIcon
            name="search"
            class="search__input-icon icon-search"
        />

        <SvgIcon
            v-if="props.modelValue.length"
            name="close"
            class="search__input-icon icon-clear"
            @click="emit('clear-input')"
        />
    </label>
</template>

<script setup>
import { ref, useAttrs, defineComponent } from 'vue';
import debounce from 'lodash.debounce';
import SvgIcon from '@/components/ui/SvgIcon';

const attrs = useAttrs();

const props = defineProps({
    modelValue: { type: [String, Number, null], required: true, default: '' },
    focusOnMounted: { type: Boolean },
    placeholder: { type: String, default: 'Search...' },
});

const input = ref(null);
const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'clear-input']);

const onInput = debounce(ev => {
    emit('update:modelValue', ev.target.value.trim());
}, 500);

defineComponent({ name: 'SearchInput', inheritAttrs: false });
</script>

<style src="./styles.scss" lang="scss" scoped />
