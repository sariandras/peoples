<script setup lang="ts">
import type People from '@/types/People';
import { ref } from 'vue';

const props = defineProps(['person'])
const person = ref<People>(props.person)


</script>

<template>
   <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="person.avatar" alt="Card image cap">
      <div class="card-body">
         <h5 class="card-title">{{ person.first_name }} {{ person.last_name }}</h5>
         <p class="card-text">{{ person.email }}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
   </div>
</template>


<style scoped></style>