<template>
    <form class="form-registration" @submit.prevent="submitData">
        <BaseInput
            v-model="data.username"
            label-text="Username:"
            placeholder="Type your username"
        />
        <PasswordInput
            v-model="data.password"
            label-text="Password:"
            placeholder="Type your password"
        />
        <RowButton text="Create account" :disabled="loading" type="submit" />
    </form>
</template>

<script setup>
import { defineComponent, reactive, ref } from 'vue';
import BaseInput from '@/components/ui/inputs/BaseInput/index.vue';
import PasswordInput from '@/components/ui/inputs/PasswordInput/index.vue';
import RowButton from '@/components/ui/buttons/RowButton/index.vue';
import { UserService } from '@/services/user-service';

const data = reactive({
    username: '',
    password: '',
});
const loading = ref(false);

const submitData = async () => {
    loading.value = true;
    await UserService.createUser(data);
    loading.value = false;
};

defineComponent({ name: 'RegistrationForm' });
</script>

<style src="./styles.scss" lang="scss" scoped />
