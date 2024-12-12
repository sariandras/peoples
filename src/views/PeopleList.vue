<script setup lang="ts">
import data_people from '@/data/data_people';
import { computed, onMounted, ref } from 'vue';
import type People from '@/types/People';
import PeopleCard from '@/components/PeopleCard.vue';



const peopleData = data_people.getPeople();
const people = ref<People[]>(peopleData);

// let sort = (event:Event)=>{
  //   let element = (event.target as HTMLSelectElement);
  //   if (element.selectedIndex==0) {
    //     // people.value = ()=> sortPeopleByFirstName(people.value)
    //     console.log(sortPeopleByFirstName(people.value))
    //   }
    // }
    
// onMounted(() => {
//   people.value = await peopleData;
// })



function sortPeopleByFirstName(people: People[]): People[] {
  return [...people].sort((a, b) => a.first_name.localeCompare(b.first_name));
}

</script>

<template>
  <h1 class="display-5">Emberek</h1>
  <div class="container">
      <label for="sort">Rendezés:</label>
      <select  class="form-select my-2" name="sort">
        <option value="0" selected>A-Z</option>
        <option value="1">Z-A</option>
      </select>
        <div class="row">
            <PeopleCard v-for="p in peopleData" :key="p.id" class="col-md-6 col-lg-3 mx-3" :person="p"/>
            <div v-for="p in people">{{ p.id }}</div>
        </div>
    </div>
  <PeopleCard/>  
</template>


<style scoped>

</style>