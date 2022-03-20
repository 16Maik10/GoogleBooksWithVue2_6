<template>
    <div class="app-loading">

    </div>
</template>

<script>
    export default {
        name: 'app-loading'
    }
</script>

<style lang="scss">
.app-loading {
  margin: 40px auto;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(transparent, rgb(163, 79, 30));

  animation: rotating 1s linear infinite;

  &::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background: white;
}
}


@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>