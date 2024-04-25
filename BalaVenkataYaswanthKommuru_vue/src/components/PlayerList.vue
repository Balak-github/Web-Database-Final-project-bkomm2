<template>
  <div class="player-list">
    <div v-if="loading" class="loading">Loading...</div>
    <div class="player-row" v-for="player in players" :key="player.id">
      <PlayerCard :player="player" />
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import PlayerCard from './PlayerCard.vue';

export default {
  name: 'PlayerList',
  components: {
    PlayerCard,
  },
  props: {
    players: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    error: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.player-list {
  display: flex;
  flex-direction:column;
  align-items: center;
}

.player-row {
  display: flex;
  justify-content: space-between;
  width: 80%; 
  margin: 1rem;
}

.loading,
.error {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #f8d7da;
  color: #721c24; 
}

</style>
