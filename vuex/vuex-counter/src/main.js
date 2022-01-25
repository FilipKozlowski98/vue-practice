import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return { counter: 0, history: [0] };
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    },
    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter);
    },
  },
  actions: {
    async addRandomNumber(context) {
      let res = await fetch(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      let data = await res.json();
      context.commit("addToCounter", data);
    },
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },
});

createApp(App).use(store).mount("#app");
