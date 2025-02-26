<template>
  <div class="background"></div>
</template>

<script setup>

</script>

<style scoped>
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/Banana.svg);
        background-size: 25%;
        background-repeat: repeat;
        background-color: var(--color-background);
        z-index: -10;
    }
</style>