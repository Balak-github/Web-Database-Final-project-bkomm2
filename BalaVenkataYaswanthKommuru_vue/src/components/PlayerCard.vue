<template>
  <div class="player-card">
    <div class="player-image">
      <img :src=player.Image :alt="player.PlayerName">
      <p>{{ player.PlayerName }}</p>
    </div>
    <div class="player-details">
      <p><strong>Role:</strong> {{ player.PlayerRole }}</p>
      <p><strong>Nationality:</strong> {{ player.Nationality }}</p>
      <p><strong>Matches Played:</strong> {{ player.MatchesPlayed }}</p>
      <p><strong>Runs Scored:</strong> {{ player.RunsScored }}</p>
      <p><strong>Wickets Taken:</strong> {{ player.WicketsTaken }}</p>
      <p><strong>Highest Score:</strong> {{ player.HighestScore }}</p>
    </div>
    <p><strong>Profile:</strong></p>
    <PlayerProfile :profile="player.Profile" />
  </div>
</template>

<script>
import PlayerProfile from './PlayerProfile.vue';
export default {
  name: 'PlayerCard',
  components:{
    PlayerProfile,
  },
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

.player-card {
    border: transparent;
    border-radius: 4px;
    box-shadow: 
        0 4px 8px 0 rgba(155, 15, 15, 0.2),
        0 6px 20px 0 rgba(156, 8, 8, 0.19),   
        0 -4px 8px 0 rgba(155, 15, 15, 0.2);  
    color: black;
    padding: 20px;
    margin: 10px;
    text-align: center;
    font-family: "Lora", serif;
    font-weight: 500;
}

.player-card{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.player-image { 
  margin-right: 2rem;
}

.player-image img {
  width: 170px;
  height: 170px;
  border-radius: 8px;
  margin-bottom: 0.5rem; 
}

.player-image p{
  font-size: 18px;
  font-family:"lora",serif;
  font-weight:bold ;
}

.player-details {
  margin-right: 3rem;
  flex-direction: column; 
  justify-content: center;
  align-items: flex-start; 
}

.player-details p {
  margin: 0.5rem; 
  text-align: left;
}

</style>
