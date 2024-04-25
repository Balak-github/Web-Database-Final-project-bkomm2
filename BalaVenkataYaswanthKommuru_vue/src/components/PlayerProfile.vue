<template>
  <div class="player-profile">
    <p>{{ profile }}</p>
  </div>
</template>

<script>
export default {
  name: 'PlayerProfile',
  props: {
    profile: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.player-profile {
  flex: 1;
  padding-left: 1rem;
}

.player-profile p {
  font-family: "lora",serif;
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
}
</style>
