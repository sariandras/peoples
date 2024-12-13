<template>
    <div>
        <button class="m-4  btn btn-info shadow-lg" @click="$router.go(-1)">Click here to go back</button>
        <div class="container mt-4">
    <div class="card shadow-lg">
        <div class="row no-gutters align-items-center">
            <div class="col-md-4 text-center p-3">
                <img 
                    class="img-fluid rounded-circle" 
                    :src="person!.avatar" 
                    :alt="person!.first_name + ' ' + person!.last_name" 
                    style="max-width: 150px;"
                >
            </div>
            <div class="col-md-8">
                <div class="card-body text-center text-md-left">
                    <h1 class="card-title mb-2">{{ person!.first_name }} {{ person!.last_name }}</h1>
                    <h2 class="card-subtitle text-muted mb-3">{{ person!.email }}</h2>
                </div>
            </div>
        </div>
    </div>
</div>


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
/* img {
    margin: 0 auto;
    display: block;
    width: 500px;
    height: 500px;
} */

.pointer{
    cursor: pointer;
}
</style>