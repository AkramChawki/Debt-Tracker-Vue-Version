<template>
  <Debtor v-for="(item, i) in debtors" :key="i" :debtor="item" />
</template>

<script>
import Debtor from './Debtor.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core';

export default {
  components: { Debtor },
  setup() {
    const store = useStore();
    const debtors = computed(() => store.state.debtors);

    store.dispatch("loadDebtors");

    return {
      debtors
    }
  }
}
</script>

<style>

</style>