<template>
  <!-- App Title -->
  <div class="my-8">
    <h1 class="text-4xl font-bold mb-1">Debts Tracker</h1>
    <p class="text-gray-400">You own {{ debtorsCount }} people</p>
  </div>
  <!-- List -->
  <DebtorsList />

  <AddDebtorModal v-if="open" @cancelled="onCancel" @submited="onSubmit" />

  <!-- Add Debtor -->
  <button @click="open = true" class="bg-blue-400 text-white p-4 rounded-full absolute bottom-4 right-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </button>
</template>

<script>
import { ref } from '@vue/reactivity'
import DebtorsList from '../components/DebtorsList.vue'
import AddDebtorModal from '../components/AddDebtorModal.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  components: { DebtorsList, AddDebtorModal },
  setup() {
    const open = ref(false);
    const store = useStore();

    const debtorsCount = computed(() => store.getters.debtorsCount)

    const onCancel = () => open.value = false;
    const onSubmit = (name) => {
      const data = { name, total: 0 }
      store.dispatch("addDebtor", data)
      open.value = false;
    }

    return {
      open, 
      onCancel,
      onSubmit,
      debtorsCount
    }
  }
}
</script>

<style>

</style>