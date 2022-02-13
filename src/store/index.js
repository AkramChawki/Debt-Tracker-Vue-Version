import { createStore } from "vuex"
import { createDebt, createDebtor, deleteDebt, deleteDebtor, getDebtorById, getDebtors, getDebts } from "../api"

const calcTotalmount = arr => {
    const amounts = arr.map(x => x.amount)
    if (amounts.length < 1) {
        return 0;
    }
    return amounts.reduce((a, b) => a + b)
}

export default createStore({
    state: {
        currentDebtor: null,
        totalmount: 0,
        debts: [],
        debtors: [],
    },
    getters: {
      debtorsCount: (state) => state.debtors.length ,
    },
    mutations: {
        async fetchDebtors(state) {
            state.debtors = await getDebtors();
        },
        async fetchDebtorById(state, id) {
            state.currentDebtor = await getDebtorById(id);
        },
        async fetchDebts(state, id) {
            state.debts = await getDebts(id);
            state.totalmount = calcTotalmount(state.debts);
        },
        async deleteDebtor(state, id) {
            await deleteDebtor(id);
            this.commit("fetchDebtors");
        },
        async deleteDebt(state, id) {
            await deleteDebt(id);
            this.commit("fetchDebts", state.currentDebtor.id);
        },
        async addDebtor(state, data) {
            await createDebtor(data);
            this.commit("fetchDebtors");
        },
        async addDebt(state, data) {
            await createDebt(data);
            this.commit("fetchDebts", state.currentDebtor.id);
        },
    },
    actions: {
        loadDebtors: ({ commit }) => commit("fetchDebtors"),
        loadDebts: ({ commit }, id) => commit("fetchDebts", id),
        loadDebtorById: ({ commit }, id) => commit("fetchDebtorById", id),
        deleteDebtor: ({ commit }, id) => commit("deleteDebtor", id),
        deleteDebt: ({ commit }, id) => commit("deleteDebt", id),
        addDebtor: ({ commit }, data) => commit("addDebtor", data),
        addDebt: ({ commit }, data) => commit("addDebt", data),
    }
})
