<template>
  <Debt v-for="(debt, i) in debts" :debt="debt" :key="i"  />
</template>

<script>
import Debt from './Debt.vue'
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
    components: { Debt },
    setup() {
      const store = useStore();

      const debts = computed(() => store.state.debts);

      return { debts }
    },
}
</script>


Debt<style>

</style>