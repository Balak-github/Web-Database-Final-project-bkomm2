<template>
<RcbHeader Title="RCB SQUAD TRACKER"/>
  <div id="app">
    <PlayerList :players=players :loading="loading" />
  </div>
</template>

<script>
import PlayerList from './components/PlayerList.vue';
import RcbHeader from './components/RcbHeader.vue'

export default {
  name: 'App',
  components: {
    RcbHeader,
    PlayerList,
  },
  data() {
    return {
      players: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchplayers() {
      try {
        const res = await fetch('https://rcb-squad-tracker.onrender.com/api');
        const data = await res.json();
        console.log("Data: ",data);
        return data[0].RCBSquad;
      } catch (error) {
        this.error = 'Failed to fetch data';
        console.error(error);
      }
    },
  },
  async created() {
    try {
      this.players = await this.fetchplayers();
    } catch (error) {
      this.error = 'Failed to load players';
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
