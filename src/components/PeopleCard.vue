<script setup lang="ts">
import type People from '@/types/People';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps(['person'])
const person = ref<People>(props.person)

const isOk = ()=>{
   return typeof person.value !== 'undefined';
}



</script>

<template>
   <div class="card shadow-sm border-0" style="width: 18rem;" v-if="isOk()">
     <router-link 
       :to="{ name: 'ember', params: { id: person.id } }"
       class="text-decoration-none">
       <img 
         class="card-img-top rounded-top" 
         :src="person.avatar" 
         :alt="person.first_name + ' ' + person.last_name">
     </router-link>
 
     <div class="card-body text-center">
       <router-link 
         :key="person.id" 
         :to="{ name: 'ember', params: { id: person.id } }" 
         class="text-decoration-none">
         <h5 class="card-title mb-2 text-primary">{{ person.first_name }} {{ person.last_name }}</h5>
       </router-link>
       <p class="card-text text-muted mb-3">{{ person.email }}</p>
       
     </div>
   </div>
 </template>
 


<style scoped></style>