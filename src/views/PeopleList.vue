<script setup lang="ts">
import PeopleCard from '@/components/PeopleCard.vue';
import data_people from '@/data/data_people';
import type People from '@/types/People';
import { computed, ref } from 'vue';

const people = computed<People[]>(()=>data_people.getPeople());
let sort = (event:Event)=>{
  let element = (event.target as HTMLSelectElement);
  if (element.selectedIndex==0) {
    // people.value = ()=> sortPeopleByFirstName(people.value)
    console.log(sortPeopleByFirstName(people.value))
  }
}



function sortPeopleByFirstName(people: People[]): People[] {
  return [...people].sort((a, b) => a.first_name.localeCompare(b.first_name));
}

</script>

<template>
  <h1 class="display-5">Emberek</h1>
  <div class="container">
      <label for="sort">Rendezés:</label>
      <select  class="form-select my-2" name="sort" @change="sort">
        <option value="0" selected>A-Z</option>
        <option value="1">Z-A</option>
      </select>
        <div class="row">
            <PeopleCard v-for="p in people" class="col-md-6 col-lg-3 mx-3" :person="p"/>

        </div>

    </div>
  <PeopleCard/>  
</template>


<style scoped>

</style>