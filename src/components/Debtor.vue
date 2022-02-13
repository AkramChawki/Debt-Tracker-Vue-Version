<template>
  <router-link :to="{ name: 'Debtor', params: { id: debtor.id } }">
    <div class="flex items-center space-x-3 hover:bg-gray-50 transition-all p-2 cursor-pointer">
      <img 
      class="w-14 h-14 rounded-full"
      :src="'https://i.pravatar.cc/150?img='+ debtor.id" 
      alt=""
      >
      <div>
        <h4 class="text-lg font-bold">{{ debtor.name }}</h4>
      </div>
      <div class="flex-1"></div>
      <div @click.prevent="deleteDebtorById(debtor.id)" class="text-blue-400 border-2 border-blue-400 p-2.5 rounded-full cursor-pointer hover:bg-blue-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: ['debtor'],
  setup() {
    const store = useStore();
    const deleteDebtorById = (id) => {
      if (confirm("are you sure")) {
        store.dispatch("deleteDebtor", id) 
      }
    }

    return {
      deleteDebtorById
    }
  }
}
</script>

<style>

</style>