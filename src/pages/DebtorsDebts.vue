<template>
    <div class="mb-8">
        <h1 class="my-4 font-bold text-4xl">{{ debtor && debtor.name }}</h1>
        <p class="text-gray-400">Total debts: {{ debtor && amount }}dh</p>
    </div>
    <Debts />

  <AddDebtModal v-if="open" @cancelled="onCancel" @submited="onSubmit" />

    
  <!-- Add Debtor -->
  <button @click="open = true" class="bg-blue-400 text-white p-4 rounded-full absolute bottom-4 right-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </button>
</template>

<script>
import { ref } from '@vue/reactivity'
import Debts from '../components/Debts.vue'
import AddDebtModal from '../components/AddDebtModal.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
  components: { Debts, AddDebtModal },
  setup() {
    const open = ref(false);
    const store = useStore();
    const route = useRoute();

    store.dispatch("loadDebtorById", route.params.id)
    store.dispatch("loadDebts", route.params.id);

    const debtor = computed(() => store.state.currentDebtor)
    const amount = computed(() => store.state.totalmount)


    const onCancel = () => open.value = false;
    const onSubmit = (data) => {
      const newDebt = {
        ...data,
        debtor_id: debtor.value.id
      }

      store.dispatch("addDebt", newDebt);
      open.value = false;
    }


    return { 
      open, 
      onCancel,
      onSubmit,
      debtor,
      amount
    }
  }
}
</script>

<style>

</style>
