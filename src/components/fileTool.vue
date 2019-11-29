<template>
  <div class="dnone">
      <input id="__fileTool__" type="file" @change="sel" >
  </div>
</template>

<script>
export default {
    methods:{
        clickInput(){
            document.getElementById('__fileTool__').click()
        },
        sel(e){
            this.$emit('selected',e.target.files)
        }
    }
}
</script>

<style lang="scss" scoped>
    .dnone, .dnone *{
        display: none;
        width: 0;
        height: 0;
    }
</style>