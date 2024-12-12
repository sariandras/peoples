<template>
    <div>
        <h1>{{ person!.first_name }} {{ person!.last_name }}</h1>
        <h2>{{ person!.email }}</h2>
        <img :src="person!.avatar" :alt="person!.first_name + person!.last_name">

    </div>
</template>

<script setup lang="ts">
import { computed,ref } from 'vue';
import { useRoute } from 'vue-router';
import dataPeople from '@/data/data_people'
import type People from '@/types/People';

const route = useRoute();
const personId = ref<Number>(Number(route.params.id))

const person = computed(() => {
    return dataPeople.getPeople().find(person => person.id == personId.value)
})

</script>

<style lang="scss" scoped>

</style>