<script setup lang="ts">
import type People from '@/types/People';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps(['person'])
const person = ref<People>(props.person)




</script>

<template>
   <div class="card" style="width: 18rem;">
         <router-link
            :to="{name: 'ember', params: { id:person.id }}" :key="person.id">
            <img class="card-img-top" :src="person.avatar" :alt="person.first_name + person.last_name">         
         </router-link>
      <div class="card-body">
         <router-link
            :key="person.id"
            :to="{ name: 'ember', params: { id: person.id } }">
            <h5 class="card-title">{{ person.first_name }} {{ person.last_name }}</h5>         
         </router-link>
         <p class="card-text">{{ person.email }}</p>

      </div>
   </div>
</template>


<style scoped></style>