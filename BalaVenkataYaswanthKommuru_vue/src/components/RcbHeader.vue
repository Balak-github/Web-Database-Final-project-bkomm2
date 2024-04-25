<template>
<div class="HeaderContainer">
  <div id="rcblogo">
    <img src="https://upload.wikimedia.org/wikipedia/en/0/0a/Royal_Challengers_Bengaluru_Logo.png" alt="RCB Logo">
  </div>
  <h1 id="title">{{Title}}</h1>
</div>
</template>

<script>
export default {
    name:"RcbHeader",
    props:{
      Title:String,
    }
}
</script>

<style scoped>

.HeaderContainer{
  display: flex;
  justify-content:center;
  background-color:rgb(175, 35, 35) ;
  align-items: center;
  padding: 15px;
  font-family: 'Times New Roman', Times, serif;
}

#rcblogo img{
    width: 60px;
    height: 60px;
    margin-right: 25px;
}

#title{
  color: whitesmoke;
  font-style: italic;
  margin: 10px 0;
  font-weight: 20px;
}
</style>