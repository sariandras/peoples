<template>
    <div>
        <button class="btn btn-warning mx-4" @click="$router.go(-1)">Go back</button>
        <div class="float-right d-block text-center">
            <h1>{{ person!.first_name }} {{ person!.last_name }}</h1>
            <h2>{{ person!.email }}</h2>

        </div>
        <img class="img-thumbnail my-4" :src="person!.avatar" :alt="person!.first_name + person!.last_name">

    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import dataPeople from '@/data/data_people'
import type People from '@/types/People';

const route = useRoute();
const personId = ref<Number>(Number(route.params.id))

const person = computed(() => {
    return dataPeople.getPeople().find(person => person.id == personId.value)
})

</script>

<style lang="css" scoped>
img {
    margin: 0 auto;
    display: block;
    width: 500px;
    height: 500px;
}
</style>