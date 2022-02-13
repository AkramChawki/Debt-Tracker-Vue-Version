<template>
  <!-- Overlay -->
  <div @click="onCancel" class="absolute top-0 left-0 w-full h-full bg-[#000000a3] z-30 grid place-items-center">
      <!-- Modal -->
      <div @click.stop="" class="bg-white p-6 rounded-lg w-[85%]">
          <h2 class="text-2xl font-bold mb-4">Add debt</h2>
          <div class="flex flex-col space-y-2">
              <label for="name" class="text-sm">Name :</label>
              <input 
              v-model="name"
              class="px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-300 transition-all focus:ring-2 focus:ring-blue-400"
              type="text" 
              id="name">
              <label for="amount" class="text-sm">Amount :</label>
              <input 
              v-model="amount"
              class="px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-300 transition-all focus:ring-2 focus:ring-blue-400"
              type="number" 
              id="amount">
              <button 
              :disabled="name === ''"
              @click.stop="onSubmit" 
              class="bg-blue-400 px-4 py-3 text-sm font-bold text-white rounded-lg disabled:bg-gray-400 disabled:cursor-no-drop">
                  Add Debt
              </button>
          </div>
      </div>
  </div>   

</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup(_, { emit }) {
        const name =  ref("");
        const amount =  ref(0);
        const onCancel = () => {
            emit("cancelled");
        }
        const onSubmit = () => {
            emit("submited", {
                name: name.value,
                amount: amount.value
            });
        }

        return {
            name,
            amount,
            onCancel,
            onSubmit
        }
    }
}
</script>

<style>

</style>